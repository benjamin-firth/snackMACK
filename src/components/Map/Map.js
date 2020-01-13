import React, { Component } from 'react';
import { Icon } from "leaflet";
import PropTypes from 'prop-types';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import foodTruck from '../../styles/food-truck.svg';
import favFoodTruck from '../../styles/food-truck.svg';
import './Map.scss';

class TruckMap extends Component {
  constructor() {
    super();
    this.state = {
      activeTruck: null
    }
  }

  handleClick = () => {
    this.props.togglePotentialLocation(this.state.activeTruck);
    this.setState({ activeTruck: { 
      ...this.state.activeTruck, 
      isPotentialLocation: !this.state.activeTruck.isPotentialLocation
    }});
  };

  render() {
    const foodtruckIcon = new Icon({
      iconUrl: foodTruck,
      iconSize: [25, 25]
    });
    const favFoodtruckIcon = new Icon({
      iconUrl: favFoodTruck,
      iconSize: [25, 25]
    });
    const { lat, long, trucks } = this.props;
    const trucksNearby = trucks.filter(truck => truck.location !== undefined).map(truck => (
      <Marker
          key={truck.name}
          name={truck.name}
          icon={foodtruckIcon}
          position={[
            truck.location.latitude,
            truck.location.longitude
          ]}
          onClick={() => {
            this.setState({activeTruck: truck});
          }}
        />
    ))

    return (
      <Map center={[lat, long]} zoom={10}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {trucksNearby}
        {this.state.activeTruck && (
          <Popup
            position={[
              this.state.activeTruck.location.latitude,
              this.state.activeTruck.location.longitude
            ]}
            onClose={() => {
              this.setState({activeTruck: null});
            }}
          >
            <div>
              <h2>{this.state.activeTruck.name}</h2>
              {this.state.activeTruck.email && <p>Website: <a href={`https://www.${this.state.activeTruck.email}`} target="_blank">{this.state.activeTruck.email}</a></p>}
              <button
                type='button' 
                onClick={this.handleClick}>
                  {this.state.activeTruck.isPotentialLocation ? 'REMOVE' : 'ADD'}
                </button>
              <p>{this.state.activeTruck.desc}</p>
            </div>
          </Popup>
        )}
      </Map>
    );
  }
}

TruckMap.propTypes = {
  lat: PropTypes.string,
  long: PropTypes.string,
  trucks: PropTypes.array,
  togglePotentialLocation: PropTypes.func
}

export default TruckMap;
