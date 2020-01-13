import React from 'react';
import { shallow } from 'enzyme';
import { Truck } from './Truck';

describe('Truck', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <Truck truck='test' />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

})