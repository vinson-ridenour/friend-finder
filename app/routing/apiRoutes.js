// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const path = require("path");
var fakeFriends = require('../data/friends.js');

module.exports = function(app) {
  
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------
  
// When user goes to /api/friends, they are fed the friends.js file
  app.get("/api/friends", function(req, res) {
    res.json(fakeFriends);
    });

  app.post("/api/friends", function(req, res) {
    fakeFriends.push(req.body); // req.body is whatever was posted
    res.json(fakeFriends);
    // res.sendFile(path.join(__dirname, "/../data/random.js"));
  });
}
