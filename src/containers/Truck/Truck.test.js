import React from 'react';
import { shallow } from 'enzyme';
import * as mockData from '../../utils/mockData';
import { Truck, mapDispatchToProps } from './Truck';

describe('Truck', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <Truck truck={{test: 'test'}} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn();

    it('should dispatch togglePotentialLocation when submitPotentialLocation', () => {
      const mockTruck = mockData.mockFilteredPotentialLocations;
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.togglePotentialLocation(mockTruck);
      expect(mockDispatch).toHaveBeenCalledWith(mockData.mockTruckAction);
    })
  })

  // describe('togglePotentialLocation on submitPotentialLocation', () => {
  //   const mockDispatch = jest.fn();
  //   it('should run togglePotentialLocation on button click', () => {
  //     const mockTogglePotentialLocation = jest.fn();
  //     wrapper = shallow( <Truck truck='test' togglePotentialLocation={mockTogglePotentialLocation}/>);
  //     wrapper.find('button').simulate('click');
  //     expect(mockDispatch).toHaveBeenCalledWith(mockData.mockTruckAction);
  //   })
    
  // })
})