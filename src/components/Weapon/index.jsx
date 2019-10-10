import React from 'react';
import './styles.scss';
import Loading from '../../components/Loading';
import { Icon } from 'semantic-ui-react';

const Weapon = ({ icon, loading, size }) => {
	let icons, class_name;
	if (!loading && icon ) {
	  icons = <Icon color='teal' name={`hand ${icon} outline`}  size={size} />;
		class_name = 'weapon';
	} else {
	  icons = '?';
		class_name = 'weapon empty'
	}
	return (
		<span
			className={class_name}
			data-test='weaponComponent'
		>
			{icons}
			{loading && <Loading />}
		</span>
	);
}

export default Weapon;
