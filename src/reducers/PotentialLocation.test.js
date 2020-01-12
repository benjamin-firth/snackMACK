import { potentialLocation } from './PotentialLocation';
import * as mockData from '../utils/mockData';

describe('potential location reducer', () => {
  it('should return initial state', () => {
    // setup
    const expected = []
    // execution
    const result = potentialLocation(undefined, {});
    // expectation
    expect(result).toEqual(expected);
  })

  it('should return the correct state when "ADD_POTENTIAL_LOCATION" is passed in the action object', () => {
    // setup
    const initialState = [];
    const action = mockData.mockAddPotentialLocationActionObj
    // execution
    const result = potentialLocation(initialState, action);
    const expected = 
    [{
      desc: "Our food trailer is designed for efficiently producing quality comfort food! We serve baked potatoes loaded with a variety of toppings! BBQ Pulled Pork Tex Mex Mushroom Swiss Classic English Sheppard's Pie",
      image: undefined,
      location: {
        display: "Prairie Horizon Pop Up Market",
        latitude: 51.19624517,
        longitude: -113.99491753,
        time: 1578762000
      },
      name: "Baked And Loaded"
    }]
    // expectation
    expect(result).toEqual(expected);
  })

  it('should return the correct state when "REMOVE_POTENTIAL_LOCATION" is passed in the action object', () => {
    // setup
    const initialState = mockData.mockPotentialLocations;
    const action = mockData.mockRemovePotentialLocationActionObj
    // execution
    const result = potentialLocation(initialState, action);
    const expected = 
    [{
      desc: "Our food trailer is designed for efficiently producing quality comfort food! We serve baked potatoes loaded with a variety of toppings! BBQ Pulled Pork Tex Mex Mushroom Swiss Classic English Sheppard's Pie",
      image: undefined,
      location: {
        display: "Prairie Horizon Pop Up Market",
        latitude: 51.19624517,
        longitude: -113.99491753,
        time: 1578762000
      },
      name: "Test Food Truck 2"
    }]
    // expectation
    expect(result).toEqual(expected);
  })
})