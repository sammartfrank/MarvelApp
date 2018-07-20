import React, {Component} from 'react';
import ItemsList from './ItemsList.js';
import Filtros from './Filtros.js';
import '../App.css';
import MarvApi from './services/MarvApi.js'

class Characters extends Component {
	constructor(props) {
		super(props)
		this.state = {
			error: '',
			loading:true,
			characters: [],
			page:1
		}
		this.api = new MarvApi();
	}
	componentDidMount(){
		this.api.getCharacters().then(res=>{
			this.setState({
				loading:false,
				characters: [...this.state.characters, ...res],

			})
		})
		window.addEventListener('scroll', this.handleScroll);
	}
	handleScroll = (event) => {
		const {page} = this.state
	    const estaAbajo = document.body.scrollHeight === window.scrollY + window.innerHeight;
	    if(estaAbajo) {	
			this.api.getCharacters(page).then(res => {
				this.setState({
					loading:false, 
					characters: [...this.state.characters, ...res],
					page: this.state.page+1
				})
			})

	    }
	}
	render(){
		const {loading,characters} = this.state
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
				                    {loading && <img src="https://i.imgur.com/EH9HF6h.gif" width={200}/>}
				                    	<div className="row">
				                   			 <ItemsList listadoResultados={characters} />
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
export default Characters;