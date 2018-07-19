import React from 'react';
import '../../App.css';
import {NavLink} from 'react-router-dom';
import SearchBox from '../SearchBox.js'
const Navbar = () => {
		return (
					<div className='container'>
						<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
								<div className="collapse navbar-collapse" id="navbarsExample07">
									<ul className="navbar-nav mr-auto" >
										<li className="nav-item active"><NavLink className="nav-link" to='/' exact activeStyle={{color:'grey',fontWeight: 'bold',fontSize:'18px'}}>Home</NavLink></li>
										<li className="nav-item active"><NavLink className="nav-link" to='/comics' activeStyle={{color:'grey',fontWeight: 'bold',fontSize:'18px'}}>Comics</NavLink></li>
										<li className="nav-item active"><NavLink className="nav-link" to='/characters' activeStyle={{color:'grey',fontWeight: 'bold',fontSize:'18px'}}>characters</NavLink></li>
										<li className="nav-item active"><NavLink className="nav-link" to='/MiLista' activeStyle={{color:'grey',fontWeight: 'bold',fontSize:'18px'}}>Mi Lista</NavLink></li>
									</ul>
								</div>
						</nav>
						<SearchBox />
					</div>
				)
	}

export default Navbar;