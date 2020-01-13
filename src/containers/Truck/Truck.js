import React, { Component } from 'react';
import { togglePotentialLocation } from '../../actions/index'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Truck.scss';
import imagecomingsoon from '../../images/imagecomingsoon.png';

export class Truck extends Component {
  submitPotentialLocation = () => {
    this.props.togglePotentialLocation(this.props.truck)
  }

  render() {
    const { name, desc, image, isPotentialLocation } = this.props.truck;

    return (
      <article className='truck-card'>
        <h4>{name}</h4>
        <hr/>
        {image ? <img src={image.logo} alt='Food truck logo' height='100' width='170' /> : <img src={imagecomingsoon} alt='Food truck logo' height='100' width='170' />}
        <p>{desc}</p>
        <button 
          type='button' 
          onClick={this.submitPotentialLocation}
          >{isPotentialLocation ? 'REMOVE LOCATION' : 'ADD TO POTENTIAL LOCATIONS'}</button> 
      </article>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  togglePotentialLocation: truck => dispatch(togglePotentialLocation(truck))
})

Truck.propTypes = {
  truck: PropTypes.string
}

export default connect(null, mapDispatchToProps)(Truck);