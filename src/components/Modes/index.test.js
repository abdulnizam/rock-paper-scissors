import React from 'react';
import { shallow, mount } from 'enzyme';
import Mode from './index';
import { findByTestAtrr } from '../../utils';

const props = {
  label: 'COMPUTER VS PLAYER' 
}

describe('Game', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Mode {...props} />);
	});

	it('should return random weapon', () => {
    const component = findByTestAtrr(wrapper, 'ModeComponent');
    expect(wrapper.length).toBe(1);

	})

});
