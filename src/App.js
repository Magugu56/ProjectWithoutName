import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home.js";
import Dashboard from "./components/Dashboard.js";
import LogIn from "./components/LogIn.js";
import SignUp from "./components/SignUp.js";
import LoginWithGoogle from "./components/LoginWithGoogle.js"
import { AuthProvider } from "./components/Auth.js";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/LogIn" component={LogIn} />
          <Route exact path="/LoginWithGoogle" component={LoginWithGoogle} />
          <Route exact path="/SignUp" component={SignUp} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;