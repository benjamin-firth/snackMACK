import React from 'react';
import { shallow } from 'enzyme';
import { TrucksContainer, mapStateToProps, mapDispatchToProps } from './TrucksContainer';
import { fetchFoodTrucks } from '../../utils/apiCalls';
import * as mockData from '../../utils/mockData';
import { setTrucks, togglePotentialLocation } from '../../actions';

jest.mock('../../utils/apiCalls');

describe('TrucksContainer', () => {
  let wrapper;

  beforeEach(() => {
    fetchFoodTrucks.mockImplementation(() => Promise.resolve(mockData.mockPotentialLocations));
    wrapper = shallow( <TrucksContainer city={{}} setTrucks={jest.fn()} togglePotentialLocation={jest.fn()} allTrucks={[]} city='test'/>)
  })

it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('mapStateToProps', () => {
    it('should return an object with city and allTrucks info', () => {
      const mockState = {
        city: 'calgary',
        allTrucks: mockData.mockPotentialLocations
      };
      const expected = {
        city: 'calgary',
        allTrucks: mockData.mockPotentialLocations
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    })
  })

  describe('fetchFoodTrucks', () => {
    it('should call fetchFoodTrucks when componentDidMount is called', () => { 

      expect(fetchFoodTrucks).toHaveBeenCalled();
    })
  })

  describe('toggleMap', () => {
    it('should set state of showMap when toggleMap is called', async () => {
      wrapper.setState({
        showMap: false
      });
  
      await wrapper.instance().toggleMap();
  
      expect(wrapper.state('showMap')).toEqual(true);
    })
  })

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn();

    it('should should call setTrucks on componentDidMount', () => {
      const actionToDispatch = setTrucks(mockData.mockPotentialLocations);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.setTrucks(mockData.mockPotentialLocations);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })

    it('should should call togglePotentialLocation on componentDidMount', () => {
      const actionToDispatch = togglePotentialLocation(mockData.mockToggleTruck);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.togglePotentialLocation(mockData.mockToggleTruck);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })

})