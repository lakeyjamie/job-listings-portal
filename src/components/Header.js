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
						<a href="https://www.sporttechie.com/" target="_blank" rel="noopener noreferrer">
							<img src={st} alt="sport techie logo" className="sponsor-logo"/>
							</a>
					</div>
					<div className="media">
						<a href="http://womeninsportstech.org/" target="_blank" rel="noopener noreferrer">
							<img src={wist} alt="women in sports tech logo orange box" className="sponsor-logo"/>
						</a>
					</div>
				</div>
				<div className="header-right">
					<a href="https://gowist.seeker.company/submit/job" target="_blank" rel="noopener noreferrer">
						<button> Post a job</button>
					</a>					
				</div>						
				
			</header>
		);
	}
}

export default Header;
