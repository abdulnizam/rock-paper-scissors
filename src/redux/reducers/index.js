import { combineReducers } from 'redux';

import setup from './SetupReducer';
import games from './GamesReducer';

export default combineReducers({
  setup,
  games
});
