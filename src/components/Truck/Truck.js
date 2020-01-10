import React from 'react';
import './Truck.scss';

const Truck = ({ name, desc, image }) => {
  // image ? console.log(image.logo) : null
  if (image) {
    console.log(image.logo)
  }

  return (
    <article className='truck-card'>
      <h4>{name}</h4>
      <hr/>
      {image ? <img src={image.logo} alt='Food truck logo' /> : null}
      <p>{desc}</p>
    </article>
  )
}

export default Truck;