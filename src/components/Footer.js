import React, { Component } from 'react';
import '../css/Footer.css';

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from 'react-share';


class Footer extends Component {

	render() {
		const title = 'Vetted job listings in the sports tech space.';
		const shareURL = 'http://sportstech.careers/';
		return (
			<footer>
				<p>Brought to you by <a href="http://womeninsportstech.org/" target="_blank" rel="noopener noreferrer">Women In Sports Tech</a> and <a href="https://www.sporttechie.com/" target="_blank" rel="noopener noreferrer">SportTechie</a>.</p>
				<div className="social-icons">
					<FacebookShareButton
						url={shareURL}
						quote={title}
					>
						<FacebookIcon
	            size={32}
	            round 
	          />
					</FacebookShareButton>
					<TwitterShareButton
						url={shareURL}
						hashtag="womeninsportstech"
						title={title}
					>
						<TwitterIcon
	            size={32}
	            round 
	          />
					</TwitterShareButton>
					<LinkedinShareButton
						url={shareURL}
						hashtag="womeninsportstech"
					>
						<LinkedinIcon
	            size={32}
	            round 
	          />
					</LinkedinShareButton>
				</div>
			</footer>
		);
	}
}

export default Footer;
