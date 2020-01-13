import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TrucksContainer.scss';
import Header from '../Header/Header';
import Truck from '../Truck/Truck';
import PotentialLocations from '../PotentialLocations/PotentialLocations';
import TruckMap from '../Map/Map';
import { fetchFoodTrucks } from '../../utils/apiCalls';
import { setTrucks, togglePotentialLocation } from '../../actions';

export class TrucksContainer extends Component {
  constructor() {
    super();
    this.state = {
      showMap: true
    }
  }

  componentDidMount() {
    fetchFoodTrucks(this.props.city.city)
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
        this.props.setTrucks(nearbyTrucks);
      })
  }

  toggleMap = () => {
    this.setState({showMap: !this.state.showMap})
  }

  render() {
    const Trucks = this.props.allTrucks.map(truck => {
      return (
        <Truck 
          truck={truck}
          key={truck.name}
        />) 
    })

    return (
      <main>
        <Header />
        <div className='mainpage-container'>
          <div className='sidebar'>
            <button onClick={this.toggleMap}>{this.state.showMap? 'VIEW POTENTIAL LOCATIONS' : 'VIEW MAP OF TRUCKS'}</button>
            <div className='inner-scroll-container'>
              {Trucks}
            </div>
          </div>
          {this.state.showMap? (
            <TruckMap 
              lat={this.props.city.lat}
              long={this.props.city.long}
              trucks={this.props.allTrucks}
              togglePotentialLocation={this.props.togglePotentialLocation}
              key={this.props.city}
              />
          ) : <PotentialLocations />
          }
        </div>
      </main>
    )
  }
}


export const mapStateToProps = state => ({
  city: state.city,
  allTrucks: state.allTrucks
})

export const mapDispatchToProps = dispatch => ({
  setTrucks: trucks => dispatch(setTrucks(trucks)),
  togglePotentialLocation: truck => dispatch(togglePotentialLocation(truck))
})

export default connect(mapStateToProps, mapDispatchToProps)(TrucksContainer);