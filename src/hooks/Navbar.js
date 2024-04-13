import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
//navbar
function NavbarComponent() {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Insert Logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="">Products</Nav.Link>
            <Nav.Link href="">Shopping Cart</Nav.Link>
            <Nav.Link href="">Checkout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      
      </>
  );
}
export default NavbarComponent;