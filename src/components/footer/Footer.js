import React from 'react';
import {Link} from 'react-router-dom';

const footsy = {
	minHeight: '50px',
	backgroundColor: '#222',
	color: 'white',
}

const Footer = () => (
	<div className="container" style={footsy}>
		<p> Contents Brought By Marvel API <a href="http://developer.marvel.com" target="_blank">Marvel</a></p>
		<p> Reserved Rights </p>
		<a href="http://www.frankthetanks.com" target="_blank">FranksDomain</a>
	</div>
)

export default Footer;