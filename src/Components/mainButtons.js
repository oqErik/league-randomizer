import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function MainButtons({ resetPlayers, startGame }) {
	return (
		<Container>
			<Row className='pt-4 align-bottom' onClick={() => startGame()}>
				<Button variant='primary'>Randomize</Button>
			</Row>
			<Row className='pt-4 align-bottom'>
				<Button variant='primary' onClick={() => resetPlayers()}>
					Reset
				</Button>
			</Row>
		</Container>
	);
}

export default MainButtons;
