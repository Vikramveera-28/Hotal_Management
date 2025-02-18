import React from "react";
import '../../App.css';
import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <main className="d-flex justify-content-center align-items-center pt-5 bg-secondary">
            <div className="border border-dark p-3 rounded-3 bg-light" style={{maxWidth: '25rem'}}>
                <h4 className="fw-bold">Page Not Found</h4>
                <p className="card-text">Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
                <p><Link to={'/'} className="text-decoration-none d-flex justify-content-center align-items-center">Go to Home Page</Link></p>
            </div>
        </main>
    )
}
export default NotFound;