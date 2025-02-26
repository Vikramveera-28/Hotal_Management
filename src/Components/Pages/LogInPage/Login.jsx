import React from "react";
import '../../../App.css';
import { Link } from "react-router-dom";

const Login = ({userLoginName, setUserLoginName, userLoginPassword, setUserLoginPassword, userLogin, user, userError}) => {
    return(
        <main className="d-flex justify-content-center align-items-center pt-5 form-page login-page">
            <div className="box border border-2 rounded-3 bg-form" style={{width: '30rem'}}>
                <form action="" onSubmit={(e) => e.preventDefault()} className="p-3">
                    <h3 className="text-primary text-center border-bottom border-primary w-100">User LogIn</h3>
                    {userError && <div className="text-danger">{`Error: ${userError}`}</div>}
                    <label htmlFor="userName" className="form-label text-light">User Name</label>
                    <input
                        type="text"
                        id="userName"
                        className="form-control"
                        value={userLoginName}
                        onChange={(e) => setUserLoginName(e.target.value)}
                    />
                    <label htmlFor="password" className="form-label text-light">User Password</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        value={userLoginPassword}
                        onChange={(e) => setUserLoginPassword(e.target.value)}
                        />
                    <button className="btn btn-primary w-100 mt-4" type="submit" onClick={userLogin}>Log In</button>
                </form>
                <div className="d-flex justify-content-center align-items-center px-3">
                    <h5 className="text-secondary h6 text-light">Create new Accound? <Link to={'/register'}><span className="text-primary border border-2 rounded-3 p-1">Sign Up</span></Link></h5>
                </div>
            </div>
        </main>
    )
}
export default Login;