import React, { Component} from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import Login from '../Login/Login';
import TrucksContainer from '../../containers/TrucksContainer/TrucksContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <main>
        <Route exact path='/' component={Login} />
        <Route path='/main' component={TrucksContainer} />
      </main>
    )
  }
}


export default App;
