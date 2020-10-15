import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import { chooseCity } from '../../actions';
import { cityData } from '../../utils/cityData';
import './Login.scss';

export const Login = () => {
  const [city, setCity] = useState('calgary');
  const [lat, setLat] = useState(51.0);
  const [long, setLong] = useState(-114.0);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (newCity) => {
    const newLat = cityData[newCity].lat;
    const newLong = cityData[newCity].long;
    setCity(newCity);
    setLat(newLat);
    setLong(newLong);
  };

  const handleSubmit = () => {
    dispatch(chooseCity(city, lat, long));
    history.push('/main');
  };

  return (
    <div className='background-image'>
      <div className='login-container'>
        <section className='login'>
          <h1>snackMACK</h1>
          <h3>“The food truck locator app to bring your dates to the next level!”</h3>
          <form>
            <select onChange={(e) => handleChange(e.target.value)}>
              <option value='calgary'>Calgary</option>
              <option value='edmonton'>Edmonton</option>
              <option value='halifax'>Halifax</option>
              <option value='hamilton'>Hamilton</option>
              <option value='ottawa'>Ottawa</option>
              <option value='toronto'>Toronto</option>
              <option value='vancouver'>Vancouver</option>
              <option value='victoria'>Victoria</option>
            </select>
            <button type='button' onClick={handleSubmit}>SUBMIT</button>
          </form>
        </section>
      </div>
    </div>
  );
};

Login.propTypes = {
  chooseCity: PropTypes.func
};

export default Login;