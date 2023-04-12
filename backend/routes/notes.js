const express = require('express');
const router = express.Router();
const {body, validationResult} = require('express-validator');
const fetchUser = require("../middleware/fetchUser");
const Note = require("../models/Note");
const User = require("../models/User");

// get all notes
router.get('/', fetchUser, async (request, response) => {

    try {
        const notes = await Note.find({user: request.user.id});
        response.json(notes);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({errors: "Something unexpected happened!"});
    }
});

// add new note
router.post('/', fetchUser, [
    body('title', "Title must be at least 3 character!").isLength({min: 3}),
    body('description', "Description must be at least 3 character!").isLength({min: 5})
], async (request, response) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({errors: errors.array()});
    }

    try {
        // create user
        const {title, description, tag} = request.body;
        const note = new Note({title, description, tag, user: request.user.id});
        const saveNote = await note.save();
        response.json(saveNote);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({errors: "Something unexpected happened!"});
    }
});

// update new note
router.put('/:id', fetchUser, [
    body('title', "Title must be at least 3 character!").isLength({min: 3}),
    body('description', "Description must be at least 3 character!").isLength({min: 5})
], async (request, response) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({errors: errors.array()});
    }

    const {title, description, tag} = request.body;

    const newNote = {};

    if (title) newNote.title = title;
    if (title) newNote.description = description;
    if (title) newNote.tag = tag;

    let note = await Note.findById(request.params.id);
    if (!note) response.status(404).json({errors: "Not Found!"});
    if (note.user.toString() !== request.user.id) response.status(401).json({errors: "Unauthorized!"});

    note = await Note.findByIdAndUpdate(request.params.id, {$set: newNote}, {new: true});
    response.json({note});
});

// delete note
router.delete('/:id', fetchUser, async (request, response) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({errors: errors.array()});
    }

    let note = await Note.findById(request.params.id);
    if (!note) response.status(404).json({errors: "Not Found!"});
    if (note.user.toString() !== request.user.id) response.status(401).json({errors: "Unauthorized!"});

    await Note.findByIdAndDelete(request.params.id);
    response.send("Deleted!");
});

module.exports = router;
