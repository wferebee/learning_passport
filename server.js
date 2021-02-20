const express = require('express');
const path = require('path'); // to serve specific files whennroutes are hit
const morgan = require('morgan');
const app = express();

app.use(express.static('public')); // to serve static files
app.use(morgan('dev'));


var PORT = process.env.PORT || 3000; // PORT = 3000 or whatever the enviornmanet sets it to


app.get("/", (req, res, next) => { // Just setting up to route to the main index page

    res.sendFile(path.join(__dirname, '/public', '/html', 'index.html'));
})



 
   
app.listen(PORT, () => {
    console.log('listening on *:3000');
 });