'use strict';

$(document).ready(function(){
            console.log('js script loaded!');

            $("#submit-survey").click(function(){
                
                console.log('inside the submit click function');
                
                let newFakeFriend = {
                    "name": $("#name").val().trim(),
                    "photoURL": $("#photo").val(),
                    "scores": [
                    $("#q1").val().trim(),
                    $("#q2").val().trim(),
                    $("#q3").val().trim(),
                    $("#q4").val().trim(),
                    $("#q5").val().trim(),
                    $("#q6").val().trim(),
                    $("#q7").val().trim(),
                    $("#q8").val().trim(),
                    $("#q9").val().trim(),
                    $("#q10").val().trim()
                    ]
                };
                
                console.log(newFakeFriend);

                var currentURL = window.location.origin;
                
                $.post(currentURL + "/api/friends", newFakeFriend, function(data) {
                    console.log('This is logging from survey.html');
                    console.log(data);
                    $("#matched-photo").attr("src", data.photo)
                    $("#matched-name").text(data.name)
                    $("#myModal").modal("show");
                });
            });
        });
