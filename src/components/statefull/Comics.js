import React, { Component } from 'react';
import ItemsList from '../stateless/ItemsList.js';
import MarvelApi from '../../services/MarvelApi.js';
import backg from './images/banner.jpg'

class Comics extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      error: '',
      loading: true,
      comics: [],
      page: 1
    }
    this.api = new MarvelApi();
  }

  componentDidMount() {
    this.api.getComics().then(comics => {
      this.setState({
        loading: false, 
        comics: comics
      })
    })
    window.addEventListener( 'scroll', this.handleScroll )
  }

  handleScroll = ( event ) => {
    const { page } = this.state
    const estaAbajo = document.body.scrollHeight === window.scrollY + window.innerHeight;
    if (estaAbajo) {  
    console.log('obtener')
      console.log( page )
      this.setState({
        loading: true
      })
      this.api.getComics(page + 1).then(comics => {
        this.setState(state => ({
          loading:false, 
          comics: [ ...state.comics, ...comics ],
          page: page + 1
        }))
      })
    }
  }



  componentWillUnmount() {
    window.removeEventListener( 'scroll', this.handleScroll )
  }
  render(){
    const { error, loading, comics } = this.state
    return(
        <div>
        <main role="main">
            <div className="py-5 bg-light">
                <div className="container">
                <h1 style={{ color:'white', fontSize: '50px', fontWeight:'bold', fontFamily: 'Marvel', backgroundImage:`url(${backg})`, backgroundRepeat: 'none', maxWidth:'100%', maxHeigth:'100%' }}>Comics </h1>
                    <br></br> 
                    <hr />
                    <section className="items-section">
                        <div className="items-section-body">
                        <div className="row">
                          <ItemsList listadoResultados={ comics } type="comics" />
                        </div>
                        { error && <div><span>An Error Ocurred</span></div>}
                        {loading && <img alt="loading" src="https://i.imgur.com/EH9HF6h.gif" width={190}/>}
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
