
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar collapseOnSelect sticky="top" expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home" className="fs-3">Finance</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link href="home#services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link eventKey={2} as={Link} to="/login">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;