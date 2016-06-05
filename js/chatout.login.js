/*
	Chatout
	chatout.login.js
*/
$(document).ready(function(){
	$('.message a').click(function() {
		$('form').animate({height: "toggle", opacity: "toggle"}, "slow");
	});
	$('#register').click(function() {
		var rusername = $('#rusername').val();
		var rpassword = $('#rpassword').val();
		var remail = $('#remail').val();
		var rinvite = $('#rinvite').val();
		alert(rusername + " " + rpassword + " " + remail + " " + rinvite);
	});
	$('#login').click(function() {
		var eusername = $('#eusername').val();
		var epassword = $('#epassword').val();
		alert(eusername + " " + epassword);
	});
});