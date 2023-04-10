const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    const obj = {
        b: 'demo'
    }
    response.json(obj);
});

module.exports = router;
