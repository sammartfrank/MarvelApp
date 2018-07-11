import React from 'react';
import '../../App.css';
import {NavLink} from 'react-router-dom';
import SearchBox from '../SearchBox.js'
const Navbar = () => {
		return (
					<div className='container'>
						<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
							<div className="container">
								 <div className="collapse navbar-collapse" id="navbarsExample07">
									<ul className="navbar-nav mr-auto" >
										<li className="nav-item active"><NavLink className="nav-link" to='/' exact activeStyle={{color:'grey',fontWeight: 'bold',fontSize:'18px'}}>Home</NavLink></li>
										<li className="nav-item active"><NavLink className="nav-link" to='/peliculas' activeStyle={{color:'grey',fontWeight: 'bold',fontSize:'18px'}}>Peliculas</NavLink></li>
										<li className="nav-item active"><NavLink className="nav-link" to='/series' activeStyle={{color:'grey',fontWeight: 'bold',fontSize:'18px'}}>Series</NavLink></li>
										<li className="nav-item active"><NavLink className="nav-link" to='/MiLista' activeStyle={{color:'grey',fontWeight: 'bold',fontSize:'18px'}}>Mi Lista</NavLink></li>
									</ul>
								</div>
							</div>
						</nav>
						<SearchBox />
					</div>
				)
	}

export default Navbar;

// <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div class="container">
//             <a class="navbar-brand" href="#">React Movie DB APP</a>
//             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
//                 <span class="navbar-toggler-icon"></span>
//             </button>

//             <div class="collapse navbar-collapse" id="navbarsExample07">
//                 <ul class="navbar-nav mr-auto">
//                     <li class="nav-item active">
//                         <a class="nav-link" href="index.html">Home</a>
//                     </li>
//                     <li class="nav-item">
//                         <a class="nav-link" href="peliculas-grid.html">Peliculas</a>
//                     </li>
//                     <li class="nav-item">
//                         <a class="nav-link" href="series-grid.html">Series</a>
//                     </li>
//                     <li class="nav-item">
//                         <a class="nav-link" href="mi-lista-grid.html">Mi Lista <span class="badge badge-danger">3</span></a>
//                     </li>
//                 </ul>
//                 <form class="form-inline my-2 my-md-0" action="busqueda-peliculas-grid.html">
//                     <input class="form-control" type="text" placeholder="Buscar Película o Serie" aria-label="Search">
//                 </form>
//             </div>
//         </div>
//     </nav>

// // <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
// //         <div class="container">
// //             <a class="navbar-brand" href="#">React Movie DB APP</a>
// //             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
// //                 <span class="navbar-toggler-icon"></span>
// //             </button>

// //             <div class="collapse navbar-collapse" id="navbarsExample07">
// //                 <ul class="navbar-nav mr-auto">
// //                     <li class="nav-item active">
// //                         <a class="nav-link" href="index.html">Home</a>
// //                     </li>
// //                     <li class="nav-item">
// //                         <a class="nav-link" href="peliculas-grid.html">Peliculas</a>
// //                     </li>
// //                     <li class="nav-item">
// //                         <a class="nav-link" href="series-grid.html">Series</a>
// //                     </li>
// //                     <li class="nav-item">
// //                         <a class="nav-link" href="mi-lista-grid.html">Mi Lista <span class="badge badge-danger">3</span></a>
// //                     </li>
// //                 </ul>
// //                 <form class="form-inline my-2 my-md-0" action="busqueda-peliculas-grid.html">
// //                     <input class="form-control" type="text" placeholder="Buscar Película o Serie" aria-label="Search">
// //                 </form>
// //             </div>
// //         </div>
// //     </nav>