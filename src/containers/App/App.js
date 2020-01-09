import React, { Component} from 'react';
import { Route, NavLink } from 'react-router-dom'
import './App.scss';
import Login from '../Login/Login';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <main>
        <Route exact path='/' component={Login} />
      </main>
    )
  }
}


export default App;
