import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Comics from './components/Comics.js';
import Characters from './components/Characters.js';
import MiLista from './components/MiLista.js';
import Detalle from './components/Detalle.js';
import NotFound from './components/NotFound.js';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer.js';
import MarvApi from './components/services/MarvApi.js';

import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="container">
              
              <Navbar />

              <Switch>
                <Route exact path="/" component={Home} />
                <Route  path="/comics" component={Comics} />
                <Route  path="/characters" component={Characters} />
                <Route  path="/milista" component={MiLista} />
                <Route  path="/detalle/comic/:id" component={() => <Detalle type="comic"/>} />
                <Route  path="/detalle/character/:id" component={() =><Detalle type="character" />} />
                <Route component={NotFound}/>
              </Switch>
          </div>
          <div className="footer">
              <Footer />
          </div>
      </div>
    );
  }
}


const selectLoading = state => state.loading

const mapStateToProps = state => ({
  comics: state.comics,
  characters: state.characters,
  loading: selectLoading(state)
})
const mapDispatchToProps = dispatch => ({
  loadComics: () => {
    dispatch({type: 'TURN_ON_LOADER'})
    MarvApi.getComics().then(comics=>{
      dispatch({type:'GET_COMICS',comics})
      dispatch({type: 'TURN_OFF_LOADER'})
    })
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
