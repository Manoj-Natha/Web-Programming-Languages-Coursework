$(document).ready(function() {
$("<span id=\"usernamespan\">Enter username</span>").insertAfter("#username");
$("#usernamespan").hide();
$("<span id=\"pswdspan\">Enter password</span>").insertAfter("#password");
$("#pswdspan").hide();
$("<span id=\"emailspan\">Enter email</span>").insertAfter("#email");
$("#emailspan").hide();



$("#username").focus( function(){
$("#usernamespan").show();
$("#usernamespan").removeClass("ok");
$("#usernamespan").removeClass("error");
$("#usernamespan").addClass("info");
$("#usernamespan").html(" The username field must contain only letters.");	
});



$("#username").blur( function(){
var uname=$("#username").val();

if(uname.length==0)
{
$("#usernamespan").hide();
}

if(/^[a-zA-Z]*$/.test(uname))
{
	$("#usernamespan").html(" Ok");
	$("#usernamespan").removeClass("info");
	$("#usernamespan").removeClass("error");
	$("#usernamespan").addClass("ok");
}
else
{
	$("#usernamespan").html(" Error");
	$("#usernamespan").removeClass("info");
	$("#usernamespan").removeClass("ok");
	$("#usernamespan").addClass("error");
	
}

	
});



$("#password").focus( function(){
$("#pswdspan").show();
$("#pswdspan").removeClass("ok");
$("#pswdspan").removeClass("error");
$("#pswdspan").addClass("info");
$("#pswdspan").html(" The password field should be at least 8 characters long.");	
});



$("#password").blur( function(){
var pswd=$("#password").val();


if(pswd.length==0)
{
$("#pswdspan").hide();
}

if(pswd.length>8)
{
	$("#pswdspan").html("Ok");
	$("#pswdspan").removeClass("info");
	$("#pswdspan").removeClass("error");
	$("#pswdspan").addClass("ok");
}
else
{
	$("#pswdspan").html("Error");
	$("#pswdspan").removeClass("info");
	$("#pswdspan").removeClass("ok");
	$("#pswdspan").addClass("error");
	
}

	
});




$("#email").focus( function(){
$("#emailspan").show();
$("#emailspan").removeClass("ok");
$("#emailspan").removeClass("error");
$("#emailspan").addClass("info");
$("#emailspan").html("	The email address field should contain a @ character.");	
});



$("#email").blur( function(){
var emailid=$("#email").val();


if(emailid.length==0)
{
$("#emailspan").hide();
}

if(emailid.search(/@/)!=-1)
{
	$("#emailspan").html("Ok");
	$("#emailspan").removeClass("info");
	$("#emailspan").removeClass("error");
	$("#emailspan").addClass("ok");
}
else
{
	$("#emailspan").html("Error");
	$("#emailspan").removeClass("info");
	$("#emailspan").removeClass("ok");
	$("#emailspan").addClass("error");
	
}

	
});







});
