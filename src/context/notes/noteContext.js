import React, {createContext, useState} from 'react';
import http from "../../services/httpRequest";

export const NoteContext = createContext();

export const NoteProvider = ({children}) => {
    const [notes, setNotes] = useState();

    const getAllNotes = async () => {
        const response = await http.get("notes");
        setNotes(response);
    }

    const addNote = (noteObj) => {
        const {title, description, tag} = noteObj;
        const note = {
            "_id": "64366e6170cb6e235aaeb3bd1",
            "user": "643622fdca7bf7a6b0c8662d",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-04-12T08:40:01.772Z",
            "__v": 0
        }
        setNotes(notes.concat(note));
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

    const deleteNote = (noteId) => {
        const filteredNotes = notes.filter(note => note._id !== noteId);
        setNotes(filteredNotes);
    }

    return (
        <NoteContext.Provider value={{notes, setNotes, getAllNotes, addNote, editNote, deleteNote}}>
            {children}
        </NoteContext.Provider>
    );
};
