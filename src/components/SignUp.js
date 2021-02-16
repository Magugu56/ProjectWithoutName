import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import firebaseConfig from "../config";
import { Button, Form, Jumbotron } from 'react-bootstrap'
import { Link } from "react-router-dom";

function SignUp() {
  const [currentUser, setCurrentUser] = useState(null);    
  function handleSubmit(e) {
    e.preventDefault();    
    const { email, password } = e.target.elements;
    try {
      firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);      
      setCurrentUser(true);
    } catch (error) {
      alert(error);
    }
  };
  if (currentUser) {
      return <Redirect to="/Dashboard" />;
  }
  return (
    <>
    <Jumbotron variant="sticky-top">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input type="email" name="email" placeholder="Email" />
        <label for="password">Password</label>
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
      <Link to="/" variant="mt-3">Back</Link>
    </Jumbotron>{''}
    </>
  );
};

export default SignUp;