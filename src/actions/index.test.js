import * as actions from './index';
import * as mockData from '../utils/mockData';

describe('actions', () => {
  describe('setTrucks', () => {
    it('should return an object containing type: "SET_TRUCKS"', () => {
      // setup
      const expected = {
        type: 'SET_TRUCKS',
        trucks: mockData.mockPotentialLocations
      }
      // execution
      const result = actions.setTrucks(mockData.mockPotentialLocations);
      // expectation
      expect(result).toEqual(expected);
    })
  });

  describe('togglePotentialLocation', () => {
    it('should return an object containing type: "TOGGLE_POTENTIAL_LOCATION"', () => {
      // setup
      const expected = {
        type: 'TOGGLE_POTENTIAL_LOCATION',
        truck: mockData.mockFilteredPotentialLocations
      }
      // execution
      const result = actions.togglePotentialLocation(mockData.mockFilteredPotentialLocations);
      // expectation
      expect(result).toEqual(expected);
    })
  })

  describe('chooseCity', () => {
    it('should return an object containing type: "CHOOSE_CITY"', () => {
      // setup
      const expected = {
        type: 'CHOOSE_CITY',
        city: mockData.mockCity
      }
      // execution
      const { city, lat, long } = mockData.mockCity;
      const result = actions.chooseCity(city, lat, long);
      // expectation
      expect(result).toEqual(expected);
    })
  })
})
 