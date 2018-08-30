import React from 'react'
import { NavLink } from 'react-router-dom'

// Padre de Detalles

const GridItem = ({ thumbnail, title, date, id, type, name }) =>
	<article className="col-md-3">
		<NavLink to={`/detalle/${type}/${id}`} className="grid-item">
			<img src={`${ thumbnail.path }.${ thumbnail.extension }`}
				 alt="Movie"
				 className="img-fluid">
			</img>
			<span className="grid-item-body">
				<span className="grid-item-title">{ title}{ name }</span>
				<span className="grid-item-date">{ date }</span>
			</span>
		</NavLink>
	</article>

export default GridItem
