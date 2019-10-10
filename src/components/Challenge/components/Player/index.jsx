import React from 'react';
import './styles.scss';

import Weapon from '../../../../components/Weapon';

const Player = ({ label, weapon, loading, score }) => (
	<div className="player">
		<div>
			<span className="label">{label}</span>
		</div>

		<div>
			<Weapon
				icon={weapon}
				loading={loading}
				size='tiny'
			/>
			<span className="score">{score} PT{score > 1 && 'S'}</span>
		</div>
	</div>
);

export default Player;
