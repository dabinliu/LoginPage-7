/*
	Chatout
	chatout.login.js
*/
$(document).ready(function(){
	$('.message a').click(function(){
		$('form').animate({height: "toggle", opacity: "toggle"}, "slow");
	});
	$('#register').click(function() {
		alert("You registered");
	});
	$('#login').click(function() {
		alert("You logged in");
	});
});