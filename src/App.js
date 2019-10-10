import React, { Component } from 'react';
import { connect } from 'react-redux';
import { keys, values } from './utils';
import { GamesData } from './redux/actions';

import Game from './containers/Game'
import ModeScreen from './components/ModeScreen';
import 'semantic-ui-css/semantic.min.css';
import './app.scss';

class App extends Component {

    modeKeys = keys(this.props.modes);
		modeValues = values(this.props.modes)

    toggleMode(id) {
			this.props.updateMode(this.modeKeys[id-1]);
  	}

		frontScreen() {
			if(this.props.games.changemode) {
				return (<div className="modescreen">
							<ModeScreen
								onClickMode={(id) => this.toggleMode(id)}
								modes={this.modeValues}
							/>
						</div>
					)
				} else {
					return (<Game />);
				}
		}

  	render() {
      return (
        <div className="App">
          <h1>
            ROCK, PAPER, SCISSORS
          </h1>
        	{this.frontScreen()}
        </div>
      );
    }
}

const mapStateToProps = (state) => {
	return {
		modes: state.setup.modes,
		games: state.games,
	}
}

const mapDispatchToProps = (dispatch) => {
		return {
			updateMode: (mode) => { dispatch(GamesData.updateMode(mode))},
		}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
