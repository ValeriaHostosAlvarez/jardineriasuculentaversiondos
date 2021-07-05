import vende from './vende1.jpg';
import './Plantas.css';
import React from "react";



function Politicas() {
  return (
    
    
          <div className="container-fluid" id="politi">
             
             <div>
             <img src={vende}  alt="logo" /> 
                      <h2>Quieres conocer mas acerca de las politicas de nuestra tienda?</h2>
                      <div id="botonci">
                         <a href="#" className="cta" data-bs-target="#polys" data-bs-toggle="modal">
                            <span>Click me</span>
                            <svg width="13px" height="10px" viewBox="0 0 13 10">
                             <path d="M1,5 L11,5"></path>
                             <polyline points="8 1 12 5 8 9"></polyline>
                           </svg>
                         </a>
                      </div>   
                     
                  </div>
                 
                  
          </div>
              
  );
}

export default Politicas;