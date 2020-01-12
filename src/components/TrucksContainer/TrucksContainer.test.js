import React from 'react';
import { shallow } from 'enzyme';
import { TrucksContainer } from './TrucksContainer';

describe('TrucksContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <TrucksContainer />)
  })

it('should match the snapshot', () => {
    // assert.isDefined(AccountFormComponent);
    expect(wrapper).toMatchSnapshot();
  })

})