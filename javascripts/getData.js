define(["jquery", "lodash", "hbs", "bootstrap", "q", "firebase"], function($, _, Handlebars, bootstrap, q, Firebase) {



	var ref = new Firebase("https://weatherproject.firebaseio.com/");

	ref.on("value", function(snapshot) {
  	console.log(snapshot.val());
	}, 	
	function (errorObject) {
  	console.log("The read failed: " + errorObject.code);
	});


	// var getWeather = {};
	

	// $("#loginButton").on("click", function() {
	// 	$.ajax({
 //   		url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ",us" + "&APPID=d918f1afe69b26f495f2dc4f6e949d73",
 //  		data: {
 //      		format: 'json'
 //   			  },
 //   		done: function(data2){
 //   			console.log(data2);
 //   		},
 //   		error: function() {
 //      		console.log("Error");
 //   			  },
 //   		type: 'GET'
	//   });
 //    });

	

	$("#loginButton").on("click", function(callback) {
	var zipcode = {};
	zipcode = $("#zipCode").val();
	if (zipcode.length < 5 || zipcode.length > 5 || zipcode === "") {
		alert("ENTER VALID ZIPCODE!");
	};
	$.ajax({
		type: "GET",
		url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ",us&units=imperial" + "&APPID=d918f1afe69b26f495f2dc4f6e949d73",
		complete: function(data) {
			var Data = data;
			console.log("Data", Data);
			
			var Location = data.responseJSON.name;
			console.log("location", data.responseJSON.name);
			
			var Temperature = data.responseJSON.main.temp;
			console.log("temperature", data.responseJSON.main.temp);

			var Conditions = data.responseJSON.weather[0].description;
			console.log("conditions", data.responseJSON.weather[0].description);

			var AirPressure = data.responseJSON.main.pressure;
			console.log("Air Pressure", data.responseJSON.main.pressure);

			var WindSpeed = data.responseJSON.wind.speed;
			console.log("Wind Speed", data.responseJSON.wind.speed);

			$("#location").html(" " + Location);
			$("#temperature").html(" " + Temperature + " " + "F");
			$("#conditions").html(" " + Conditions);
			$("#airPressure").html(" " + AirPressure + " " + "hPa");
			$("#windSpeed").html(" " + WindSpeed + " " + "MPH");
		},
		success: function (data) {
			console.log("SUCCESS");
		},
		fail: function() {
			console.log("ERROR");
		}
	});
});



// console.log("data.responseText", data.responseText);


});





	
	