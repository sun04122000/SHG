import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Aboutus from './about-us';
import Collaborate from './collaborate';
import Shop from './shop';
import Eatables from './eatables';
import Handicrafts from './handicrafts';
import SanitationProducts from './sanitation-products';
import CurrentSellers from './current-sellers';
import Contactus from './contact-us';
import { HashRouter as Router, Routes,Route } from "react-router-dom";
// import Register from './register';
// import Login from './login';
import MainFashion from './fashion';
function Market(){
  return(
    <> 
   
    <Router basename='/SHG'>
      <Routes>
      
      <Route  exact path='/' element={<Shop/>} />
      <Route  path='/fashion' element={<MainFashion/>} />
      <Route   path='/eatables' element={<Eatables/>} />

      <Route   path='/handicrafts' element={<Handicrafts/>} />

      <Route   path='/sanitationproducts' element={<SanitationProducts/>} />
      
      <Route  path='/aboutus' element={<Aboutus/>} />
      
      <Route  path='/collaborate' element={<Collaborate/>} />
      
      <Route  path='/currentsellers' element={<CurrentSellers/>} />
      <Route  path='/contact' element={<Contactus/>} />
      
      </Routes>
    </Router>
    </>
  );
}
ReactDOM.render(
  <Market/>,document.getElementById('root')
);

