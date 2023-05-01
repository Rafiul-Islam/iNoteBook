import React, {useContext, useState} from 'react';
import {NoteContext} from "../context/notes/noteContext";

const NoteAddForm = () => {
    const noteObj = {
        title: "",
        description: "",
        tag: ""
    };
    const noteContext = useContext(NoteContext);
    const {addNote} = noteContext;
    const [note, setNote] = useState(noteObj);

    const handleChange = (e) => {
        setNote({
            ...note,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(note);
        setNote(noteObj);
    }

    return (
        <>
            <h2>Add a Note Here</h2>
            <form onSubmit={handleSubmit} className='mt-4'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder=""
                        minLength={3}
                        required
                        name='title'
                        value={note.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder=""
                        minLength={3}
                        required
                        name='description'
                        value={note.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1">Tag</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder=""
                        name='tag'
                        minLength={3}
                        maxLength={10}
                        required
                        value={note.tag}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary py-2 px-4">Submit</button>
            </form>
        </>
    );
};

export default NoteAddForm;
