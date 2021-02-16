import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import { Link } from "react-router-dom";
import firebaseConfig from "../config.js";
import { Button, ThemeProvider, Jumbotron, Form , FormGroup } from 'react-bootstrap'

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';


const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function Home() {
    return <Redirect to="/" />
}

const LogIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }
  return (
      <>
    <Jumbotron variant="sticky-top">
    <h1>Log In</h1>
    <form onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input type="email" name="email" placeholder="Email" />
        <label for="password">Password</label>
        <input type="password" name="password" placeholder="Password" />
        <button type="submit" variant="primary">Submit</button>{''}
      </form>
      <Link to="/" variant="mt-3">Back</Link>
    </Jumbotron>{''}
    </>
  );
};

export default LogIn;