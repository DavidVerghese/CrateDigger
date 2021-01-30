import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Link, Switch, useHistory } from 'react-router-dom';
import Container from './containers/Container';

function App() {

  

  return (
    <div className="App">
      <Switch>
        <Route path='/songssamples' component={Container} />
      </Switch>
    </div>
  );
}

export default App;
