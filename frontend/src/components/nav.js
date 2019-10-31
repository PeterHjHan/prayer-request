import React, { Component, Fragment } from 'react';
import { Nav, Navbar, Form, Button, FormControl} from 'react-bootstrap';
import { useAuth0 } from '../react-auth0-spa';
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link><Link to="/">Home</Link></Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form> */}

      {!isAuthenticated && (
        <Button variant='outline-secondary' onClick={() => loginWithRedirect({})}>
          Log in
        </Button>
      )}

        { isAuthenticated && (
          <Fragment>
            <Link to="/profile"><Button variant='outline-primary'>Profile</Button></Link>
            <Button variant='outline-danger' onClick={() => logout()}>Log out</Button>
          </Fragment>
          )}
        {/* NEW - add a link to the home and profile pages */}

    </Navbar>
  )
}

export default NavBar