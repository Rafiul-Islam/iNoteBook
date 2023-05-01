import React, {createContext, useState} from 'react';
import http from "../../services/httpRequest";
import {showErrorToast, showSuccessToast} from "../../services/toastServices";
import swal from "sweetalert2";

export const NoteContext = createContext();

export const NoteProvider = ({children}) => {
    const [notes, setNotes] = useState();

    const getAllNotes = async () => {
        const response = await http.get("notes");
        setNotes(response);
    }

    const addNote = async (noteObj) => {
        const {title, description, tag} = noteObj;
        const note = {title, description, tag}
        try {
            const response = await http.post("notes", note);
            if (response) {
                const allNotes = [response, ...notes];
                setNotes(allNotes);
                showSuccessToast("Note Added Successfully!");
            } else showErrorToast("Note Added Failed!")
        } catch (e) {
            console.error(e.message)
        }
    }

    const updateNote = async (noteObj) => {
        const {_id, title, description, tag} = noteObj;
        const note = {title, description, tag}
        try {
            const response = await http.put(`notes/${_id}`, note);
            if (response) {
                const updatedNotes = notes.map(note => {
                    if (note._id === _id) {
                        note.title = title;
                        note.description = description;
                        note.tag = tag;
                    }
                    return note;
                });
                setNotes(updatedNotes);
                showSuccessToast("Note Updated Successfully!");
            } else {
                showErrorToast("Note Update Failed!")
            }
        } catch (e) {
            console.error(e.message)
        }
    }

    const deleteNote = async (noteId) => {
        const allNotes = [...notes];
        try {
            swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const filteredNotes = notes.filter(note => note._id !== noteId);
                    setNotes(filteredNotes);
                    await http.delete("notes", noteId);
                    swal.fire(
                        'Deleted!',
                        'Your file has been deleted!',
                        'success'
                    )
                }
            });
        } catch (e) {
            console.error(e.message)
            setNotes(allNotes);
        }
    }

    return (
        <NoteContext.Provider value={{notes, setNotes, getAllNotes, addNote, updateNote, deleteNote}}>
            {children}
        </NoteContext.Provider>
    );
};
