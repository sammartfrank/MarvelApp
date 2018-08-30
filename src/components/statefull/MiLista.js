import React, { Component } from 'react';
import ItemsList from '../stateless/ItemsList.js';
import Filtros from '../stateless/Filtros.js';
import '../../App.css';
import '../../style.css';

class MiLista extends Component {
    componentDidMount() {
    const { loadListData } = this.props
    loadListData()
  }

	render(){
		const { miListaDeComics, miListaDeChara } = this.props
		return (
				<main role="main">
    				<div className="py-5 bg-light">
        				<div className="container">
				            <h1>My List</h1>
				         	<div className="filters-bar">
			                	<div className="filters-bar-left">
			                    	<select name="filter-viewed" id="filter-year" className="form-control">
			                        	<option value="not-viewed">Not Viewed</option>
			                        	<option value="viewed">Viewed</option>
			                    	</select>
			                		<Filtros />
			                		<br></br>
			                	</div>
            			</div>
            			<section className="items-section">
                			<div className="items-section-body">
                    			<div className="row">
                    				{/*<ItemsList listadoResultados={ miListaDeComics}/>*/}
                    			</div>
                			</div>
            			</section>
            			<section className="items-section">
                			<div className="items-section-body">
                    			<div className="row">
                    				{/*<ItemsList listadoResultados={miListaDeChara}/>*/}
                    			</div>
                			</div>
            			</section>
        				</div>
    				</div>
				</main>
			)
	}
}
export default MiLista;