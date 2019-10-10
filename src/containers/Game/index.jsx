import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRandomWeapon, keys } from '../../utils';

import { GamesData } from '../../redux/actions';

import Modes from '../../components/Modes';
import Challenge from '../../components/Challenge';
import WeaponList from '../../components/WeaponList';
import Result from '../../components/Result';
import './styles.scss';

class Game extends Component {

	modeKeys = keys(this.props.modes);
	weaponKeys = keys(this.props.weapons);

	getWinner = (weapon1, weapon2) => {
		if (weapon1 === weapon2) return 0;
		return this.props.weapons[weapon1].wins.some(wins => wins === weapon2) ? 1 : 2;
	}

	play = (weapon) => {
		const weapon1 = getRandomWeapon(this.weaponKeys);
		const weapon2 = weapon || getRandomWeapon(this.weaponKeys);
		const simulateMode = this.props.games.mode === this.modeKeys[1];
		this.props.play({weapon1: weapon1, weapon2: weapon2, stimulate: simulateMode });
		setTimeout(() => {
			this.setResult();
		}, 500 + Math.random() * 500)
	}

	setResult() {
		const winner = this.getWinner(this.props.games.player1.weapon, this.props.games.player2.weapon);
		this.props.setResult({winner: winner});
	}

	render() {
		const { player1Label, player2Label } = this.props.modes[this.props.games.mode];
		const loading = (this.props.games.player1.loading || this.props.games.player2.loading);
		return (
			<div className="game" data-test="gameComponent">
				<div className="modes">
					<Modes
						label={this.props.modes[this.props.games.mode].label}
					/>
				</div>

				<div className="challenge">
					<Challenge
						player1={{ ...this.props.games.player1, label: player1Label }}
						player2={{ ...this.props.games.player2, label: player2Label }}
					/>
				</div>

				<div className="footer">
					{this.props.games.winner === null && !loading && this.props.games.mode === this.modeKeys[0] && (
						<WeaponList
							weapons={this.weaponKeys}
							onClickWeapon={weapon => this.play(weapon)}
						/>
					)}

					{(this.props.games.winner !== null || loading || this.props.games.mode === this.modeKeys[1]) && (
						<Result
							player1Label={player1Label}
							player2Label={player2Label}
							winner={this.props.games.winner}
							loading={loading}
							onClickPlay={() => this.props.games.mode === this.modeKeys[1] ?
								this.play() : this.props.restart()
							}
						/>
					)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		weapons: state.setup.weapons,
		modes: state.setup.modes,
		games: state.games
	}
}

const mapDispatchToProps = (dispatch) => {
		return {
			play: (data) => { dispatch(GamesData.play(data))},
			setResult: (data) => { dispatch(GamesData.result(data))},
			restart: () => { dispatch(GamesData.restart())},
			reset: () => { dispatch(GamesData.reset())},
		}
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
