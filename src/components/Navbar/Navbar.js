import React from 'react';
import '../../App.css';
import { NavLink } from 'react-router-dom';
// import SearchBox from './SearchBox'
const Navbar = () => {
		return (
					<div className='container'>
						<nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top" style={{fontFamily: 'Marvel'}}>
								<div className="collapse navbar-collapse" id="">
									<ul className="navbar-nav nav-fill w-100" >
										<li className="nav-item active"><NavLink className="nav-link" to='/' exact style={{fontSize:"35px"}} activeStyle={{color:'lightblue',fontWeight: 'bold',fontSize:'37px'}}>Home</NavLink></li>
										<li className="nav-item active"><NavLink className="nav-link" to='/comics' style={{fontSize:"35px"}} activeStyle={{color:'red',fontWeight: 'bold',fontSize:'37px'}}>Comics</NavLink></li>
										<li className="nav-item active"><NavLink className="nav-link" to='/characters' style={{fontSize:"35px"}} activeStyle={{color:'blue',fontWeight: 'bold',fontSize:'37px'}}>Characters</NavLink></li>
										<li className="nav-item active"><NavLink className="nav-link" to='/MiLista' style={{fontSize:"35px"}} activeStyle={{color:'lightblue',fontWeight: 'bold',fontSize:'37px'}}>My List</NavLink></li>
									</ul>
								</div>
						{/*<SearchBox />*/}
						</nav>
						<br></br>
					</div>
				)
	}

export default Navbar;