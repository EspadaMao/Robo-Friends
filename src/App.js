import React from 'react';
import Title from './Title';
import SearchBox from './SearchBox';
import CardList from './CardList'
import { robots } from './robots';

const App = () => {

	return (
		<div>
			<Title/>
			<SearchBox/>
			<CardList robots={ robots }/>
		</div>
	);

}

export default App;