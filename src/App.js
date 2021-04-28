import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import { Register } from "./pages/Register";
import { useAuth } from "./auth";
import Settings from "./pages/Settings";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Error404 from "./pages/Error404";
import Soon from "./pages/Soon";
import Show from "./pages/Show"
import TodoPage from "./pages/TodoPage"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [logged] = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        logged ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

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
          <PrivateRoute exact path="/tracker" component={Home} />
          <PrivateRoute exact path="/test" component={TodoPage} />
          <PrivateRoute exact path="/tracker/:id" component={Show} />
          <PrivateRoute exact path="/calendar" component={Soon} />
          <PrivateRoute exact path="/reports" component={Soon} />
          <PrivateRoute exact path="/projects" component={Projects} />
          <PrivateRoute exact path="/team" component={Team} />
          <PrivateRoute exact path="/settings" component={Settings} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/" component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}
