import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './TrucksContainer.scss';
import Header from '../Header/Header';
import Truck from '../Truck/Truck';
import PotentialLocations from '../PotentialLocations/PotentialLocations';
import PropTypes from 'prop-types';
import TruckMap from '../Map/Map';
import { fetchFoodTrucks } from '../../utils/apiCalls';
import { setTrucks, togglePotentialLocation } from '../../actions';

export const TrucksContainer = () => {
  const [showMap, changeMap] = useState(true);
  const city = useSelector(state => state.city);
  const allTrucks = useSelector(state => state.allTrucks);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchFoodTrucks(city.city)
      .then(data => {
        const vendors = data.vendors;
        const vendorKeys = Object.keys(vendors);
        const nearbyTrucks = vendorKeys.map(key => {
          return { 
            name: vendors[key].name, 
            desc: vendors[key].description,
            location: vendors[key].last,
            image: vendors[key].images,
            email: vendors[key].url,
            isPotentialLocation: false
          }
        });
        dispatch(setTrucks(nearbyTrucks));
      })
  }, []);

  const Trucks = allTrucks.map(truck => {
    return (
      <Truck 
        truck={truck}
        key={truck.name}
      />) 
  });

  const toggleMap = () => {
    changeMap(!showMap);
  };

  return (
    <main>
      <Header />
      <div className='mainpage-container'>
        <div className='sidebar'>
          <button onClick={toggleMap}>{showMap? 'VIEW POTENTIAL LOCATIONS' : 'VIEW MAP OF TRUCKS'}</button>
          <div className='inner-scroll-container'>
            {Trucks}
          </div>
        </div>
        {showMap? (
          <TruckMap 
            lat={city.lat}
            long={city.long}
            trucks={allTrucks}
            togglePotentialLocation={(truck) => dispatch(togglePotentialLocation(truck))}
            key={city}
            />
        ) : <PotentialLocations />
        }
      </div>
    </main>
  );
};

TrucksContainer.propTypes = {
  city: PropTypes.string,
  allTrucks: PropTypes.array,
  setTrucks: PropTypes.func,
  togglePotentialLocation: PropTypes.func,
};

export default TrucksContainer;