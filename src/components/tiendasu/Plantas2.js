import './Plantas.css'
import React from "react";



function Plantas2(props) {
    return (
      
      <div className="card">

      <img src={props.imageplant} className="img-fluid" alt="..." />

      <div className="card-body">
       <h6 className="card-title"> {props.titulo} </h6>
        <button id="pare1" className=" btn btn-primary" type="button">Detalles</button>
      </div>
    </div>
    
          
    );
  }
  
  export default Plantas2;