import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
    return (
        <main>
            <nav className="navbar navbar-expand-sm position-fixed top-0 w-100 navbar-dark bg-dark" aria-label="Fourth navbar example">
                <div className="container-fluid">
                <p className="navbar-brand">V-Hotal</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample04">
                    <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                        <li className="nav-item"><Link to={'/'} className="nav-link">User</Link></li>
                        <li className="nav-item"><Link to={'/admin'} className="nav-link">Admin</Link></li>
                    </ul>
                </div>
                </div>
            </nav>
            <Outlet />
        </main>
    )
}