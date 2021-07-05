import './Tienda.css';
import Secplantas from '../components/tiendasu/Secplantas'
import Secplantas2 from '../components/tiendasu/Sec2plantas'
import Carrutienda from '../components/tiendasu/Carrutienda'
import Politicas from '../components/tiendasu/Politicas'
import React from "react";



function Tienda() {
    return (
      <div className="container">

      <Carrutienda />
      <Secplantas />
      <Secplantas2 />
      <Politicas />
      </div>
                
    );
  }
  
  export default Tienda;