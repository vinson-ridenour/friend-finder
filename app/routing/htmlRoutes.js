// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------
  
// When user goes to /survey, they are fed survey.html
  app.get("/survey", function(req, res) { // this callback will execute everything within it only when
                                          // the url /survey is hit
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

// If no matching route is found, default to home.html (try /whatever and it should bring you to homepage)
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html")); // this path is always relation to where htmlRoutes.js is located                                                      // so this says up one level, then into public, then home.html
  });

// This route isn't needed since if url not found it will default to home.html anyway
//   app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "/../home.html"));
//   });
};