import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "../components/home";
import About from "../components/about";
import Contact from "../components/contact";

const Index = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    );
};

export default Index;
