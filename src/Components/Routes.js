import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../Routes/Home";
import Auth from "../Routes/Auth";
import Login from "../Routes/Login";
import Search from "../Routes/Search";
import Profile from "../Routes/Profile";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import Favicon from "../Assets/favicon2.ico"

const LoggedInRoutes = () =>
  <>
    <Helmet>
    <link rel="shortcut icon" href={Favicon} />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/:id" component={Profile} />
      <Redirect from="*" to="/" />
    </Switch>
  </>;

const LoggedOutRoutes = () =>
  <>
    <Switch>
      <Route exact path="/" component={Auth} />
      <Route exact path="/login" component={Login} />
    </Switch>
    <Footer />
  </>;

const AppRouter = ({ isLoggedIn }) =>
  <Switch>
    {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
  </Switch>;

export default AppRouter;
