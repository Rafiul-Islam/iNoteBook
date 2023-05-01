import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import notebookImage from "../assets/images/notebook.png";
import http from "../services/httpRequest";
import '../assets/css/login.css';

const Login = () => {
    const [credential, setCredential] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const input = e.target;
        setCredential({
            ...credential,
            [input.name]: input.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await http.login("auth/login", credential);
        if (response) {
            const {authToken} = response;
            localStorage.setItem("authToken", authToken)
            setCredential(null);
            navigate("/")
        }
    }
    return (
        <main className="login-page">
            <div className="form-container">
                <div className="text-center">
                    <img width='90' src={notebookImage} alt=""/>
                    <h2 className="signIn-txt mt-3">Sign in</h2>
                    <p className="subtext">to continue to <strong>iNoteBook</strong></p>
                </div>
                <form onSubmit={handleSubmit} className='mt-4'>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            onChange={handleChange}
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
