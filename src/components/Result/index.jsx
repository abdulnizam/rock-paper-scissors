import React, { Component } from 'react';

import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { GamesData } from '../../redux/actions';

import './styles.scss';

class Result extends Component {
	changeMode() {
		this.props.changeMode();
	}

	render(){
		return (
			<div className="result" data-test="resultComponent">
				{this.props.winner !== null && !this.props.loading && (
					<div className="winner">
						<span>
							{this.props.winner === 0 ? 'TIE' : `${(this.props.winner === 1 ? this.props.player1Label : this.props.player2Label)} WINS`}
						</span>
					</div>
				)}
				<div className="play">
					<Button.Group>
				    <Button onClick={this.props.onClickPlay}>PLAY {(this.props.loading || this.props.winner !== null) && 'AGAIN'}</Button>
				    <Button.Or />
				    <Button onClick={ () => this.changeMode()}>Change Mode</Button>
				  </Button.Group>
				</div>

			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		games: state.games
	}
}

const mapDispatchToProps = (dispatch) => {
		return {
			changeMode: () => { dispatch(GamesData.changeMode())},
		}
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);
