import React from 'react';
import { shallow } from 'enzyme';
import TruckMap from './Map';

describe('map', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <TruckMap lat='40.0' long='40.0' trucks={[{}, {}, {}]}/>)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})