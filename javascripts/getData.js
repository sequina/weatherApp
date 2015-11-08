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

			$("#location").html(Location);
			$("#temperature").html(Temperature + " " + "F");
			$("#conditions").html(Conditions);
			$("#airPressure").html(AirPressure + " " + "hPa");
			$("#windSpeed").html(WindSpeed + " " + "MPH");
		},
		success: function (data) {
			console.log("SUCCESS");
		},
		fail: function() {
			console.log("ERROR");
		}
	});


});


$("#threeday").on("click", function(callback) {
	var city = {};
	city = $("#location").text();
	console.log("city", city);
	$.ajax({
		type: "GET",
		url: "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + ",us&units=imperial&cnt=8" + "&APPID=d918f1afe69b26f495f2dc4f6e949d73",
		complete: function(data) {
			var newData = data;
			console.log("8 days", newData);
// ********TEMP************
	$("#temperature2").html(data.responseJSON.list[1].temp.max);		
	$("#temperature3").html(data.responseJSON.list[2].temp.max);
	$("#temperature4").html(data.responseJSON.list[3].temp.max);
	$("#temperature5").html(data.responseJSON.list[4].temp.max);
	$("#temperature6").html(data.responseJSON.list[5].temp.max);
	$("#temperature7").html(data.responseJSON.list[6].temp.max);
	$("#temperature8").html(data.responseJSON.list[7].temp.max);

// ************CONDITIONS************
    $("#conditions2").html(data.responseJSON.list[1].weather[0].description);		
	$("#conditions3").html(data.responseJSON.list[2].weather[0].description);
	$("#conditions4").html(data.responseJSON.list[3].weather[0].description);
	$("#conditions5").html(data.responseJSON.list[4].weather[0].description);
	$("#conditions6").html(data.responseJSON.list[5].weather[0].description);
	$("#conditions7").html(data.responseJSON.list[6].weather[0].description);
	$("#conditions8").html(data.responseJSON.list[7].weather[0].description);

//**************AIR PRESSURE*****************
	$("#airPressure2").html(data.responseJSON.list[1].pressure);	
	$("#airPressure3").html(data.responseJSON.list[2].pressure);
	$("#airPressure4").html(data.responseJSON.list[3].pressure);
	$("#airPressure5").html(data.responseJSON.list[4].pressure);
	$("#airPressure6").html(data.responseJSON.list[5].pressure);
	$("#airPressure7").html(data.responseJSON.list[6].pressure);
	$("#airPressure8").html(data.responseJSON.list[7].pressure);

// **************WIND PRESSURE*****************
	$("#windSpeed2").html(data.responseJSON.list[1].speed);	
	$("#windSpeed3").html(data.responseJSON.list[2].speed);
	$("#windSpeed4").html(data.responseJSON.list[3].speed);
	$("#windSpeed5").html(data.responseJSON.list[4].speed);
	$("#windSpeed6").html(data.responseJSON.list[5].speed);
	$("#windSpeed7").html(data.responseJSON.list[6].speed);
	$("#windSpeed8").html(data.responseJSON.list[7].speed);

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





	
	