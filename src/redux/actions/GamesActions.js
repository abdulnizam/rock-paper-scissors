import { actionTypes } from './actionTypes';

export const GamesData = {
  play: payload => ({ type: actionTypes.PLAY, payload: payload }),
  result: payload => ({type: actionTypes.RESULT, payload: payload }),
  restart: () => ({type: actionTypes.RESTART, payload: null}),
  reset: () => ({type: actionTypes.RESET, payload: null}),
  changeMode: () => ({type: actionTypes.CHANGE_MODE, payload: null}),
  updateMode: payload => ({type: actionTypes.UPDATE_MODE, payload: payload}),
};
