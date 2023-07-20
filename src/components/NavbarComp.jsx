import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './logoImg/Logo';
import './NavbarComp.css';


function NavbarComp() {
  return (
    <div>
        <Navbar expand="lg"  fixed="top"  className="bg-body-tertiary">
      <Container >
        <Logo/>
        <Navbar.Brand className='logo' href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav_act " >
            <Nav.Link  href="/" activeClassName='active_link'  >General</Nav.Link>
            <Nav.Link href="health">Health</Nav.Link>
            <Nav.Link href="entertainment">Entertainment</Nav.Link>
            <Nav.Link href="business">Business</Nav.Link>
            <Nav.Link href="science">Science</Nav.Link>
            <Nav.Link href="sports">Sports</Nav.Link>
            <Nav.Link href="technology">Technology</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarComp
