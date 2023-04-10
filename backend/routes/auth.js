const express = require('express');
const router = express.Router();
const User = require('../models/User');

// create a user
router.post('/', async (request, response) => {
    console.log(request.body);
    const userObj = new User(request.body);
    const user = await userObj.save();
    response.send(user);
});

module.exports = router;
