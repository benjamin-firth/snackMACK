import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import Login from '../Login/Login';
import TrucksContainer from '../../containers/TrucksContainer/TrucksContainer';

const App = () => {
  return (
    <main>
      <Route exact path='/' component={Login} />
      <Route path='/main' component={TrucksContainer} />
    </main>
  );
};


export default App;
