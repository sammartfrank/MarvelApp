import React from 'react';
import {Link} from 'react-router-dom';

const footsy = {
	minHeight: '30px',
	backgroundColor: '#222',
	color: 'white',
}

const Footer = () => (
	<div className="container" style={footsy}>
		<p> Reserved Rights </p>
		<a href="http://www.frankthetanks.com">FranksDomain</a>
	</div>
)

export default Footer;