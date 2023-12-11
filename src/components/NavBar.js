import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";

const NavBar = ({ updateSearch, getSearch }) => {
  return (
    <Navbar
      className="mb-1 "
      expand="md"
      sticky="top"
      style={{ background: "rgba(143, 143, 143, 0.2)" }}
    >
      <div className="container">
        <Navbar.Brand href="/">Movie Finder</Navbar.Brand>
        <img width="50" src="icon.svg" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto"></Nav>

          <Form onSubmit={getSearch} inline>
            <FormControl
              onChange={updateSearch}
              type="text"
              placeholder="Movie Name"
              className="mr-2 mb-1"
              size="sm"
            />
            <Button onClick={getSearch} variant="info" size="md">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
