import { h, Component } from 'preact';
import About from '../about';
import Portfolio from '../portfolio';

class Home extends Component {

	render() {
		return (
			<div>
				<About />
				<Portfolio />
			</div>
		);
	}
}

export default Home;
