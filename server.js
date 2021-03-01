const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
// const path = require('path');

const PORT = process.env.PORT || 8080

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// Import routes and give the server access to them.
const routes = require('./controllers/appController');
app.use(routes);

// app.get('/', (req, res) => {

// })

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});