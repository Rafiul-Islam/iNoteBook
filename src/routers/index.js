import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "../components/home";
import About from "../components/about";

const Index = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    );
};

export default Index;
