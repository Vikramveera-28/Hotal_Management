import React from "react";
import '../../App.css';
import '../../Bootsrap/css/bootstrap.min.css';

export const Admin = ({adminName, setAdminName, adminPassword, setAdminPassword, adminLogin}) => {
    return(
        <main className="d-flex justify-content-center align-items-center pt-5 form-page admin-page">
            <form action="" onSubmit={adminLogin} className="border border-2 rounded-3 p-3 bg-form" style={{width: '30rem', height: '18rem'}}>
                <h3 className="text-primary text-center border-bottom border-primary w-100">Admin LogIn</h3>
                <label htmlFor="userName" className="form-label text-light">User Name</label>
                <input
                    type="text"
                    id="userName"
                    className="form-control"
                    value={adminName}
                    onChange={(e) => setAdminName(e.target.value)}
                />
                <label htmlFor="password" className="form-label text-light">User Password</label>
                <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    />
                <button className="btn btn-primary w-100 mt-4" type="submit">Log In</button>
            </form>
        </main>
    )
}