import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import React from 'react';

function AddPlayers({ handleAddPlayer, startGame, gameState }) {
	//save the player name in the state
	const [playerName, setPlayerName] = React.useState('');

	//function to handle the change in the input field
	const handleChange = (event) => {
		setPlayerName(event.target.value);
	};

	const handlePlayer = (event) => {
		event.preventDefault();
		handleAddPlayer(playerName);
		setPlayerName('');
	};

	return (
		<Form onSubmit={handlePlayer}>
			<Form.Group>
				<h1>Add players</h1>
				<Form.Control
					className='bg-secondary text-white'
					type='text'
					onInput={handleChange}
					value={playerName}
				/>
				<Form.Text className='text-muted'>Rulo joto</Form.Text>
			</Form.Group>
			<Container fluid>
				<Row>
					{gameState.length == 0 ? (
						<>
							<Button
								variant='primary'
								onClick={handlePlayer}
								className='m-2'
							>
								Add player
							</Button>
							<Button
								variant='primary'
								onClick={startGame}
								className='m-2'
							>
								Start game
							</Button>
						</>
					) : (
						''
					)}
				</Row>
			</Container>
		</Form>
	);
}

export default AddPlayers;
