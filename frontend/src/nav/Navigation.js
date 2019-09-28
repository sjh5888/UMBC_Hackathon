import React from 'react';
import {
  Navbar,
  Nav
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand as={Link} to="/" >
        Home
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/user">Profile</Nav.Link>
          <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
          <Nav.Link as={Link} to="/hackathon">Hackathon</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default Navigation;
