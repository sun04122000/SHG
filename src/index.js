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
    <Router>
      <Routes>
      
      {/* <Route  exact path='/' element={<Register/>}></Route> */}
      {/* <Route  path='/login' element={<Login/>}></Route> */}
      <Route  exact path='/SHG/' element={<Shop/>}></Route>
      {/* <Route  exact path='/shop' element={<Shop/>}></Route> */}
      <Route  exact path='/fashion' element={<MainFashion/>}></Route>
      <Route   path='/eatables' element={<Eatables/>}></Route>

      <Route   path='/handicrafts' element={<Handicrafts/>}></Route>

      <Route   path='/sanitationproducts' element={<SanitationProducts/>}></Route>
      
      <Route  path='/aboutus' element={<Aboutus/>} ></Route>
      
      <Route  path='/collaborate' element={<Collaborate/>} ></Route>
      
      <Route  path='/currentsellers' element={<CurrentSellers/>} ></Route>
      <Route  path='/contact' element={<Contactus/>} ></Route>
      </Routes>
    </Router>
    </>
  );
}
ReactDOM.render(
  <Market/>,document.getElementById('root')
);

