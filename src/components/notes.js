import React, {useContext, useEffect} from 'react';
import Note from "./note";
import {NoteContext} from "../context/notes/noteContext";

const Notes = () => {
    const noteContext = useContext(NoteContext);
    const {notes, getAllNotes, addNote} = noteContext;

    const getNotes = async () => {
        const allNotes = await getAllNotes();
    }

    useEffect(() => {
        getNotes();
    }, []);

    return (
        <div className='mt-5'>
            <div className='row'>
                {
                    notes && notes.map(note =>
                        <div key={note._id} className='col-md-6 col-xl-3 col-lg-4'>
                            <Note note={note}/>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Notes;
