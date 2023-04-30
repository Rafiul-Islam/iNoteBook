import React, {createContext, useState} from 'react';
import http from "../../services/httpRequest";
import {showSuccessToast} from "../../services/toastServices";
import swal from "sweetalert2";
import axios from "axios";
import API_BASE_URL from "../../config";

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
            console.log(response);
            const allNotes = [response, ...notes];
            setNotes(allNotes);
            showSuccessToast("Note Added Successfully!");
        } catch (e) {
            console.error(e.message)
        }
    }

    const editNote = (noteId, noteObj) => {
        const {title, description, tag} = noteObj;
        const updatedNotes = notes.map(note => {
            if (note._id === noteId) {
                note.title = title;
                note.description = description;
                note.tag = tag;
            }
            return note;
        });
        setNotes(updatedNotes);
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
        <NoteContext.Provider value={{notes, setNotes, getAllNotes, addNote, editNote, deleteNote}}>
            {children}
        </NoteContext.Provider>
    );
};
