import React, {Component} from 'react';
import ItemsList from './ItemsList.js';
import {NavLink} from 'react-router-dom';
import Comics from './Comics.js';
import MarvApi from './services/MarvApi.js';


class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: '',
			loading: true,
			comics: [],
			characters: [],
			page: 1
		}
		this.api = new MarvApi();
	}

	componentDidMount() {
		this.api.getComics().then(res => {
			//console.log(res)
			this.setState({
				loading:false, 
				comics: [...this.state.comics, ...res]
			})
		})		
		this.api.getCharacters().then(res => {
			this.setState({
				loading:false, 
				characters: [...this.state.characters, ...res]
			})
		})
		window.addEventListener('scroll', this.handleScroll)
	}

	handleScroll = (event) => {
		const {page} = this.state
	    const estaAbajo = document.body.scrollHeight === window.scrollY + window.innerHeight;

	    if(estaAbajo) {	
			this.api.getCharacters(page).then(res => {
				this.setState({
					loading:false, 
					characters: [...this.state.characters, ...res],
				})
			})

	    }
  	}

	componentWillUnmount(){
		window.removeEventListener('scroll', this.handleScroll)
	}


	render(){
		const {loading,comics,characters} = this.state
		return (  
			<div>
				<main role="main">
				    <div className="py-5 bg-light">
				        <div className="container">
				            <section className="items-section">
				                <div className="items-section-body">
				                    {loading && <img src="https://i.imgur.com/EH9HF6h.gif" width={200}/>}
					                    <div className="row">
					                   		 <ItemsList listadoResultados={comics} />
					                    </div>
				                </div>
				            </section>
				            <section className="items-section">
				                <h5 className="items-section-title">Personajes más Populares <NavLink to="/characters">Ver todas</NavLink></h5>
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
export default Home;