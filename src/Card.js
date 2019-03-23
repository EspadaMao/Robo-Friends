import React, {Component} from 'react';


const Card = ({name, email}) => {
	return (
		<div className='card-wrapper'>
			<div className='card'>
				<img src={`https://robohash.org/${name}?400x400`} alt='gay' />
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>

		);
}

export default Card;