import React from 'react';
import './styles.scss';
import Player from './components/Player';
import { Divider, Header, Icon } from 'semantic-ui-react';

const Challenge = ({ player1, player2 }) => (
	<div className="challenge" data-test="ChallengeComponent">
		<Player
			{...player1}
		/>
		<Divider horizontal>
      <Header as='h4'>
        <Icon name='winner' />
        Vs
      </Header>
    </Divider>

		<Player
			{...player2}
		/>
	</div>
)

export default Challenge;
