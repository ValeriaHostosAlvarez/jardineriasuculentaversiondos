import React from 'react';
import ReactDOM from 'react-dom';
import './ContactoFormulario.css';


function ContactoFormulario(){
    return(	
    	<div>

         <form id="formu_contacto" action="" className="form-box"  autocomplete="off" animated slideInUp>
					
				<div className="mahi_holder">
    				<div className="container">
      					<div className="row bg_1">
        					<div className="titnormal">
        						<h1> <center>Formulario</center> </h1>
    						</div> 

       						<div id="campoNom" className="col-3 input-effect">
          						<input className="effect-16" type="text" placeholder="" required="required" name="nombre" id="nombre"/>
            					<label>Nombres completos </label>
            					<span className="focus-border"/>
          						<div className="feedback"></div>
	   						</div>


        					<div id="campoApe" className="col-3 input-effect">
          						<input className="effect-16" type="text" placeholder="" required="required" name="apellido" id="apellido"/>
            					<label>Apellidos completos </label>
            					<span className="focus-border"/>
							</div> 


       						 <div id="campoCorreo" className="col-3 input-effect">
          						<input className="effect-16" type="text" placeholder="" required="required" name="correo" id="correo"/>
            					<label>correo electrónico </label>
            					<span className="focus-border"/>

        					</div>
        
        					<div id="campoCelu" className="col-3 input-effect">
          						<input className="effect-16" type="number" placeholder="" required="required" name="celu" id="celu"/>
            					<label> Número de contacto </label>
            					<span className="focus-border"/>
        					</div>
  
  							<div id="boton_enviar" className="suscribirse">
								<button  type="submit">Enviar Datos</button>
							</div>	
						</div>
					</div>
				</div>
			</form>	

<br/>
			 <h3><p><center> Aquí podrás enviarnos tu mensaje </center></p></h3>

<br/>

		<button id="quieroenviar_mensaje" type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever=" ">Quiero enviar un mensaje</button>

<br/>

</div>

			
    );
}
export default ContactoFormulario;