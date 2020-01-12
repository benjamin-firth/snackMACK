import React, { Component } from 'react';
import { connect } from 'react-redux';
import { chooseCity } from '../../actions';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      city: 'calgary'
    }
  }

  handleChange = (city) => {
    this.setState({ city })
  }

  handleSubmit = () => {
    this.props.chooseCity(this.state.city)
    this.props.history.push('/main');
  }

  render() {
    return (
      <div className='login-container'>
        <section className='login'>
          <h1>snackMACK</h1>
          <h3>“The food truck locator app to bring your dates to the next level!”</h3>
          <form>
            <select onChange={(e) => this.handleChange(e.target.value)}>
              <option value='calgary'>Calgary</option>
              <option value='edmonton'>Edmonton</option>
              <option value='halifax'>Halifax</option>
              <option value='hamilton'>Hamilton</option>
              <option value='ottawa'>Ottawa</option>
              <option value='toronto'>Toronto</option>
              <option value='vancouver'>Vancouver</option>
              <option value='victoria'>Victoria</option>
            </select>
            <button type='button' onClick={this.handleSubmit}>SUBMIT</button>
          </form>
        </section>
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  chooseCity: city => dispatch(chooseCity(city))
})

export default connect(null, mapDispatchToProps)(Login);