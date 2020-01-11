import React from 'react';
import imagecomingsoon from '../../styles/imagecomingsoon.png';
import './PotentialLocations.scss';

const PotentialLocations = () => {

  return (
    <div className='right-side-box'>
      <section className='potential-locations-container'>
        <article>
          <h2>Potential Date Locations</h2>
          <div>
            <h3>FAKE CARD</h3>
            <img src={imagecomingsoon} alt='Food truck logo' height='100' width='170' />
            <p>FAKE DESCRIPTION: asasdff asdfasd asdss sss asdfasdfasd sdddf  sd dss ss s dfasdf!</p>
          </div>
        </article>
      </section>
    </div>
  )
}

export default PotentialLocations;