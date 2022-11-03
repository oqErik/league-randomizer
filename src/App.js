import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import AddPlayers from './Components/addPlayers';
import ListPlayers from './Components/listPlayers';
import MainButtons from './Components/mainButtons';
import { Image } from 'react-bootstrap';

function App() {
	//state for the list of players
	const [listPlayers, setListPlayers] = React.useState([]);

	//state for all the champs
	const [champs, setChamps] = React.useState([]);

	//save the state of the game
	const [gameState, setGameState] = React.useState([]);

	//function to handle the submit event
	const handleAddPlayer = (player) => {
		if (player === '') return alert('Please enter a name');
		if (listPlayers.length >= 5) return alert('You can only add 5 players');
		setListPlayers([...listPlayers, player]);
	};

	const resetPlayers = () => {
		startGame();
		setListPlayers([]);
	};

	const startGame = () => {
		setGameState(
			listPlayers.map((player) => {
				return {
					player,
					champ: null,
					img: null,
					poolChamp: champs,
				};
			})
		);
		console.log(gameState);
	};

	const randomize = () => {
		setGameState(
			gameState.map((player) => {
				const randomChamp = Math.floor(
					Math.random() * player.poolChamp.length
				);
				return {
					...player,
					champ: player.poolChamp[randomChamp].name,
					icon: player.poolChamp[randomChamp].icon,
					splash: player.poolChamp[randomChamp].splash,
					poolChamp: player.poolChamp.filter(
						(champ) =>
							champ.name !== player.poolChamp[randomChamp].name
					),
				};
			})
		);
		console.log(gameState);
	};

	//fetch the data from http://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/champion.json
	//and save it in the state
	React.useEffect(() => {
		fetch(
			'http://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/champion.json'
		)
			.then((response) => response.json())
			.then(({ data }) => {
				const champsResponse = Object.values(data);
				const filteredChamps = champsResponse.map((champ) => {
					return {
						name: champ.name,
						icon: `http://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/${champ.id}.png`,
						splash: `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.id}_1.jpg`,
						title: champ.title,
					};
				});

				console.log(filteredChamps);
				setChamps(filteredChamps);
			});
	}, []);

	return (
		<Container>
			<Row>
				<Col>
					{' '}
					<AddPlayers
						handleAddPlayer={handleAddPlayer}
						listPlayers={listPlayers}
						startGame={startGame}
					>
						{' '}
					</AddPlayers>{' '}
				</Col>
				<Col>
					{' '}
					<ListPlayers listPlayers={listPlayers}></ListPlayers>{' '}
				</Col>
				<Col>
					{' '}
					<MainButtons
						resetPlayers={resetPlayers}
						startGame={randomize}
					></MainButtons>{' '}
				</Col>
			</Row>
			<Row>
				{gameState.map((player, i) => {
					return (
						<Col className='text-center border rounded m-3' key={i}>
							{' '}
							<h1>{player.player}</h1>
							<h2>{player.champ}</h2>
							<Image
								fluid
								src={player.splash}
								alt={player.champ}
							/>{' '}
							<Col>
								<h1>Champion pool left</h1>
								{player.poolChamp.map((champ, i) => {
									return (
										<div key={i}>
											<h2>{champ.name}</h2>
											<img
												src={champ.icon}
												alt={champ.name}
											/>
										</div>
									);
								})}
							</Col>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
}

export default App;
