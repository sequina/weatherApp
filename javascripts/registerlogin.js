define(["jquery", "lodash", "hbs", "bootstrap", "q", "firebase"], function($, _, Handlebars, bootstrap, q, Firebase) {

// $(document).ready(function() {
//   $("#registerButton").on("click", function() {
//     var ref = new Firebase("https://weatherproject.firebaseio.com/");
//     ref.createUser({
//       email: "w@gmail.com",
//       password: "w"
//     }, function(error, userData) {
//       if (error) {
//         console.log("Error creating user:", error);
//       } else {
//         console.log("Successfully created user account with uid:", userData.uid);
//       }
//     });
//   });
// });
	

	 $(document).ready(function() {
	  $("#registerButton").on("click", function() {
	    var ref = new Firebase("https://weatherproject.firebaseio.com/");

	    ref.createUser({
	      email: $("#email").val(),
	      password: $("#password").val()
	    }, function(error, userData) {
	      if (error) {
	        switch (error.code) {
	          case "EMAIL_TAKEN":
	            console.log("The new user account cannot be created because the email is already in use.");
	            alert("EMAIL ALREADY IN USE!");
	            break;
	          case "INVALID_EMAIL":
	            alert("The specified email is not a valid email.");
	            break;
	          default:
	            console.log("Error creating user:", error);
	        }
	      } else {
	        console.log("Successfully created user account with uid:", userData.uid);
	        alert("USER ACCOUNT CREATED!");
	      }
	    });
	  });

	  $("#frontpagelogin").on("click", function() {
	  	var ref = new Firebase("https://weatherproject.firebaseio.com/");

		ref.authWithPassword({
  		  email: $("#email").val(),
  		  password: $("#password").val()
		}, function(error, authData) {
  		  if (error) {
    	   console.log("Login Failed!", error);
    	   alert("LOGIN FAILED!");
  		  } else {
    		console.log("Authenticated successfully with payload:", authData);
    		$("#openingpage").hide();
			$("#weatherstats").show();
  		}
		});

	  });
	});
  });



// $("#email").val(),
// $("#password").val()