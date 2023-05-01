import React, {useContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import Router from "./routers";
import Navbar from "./components/navbar";
import {UserLoginStatusContext} from "./context/userLoginStatusContext";

const App = () => {
    const [isLogin, setIsLogin] = useContext(UserLoginStatusContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("authToken")) {
            setIsLogin(true)
            navigate('/');
        } else navigate('/login');
    }, []);
    return (
        <>
            <ToastContainer theme={"colored"}/>
            {isLogin && <Navbar/>}
            <div className={`container ${isLogin && 'mt-5'}`}>
                <Router/>
            </div>
        </>
    );
};

export default App;
