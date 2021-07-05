import './Secciondosindex.css'
import React from "react";

function Dos (props){
    return(
        <div className="card-fotos-secciondos" >
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                 <h5 className="card-title">{props.titulo}</h5>
                 <p className="card-text">{props.texto}</p>
             </div>
        </div>
    );
}
export default Dos;