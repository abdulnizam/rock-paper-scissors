import React from 'react';
import { shallow, mount } from 'enzyme';
import Challenge from './index';
import { findByTestAtrr } from '../../utils';

const props = {
  player1: {
    loading: false,
    weapon: null,
    score: 0,
  },
  player2: {
    loading: false,
    weapon: null,
    score: 0,
  }
}

describe('Game', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Challenge {...props} />);
	});

	it('should return random weapon', () => {
    const component = findByTestAtrr(wrapper, 'ChallengeComponent');
    expect(wrapper.length).toBe(1);

	})

});
