import React, {Component} from 'react';
import ItemsList from '../ItemsList.js';
import Filtros from '../Filtros.js';
import '../../App.css';

class Characters extends Component {
	constructor(props) {
		super(props)]
		this.state = {
			error: '',
			loading:true,
			characters:[],
		}
	}
	render(){
		return(
			<div>
				<main role="main">
				    <div className="py-5 bg-light">
				        <div className="container">
				        <h1> Characters </h1>
				        <form className="form-inline my-2 my-md-0" action="">
				        	<select className="form-control md"> 
				        		<option>Año</option>
				        	</select>
				        	<select className="form-control lg">
				        		<option>Ordenado por</option>
				        	</select>
				        	<select className="form-control md">
				        		<option>Generos</option>
				        	</select>
				       		<Filtros />
                		</form>
				            <section className="items-section">
				                <div className="items-section-body">
				                    <div className="row">
				                   		 <ItemsList />
				                    </div>
				                </div>
				            </section>
				            <section className="items-section">
				                <h5 className="items-section-title">Películas más Populares <a href="">Ver todas</a></h5>
				                <div className="items-section-body">
				                    <div className="row">
				                   		 <ItemsList />
				                    </div>
				                </div>
				            </section>
				            <section className="items-section">
				                <h5 className="items-section-title">Series más Populares <a href="">Ver todas</a></h5>
				                <div className="items-section-body">
				                    <div className="row">
				                        <ItemsList />
				                    </div>
				                </div>
				            </section>
				        </div>
				    </div>
				</main>
			</div>

			)
	}
}
export default Characters.js;