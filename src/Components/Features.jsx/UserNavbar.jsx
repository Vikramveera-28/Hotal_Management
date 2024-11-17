import React from "react";
import { Link, Outlet } from "react-router-dom";

export const UserNavbar = () => {
    return (
        <main>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Fourth navbar example">
                <div className="container-fluid">
                <Link className="navbar-brand">V-Hotal</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample04">
                    <ul className="navbar-nav mx-auto mb-2 mb-md-0">
                        <li className="nav-item"><Link to={'/user/home'} className="nav-link active">Home</Link></li>
                        <li className="nav-item"><Link to={'/user/restaurant'} className="nav-link active">Restaurant</Link></li>
                        <li className="nav-item"><Link to={'/user/laundary'} className="nav-link active">Laundary</Link></li>
                        <li className="nav-item"><Link to={'/user/game'} className="nav-link active">Game</Link></li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                        <li className="nav-item"><Link to={'/'} className="nav-link">LogOut</Link></li>
                    </ul>
                </div>
                </div>
            </nav>
            <Outlet />
        </main>
    )
}