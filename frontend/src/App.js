import React, { Fragment } from 'react';
import './App.scss';
import { useAuth0 } from "./react-auth0-spa";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import PrivateRoute from './components/PrivateRoute';

import NavBar from './components/nav';
import Main from './components/main'

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }

  return (
      
      <BrowserRouter>
      <NavBar/>
        <Switch>
          <Route exact path="/" render={() => <Main/> } />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
