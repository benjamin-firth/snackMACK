import React from 'react';
import { addPotentialLocation } from '../../actions/index'
import { connect } from 'react-redux';
import './Truck.scss';
import imagecomingsoon from '../../styles/imagecomingsoon.png';

export const Truck = ({ name, desc, image, addPotentialLocation }) => {

  const submitPotentialLocation = () => {
    const location = { name, desc, image };
    addPotentialLocation(location);
  }

  return (
    <article className='truck-card'>
      <h4>{name}</h4>
      <hr/>
      {image ? <img src={image.logo} alt='Food truck logo' height='100' width='170' /> : <img src={imagecomingsoon} alt='Food truck logo' height='100' width='170' />}
      <p>{desc}</p>
      <button 
        type='button' 
        onClick={submitPotentialLocation}
        >ADD TO POTENTIAL LOCATIONS</button>
    </article>
  )
}

const mapDispatchToProps = dispatch => ({
  addPotentialLocation: location => dispatch(addPotentialLocation(location))
})

export default connect(null, mapDispatchToProps)(Truck);