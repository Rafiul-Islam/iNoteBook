import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "../components/home";
import About from "../components/about";
import Login from "../components/login";
import Signup from "../components/signup";

const Index = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    );
};

export default Index;
