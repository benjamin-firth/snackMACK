import React from 'react';

const Truck = ({ name, desc }) => {

  return (
    <article>
      <h4>{name}</h4>
      <p>{desc}</p>
    </article>
  )
}

export default Truck;