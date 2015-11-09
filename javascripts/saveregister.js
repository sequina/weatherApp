define(["jquery", "lodash", "hbs", "bootstrap", "q", "firebase"], function($, _, Handlebars, bootstrap, q, Firebase) {

// SAVE
	$("#save").on("click", function() {
		console.log("save attempt");
		var ref = new Firebase("https://weatherproject.firebaseio.com/");


		var usersRef = ref.child("users");
		usersRef.set({
		  location: {$("#location").text()
		  	},
		  temperature:{$("#temperature").text()
			},
		  conditions: {$("#conditions").text()
			},
		  airpressure: {$("#airPressure").text()
			},
		  windspeed: {$("#windSpeed").text()
			}
		  });
	});




// RETRIEVE
	$("#save").on("click", function() {

			var ref = new Firebase("https://weatherproject.firebaseio.com/");
		// Attach an asynchronous callback to read the data at our posts reference
		ref.on("value", function(snapshot) {
		  console.log(snapshot.val());
		}, function (errorObject) {
		  console.log("The read failed: " + errorObject.code);
		});
	});





});

