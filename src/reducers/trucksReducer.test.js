import { trucksReducer } from './trucksReducer';
import * as mockData from '../utils/mockData';

describe('trucksReducer', () => {
  it('should return initial state', () => {
    // setup
    const expected = []
    // execution
    const result = trucksReducer(undefined, {});
    // expectation
    expect(result).toEqual(expected);
  })

  it('should return the correct state when "SET_TRUCKS" is passed in the action object', () => {
    // setup
    const initialState = [];
    const action = mockData.setTrucksPotentialLocationActionObj;
    // execution
    const result = trucksReducer(initialState, action);
    const expected = 
    {
      desc: "Our food trailer is designed for efficiently producing quality comfort food! We serve baked potatoes loaded with a variety of toppings! BBQ Pulled Pork Tex Mex Mushroom Swiss Classic English Sheppard's Pie",
      image: undefined,
      location: {
        display: "Prairie Horizon Pop Up Market",
        latitude: 51.19624517,
        longitude: -113.99491753,
        time: 1578762000
      },
      name: "Baked And Loaded"
    }
    // expectation
    expect(result).toEqual(expected);
  })

  it('should return the correct state when "TOGGLE_POTENTIAL_LOCATION" is passed in the action object', () => {
    // setup
    const initialState = mockData.mockPotentialLocations;
    const action = mockData.mockTruckAction
    // execution
    const result = trucksReducer(initialState, action);
    const expected = mockData.mockPotentialLocationsAfterToggle;
    // expectation
    expect(result).toEqual(expected);
  })
})