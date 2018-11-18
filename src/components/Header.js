import React, { Component } from 'react';
import NavBar from './NavBar';
import HeroImage from './HeroImage';
import wist from '../images/women-in-sports-tech-logo-orange-box.png';
import st from '../images/sporttechie.png';

class Header extends Component {

	render() {
		return (
			<header>
				<NavBar />
				<HeroImage>
					{this.props.children}
				</HeroImage>
			</header>
		);
	}
}

export default Header;
