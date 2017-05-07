import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';

class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<Link href="/">
					<h1>Jake Jarrett</h1>
				</Link>
				<nav>
					<a href="https://twitter.com/jakerjarrett" target="_blank" rel="noopener">
						<i class="fa fa-twitter fa-lg"></i>
					</a>
					<a href="https://github.com/jakejarrett" target="_blank" rel="noopener">
						<i class="fa fa-github fa-lg"></i>
					</a>
					<a href="http://vokke.com.au/" target="_blank" rel="noopener">
						<i class="fa fa-building-o fa-lg"></i>
					</a>
				</nav>
			</header>
		);
	}
}

export default Header;
