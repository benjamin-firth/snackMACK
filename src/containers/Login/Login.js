import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      city: null
    }
  }

  render() {

    return (
      <div className='login-container'>
        <section className='login'>
          <h1>snackMACK</h1>
          <h3>“The food truck locator app to bring your dates to the next level!”</h3>
          <form>
            <select>
              <option value='vancouver' >Vancouver</option>
              <option value='calgary' >Calgary</option>
            </select>
            <button>SUBMIT</button>
          </form>
        </section>
      </div>
    )
  }
}

export default Login;