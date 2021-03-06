import React, { Component } from 'react'
import ItemsList from '../stateless/ItemsList.js'
import { NavLink } from 'react-router-dom'
import loadingImage from './images/loading.gif'
import '../../../src/style.css'
import Background from './images/marv1.png'

const stylerx = {
  // backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
}


class Home extends Component {

  componentDidMount() {
    const { loadHomeData } = this.props
    loadHomeData()
  }
  
  componentWillUnmount() {
    this.setState({
      error: false
    })
  }
  render () {
    const { loading, comics, characters } = this.props
    return (  
      <div>
        <main role="main"  >
          <div className="py-5 bg-light" >
            <div className="container" >
              <section className="items-section" style={stylerx} >
                <h5 className="title" style={{color:'red',fontSize:'30px', fontFamily: 'Marvel'}}>Hot Comics <NavLink to="/comics">View all</NavLink></h5>
                <hr />
                <div className="items-section-body">
                  {loading && <img  alt="loading" src={loadingImage} width={ 200 }/>}
                  <div className="row">
                    <ItemsList listadoResultados={comics} type="comic" />
                  </div>
                </div>
              </section>
              <section className="items-section">
                  <h5 className="items-section-title" style={{color:'blue',fontSize:'30px'}}>Hot Characters <NavLink to="/characters">View all</NavLink></h5>
                  <div className="items-section-body">
                    {loading && <img alt="loading" src="https://i.imgur.com/EH9HF6h.gif" width={ 200 }/>}
                    <div className="row">
                      <ItemsList listadoResultados={characters} type="characters" />
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
