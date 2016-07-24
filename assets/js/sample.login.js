/*
	Chatout
	chatout.login.js
*/
var isPolicyHidden;

$(document).ready(function() {
	
	isPolicyHidden = true;
	$('#ourpolicy').hide();
	
	$('.form .message a').click(function() {
		$('form').animate({height: "toggle", opacity: "toggle"}, "slow");
		$('#ourpolicy').fadeOut("slow");
	});
	
	$('.policies a').click(function() {
		isPolicyHidden = !isPolicyHidden;
		if(isPolicyHidden) {
			$('#ourpolicy').fadeIn("slow");
		}
		else {
			$('#ourpolicy').fadeOut("slow");
		}
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