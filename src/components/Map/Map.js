import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class TruckMap extends Component {
  constructor() {
    super();
    this.state = {
      activeTruck: null
    }
  }

  render() {
    const { lat, long, trucks } = this.props;
    const trucksNearby = trucks.filter(truck => truck.location !== undefined).map(truck => (
      <Marker
          key={truck.name}
          name={truck.name}
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
              <p>{this.state.activeTruck.desc}</p>
            </div>
          </Popup>
        )}
      </Map>
    );
  }
}

export default TruckMap;


