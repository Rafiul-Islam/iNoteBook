import React from 'react';
import notebookImage from "../assets/images/notebook.png";
import '../assets/css/login.css';
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <main className="login-page">
            <div className="form-container">
                <div className="text-center">
                    <img width='90' src={notebookImage} alt=""/>
                    <h2 className="signIn-txt mt-3">Sign in</h2>
                    <p className="subtext">to continue to <strong>iNoteBook</strong></p>
                </div>
                <form className='mt-4'>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                        />
                    </div>
                    <button type="submit" className="btn btn-success py-2 px-4">
                        <small>Login</small>
                    </button>
                    <div className="pt-3">
                        <small>Don’t have an account?
                            <Link to="/signup" className="fw-bold text-decoration-none text-success ms-1">Sign Up</Link>
                        </small>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Login;
