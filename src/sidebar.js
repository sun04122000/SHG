import Nav from 'react-bootstrap/Nav'
import { useState } from 'react';
import { FaBars,FaTshirt,FaHamburger } from "react-icons/fa";
import {GiSewingNeedle,GiBroom,GiIncense} from "react-icons/gi"
import {Row,Col,Container,Navbar} from 'react-bootstrap';
export const Sidebar = () =>{
    
   const [showNavBar,setShowNavBar] = useState(false);
    return(
     
        <Navbar  variant="dark" className='sidenavBar'>
    
        <Nav className={showNavBar? "flex-column":"me-auto"}>
          <Nav.Link href="/eatables" style={{color:'black'}} className={showNavBar? "sidenavLink":"sidenavLink"}>< FaHamburger className='icon-style'/><br/>EATABLES</Nav.Link>
          <Nav.Link href="/handicrafts" style={{color:'black'}} className={showNavBar? "sidenavLink":"sidenavLink"}><GiSewingNeedle className='icon-style'/><br/>HANDICRAFTS</Nav.Link>
          <Nav.Link href="/fashion" style={{color:'black'}} className={showNavBar? "sidesidenavLink":"sidenavLink"}> <FaTshirt className='icon-style'/><br/>FASHION</Nav.Link>
          <Nav.Link href="/sanitationproducts" style={{color:'black'}} className={showNavBar? "sidenavLink":"sidenavLink"}><GiBroom className='icon-style'/><br/>SANITATION</Nav.Link>
          <Nav.Link href="/sanitationproducts" style={{color:'black'}} className={showNavBar? "sidenavLink":"sidenavLink"}><GiIncense className='icon-style'/><br/>OTHERS</Nav.Link>
        </Nav>
      
        </Navbar>
       
    );
}