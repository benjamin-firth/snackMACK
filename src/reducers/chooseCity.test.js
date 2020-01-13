import { chooseCity } from './chooseCity';
import * as mockData from '../utils/mockData';

describe('choose city reducer', () => {
  it('should return initial state', () => {
    // setup
    const expected = 'calgary';
    // execution
    const result = chooseCity(undefined, {});
    // expectation
    expect(result).toEqual(expected);
  });

  it('should return the correct state when "CHOOSE_CITY" is passed in the action object', () => {
    // setup
    const action = mockData.mockChooseCity;
    // execution
    const result = chooseCity(undefined, action);
    const expected = 'test';
    // expectation
    expect(result).toEqual(expected);
  })
})