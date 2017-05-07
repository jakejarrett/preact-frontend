import { h, Component } from 'preact';
import { Router } from 'preact-router';
import AsyncRoute from 'preact-async-route';
import Header from './header';

export default class App extends Component {

	/**
	 * Gets fired when the route changes.
	 *
	 * @param {Object} e     "change" event from [preact-router](http://git.io/preact-router)
	 * @param {string} e.url The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	home () {
		return new Promise(resolve => System.import('./home').then(module => resolve(module.default)));
	}

	render () {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<AsyncRoute path="/" component={this.home} />
				</Router>
			</div>
		);
	}
}
