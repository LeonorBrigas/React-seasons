import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './Loader';
import SeasonDisplay from './SeasonDisplay';



class App extends React.Component {
	// line 10 same as constructor => super => this.state = {}
	state = { lat: null, errorMessage: '' };

	componentDidMount() {
		// 1st success callback (line 19)
		// 2n error callback (line 20)
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({
				lat: position.coords.latitude
			}),
			err => this.setState({ errorMessage: err.message }),
		);
	}

	renderContent() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: { this.state.errorMessage }</div>;
		}
		if (!this.state.errorMessage && this.state.lat) {
			// pass the property lat define in the component
			return <SeasonDisplay lat={ this.state.lat } />;
		}
		return <Loader message="Please accept location request" />;
	}
	// React says we have to define render
	// conditional rendering: render depending on the state of the props of our component
	render() {
		return (
			<div className="border red">
				{ this.renderContent() }
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
