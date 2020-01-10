import React, { Component } from 'react';
import './TrucksContainer.scss';
import Header from '../Header/Header';
import Truck from '../Truck/Truck';

class TruckSidebar extends Component {
  constructor() {
    super();
    this.state = {
      nearbyTrucks: []
    }
  }

  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/http://data.streetfoodapp.com/1.1/schedule/calgary')
      .then(res => res.json())
      .then(data => {
        const vendors = data.vendors;
        const vendorKeys = Object.keys(vendors);
        const nearbyTrucks = vendorKeys.map(key => {
          return { 
            name: vendors[key].name, 
            desc: vendors[key].description,
            location: vendors[key].last,
            image: vendors[key].images
          }
        });
        this.setState({ nearbyTrucks })
      })
  }

  render() {
    const Trucks = this.state.nearbyTrucks.map(truck => {
      return (
        <Truck 
          name={truck.name} 
          desc={truck.desc} 
          location={truck.location}
          image={truck.image}
          key={truck.name}
        />) 
    })

    return (
      <main>
        <Header />
        <div className='sidebar'>
          <button>VIEW FAVORITE LIST</button>
          <div className='inner-scroll-container'>
            {Trucks}
          </div>
        </div>
      </main>
    )
  }
}

export default TruckSidebar;