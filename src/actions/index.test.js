import * as actions from './index';
import * as mockData from '../utils/mockData';

describe('actions', () => {
  describe('addPotentialLocation', () => {
    it('should return an object containing type: "ADD_POTENTIAL_LOCATION"', () => {
      // setup
      const expected = {
        type: 'ADD_POTENTIAL_LOCATION',
        potentialLocation: mockData.mockPotentialLocations
      }
      // execution
      const result = actions.addPotentialLocation(mockData.mockPotentialLocations);
      // expectation
      expect(result).toEqual(expected);
    })
  })

  describe('removePotentialLocation', () => {
    it('should return an object containing type: "REMOVE_POTENTIAL_LOCATION"', () => {
      // setup
      const expected = {
        type: 'REMOVE_POTENTIAL_LOCATION',
        potentialLocation: mockData.mockFilteredPotentialLocations
      }
      // execution
      const result = actions.removePotentialLocation(mockData.mockPotentialLocations[0]);
      // expectation
      expect(result).toEqual(expected);
    })
  })
})
 