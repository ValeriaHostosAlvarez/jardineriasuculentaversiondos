import React from 'react';
import ReactDOM from 'react-dom';
import './Index.css';
import Carruselindex from '../components/carruselindex/Carruselindex';
import Seccionunoindex from '../components/seccionunoindex/Seccionunoindex';
import Secciondosindex from '../components/secciondosindex/Secciondosindex';
import Bottomindex from '../components/bottomindex/Bottomindex';

function Inicio(){
    return(
        <div>
            <Carruselindex/>
            <Seccionunoindex/>
            <Secciondosindex/>
            <Bottomindex />
            
        </div>
    );
}
export default Inicio;