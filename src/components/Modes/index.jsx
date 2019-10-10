import React, { Component } from 'react';

import './styles.scss';

class Modes extends Component {

	render() {
		return (
			<div className="modes" data-test="ModeComponent">
				<span className="label">{this.props.label}</span><br />
			</div>
		)
	}
}

export default Modes;
