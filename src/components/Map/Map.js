import React, { Component } from 'react'
import { Map, GeoJSON, Marker, Popup, TileLayer } from 'react-leaflet';

class TruckMap extends Component {
  constructor() {
    super();
  }

  render() {
    const { lat, long } = this.props;
    console.log(lat, long);

    return (
      <Map center={[lat, long]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    );
  }
}

export default TruckMap


