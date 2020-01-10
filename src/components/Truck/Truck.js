import React from 'react';
import './Truck.scss';
import imagecomingsoon from '../../styles/imagecomingsoon.png';

const Truck = ({ name, desc, image }) => {
  // image ? console.log(image.logo) : null
  if (image) {
    console.log(image.logo)
  }

  return (
    <article className='truck-card'>
      <h4>{name}</h4>
      <hr/>
      {image ? <img src={image.logo} alt='Food truck logo' height='100' width='170' /> : <img src={imagecomingsoon} alt='Food truck logo' height='100' width='170' />}
      <p>{desc}</p>
      <button>ADD TO POTENTIAL LOCATIONS</button>
    </article>
  )
}

export default Truck;