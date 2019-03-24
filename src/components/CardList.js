import React from 'react';

import Card from './Card';
import './Card.css';

const CardList = ({robots}) => {
	return (
		<div className='grid-wrapper'>
			{
			robots.map((user, index) => {
				return (<Card 
				key={user.id} 
				id={robots[index].id}
				name={robots[index].name} 
				email={robots[index].email}/>);
	})
			}
		</div>
		);
}


export default CardList;