import React from 'react';
import { shallow } from 'enzyme';
import { PotentialLocations } from './PotentialLocations';
import * as mockData from '../../utils/mockData';

describe('PotentialLocations', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <PotentialLocations potentialLocations={mockData.mockPotentialLocations} allTrucks={mockData.mockPotentialLocations}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

})