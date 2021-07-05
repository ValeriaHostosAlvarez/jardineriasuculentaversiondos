import React from 'react';
import ReactDOM from 'react-dom';
import './Index.css';
import Carruselindex from '../components/carruselindex/Carruselindex';
import Seccionunoindex from '../components/seccionunoindex/Seccionunoindex';
import Secciondosindex from '../components/secciondosindex/Secciondosindex';
import Bottomindex from '../components/bottomindex/Bottomindex';
import Footerindex from '../components/footerindex/Footerindex';

function Inicio(){
    return(
        <div>
            <Carruselindex/>
            <Seccionunoindex/>
            <Secciondosindex/>
            <Bottomindex />
            <Footerindex />
            
        </div>
    );
}
export default Inicio;