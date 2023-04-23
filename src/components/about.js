import React, {useContext} from 'react';
import {NoteContext} from "../context/notes/noteContext";

const About = () => {
    const [notes, setNotes] = useContext(NoteContext);
    console.log(notes)
    return (
        <div>
            <h1>About</h1>
        </div>
    );
};

export default About;
