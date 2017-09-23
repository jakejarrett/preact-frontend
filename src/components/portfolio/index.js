import { h, Component } from 'preact';
import PortfolioItem from "../portfolio-item";
import style from './style';

class Portfolio extends Component {

	render() {
		return (
			<div>
				<h1 class={style.portfolioHeader}>
					Things i've worked on <small>or contributed to</small>
				</h1>
				<div class={style.portfolio}>
					<PortfolioItem name="Soundnode App" link="https://github.com/Soundnode/soundnode-app"
						description="A desktop player for soundcloud built with Electron & Angular.js"
						tech="Angular, Electron"
					/>

					<PortfolioItem name="Turbo Couscous" link="https://github.com/jakejarrett/turbo-couscous"
						description="A starter kit for marionette 3, ES6 & Serverside rendering"
						tech="Backbone, Marionette"
					/>

					<PortfolioItem name="electron-gtk" link="https://github.com/jakejarrett/electron-gtk"
						description="An electron wrapper that passes in the current GTK Theme"
						tech="Electron, GTK, CSS"
					/>

					<PortfolioItem name="jakejarrett.com" link="https://github.com/jakejarrett/preact-frontend"
						description="A site to show a simple portfolio & a test project for preact"
						tech="Preact, Webpack 2"
					/>

					<PortfolioItem name="Backbone Debugger" link="https://github.com/Maluen/Backbone-Debugger"
						description="Chrome Developer Tools extension for debugging Backbone.js applications"
						tech="Backbone, Chrome Extension"
					/>

					<PortfolioItem name="Harmony" link="https://github.com/vincelwt/harmony"
						description="Music player for Spotify, SoundCloud, Google Play & local files"
						tech="Electron, ES6"
					/>

					<PortfolioItem name="Marionette Decorators" link="https://github.com/VokkeSoftware/marionette-decorators"
						description="ESNext Decorators for your marionette project to make marionette easier to work with in ES6+"
						tech="Babel, ESNext, Decorators"
					/>

				</div>
			</div>
		);
	}
}

export default Portfolio;
