import React from 'react';
import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

const NavBar = ( {updateSearch, getSearch} ) => {


  return (
    <Navbar className="fixed-top mb-1" bg="dark" expand="md">
      <Navbar.Brand href="#home">Movie Finder</Navbar.Brand>
      <img width="100" src="icon.svg"/>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="mr-auto">
        </Nav>

        <Form onSubmit={getSearch} inline>
          <FormControl  onChange={updateSearch} type="text" placeholder="Search" className="mr-sm-2" />
          <Button onClick={getSearch} variant="outline-primary">Search</Button>
        </Form>
        
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;