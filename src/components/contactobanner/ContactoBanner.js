import React from 'react';
import ReactDOM from 'react-dom';
import './ContactoBanner.css';
import Banner from '../../assets/img/888.png';


function ContactoBanner(){
    return(
            <div id="banner">
				
				<img src={Banner} alt="bannercontacto"/>

			</div>
    );
}
export default ContactoBanner;