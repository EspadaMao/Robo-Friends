import React, { Component } from 'react';
import './ErrorBoundary.css';


class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errorOccured: false
		}
	}

	componentDidCatch(error, info) {
		this.setState({errorOccured: true});
	}

	render() {
		if(this.state.errorOccured) {
			return <h2 className='error'>An error has occured!</h2>
		}else {
			return this.props.children
		}
	}
}


export default ErrorBoundary;