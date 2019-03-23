import React, { Component } from 'react';
import Title from './Title';
import SearchBox from './SearchBox';
import CardList from './CardList'
import { robots } from './robots';
import './App.css'

const state = {
	robots: robots,
	searchfield: ''
}


class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const filterdRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
				<div>
					<Title/>
					<SearchBox searchChange={this.onSearchChange}/>
					<CardList robots={ filterdRobots }/>
				</div>
				);
	}

}

export default App;