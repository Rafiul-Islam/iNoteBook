import React from 'react';

const NoteAddForm = () => {
    return (
        <div>
            <h2>Add a Note Here</h2>
            <form className='mt-4'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1">Email Address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder=""
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder=""
                    />
                </div>
                <button type="submit" className="btn btn-primary py-2 px-4">Submit</button>
            </form>
        </div>
    );
};

export default NoteAddForm;
