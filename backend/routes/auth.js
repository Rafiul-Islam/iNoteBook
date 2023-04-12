const express = require('express');
const {body, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User');

const JWT_SECRET = "webTokenSignature";

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

    try {
        // check whether the user with this email exist already
        let user = await User.findOne({email: request.body.email});
        if (user)
            return response.status(400).json({errors: "User with this email already exist!"});

        const salt = await bcrypt.genSalt(10);
        const securedPassword = await bcrypt.hash(request.body.password, salt);

        // create user
        user = await User.create({
            name: request.body.name,
            email: request.body.email,
            password: securedPassword,
        });

        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET);
        response.json({authToken});
    } catch (error) {
        console.error(error.message);
        response.status(500).json({errors: "Something unexpected happened!"});
    }
});

// Authenticate a user
router.post('/login', [
    body('email', "Enter a valid email!").isEmail().notEmpty(),
    body('password', "Password length must be 6 to 12 characters!").isLength({min: 6, max: 12}).notEmpty(),
], async (request, response) => {

    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({errors: errors.array()});
    }

    const {email, password} = request.body;
    try {
        let user = await User.findOne({email});
        if (!user)
            return response.status(400).json({errors: "Please try to login with valid credential!"});


        const passwordCompare = await bcrypt.compare(password, user.password);

        if (!passwordCompare)
            return response.status(400).json({errors: "Please try to login with valid credential!"});

        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET);
        response.json({authToken});

    } catch (error) {
        console.error(error.message);
        response.status(500).json({errors: "Something unexpected happened!"});
    }
});

module.exports = router;
