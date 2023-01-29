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
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
// import Register from './register';
// import Login from './login';
import MainFashion from './fashion';
function Market(){
  return(
    <> 
   
    <Router basename='/SHG'>
      <Routes>
      
      <Route  exact path='/SHG' element={<Shop/>}></Route>
      <Route  exact path='/SHG/fashion' element={<MainFashion/>}></Route>
      <Route   path='/SHG/eatables' element={<Eatables/>}></Route>

      <Route   path='/SHG/handicrafts' element={<Handicrafts/>}></Route>

      <Route   path='/SHG/sanitationproducts' element={<SanitationProducts/>}></Route>
      
      <Route  path='/SHG/aboutus' element={<Aboutus/>} ></Route>
      
      <Route  path='/SHG/collaborate' element={<Collaborate/>} ></Route>
      
      <Route  path='/SHG/currentsellers' element={<CurrentSellers/>} ></Route>
      <Route  path='/SHG/contact' element={<Contactus/>} ></Route>
      
      </Routes>
    </Router>
    </>
  );
}
ReactDOM.render(
  <Market/>,document.getElementById('root')
);

