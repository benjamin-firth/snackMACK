import React, { Component } from 'react';
import { connect } from 'react-redux';
import { chooseCity } from '../../actions';
import { cityData } from '../../utils/cityData';
import './Login.scss';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      city: 'calgary',
      lat: 51.0,
      long: -114.0
    }
  }

  handleChange = (city) => {
    this.setState({ city })
    const lat = cityData[city].lat;
    const long = cityData[city].long;
    this.setState({ lat, long });
  }

  handleSubmit = () => {
    this.props.chooseCity(this.state.city, this.state.lat, this.state.long);
    this.props.history.push('/main');
  }

  render() {
    return (
      <div className='background-image'>
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
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  chooseCity: (city, lat, long) => dispatch(chooseCity(city, lat, long))
})

export default connect(null, mapDispatchToProps)(Login);