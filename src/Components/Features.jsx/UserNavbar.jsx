import React from "react";
import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const UserNavbar = () => {
    return (
        <main>
            <Navbar expand="md" bg="dark" className="position-fixed top-0 w-100" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">V-Hotal</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <li href="#home"><Link className="nav-link active" to={'/user/home'}>Home</Link></li>
                    <li href="#home"><Link className="nav-link active" to={'/user/restaurant'}>Restaurant</Link></li>
                    <li href="#home"><Link className="nav-link active" to={'/user/laundary'}>Laundary</Link></li>
                    <li href="#home"><Link className="nav-link active" to={'/user/game'}>Games</Link></li>
                    <li href="#home"><Link className="nav-link active" to={'/user/bill'}>Bill</Link></li>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <Outlet />
        </main>
    )
}
