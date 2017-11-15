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
			//console.log( fnameVal + ", "+ lnameVal + ", "+ emailVal + ", "+ dietVal + ", "+ guestVal);
			$.post("send.php",
   				{ fname: fnameVal,
   				  lname: lnameVal, 
   				  email: emailVal,
   				  diet: dietVal,
   				  guest: guestVal
   				},
   					function(data){
   						$("#regform").before("<div id='thankyou'><center><img src='/img/thankyou2.png' /></center></div>");	

						$("#regform").fadeOut("normal", function() {				  						
							$( "#thankyou" ).fadeIn( "slow", function() {											
							   
							});											
						});
   					}
				 );
		}			
		
		return false;
	});



	$("#checkregbutton").click(function(){
		return false;
	});

	$("#checkregbutton").click(function(){					   				   
		$(".error").hide();
		$("label").css('color', '#fff');

		var hasErrorCheck = false;
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		
		var checkemailVal = $("#checkemail").val();
	
		if(checkemailVal == '') {
			$("#label-checkemail").css('color', '#c00')
			hasErrorCheck = true;
		} else if(!emailReg.test(checkemailVal)) {	
			$("#label-checkemail").css('color', '#c00')
			hasErrorCheck = true;
		}	


					
		if(hasErrorCheck == false) {
			
			$(this).hide();

			$.ajax({
			    url: "checkreg.php",
			    data: {
			        email: checkemailVal
			    },
			    success: function(data) {
   						//console.log("data?" + data);
   						resp = $.parseJSON(data);
//   						console.log(resp);

   						if(resp.length > 0){

   							var datastring;
   							$(resp).each(function(index, value){
 //  								console.log(value);
   								datastring = value.first + " " + value.last + "<br />";
   								datastring += value.email + "<br />";
   								datastring += "Guest: " + value.guest + "<br />";
   								datastring += "Dietary Restrictions: " + value.diet;
   							});

   							$("#checkreg").before("<div id='regresults'><center><p>"+datastring+"</p></center></div>");	

							$("#checkreg").fadeOut("normal", function() {				  						
								$( "#regresults" ).fadeIn( "slow", function() {											
								   
								});											
							});
   						} else {
							$("#checkreg").before("<div id='regresults'><center><h2>No Registration Found...</h2><p>Please re-register</p></center></div>");	
							$("#checkreg").fadeOut("normal", function() {				  						
								$( "#regresults" ).fadeIn( "slow", function() {											
								   
								});											
							});						
   						}
			    }
			});		


		}			
		
		return false;
	});	

});	