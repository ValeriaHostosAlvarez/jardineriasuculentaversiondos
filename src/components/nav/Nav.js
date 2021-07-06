import './Nav.css';
import Modalcarritoindex from '../modalcarritoindex/Modalcarritoindex';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


function Nav() {
  return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">                                         
            <div className="collapse navbar-collapse" id="navbarText">
                <div className="paranav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link to="/" className="nav-link active">Inicio</Link>
                        </li>
                        <li className="nav-item">
                         <Link to="/quienessomos" className="nav-link active" aria-current="page">Nosotros</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/tienda" className="nav-link active" aria-current="page">Tienda</Link>
                        </li>
                        <li className="nav-item">
                     <Link to="/contacto" className="nav-link active" aria-current="page">Contáctenos</Link>
                        </li>
                    </ul>                   
                </div>
            </div>

            <div>
                <ul className="iconos">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Buscar" />
                        <button id="botonbuscar" type="submit"><li title="Buscar"><i className="fas fa-search"></i></li></button>
                    </form>
                    
                    <li title="Carrito de compras" data-bs-target="#carritotienda" data-bs-toggle="modal"><i className="fas fa-cart-arrow-down" ></i></li>
                    <li title="Log In"> <a href="iniciodesesion.html"><i className="fas fa-user"></i></a></li>
                </ul>	
            </div>	 	        
        </nav> 
      
        
  );
};

export default Nav;
