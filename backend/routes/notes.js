const express = require('express');
const router = express.Router();

router.get('/notes', (request, response) => {
    const obj = {
        b: 'demo'
    }
    response.json(obj);
});

module.exports = router;
