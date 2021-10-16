import React from 'react';
import './Header.css'
import logo from '../../../image/logo2.png'
import cart from '../../../image/ICON/cart.png'
import { Container, Navbar, Button, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="header">
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        height="45"
                        className="d-inline-block align-top m-3"
                        alt="React Bootstrap logo"
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <img className="me-3" height="20" src={cart} alt="" />
                    <Nav.Link>Login</Nav.Link>
                    <Button className="ms-3 fw-bold rounded-pill" variant="outline-info">Sign Up</Button>
                    <Navbar.Text>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
             </Navbar>
        </div>
    );
};

export default Header;