import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TrucksContainer.scss';
import Header from '../Header/Header';
import Truck from '../Truck/Truck';
import PotentialLocations from '../PotentialLocations/PotentialLocations';
import TruckMap from '../Map/Map';
import { fetchFoodTrucks } from '../../utils/apiCalls';
import { setTrucks } from '../../actions';

export class TrucksContainer extends Component {
  constructor() {
    super();
    this.state = {
      nearbyTrucks: [],
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
            isPotentialLocation: false
          }
        });
        this.setState({ nearbyTrucks });
        this.props.setTrucks(nearbyTrucks);
      })
  }

  toggleMap = () => {
    this.setState({showMap: !this.state.showMap})
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
              trucks={this.state.nearbyTrucks}
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
})

export const mapDispatchToProps = dispatch => ({
  setTrucks: trucks => dispatch(setTrucks(trucks))
})

export default connect(mapStateToProps, mapDispatchToProps)(TrucksContainer);