import React, { Component } from 'react';
import '../css/Header.css';
import wist from '../images/women-in-sports-tech-logo-orange-box.png';
import st from '../images/sporttechie.png';

class Header extends Component {

	render() {
		console.log("wist path is");
		console.log(wist);
		return (
			<header>
				<div className="header-left">
					<div className="media">
						<img src={wist} alt="women in sports tech logo orange box" className="sponsor-logo"/>
					</div>
					<div className="media">
						<img src={st} alt="sport techie logo" className="sponsor-logo"/>
					</div>
				</div>
				<div className="header-right">
					<a href="https://gowist.seeker.company/submit/job" target="_blank">
						<button> Post a job! - $250</button>
					</a>					
				</div>						
				
			</header>
		);
	}
}

export default Header;
