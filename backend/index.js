const express = require('express');
const mongoose = require('mongoose');
const connectToMongo = require('./db');
const app = express()
const port = 5000

// Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => console.log(`iNoteBook app listening on port ${port}`));

connectToMongo();
