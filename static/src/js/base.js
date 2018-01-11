function loginpage(){
    var username = $('#username').val();
    var password = $('#password').val();
    $.ajax(
        {
            url:'/login_page/',
            type : 'POST',
            data:{"username":username,
            "password":password,
            csrfmiddlewaretoken:$("input[name=csrfmiddlewaretoken]").val()},
            timeout : 10000,
            async:false,
        }).done(function(json_data)
        {
        alert("Login Successfully.")
        });
}

$(document).ready( function() {
$("#btnsubmit").click(function(){
        loginpage();
        alert("Login page display successfully");
    });
    
$("#logout").click(function(){
    });
    
});
