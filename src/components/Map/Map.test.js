import React from 'react';
import { shallow, mount } from 'enzyme';
import TruckMap from './Map';

describe('map', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <TruckMap lat='40.0' long='40.0' trucks={[{}, {}, {}]}/>)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  // it('should update activeTruck state when clicked', async () => {
  //   wrapper.setState({
  //     activeTruck: {location: {}}
  //   });
  //   const component = mount(<TruckMap />);
  //   const marker = component.find(Marker);

  //   marker.prop('click')

  //   expect(wrapper.state('activeTruck')).toEqual('');
  // })
})