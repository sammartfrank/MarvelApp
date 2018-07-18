import React from 'react'
import {NavLink} from 'react-router-dom';

// Padre de Detalles

const GridItem = ({imagen,title,date}) =>(
	<article className="col-md-2">
		<NavLink to="/Detalle" className="grid-item">
			<img img={imagen} alt="Movie" className="img-fluid"></img>
			<span className="grid-item-body">
				<span className="grid-item-title">{title}</span>
				<span className="grid-item-date">{date}</span>
			</span>
		</NavLink>
	</article>
)
export default GridItem;