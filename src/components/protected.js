import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const Protected = ({Component}) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("authToken")) navigate('/');
        else navigate('/login');
    }, []);
    return (
        <Component/>
    );
};

export default Protected;
