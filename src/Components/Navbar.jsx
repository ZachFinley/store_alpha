import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LinkContainer } from 'react-router-bootstrap';

const NavbarComponent = ({ user, onSignIn, onSignUp, onSignOut }) => {
    
    return (
        <div>
        <Navbar bg="info" expand="lg" sticky="top">
            <Container>
                
                <LinkContainer to="/">
                    <Navbar.Brand>Grocery Store</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/products">
                            <Nav.Link>Products</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/cart">
                            <Nav.Link>Shopping Cart</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/checkout">
                            <Nav.Link>Checkout</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/admin">
                            <Nav.Link>Admin</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    {!user ? (
                        <>
                        <Button variant="outline-light" onClick={onSignIn}>Sign In</Button>
                        <Button variant="outline-light" onClick={onSignUp} className="ml-2">Sign Up</Button>
                        </>
                    ) : (
                        <Button variant="outline-light" onClick={onSignOut}>Sign Out</Button>
                    )}

                </Navbar.Collapse>
            </Container>
        </Navbar>
        
      </div>
    );
};
export default NavbarComponent;