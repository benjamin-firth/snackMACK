import React, { Component } from 'react';
import { addPotentialLocation, removePotentialLocation } from '../../actions/index'
import { connect } from 'react-redux';
import './Truck.scss';
import imagecomingsoon from '../../styles/imagecomingsoon.png';

export class Truck extends Component {
  constructor() {
    super();
    this.state = {
      chosen: false
    }
  }

  deletePotentialLocation = () => {
    const { name, desc, image } = this.props;
    const location = { name, desc, image };
    this.props.removePotentialLocation(location);
    this.setState({chosen: false})
  }

  submitPotentialLocation = () => {
    const { name, desc, image } = this.props;
    const location = { name, desc, image };
    this.props.addPotentialLocation(location);
    this.setState({chosen: true})
  }

  render() {
    const { name, desc, image } = this.props;

    return (
      <article className='truck-card'>
        <h4>{name}</h4>
        <hr/>
        {image ? <img src={image.logo} alt='Food truck logo' height='100' width='170' /> : <img src={imagecomingsoon} alt='Food truck logo' height='100' width='170' />}
        <p>{desc}</p>
        {!this.state.chosen ? (
          <button 
            type='button' 
            onClick={this.submitPotentialLocation}
            >ADD TO POTENTIAL LOCATIONS</button> 
        ) : (
          <button 
            type='button' 
            onClick={this.deletePotentialLocation}
            >REMOVE LOCATION</button>
        )}
      </article>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addPotentialLocation: location => dispatch(addPotentialLocation(location)),
  removePotentialLocation: locationName => dispatch(removePotentialLocation(locationName))
})

export default connect(null, mapDispatchToProps)(Truck);