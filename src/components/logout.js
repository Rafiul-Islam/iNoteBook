import React, {useEffect, useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {UserLoginStatusContext} from "../context/userLoginStatusContext";

const Logout = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useContext(UserLoginStatusContext);
    useEffect(() => {
        localStorage.removeItem("authToken");
        setIsLogin(false);
        navigate("/login");
    });
    return (
        <div>

        </div>
    );
};

export default Logout;
