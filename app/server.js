'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Test of visiting the homepage, will receive "Hello World"
// app.get('/', function (req, res) {
//   res.send('Hello World')
// });

app.use(express.static('public'));

// BodyParser makes it possible for our server to interpret data sent to it.

// parse application/json 
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// The 'require' allows the function in module.exports to be usable and the (app) runs the function, which in turn
   // serves up the corresponding file (html, text, etc) to the user
// ================================================================================

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});