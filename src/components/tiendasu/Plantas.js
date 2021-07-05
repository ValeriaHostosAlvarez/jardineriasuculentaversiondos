import './Plantas.css'
import React from "react";



function Plantas(props) {
    return (
      
      <div className="card">

      <img src={props.imageplant} className="img-fluid" alt="..." />

      <div className="card-body">
       <h6 className="card-title"> {props.titulo} </h6>
        <button className="btn btn-primary" type="button">Detalles</button>
      </div>
    </div>
    
          
    );
  }
  
  export default Plantas;