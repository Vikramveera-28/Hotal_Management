import React from "react";
import '../../App.css';
import '../../Bootsrap/css/bootstrap.min.css';
import { Link } from "react-router-dom";

export const Register = ({registerName, setRegisterName, registerPassword, setRegisterPassword, userRegister}) => {
    return(
        <main className="d-flex justify-content-center align-items-center pt-5">
            <div className="box border border-2 rounded-3" style={{width: '30rem', height: '20rem'}}>
                <form action="" onSubmit={userRegister} className="p-3 bg-light-subtle">
                    <h3 className="text-primary text-center border-bottom border-primary w-100">User Register</h3>
                    <label htmlFor="userName" className="form-label">User Name</label>
                    <input
                        type="text"
                        id="userName"
                        className="form-control"
                        value={registerName}
                        onChange={(e) => setRegisterName(e.target.value)}
                    />
                    <label htmlFor="password" className="form-label">User Password</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                        />
                    <button className="btn btn-primary w-100 mt-4" type="submit">Register Now</button>
                </form>
                <div className="d-flex justify-content-center align-items-center px-3">
                    <h5 className="text-secondary h6">Already Have Accound? <Link to={'/'}><span className="text-primary">Log In</span></Link></h5>
                </div>
            </div>
        </main>
    )
}