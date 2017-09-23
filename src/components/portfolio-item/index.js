import { h, Component } from 'preact';
import style from './style';

export default class PortfolioItem extends Component {

	render() {
		const props = this.props;
		let _tech = props.tech.split(",");
		const tech = _tech.map(techName => <li>{techName}</li>);

		return (
			<a class={style.portfolioItem} href={props.link} target="_blank" rel="noopener">
				<h1>{props.name}</h1>
				<p>
					{props.description}
				</p>

				<ul>
					<li class={style.firstItem}>TECH</li>
					{tech}
				</ul>

			</a>
		);
	}
}
