export const initialState = {
  weapons: {
  	rock: {
  		wins: ['scissors'],
  	},
  	paper: {
  		wins: ['rock'],
  	},
  	scissors: {
  		wins: ['paper'],
  	},
  },
  modes: {
  	vs: {
  		id: 1,
  		label: 'PLAYER VS COMPUTER',
  		player1Label: 'COMPUTER',
  		player2Label: 'PLAYER',
  	},
  	simulate: {
  		id: 2,
  		label: 'COMPUTER VS COMPUTER',
  		player1Label: 'COMPUTER 1',
  		player2Label: 'COMPUTER 2',
  	}
  }
};

export default (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};
