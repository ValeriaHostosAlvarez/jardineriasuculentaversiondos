import logo from '../../assets/img/nuevologo.png';
import './Header.css';

function Header() {
  return (
      
  	<header>
          <div id="logo">
             <img src={logo} alt="Logo de jardineria suculenta"/>
          </div>
	 </header>

  );
};

export default Header;