const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user");
const path = require('path'); // to serve specific files whennroutes are hit
const InitiateMongoServer = require("./db");

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public')); // to serve static files
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '/public', '/html', 'signup.html'));
});

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", user);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});