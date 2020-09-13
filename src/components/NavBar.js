import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown} from 'react-bootstrap'

const NavBar = ( {updateSearch, getSearch} ) => {


  return (
    <Navbar className="mb-1" bg="light" expand="md" sticky="top">
      <Navbar.Brand href="/">Movie Finder</Navbar.Brand>
      <img width="50" src="icon.svg"/>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown title="Profile" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/">Favourites</NavDropdown.Item>
          <NavDropdown.Item href="/">Friend List</NavDropdown.Item>
          <NavDropdown.Item href="/">Pairing Game</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/">Settings</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="m-auto" href="/login">Login</Nav.Link>
          <Nav.Link className="m-auto" href="/login">Signin</Nav.Link>
        </Nav>
        
        <Form onSubmit={getSearch} inline>
        <FormControl  onChange={updateSearch} type="text" placeholder="Movie Name" className="mr-2 mb-1" size="sm"/>
        <Button onClick={getSearch} variant="info" size="md">Search</Button>
        </Form>
      </Navbar.Collapse>
        
    </Navbar>
  );
}

export default NavBar;