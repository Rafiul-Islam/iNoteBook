import React, {createContext, useState} from 'react';

export const NoteContext = createContext();

export const NoteProvider = ({children}) => {
    const [notes, setNotes] = useState([
        {
            "_id": "64366e6170cb6e235aaeb3bd",
            "user": "643622fdca7bf7a6b0c8662d",
            "title": "Title1",
            "description": "Description1",
            "tag": "Tag1",
            "date": "2023-04-12T08:40:01.772Z",
            "__v": 0
        },
        {
            "_id": "64366e7a70cb6e235aaeb3c0",
            "user": "643622fdca7bf7a6b0c8662d",
            "title": "Title2",
            "description": "Description2",
            "tag": "Tag2",
            "date": "2023-04-12T08:40:26.788Z",
            "__v": 0
        }
    ]);
    return (
        <NoteContext.Provider value={[notes, setNotes]}>
            {children}
        </NoteContext.Provider>
    );
};
