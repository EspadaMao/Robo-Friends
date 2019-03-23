import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchfield, searchChange }) => {

	return (
	<div className='search-box-wrapper'>
		<div className='search-box'>
			<input 
			className='search-txt' 
			type='search' 
			placeholder='search for robot friends'
			onChange={ searchChange }
			/>
			<a className='search-btn' href="#"> 
				<i className="fas fa-search"></i>
			</a>
		</div>
	</div>
	);

}

export default SearchBox;