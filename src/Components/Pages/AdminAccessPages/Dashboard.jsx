import React from "react";
import '../../../App.css';
import '../../../Bootsrap/css/bootstrap.min.css';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, Outlet } from "react-router-dom";


export const Dashboard = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <main className="dashboard">
            <div className="row h-100">
                <aside className="d-none d-md-flex flex-column col-md-3 h-100 p-3 position-relative overflow-hidden border-end border-3">
                        <h2 className="text-center mb-4">V-Hotal</h2>
                        <ul className="list-group list-group-flush">
                            <Link to={'/dashboard/adminHome'} className="text-decoration-none list-group-item list-group-item-action border-bottom">Home</Link>
                            <Link to={'/dashboard/editUser'} className="text-decoration-none list-group-item list-group-item-action border-bottom">User</Link>
                            <Link to={'/dashboard/editRestaurant'} className="text-decoration-none list-group-item list-group-item-action border-bottom">Restaurant</Link>
                            <Link to={'/dashboard/editLaundary'} className="text-decoration-none list-group-item list-group-item-action border-bottom">Laundary</Link>
                            <Link to={'/dashboard/editGames'} className="text-decoration-none list-group-item list-group-item-action border-bottom">Game</Link>
                        </ul>
                        <ul className="list-group list-group-flush position-absolute bottom-0 w-100">
                            <Link to={'/'} className="text-decoration-none list-group-item list-group-item-action border-top">Log Out</Link>
                        </ul>
                </aside>
                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>V-Hotal</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <ul className="list-group list-group-flush">
                                <Link to={'/dashboard/adminHome'} className="text-decoration-none list-group-item list-group-item-action border-bottom">Home</Link>
                                <Link to={'/dashboard/editUser'} className="text-decoration-none list-group-item list-group-item-action border-bottom">User</Link>
                                <Link to={'/dashboard/editRestaurant'} className="text-decoration-none list-group-item list-group-item-action border-bottom">Restaurant</Link>
                                <Link to={'/dashboard/editLaundary'} className="text-decoration-none list-group-item list-group-item-action border-bottom">Laundary</Link>
                                <Link to={'/dashboard/editGames'} className="text-decoration-none list-group-item list-group-item-action border-bottom">Game</Link>
                            </ul>
                            <ul className="list-group list-group-flush position-absolute bottom-0 w-100">
                                <Link to={'/'} className="text-decoration-none list-group-item list-group-item-action border-top">Log Out</Link>
                            </ul>
                        </Offcanvas.Body>
                    </Offcanvas>
                <main className="col-12 col-md-9 h-100">
                    <button className="d-md-none btn position-absolute top-0 start-0 p-0" onClick={handleShow}>🌕</button>
                    <Outlet />
                </main>
            </div>
        </main>
    )
}