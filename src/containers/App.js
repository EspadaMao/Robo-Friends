import React, { Component } from 'react';
import Title from '../components/Title';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList'
// import Scroller from '../components/Scroller'
import ErrorBoundary from './ErrorBoundary';
import { robots } from '../components/robots';
import './App.css'

const state = {
	robots: robots,
	searchfield: ''
}


class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ robots: users }));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const filterdRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		return !this.state.robots.length ?
			(<div className='center'>
					<div className='loading'></div>
				</div>)
			:(<div>
				<Title/>
				<SearchBox searchChange={this.onSearchChange}/>
				<ErrorBoundary>
					<CardList robots={ filterdRobots }/>
				</ErrorBoundary>
			</div>);
		;
		
	}

}

export default App;