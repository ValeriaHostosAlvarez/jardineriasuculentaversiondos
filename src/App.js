import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Footerindex from './components/footerindex/Footerindex';
import Inicio from './pages/Index';
import Quienessomos from './pages/Quienessomos';
import Tienda from './pages/Tienda';
import Contacto from './pages/Contacto';
import Error404 from './components/error404/Error404';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


function App() {
  return (

    <div className="container">
        <Router>
          <Header />
          <Nav/>

            <Switch>
            
              <Route exact path="/" component={Inicio}></Route>
              <Route exact path="/quienessomos" component={Quienessomos}></Route>
              <Route exact path="/tienda" component={Tienda}></Route>
              <Route path="/tienda" component={Tienda}></Route>
              <Route path="/contacto" component={Contacto}></Route>
              <Route path="*" component={Error404}></Route>
        
            </Switch>
           <Footerindex/>
        </Router>
    </div>    
  );
}

export default App;


