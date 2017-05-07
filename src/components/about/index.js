import { h, Component } from 'preact';
import style from './style';

class About extends Component {

	render() {
		return (
			<div class={style.panel}>
				<h1 class={style.aboutHeader}>
					About me
				</h1>

				<p class={style.aboutText}>
					My name is Jake, I'm a front end developer at Vokke, <br />
					We focus primarily on developing business automation software & enterprise grade software. <br />
					<br />

					I like to spend my spare time working on personal projects or improving open source projects I use.
				</p>
			</div>
		);
	}
}

export default About;
