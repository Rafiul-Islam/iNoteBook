import React, {useContext, useEffect, useRef, useState} from 'react';
import {Modal} from 'bootstrap';
import Note from "./note";
import {NoteContext} from "../context/notes/noteContext";
import NoteUpdateModal from "./noteUpdateModal";

const Notes = () => {
    const modalRef = useRef(null);
    const noteContext = useContext(NoteContext);
    const {notes, getAllNotes, updateNote, deleteNote} = noteContext;
    const [updatedNote, setUpdatedNote] = useState(null); // initialize with null

    const handleDelete = (noteId) => {
        deleteNote(noteId);
    }

    const handleUpdateModalOpen = (note) => {
        const {_id, title, description, tag} = note;
        setUpdatedNote({_id, title, description, tag});

        // Open Modal
        setTimeout(() => {
            const myModal = modalRef.current;
            const modal = new Modal(myModal);
            modal.show();
        }, 500);
    }

    const handleModalInputChange = (e) => {
        if (updatedNote !== null) { // make sure updatedNote is not null
            setUpdatedNote({
                ...updatedNote,
                [e.target.name]: e.target.value
            });
        }
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        updateNote(updatedNote);
        setUpdatedNote(null); // reset to null after update
    }

    useEffect(() => {
        getAllNotes();
    }, []);

    return (
        <div className='mt-5'>
            {
                updatedNote !== null && // make sure updatedNote is not null
                <NoteUpdateModal
                    modalRef={modalRef}
                    note={updatedNote}
                    onInputChange={handleModalInputChange}
                    onSubmit={handleUpdate}
                />
            }
            <div className='row'>
                {notes && notes.length === 0 &&
                    <div className="col-12">
                        <h3>No notes to display!</h3>
                    </div>
                }
                {
                    notes && notes.map(note =>
                        <div key={note._id} className='col-md-6 col-xl-3 col-lg-4'>
                            <Note
                                note={note}
                                onUpdate={handleUpdateModalOpen}
                                onDelete={handleDelete}
                            />
                        </div>)
                }
            </div>
        </div>
    );
};

export default Notes;
