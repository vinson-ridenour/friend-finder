'use strict';

// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
(function() {

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
            fakeFriends.push(req.body);
            var newFriend = req.body;
            console.log(newFriend);
            var currentScores = [];
            var matchedFriend = 0;
            var matchedScore = 100; //largest value difference
            console.log(fakeFriends);
            
            //function to add array
			function add(a, b){
				return parseInt(a) + parseInt(b)
			}
            
            //Get total score for each person in PERSON object
            for (var i = 0; i < fakeFriends.length; i++){
                
                //Get scores in fakeFriends.scores
                var personScore = fakeFriends[i].scores
                var sum = personScore.reduce(add, 0);
                currentScores.push(sum)
            }

            //Get total score for new entry
			var newFriendScore = newFriend.scores;
            var newFriendSum = newFriendScore.reduce(add, 0);
            
            //Compare each score in currentScores (all of the friend's scores)
            // with newFriendSum (the new friend's score)
            for (var i= 0; i < currentScores.length; i++) {
                
                //Determine difference between both people
                var friendDelta = Math.abs((newFriendSum - currentScores[i]))
                if (matchedScore >= friendDelta) {
                    matchedScore = friendDelta;
                    matchedFriend = i;
                }
            }

            //Get name of matched person
            var matchedPerson = fakeFriends[matchedFriend];
            res.json(matchedPerson);
        });
    };
}());
