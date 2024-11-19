import React from "react";
import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavbarLogin = () => {
    return (
        <main>
            <Navbar expand="md" bg="dark" className="NavBar position-fixed top-0 w-100" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">V-Hotal</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <li href="#home"><Link className="nav-link active" to={'/'}>User</Link></li>
                    <li href="#home"><Link className="nav-link active" to={'/admin'}>Admin</Link></li>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <Outlet />
        </main>
    )
}
