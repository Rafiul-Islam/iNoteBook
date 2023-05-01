import React from 'react';
import Notes from "./notes";
import NoteAddForm from "./noteAddForm";
import '../assets/css/home.css';

const Home = () => {
    return (
        <div>
            <NoteAddForm/>
            <Notes/>
        </div>
    );
};

export default Home;
