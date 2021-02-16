import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../config.js";
import { ThemeProvider, Nav, NavDropdown, Form, FormControl, Jumbotron, code } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Chat from './Chat'

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Redirect to="/LogIn" />;
  }
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/Dashboard">
      MAGUGU
    </Navbar.Brand>
    <form>
    <button variant="primary" onClick={() => firebaseConfig.auth().signOut()}>Sign out</button>{''}
    </form>
  </Navbar>
  <div class="container-fluid">
    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
    <div class="row">
    <div class="col-6">
      </div>
      <div class="col">
      </div>
      <div class="col fixed-bottom-right">
      <Jumbotron>
      <Chat />
      </Jumbotron>
      </div>
    </div>
  </div>
    </>
  );
};

export default Dashboard;