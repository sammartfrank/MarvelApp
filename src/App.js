import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Navbar/Home';
import Comics from './components/Navbar/Comics.js';
import Characters from './components/Navbar/Characters.js';
import MiLista from './components/Navbar/MiLista.js';
import Detalle from './components/Detalle.js';
import NotFound from './components/NotFound.js';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer.js';
import MarvApi from './components/services/MarvApi.js';

import {Switch, Route, Redirect} from 'react-router-dom';

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
                <Route  path="/detalle" component={Detalle} />
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

export default App;
