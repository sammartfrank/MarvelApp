import React from 'react';

const footsy = {
	minHeight: '50px',
	backgroundColor: '#222',
	color: 'white',
}

const Footer = () => (
	<div className="container fixed-bottom" style={ footsy }>
	<br></br>
		<p> Contents Brought By Marvel API <a href="http://developer.marvel.com" target="_blank" rel="noopener noreferrer">Marvel</a></p>
		<p> Reserved Rights </p>
		<a href="http://www.frankthetanks.com" target="_blank" rel="noopener noreferrer">FranksDomain</a>
	</div>
)

export default Footer;