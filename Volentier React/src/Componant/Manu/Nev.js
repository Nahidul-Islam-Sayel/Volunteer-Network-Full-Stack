import React from 'react';
import { Container, Navbar, Offcanvas , Nav , NavDropdown , Form , FormControl , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Nev.css'
const Nev = () => {
    return (
    
      <Navbar bg="none" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"> <img src="https://i.imgur.com/jvXfGwT.png" className="xyzz"/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <Link to="/"><Nav.Link href="#action1">Home</Nav.Link></Link> 
            <Nav.Link href="#action2">Donation</Nav.Link>
            <Nav.Link href="#action1">Events</Nav.Link>
            <Nav.Link href="#action2">Blog</Nav.Link>
         <Link to="/login"><Button variant="outline-success">Register</Button></Link>   
        <Link to="/admin"><Button variant="outline-success">Admin</Button></Link>         
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
       
    );
};

export default Nev;