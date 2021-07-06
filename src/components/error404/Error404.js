import React from 'react';
import ReactDOM from 'react-dom';
import './Error404.css';
import img404 from '../../assets/img/error404.jpg';


function Error404(){
    return(
        <div className="error404">
            <div className="error-texto">
                <h1>Oops!</h1>
                <h2>Error 404</h2>
                <h3 className="error-adv">We can't seem to find the page you're looking for</h3>
            </div>
               
            <div className="error-img">
            <img src={img404} alt="Oops, not found"/>
            </div>
        </div>
    );
}
export default Error404;
