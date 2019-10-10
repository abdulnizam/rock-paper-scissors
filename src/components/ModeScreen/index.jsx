import React from 'react';
import Button from '../../components/Button';
import './styles.scss';

const ModeScreen = ({ modes, onClickMode }) => {
  return (
  	<div className="modescreen" data-test="ModeScreenComponent">

      <h2>Select Play Mode</h2>

      {modes.map(mode => (
        <li key={mode.id}>
          <Button
            onClick={() => onClickMode(mode.id)}
          >
            <span className="label">{mode.label}</span><br />
          </Button>
        </li>
      ))}

  	</div>
  );
}

export default ModeScreen;
