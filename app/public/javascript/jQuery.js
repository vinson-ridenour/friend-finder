
$(document).ready(function(){
    
   $("#start-survey").click(function(){
    $.get("/survey", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
});

    var user,pass;
    $("#start-survey").click(function(){
        
        window.origin.location = 
        user=$("#user").val();
        pass=$("#password").val();
        $.post("http://localhost:3000/login",{user: user,password: pass}, function(data){
            if(data==='done')
            {
            alert("login success");
            }
        });
    });
});
