import React from 'react';
import { ListGroup } from 'react-bootstrap';

function ListPlayers({ listPlayers }) {
	return (
		<div>
			<h1>Players</h1>
			<ListGroup className='bg-secondary text-white'>
				{listPlayers.map((player, index) => (
					<ListGroup.Item
						className='bg-secondary text-white'
						key={index}
					>
						{player}
					</ListGroup.Item>
				))}
			</ListGroup>
		</div>
	);
}

export default ListPlayers;
