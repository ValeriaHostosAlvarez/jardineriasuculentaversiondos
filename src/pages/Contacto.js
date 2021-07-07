import React from 'react';
import ReactDOM from 'react-dom';
import './Contacto.css';
import ContactoBanner from '../components/contactobanner/ContactoBanner';
import ContactoParrafo from '../components/contactoparrafo/ContactoParrafo';
import ContactoFormulario from '../components/contactoformulario/ContactoFormulario';
import ContactoIframe from '../components/contactoiframe/ContactoIframe';
import ContactoRedes from '../components/contactoredes/ContactoRedes';

function Contacto(){
    return(
        <div>
            <ContactoBanner/>
            <ContactoParrafo/>
            <ContactoFormulario/>
            <ContactoIframe/>
            <ContactoRedes/>
            
        </div>
    );
}
export default Contacto;









