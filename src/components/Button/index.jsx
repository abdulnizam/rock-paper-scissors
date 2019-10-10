import React from 'react';
import './styles.scss';

const Button = ({ children, ...rest }) => (
	<button
		className="button"
		{...rest}
	>
		{children}
	</button>
);

export default Button;
