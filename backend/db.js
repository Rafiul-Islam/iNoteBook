const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook";

mongoose.set("strictQuery", false);

const connectToMongo = () => mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log("Connected to mongo successfully...."));

module.exports = connectToMongo;
