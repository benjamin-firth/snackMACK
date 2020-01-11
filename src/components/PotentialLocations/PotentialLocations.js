import React from 'react';
import { connect } from 'react-redux';
import Truck from '../Truck/Truck';
import imagecomingsoon from '../../styles/imagecomingsoon.png';
import './PotentialLocations.scss';

export const PotentialLocations = ({ potentialLocations }) => {

  const allPotentialLocations = potentialLocations.map(location => {
    return <Truck name={location.name} desc={location.desc} image={location.image} />
  })

  return (
    <div className='right-side-box'>
      <section className='potential-locations-container'>
        <article>
          <h2>Potential Date Locations</h2>
          <div>
            {allPotentialLocations}
          </div>
        </article>
      </section>
    </div>
  )
}

const mapStateToProps = state => ({
  potentialLocations: state.potentialLocation
})

export default connect(mapStateToProps)(PotentialLocations);