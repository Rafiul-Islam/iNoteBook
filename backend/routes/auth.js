const express = require('express');
const {body, validationResult} = require('express-validator');
const router = express.Router();
const User = require('../models/User');

// create a user
router.post('/', [
    body('name', "Enter a valid name!").isLength({min: 3}).notEmpty(),
    body('email', "Enter a valid email!").isEmail().notEmpty(),
    body('password', "Password length must be 6 to 12 characters!").isLength({min: 6, max: 12}).notEmpty(),
], async (request, response) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({errors: errors.array()});
    }

    User.create({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
    })
        .then(user => response.json(user))
        .catch(ex => console.log(ex.message));
});

module.exports = router;
