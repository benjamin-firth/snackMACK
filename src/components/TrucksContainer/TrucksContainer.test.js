import React from 'react';
import { shallow } from 'enzyme';
import { TrucksContainer } from './TrucksContainer';

describe('TrucksContainer', () => {
  let wrapper;
  let allTrucks = [{}]

  beforeEach(() => {
    wrapper = shallow( <TrucksContainer allTrucks={[]} city='test'/>)
  })

it('should match the snapshot', () => {
    // assert.isDefined(AccountFormComponent);
    expect(wrapper).toMatchSnapshot();
  })

})