import React, {useContext, useState} from 'react';
import ConfirmDialog from "./confirmDialog";
import dateFormatter from "../utils/dateFormatter";
import {NoteContext} from "../context/notes/noteContext";

const Note = ({note, onUpdate, onDelete}) => {
    const {_id, title, description, tag, date} = note;
    return (
        <div className="card note-card">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {tag}
            </span>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <small>{dateFormatter(date)}</small>
            </div>
            <div className='card-footer'>
                <div className='d-flex justify-content-end'>
                    <i
                        role='button'
                        className='fa fa-pencil me-3 bg-primary p-2 rounded-circle text-white'
                        onClick={() => onUpdate(note)}
                    />

                    <i
                        role='button'
                        className='fa fa-trash bg-danger p-2 rounded-circle text-white'
                        onClick={() => onDelete(_id)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Note;
