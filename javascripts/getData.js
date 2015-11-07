define(["jquery", "lodash", "hbs", "bootstrap", "q", "firebase"], function($, _, Handlebars, bootstrap, q, Firebase) {



	var ref = new Firebase("https://weatherproject.firebaseio.com/");

	ref.on("value", function(snapshot) {
  	console.log(snapshot.val());
	}, 	
	function (errorObject) {
  	console.log("The read failed: " + errorObject.code);
	});


	// var getWeather = {};
	var zipcode = 37207;

	$.ajax({
   		url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ",us" + "&APPID=d918f1afe69b26f495f2dc4f6e949d73",
  		data: {
      		format: 'json'
   			  },
   		done: function(data2){
   			console.log(data2);
   		},
   		error: function() {
      		console.log("Error");
   			  },
   		type: 'GET'
	});

});
	
	