define(["jquery", "lodash", "hbs", "bootstrap", "q", "firebase"], function($, _, Handlebars, bootstrap, q, Firebase) {



	var ref = new Firebase("https://weatherproject.firebaseio.com/");

	ref.on("value", function(snapshot) {
  	console.log(snapshot.val());
	}, 	
	function (errorObject) {
  	console.log("The read failed: " + errorObject.code);
	});


	// var getWeather = {};
	var zipcode = $("#zipCode").val();

	$.ajax({
   		url: "api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ",us",
  		data: {
      		format: 'json'
   			  },
   		error: function() {
      		(console.log("Error retrieving data"));
   			  },
   		type: 'GET'
	});
	
	