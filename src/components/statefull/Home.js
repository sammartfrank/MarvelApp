import React, { Component } from 'react';
import ItemsList from '../stateless/ItemsList.js';
import { NavLink } from 'react-router-dom';
import Comics from './Comics.js';

class Home extends Component {

  componentDidMount() {
    const { loadHomeData } = this.props
    loadHomeData()
    window.addEventListener('scroll', this.handleScroll)
  }
  // handleScroll = (event) => {
  //  const {page} = this.state
  //     const estaAbajo = document.body.scrollHeight === window.scrollY + window.innerHeight;

  //     if(estaAbajo) {  
  //    this.api.getCharacters(page).then(res => {
  //      this.setState({
  //        loading:false, 
  //        characters: [...this.state.characters, ...res],
  //        page: this.state.page+1
  //      })
  //    })

  //     }
 //   }
  componentWillUnmount(){
    window.removeEventListener( 'scroll', this.handleScroll )
  }
  render () {
    const { loading, comics, characters } = this.props
    return (  
      <div>
        <main role="main">
          <div className="py-5 bg-light">
            <div className="container">
              <section className="items-section">
                <h5 className="items-section-title">Hot Comics <NavLink to="/comics">View all</NavLink></h5>

                <div className="items-section-body">
                  { loading && <img src="https://i.imgur.com/EH9HF6h.gif" width={200}/> }
                  <div className="row">
                     <ItemsList listadoResultados={ comics } />
                  </div>
                </div>
              </section>
              <section className="items-section">
                  <h5 className="items-section-title">Hot Characters <NavLink to="/characters">View all</NavLink></h5>
                  <div className="items-section-body">
                    { loading && <img src="https://i.imgur.com/EH9HF6h.gif" width={200}/> }
                      <div className="row">
                        <ItemsList listadoResultados={ characters } />
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

export default Home
