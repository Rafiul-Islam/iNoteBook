import React from 'react';
import Router from "./routers";
import Navbar from "./components/navbar";
import {ToastContainer} from "react-toastify";

const App = () => {
    return (
        <>
            <ToastContainer theme={"colored"}/>
            <Navbar/>
            <div className='container mt-5'>
                <Router/>
            </div>
        </>
    );
};

export default App;
