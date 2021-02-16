import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";
import { Button, ThemeProvidern, Jumbotron, Image, ImageProps, NavLink } from 'react-bootstrap'

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
    <Jumbotron>
      <h1>Home</h1>
      {currentUser ? (
        <p>
          You are logged in- <Link to="/Dashboard">View Dashboard</Link>
        </p>
      ) : (
        <p>
          <Link to="/logIn">Log In</Link> or <Link to="/signUp">Sign Up</Link>
          <br />
          <Link to="/loginWithGoogle">Log In With Google</Link>
        </p>
      )}
      </Jumbotron>
    </>
  );
};

export default Home;