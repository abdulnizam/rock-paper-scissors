import React from 'react';
import { shallow, mount } from 'enzyme';
import Game, { getWinner } from './index';
import store from '../../redux';
import { findByTestAtrr, getRandomWeapon } from '../../utils';

describe('Game', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Game store={store} />);
	});

	it('should render without error', () => {
    const component = findByTestAtrr(wrapper, 'gameComponent');
    expect(wrapper.length).toBe(1);

	})

	it('should return random weapon', () => {
		const weapons = ['rock', 'paper', 'scissors'];
		let weaponFound = [];
		let valid = false;

		// Loop multiple times and expect all weapons to show up at least once.
		for (let i = 0, end = 20; i < end; i++) {
			const weapon = getRandomWeapon(weapons);
			if (weapons.indexOf(weapon) > -1 && weaponFound.indexOf(weapon) === -1) weaponFound.push(weapon);
			if (weaponFound.length === weapons.length) {
				valid = true;
				i = end;
			}
		}
		expect(valid).toBe(true);
	})
});
