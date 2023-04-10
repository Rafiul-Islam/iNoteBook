const connectToMongo = require('./db');
const express = require('express');
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`iNoteBook app listening on port ${port}`)
});

connectToMongo();
