import React from 'react';
import './styles.scss';
import Button from '../../components/Button';
import Weapon from '../Weapon';

const WeaponList = ({ weapons, onClickWeapon }) => (
	<div className="weaponList">
			{weapons.map(weapon => (
				<li key={weapon}>
					<Button
						onClick={() => onClickWeapon(weapon)}
					>
						<Weapon
							icon={weapon}
						/>
					</Button>
				</li>
			))}
		<span className="label">CHOOSE A WEAPON</span>
	</div>
);

export default WeaponList;
