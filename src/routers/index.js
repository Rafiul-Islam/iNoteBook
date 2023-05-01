import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import Home from "../components/home";
import Login from "../components/login";
import Signup from "../components/signup";
import Protected from "../components/protected";
import Logout from "../components/logout";

const Index = () => {
    return (
        <Routes>
            <Route path='/' element={<Protected Component={Home}/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/*" element={<Navigate to='/'/>}/>
        </Routes>
    );
};

export default Index;
