import React from 'react';

const NoteUpdateModal = ({note, modalRef, onSubmit, onInputChange}) => {
    return (
        <div ref={modalRef} className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Update Note</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body py-4">
                        <form onSubmit={onSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name='title'
                                    value={note.title}
                                    onChange={onInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1">Description</label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                    name='description'
                                    value={note.description}
                                    onChange={onInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1">Tag</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name='tag'
                                    value={note.tag}
                                    onChange={onInputChange}
                                />
                            </div>
                            <div className='d-flex justify-content-end'>
                                <button data-bs-dismiss="modal" type='button' className="btn btn-secondary py-2 px-4 me-2">Cancel</button>
                                <button data-bs-dismiss="modal" type="submit" className="btn btn-primary py-2 px-4">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoteUpdateModal;
