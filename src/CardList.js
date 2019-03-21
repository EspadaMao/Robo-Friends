import React from 'react';

import Card from './Card';
import './Card.css';

const CardList = ({robots}) => {
	const cardsArray = robots.map((user, index) => {
		return <Card id={robots[index].id} name={robots[index].name} email={robots[index].email}/>;
	});
	return (

		<div className='grid-wrapper'>
			{cardsArray}
		</div>
		);
}

export default CardList;