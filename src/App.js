import React from 'react';
import './App.css';

import { Route, Switch } from "react-router-dom";

import LoginComponent from './Containers/Auth/Login';
import MainComponent from './Component/Main/Main';

function App() {
  return (
    <div>
        <Switch>
          <Route exact path="/login" component={LoginComponent} />
          <Route path="/" component={MainComponent} />
        </Switch>
    </div>
  );
}

export default App;
