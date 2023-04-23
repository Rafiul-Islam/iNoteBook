import React from 'react';
import Router from "./routers";
import Navbar from "./components/navbar";

const App = () => {
    return (
        <>
            <Navbar/>
            <div className='container mt-5'>
                <Router/>
            </div>
        </>
    );
};

export default App;
