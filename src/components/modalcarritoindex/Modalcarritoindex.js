import './Modalcarritoindex.css';
import logojardineria from '../../assets/img/nuevologo.png';

function Modalcarritoindex(){
    return(
        <div className="modalcar" tabIndex={-1} id="carritotiendanav" >
			<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable  modal-xl">
				 <div className="modal-content">
				 	<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				 	<img src={logojardineria}  alt="logo jardinería suculenta"/>
					<div className="modal-header">
						<h4 className="modal-title texto">Tu Carrito de Compras</h4>
					</div>
					<div className="modal-body">
						<p>Conoce nuestra tienda y llena tu carrito con nuestras maravillosas suculentas</p>				
						<button className=" btn btn-primary" type="button" ><a href="tienda1.html"><i className="fas fa-cart-arrow-down"></i>  Ver productos/tienda </a></button>
						<button className=" btn btn-primary" type="button" ><a href="index.html"><i className="fas fa-home"></i>   Volver al Home    </a></button>
						<button className=" btn btn-primary" type="button" ><a href="contacto.html"><i className="fas fa-envelope"></i> Envianos un mensaje </a></button>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
					</div>
				</div>
			</div>
		</div>
	
    );
}
export default Modalcarritoindex;