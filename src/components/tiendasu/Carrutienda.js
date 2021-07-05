import car2 from './car2.png'
import car3 from './car3.png'
import car4 from './car4.png'
import './Plantas.css'
import React from "react";



function Carrutienda() {
    return (
      
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
             <div class="carousel-item active">                                               
             <img src={car2}  alt="logo" />
                                                                              
             </div>

             <div class="carousel-item">
                        
             <img src={car3}  alt="logo" />
                 
                   
             </div>

             <div class="carousel-item" id="mace">
                       
                        <img src={car4}  alt="logo" />
                      
             </div>
      </div>
</div> 

          
    );
  }
  
  export default Carrutienda;