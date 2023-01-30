import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Container, Button} from 'react-bootstrap';
import { FaBars } from "react-icons/fa";
import './index.css';
import { useState } from 'react';


export const Navigationbar = () =>{
   const [showNavBar,setShowNavBar] = useState(false);
    return(
    
      <div className="top-nav">
      <Navbar >
        <Container className='navBar'>
        <Nav className={showNavBar? "flex-column":"me-auto"}>
        <Nav.Link href="#" style= {{color:'white'}} className="navButton">SHG-CONNECT</Nav.Link>
        <Nav.Link href="#" style={{color:'white'}} className={showNavBar? "faBar mobileFaBar":"faBar"} onClick={()=>{setShowNavBar(!showNavBar);}}><FaBars/></Nav.Link>
          <Nav.Link href="#/" style={{color:'white'}} className={showNavBar? "navLink mobileNavLink flex-column":"navLink"}>SHOP</Nav.Link>
          <Nav.Link href="#/aboutus/" style={{color:'white'}} className={showNavBar? "navLink mobileNavLink flex-column":"navLink"}>ABOUT-US</Nav.Link>
          <Nav.Link href="#/currentsellers/" style={{color:'white'}} className={showNavBar? "navLink mobileNavLink flex-column":"navLink"}>CURRENT-SELLERS</Nav.Link>
          <Nav.Link href="#/collaborate/" style={{color:'white'}} className={showNavBar? "navLink mobileNavLink":"navLink"}>COLLABORATE</Nav.Link>
          <Nav.Link href="#/contact/" style={{color:'white'}} className={showNavBar? "navLink mobileNavLink":"navLink"}>CONTACT-US</Nav.Link>
        </Nav>
        {/*<Nav.Link href="#"><User/></Nav.Link>*/}
        </Container>
      </Navbar> 
      </div>
    );
}