const express = require('express');
const {body, validationResult} = require('express-validator');
const router = express.Router();
const User = require('../models/User');

// create a user
router.post('/user', [
    body('name', "Enter a valid name!").isLength({min: 3}).notEmpty(),
    body('email', "Enter a valid email!").isEmail().notEmpty(),
    body('password', "Password length must be 6 to 12 characters!").isLength({min: 6, max: 12}).notEmpty(),
], async (request, response) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({errors: errors.array()});
    }

    // check whether the user with this email exist already
    try {
        let user = await User.findOne({email: request.body.email});
        if (user)
            return response.status(400).json({errors: "Invalid User Credential!"});

        user = await User.create({
            name: request.body.name,
            email: request.body.email,
            password: request.body.password,
        });
        response.send(user);
    } catch (e) {
        console.error(e.message);
        response.status(500).json({errors: "Something unexpected happened!"});
    }
});

module.exports = router;
