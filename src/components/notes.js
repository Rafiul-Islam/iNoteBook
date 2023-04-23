import React, {useContext} from 'react';
import Note from "./note";
import {NoteContext} from "../context/notes/noteContext";

const Notes = () => {
    const [notes, setNotes] = useContext(NoteContext);
    return (
        <div className='mt-5'>
            <div className='row'>
                {
                    notes && notes.map(note =>
                        <div className='col-md-6 col-xl-3 col-lg-4'>
                            <Note note={note}/>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Notes;
