import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import {Register} from "./pages/Register";
import {useAuth} from "./auth"
import Settings from "./pages/Settings";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [logged] = useAuth();

  return <Route {...rest} render={(props) => (
    logged
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
}

export default function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/register">
            <Register />
            </Route>
          <Route exact path="/login">
            <Login />
          </Route>
           <PrivateRoute exact path="/settings" component={Settings} />
           <PrivateRoute path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}
