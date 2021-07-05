import './Secciondosindex.css';
import img1 from '../../assets/img/bottom1.png';
import img2 from '../../assets/img/bottom5.jpg';
import img3 from '../../assets/img/bottom3.png';

function Secciondosindex(props){
    return (
        
        
			<div id="seccionmedia-fotos">
                <div className="card-header">
                     <h1>¿Cómo puedes comprar?</h1>
                 </div>

                <div classNameName="card-group" id="fotos-secciondos">
                  <div className="card-fotos-secciondos">
                    <img src={img1} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Paso 1: Regístrate</h5>
                      <p className="card-text">Ingresa en nuestro botón de inicio de sesión y registrate para poder comprar.</p>
                    </div>
                  </div>

                  <div className="card-fotos-secciondos">
                    <img src={img2} className="card-img-top" alt="..." id="segundafoto" />
                    <div className="card-body">
                      <h5 className="card-title">Paso 2: Compra</h5>
                      <p className="card-text">Visita nuestro botón de carrito de compras y elige la cantidad de productos que deseas, paga en cualquiera de nuestros canales disponibles.</p>
                    </div>
                  </div>

                  <div className="card-fotos-secciondos">
                    <img src={img3} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Paso 3: Tiempos de entrega</h5>
                      <p className="card-text">Sí vives en Bogotá, la entrega se hará entre 2 a 3 días, luego de tu pedido.</p>
                    </div>
                  </div>

                </div>

            </div>
        
    );
}
export default Secciondosindex;