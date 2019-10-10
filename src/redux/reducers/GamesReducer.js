import { actionTypes } from './../actions/actionTypes';

export const initialState = {
	mode: 'vs',
	player1: {
		loading: false,
		weapon: null,
		score: 0,
	},
	player2: {
		loading: false,
		weapon: null,
		score: 0,
	},
	winner: null,
  changemode: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PLAY:
      return {
        mode: state.mode,
        player1: {
          ...state.player1,
          weapon: action.payload.weapon1,
          loading: true,
        },
        player2: {
          ...state.player2,
          weapon: action.payload.weapon2,
          ...((action.payload.stimulate) ? { loading: true } : {}),
        },
        changemode: state.changemode,
				timer: 0
      };
    case actionTypes.RESTART:
      return {
        mode: state.mode,
  			player1: {
  				...state.player1,
  				weapon: initialState.player1.weapon,
  			},
  			player2: {
  				...state.player2,
  				weapon: initialState.player2.weapon,
  			},
  			winner: initialState.winner,
        changemode: state.changemode,
  		};
    case actionTypes.RESET:
      return {
        ...state,
        initialState
  		};

    case actionTypes.RESULT:
      return {
        mode: state.mode,
  			player1: {
  				...state.player1,
  				...((action.payload.winner === 1) ? { score: state.player1.score + 1 } : {}),
  				loading: false,
  			},
  			player2: {
  				...state.player2,
  				...((action.payload.winner === 2) ? { score: state.player2.score + 1 } : {}),
  				loading: false,
  			},
  			winner: action.payload.winner,
        changemode: state.changemode,
  		}
    case actionTypes.UPDATE_MODE:
      return {
				...state,
        mode: action.payload,
        changemode: false,
  		}
    case actionTypes.CHANGE_MODE:
      return {
        ...state,
        changemode: true,
				player1: {
					...state.player1,
					weapon: initialState.player1.weapon,
					score: initialState.player1.score,
				},
				player2: {
					...state.player2,
					weapon: initialState.player2.weapon,
					score: initialState.player2.score,
				},
				winner: initialState.winner,
  		}

    default:
      return state;
  }
};
