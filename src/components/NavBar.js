import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../images/logo.png"

const NavBar = () => {
  return ( 
    
    <Navbar className="position-static" collapseOnSelect expand="lg" bg="secondary" variant="dark">
      <Container>
        <Navbar.Brand href="/"><img width="100px" src={logo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="rooms">ROOMS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
  
  )
}

export default NavBar