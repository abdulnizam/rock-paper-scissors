import React from 'react';
import { shallow, mount } from 'enzyme';
import Weapon from './index';
import { findByTestAtrr } from '../../utils';
import store from '../../redux';

const props = {
  winner: 2, loading: 'true', player1Label: 'COMPUTER', player2Label: 'PLAYER',
  onClickPlay: () => {}

}

describe('Game', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(<Weapon store={store} {...props} />);
	});

	it('should return random weapon', () => {
    const component = findByTestAtrr(wrapper, 'resultComponent');
    expect(wrapper.length).toBe(1);

	})

});
