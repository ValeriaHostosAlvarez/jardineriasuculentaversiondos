import React from 'react';
import ReactDOM from 'react-dom';
import './Bottomindex.css';

function Bottomindex(){
    return(
        <div>
            <div id="bottom" className="grid-containerbottom">
                <div className="grid-item-bottom"><h4>Nuestra tienda</h4><h6>Calle 85 Bis # 94 F 20</h6><h6>Celular: 3209569740</h6><h6>jardineriasuculenta1@gmail.com</h6></div>
                <div className="grid-item-bottom"><h4>Horario de Atención</h4><h6>Lunes a Viernes </h6><h6>8:00 a.m - 6:00 p.m</h6></div>
                <div className="grid-item-bottom" classNameName="redes"><h4 id="color-tituloredessociales">Redes Sociales</h4>
                <div>
                <a title="Facebook" href="https://www.facebook.com/jardineriasuculenta" target="_blank"><i className="fab fa-facebook"></i></a>
                                
                                <a title="Instagram" href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fjardineriasuculenta%2F%3Ffbclid%3DIwAR1J-KFPf1O0X_YrG7LraZiI9Cfjy1-Go66UW4_Sv_QyxQLdnxdB66kOT7w&h=AT1PHwBTq9E7nFZnSx2UrgRjL1Z_EOfeF8ZPhbG1L4R88sV448LdcTA9cWlFku3n46zeoD0hCfBZzgP_gUtIFK2OySJeqMgZQAhYdbFdpRqbNkcl3K5oz--Zry188Dn5lKQmgJ2LCqohTLWyowTXKg" target="_blank"><i className="fab fa-instagram"></i></a>
                
                                <a title="WhatsApp" href="https://api.whatsapp.com/send/?phone=573209560740&text&app_absent=0" target="_blank"><i className="fab fa-whatsapp"></i></a>
                </div>
               
                </div>					
            </div>
        </div>
    );
}
export default Bottomindex;