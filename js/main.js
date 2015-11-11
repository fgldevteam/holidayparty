$(document).ready(function() {

	//form submission:
	$("#submit").click(function(){
		return false;
	});
	
	$("#submit").click(function(){					   				   
		$(".error").hide();
		$("label").css('color', '#fff');

		var hasError = false;
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		
		var fnameVal = $("#firstname").val();
		var lnameVal = $("#lastname").val();
		var emailVal = $("#email").val();
		// var guestVal = $('input[name=guest]:checked', '#regform').val()		
		var guestVal = $('#guest').is(':checked')
		var dietVal = $("#diet").val();


		//validation
		if(fnameVal == '') {
			$("#label-first").css('color', '#c00');
			hasError = true;
			$(window).scrollTop(0);
		}

		if(lnameVal == '') {
			$("#label-last").css('color', '#c00');
			hasError = true;
			$(window).scrollTop(0);
		}

		if(emailVal == '') {
			$("#label-email").css('color', '#c00')
			hasError = true;
		} else if(!emailReg.test(emailVal)) {	
			$("#label-email").css('color', '#c00')
			hasError = true;
		}	


					
		if(hasError == false) {
			//$(this).hide();
			//$("#sendEmail li.buttons").append('<img src="img/loading.gif" alt="Loading" id="loading" />');
			$(this).hide();
			$("#sendemail").append('<img style="height: 15px; width: 128px;" src="/img/ajax-loader.gif" alt="Sending" id="sending" />');
			console.log( fnameVal + ", "+ lnameVal + ", "+ emailVal + ", "+ dietVal + ", "+ guestVal);
			$.post("send.php",
   				{ fname: fnameVal,
   				  lname: lnameVal, 
   				  email: emailVal,
   				  diet: dietVal,
   				  guest: guestVal
   				},
   					function(data){
   						$("#regform").before("<div id='thankyou'><center><img src='/img/thankyou.png' /></center></div>");	

						$("#regform").fadeOut("normal", function() {				  						
							$( "#thankyou" ).fadeIn( "slow", function() {											
							   
							});											
						});
   					}
				 );
		}			
		
		return false;
	});

});	