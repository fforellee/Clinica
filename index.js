const bodyParser = require('body-parser');
const express = require('express');
// const expressLayouts = require('express-ejs-layouts')
// Import blogrouter
const blogrouter = require('./blogroutes');
// Import database
const MongoClient = require('./database.js')
const app = express();

var urlEncodedParser = bodyParser.urlencoded({extended:false});
//set port number
const port = 7000;

// set static files
app.use(express.static(__dirname+"/views"));
// set templating engine
app.set('view engine','ejs');
// set routes
app.use('/',blogrouter);

// set server 
const server = app.listen(port, ()=>{
    console.log('running server at '+port);
});