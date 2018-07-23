import React, {Component} from 'react';
import MyListAddButton from './MyListAddButton.js';
import MyListRemoveButton from './MyListRemoveButton.js';
import '../App.css';
import ComicsApi from './services/ComicsApi.js';
import CharactersApi from './services/CharactersApi.js';
import GridItem from './GridItem.js'


// pasarle por props toda la data dinamica

class Detalle extends Component {

    constructor(props){
        super(props);
        this.state = {
            type: props.type,
            detail: [],
            loading: false,
        }
        this.api = new ComicsApi()
    }

    componentDidMount(){

        if(this.state.type === "comic"){
            this.api.getComics().then(res =>{
                this.setState({
                    loading: false,
                    detail: [...this.state.detail, ...res]
                })
            })
        }else{
            this.api.getCharacter().then(res=> {
                this.setState({
                loading:false,
                detail:[this.state.detail, ...res],
            })
})
        }
    }

	render (){

		return (	
			<div className="container">
           	 <section className="detail-section">
                <div className="row">
                    <div className="jumbotron col-md-8">
                    <GridItem /> 
                    </div>
                </div>
             </section>
            </div>
			)
	}
}
export default Detalle;