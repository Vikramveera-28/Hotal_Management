import React from "react";
import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavbarLogin = ({navBar, logout}) => {
    return (
        <main>
            <Navbar expand="md" bg="dark" className="NavBar position-fixed top-0 w-100" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">V-Hotal</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    {navBar==='SignInNavbar' && (
                        <>
                            <li href="#home"><Link className="nav-link active" to={'/'}>Login</Link></li>
                            <li href="#home"><Link className="nav-link active" to={'/register'}>Register</Link></li>
                            <li href="#home"><Link className="nav-link active" to={'/adminLogin'}>Admin</Link></li>
                        </>
                    )}
                    {navBar==='userNavbar' && (
                        <>
                            <li href="#home"><Link className="nav-link active" to={'/user'}>Home</Link></li>
                            <li href="#home"><Link className="nav-link active" to={'/user/game'}>Games</Link></li>
                            <li href="#home"><Link className="nav-link active" to={'/user/restaurant'}>Restaurant</Link></li>
                            <li href="#home"><Link className="nav-link active" to={'/user/laundary'}>Laundary</Link></li>
                            <li href="#home"><Link className="nav-link active" to={'/user/bill'}>Bill</Link></li>
                            <li href="#home"><a className="nav-link active" onClick={logout} role="button">Log Out</a></li>
                        </>
                    )}
                    {navBar==='adminNavbar' && (
                        <>
                            <li href="#home"><Link className="nav-link active" to={'/admin/home'}>Home</Link></li>
                            <li href="#home"><Link className="nav-link active" to={'/admin/user'}>User</Link></li>
                            <li href="#home"><Link className="nav-link active" to={'/admin/game'}>Games</Link></li>
                            <li href="#home"><Link className="nav-link active" to={'/admin/restaurant'}>Restaurant</Link></li>
                            <li href="#home"><Link className="nav-link active" to={'/admin/laundary'}>Laundary</Link></li>
                            <li href="#home"><Link className="nav-link active" to={'/'}>Log Out</Link></li>
                        </>
                    )}
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <Outlet />
        </main>
    )
}
