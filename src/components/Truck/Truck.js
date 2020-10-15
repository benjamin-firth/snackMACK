import React from 'react';
import { togglePotentialLocation } from '../../actions/index'
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './Truck.scss';
import imagecomingsoon from '../../images/imagecomingsoon.png';

export const Truck = ({ truck }) => {
  const dispatch = useDispatch();

  const submitPotentialLocation = () => {
    dispatch(togglePotentialLocation(truck))
  };

  const { name, desc, image, isPotentialLocation } = truck;

  return (
    <article className='truck-card'>
      <h4>{name}</h4>
      <hr/>
      {image ? <img src={image.logo} alt='Food truck logo' height='100' width='170' /> : <img src={imagecomingsoon} alt='Food truck logo' height='100' width='170' />}
      <p>{desc}</p>
      <button 
        type='button' 
        onClick={submitPotentialLocation}
        >{isPotentialLocation ? 'REMOVE LOCATION' : 'ADD TO POTENTIAL LOCATIONS'}</button> 
    </article>
  );
};

Truck.propTypes = {
  truck: PropTypes.object
};

export default Truck;