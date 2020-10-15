import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapDispatchToProps } from './Login';
import * as mockData from '../../utils/mockData';

describe('Login', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <Login />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('handleChange', () => {
    it('should run handleChange when the select is changed', () => {
      wrapper.instance().handleChange = jest.fn();
      const mockEvent = {
        preventDefault: jest.fn(),
        target: {
          value: 'canada test'
        }
      };
  
      wrapper.find('select').simulate('change', mockEvent);
      expect(wrapper.instance().handleChange).toHaveBeenCalled();
    })
  
    it('should update state when handleChange is called', () => {
      const mockState = {
        city: 'canada',
        lat: 40.0,
        long: 120.0,
      };
      const expected = {
        city: 'calgary',
        lat: 51.0,
        long: -114.0,
      }
      wrapper.setState(mockState);
      wrapper.instance().handleChange('calgary');
  
      expect(wrapper.state()).toEqual(expected);
    })
  })

  describe('handleSubmit', () => {
    let history;
    let mockhistory;
    beforeEach(() => {
      mockhistory = jest.fn()
      history = { push: mockhistory }
    })

  it('should update the page when this.props.history.push is used', () => {
    const chooseCity = jest.fn();
    wrapper = shallow(<Login history={history} chooseCity={chooseCity}/>);
    wrapper.find('button').simulate('click');
    expect(mockhistory).toHaveBeenCalledWith('/main');
    })
  })

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn();

    it('should dispatch chooseCity when handleSubmit', () => {
      const { city, lat, long } = mockData.mockCity;
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.chooseCity(city, lat, long);
      expect(mockDispatch).toHaveBeenCalledWith(mockData.mockCityActionObj);
    })
  })
})