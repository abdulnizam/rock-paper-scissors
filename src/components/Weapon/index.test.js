import React from 'react';
import { shallow, mount } from 'enzyme';
import Weapon from './index';
import { findByTestAtrr } from '../../utils';

const props = {
  icon: 'rock', loading: 'true', size: 'tiny'
}

describe('Game', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Weapon {...props} />);
	});

	it('should render without error', () => {
    const component = findByTestAtrr(wrapper, 'weaponComponent');
    expect(wrapper.length).toBe(1);

	})

});
