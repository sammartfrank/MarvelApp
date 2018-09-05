 import React, { Component } from 'react'
import './App.css'
import Home from './containers/HomeContainer'
import Comics from './components/statefull/Comics.js'
import Characters from './components/statefull/Characters.js'
import MiLista from './containers/MiListaContainer.js'
import Detalle from './containers/DetalleContainer.js'
import NotFound from './components/stateless/NotFound.js'
import Navbar from './components/Navbar/Navbar.js'
import Footer from './components/footer/Footer.js'
import MarvelApi   from './services/MarvelApi.js'

import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Navbar />
        <br></br>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/comics" component={Comics} />
            <Route path="/characters" component={Characters} />
            <Route path="/milista" component={MiLista} />
            <Route path="/detalle/:type/:id" component={Detalle} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    )
  }
}

const selectLoading = state => state.loading

const mapStateToProps = state => ({
  comics: state.comics,
  characters: state.characters,
  loading: selectLoading( state )
})

const mapDispatchToProps = dispatch => ({
  loadComics: () => {
    dispatch( { type: 'TURN_ON_LOADER' } )
    MarvelApi.getComics().then( comics => {
      dispatch( { type:'GET_COMICS', comics } )
      dispatch( { type: 'TURN_OFF_LOADER' } )
    })
  }
})

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) )
