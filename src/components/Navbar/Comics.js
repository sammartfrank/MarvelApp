import React, {Component} from 'react';
import ItemsList from '../ItemsList.js';
import Filtros from '../Filtros.js';
import {NavLink} from 'react-router-dom';
import '../../App.css';
import MarvApi from '../services/MarvApi.js';


class Comics extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: '',
			loading: true,
			comics: [],
		}
		this.api = new MarvApi();
	}

	componentDidMount() {
		this.api.getComics().then(comics =>{
			this.setState({loading:false, comics})
		})
	}
	componentWillUnmount(){

	}

	render(){
		const {error,loading,comics} = this.state
		return(
				<div>
				<main role="main">
				    <div className="py-5 bg-light">
				        <div className="container">
				        <h2>Comics </h2>
				        {/*Botones filtro*/}
				        <form className="form-inline my-2 my-md-0" action="">
				        	<select className="form-control"> 
				        		<option>Año</option>
				        	</select>
				        	<select className="form-control">
				        		<option>Ordenado por</option>
				        	</select>
				        	<select className="form-control">
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
			            
				        </div>
				    </div>
				</main>
			</div>
			)
	}
}
export default Comics;