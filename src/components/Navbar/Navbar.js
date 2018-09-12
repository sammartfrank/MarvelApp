import React from 'react';
import '../../App.css';
import { NavLink } from 'react-router-dom';
import SearchBox from './SearchBox'
const Navbar = () => {
		return (
					<div className='container'>
						<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
								<div className="collapse navbar-collapse" id="">
									<ul className="navbar-nav mr-auto" >
										<li className="nav-item active"><NavLink className="nav-link" to='/' exact activeStyle={{color:'lightblue',fontWeight: 'bold',fontSize:'18px'}}>Home</NavLink></li>
										<li className="nav-item active"><NavLink className="nav-link" to='/comics' activeStyle={{color:'lightblue',fontWeight: 'bold',fontSize:'18px'}}>Comics</NavLink></li>
										<li className="nav-item active"><NavLink className="nav-link" to='/characters' activeStyle={{color:'lightblue',fontWeight: 'bold',fontSize:'18px'}}>Characters</NavLink></li>
										<li className="nav-item active"><NavLink className="nav-link" to='/MiLista' activeStyle={{color:'lightblue',fontWeight: 'bold',fontSize:'18px'}}>My List</NavLink></li>
									</ul>
								</div>
						<SearchBox />
						</nav>
						<br></br>
					</div>
				)
	}

export default Navbar;