import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../config.js";
import { Button, ThemeProvider, Jumbotron, img, JumbotronProps } from 'react-bootstrap'
import { Link } from "react-router-dom";

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';


const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();



function LoginWithGoogle() {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to="/Dashboard" />;
    }
    return (
        <>
        <Jumbotron variant="sticky-top">
            <br />
            <Button variant="primary" onClick={signInWithGoogle}>Log In With Google</Button>{''}
            <br />
            <Link to="/" variant="mt-3">Back</Link>
        </Jumbotron>
        </>
    )
  
}

export default LoginWithGoogle