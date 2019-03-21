import React, {Component} from 'react';


const Card = ({name, email}) => {
	return (
		<div className='card'>
			<img src={`https://robohash.org/${name}?200x200`} alt='gay' />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>

		);
}

export default Card;