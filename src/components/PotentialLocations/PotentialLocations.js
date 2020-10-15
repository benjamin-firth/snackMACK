import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Truck from '../Truck/Truck';
import './PotentialLocations.scss';

export const PotentialLocations = () => {
  const allTrucks = useSelector(state => state.allTrucks);
  const allPotentialLocations = allTrucks.filter(truck => truck.isPotentialLocation === true).map(location => {
    return <Truck truck={location} key={location.name}/>
  });

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
  );
};

PotentialLocations.propTypes = {
  allTrucks: PropTypes.array
};


export default PotentialLocations;