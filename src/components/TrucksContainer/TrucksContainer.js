import React, { Component } from 'react';
import './TruckSidebar.scss';
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
    fetch('http://data.streetfoodapp.com/1.1/schedule/calgary')
      .then(res => res.json())
      .then(data => {
        const vendors = data.vendors;
        const vendorKeys = Object.keys(vendors);
        const nearbyTrucks = vendorKeys.map(key => {
          return <Truck name={vendors[key].name} desc={vendors[key].description} />
        });
        this.setState({ nearbyTrucks })
      })
  }

  render() {
    return (
      <main>
        <Header />
        <button>VIEW FAVORITE LIST</button>
      </main>
    )
  }
}

export default TruckSidebar;