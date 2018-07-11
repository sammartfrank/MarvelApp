import React from 'react'
import {NavLink} from 'react-router-dom';

// Padre de Detalles

const GridItem = () => (
	<article className="col-md-2">
		<NavLink to="/Detalle" className="grid-item">
			<img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt="Movie" className="img-fluid"></img>
			<span className="grid-item-body">
				<span className="grid-item-title">Thor: Ragnarok</span>
				<span className="grid-item-date">October 25, 2017</span>
			</span>
		</NavLink>
	</article>
)
export default GridItem;