import React from 'react';

const Note = ({note}) => {
    const {title, description, tag, date} = note;
    return (
        <div className="card note-card">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {tag}
            </span>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <small>{date}</small>
            </div>
        </div>
    );
};

export default Note;
