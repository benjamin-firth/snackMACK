import React from 'react';
import { connect } from 'react-redux';
import Truck from '../Truck/Truck';
import './PotentialLocations.scss';

export const PotentialLocations = ({ allTrucks }) => {

  const allPotentialLocations = allTrucks.filter(truck => truck.isPotentialLocation === true).map(location => {
    return <Truck truck={location} />
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
  allTrucks: state.allTrucks
})

export default connect(mapStateToProps)(PotentialLocations);