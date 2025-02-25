import React from "react";
import '../../../App.css';
import { Link } from "react-router-dom";

export const Register = ({registerName, setRegisterName, registerPassword, setRegisterPassword, userRegister, userError}) => {
    return(
        <main className="d-flex justify-content-center align-items-center pt-5 form-page register-page">
            <div className="box border border-2 rounded-3 bg-form" style={{width: '30rem'}}>
                <form action="" onSubmit={e => e.preventDefault()} className="p-3">
                    <h3 className="text-primary text-center border-bottom border-primary w-100">User Register</h3>
                {userError && <div className="text-danger">{`Error: ${userError}`}</div>}
                    <label htmlFor="userName" className="form-label text-light">User Name</label>
                    <input
                        type="text"
                        id="userName"
                        className="form-control"
                        value={registerName}
                        onChange={(e) => setRegisterName(e.target.value)}
                    />
                    <label htmlFor="password" className="form-label text-light">User Password</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                        />
                    <button className="btn btn-primary w-100 mt-4" type="submit" onClick={userRegister}>Register Now</button>
                </form>
                <div className="d-flex justify-content-center align-items-center px-3 mb-2">
                    <h5 className="text-secondary h6 text-light">Already Have Accound? <Link to={'/'}><span className="text-primary border border-2 rounded-3 p-1">Log In</span></Link></h5>
                </div>
            </div>
        </main>
    )
}
export default Register;