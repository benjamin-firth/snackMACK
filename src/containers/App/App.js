import React, { Component} from 'react';
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
        <Login />
      </main>
    )
  }
}


export default App;
