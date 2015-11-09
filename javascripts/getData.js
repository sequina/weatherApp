define(["jquery", "lodash", "hbs", "bootstrap", "q", "firebase"], function($, _, Handlebars, bootstrap, q, Firebase) {



	// var ref = new Firebase("https://weatherproject.firebaseio.com/");

	// ref.on("value", function(snapshot) {
 //  	console.log(snapshot.val());
	// }, 	
	// function (errorObject) {
 //  	console.log("The read failed: " + errorObject.code);
	// });


	

$(document).ready(function() {
	$("#weatherstats").hide();

	$("#threeday").hide();
	$("#sevenday").hide();
});

// $(document).ready(function() {
// 	$("#frontpagelogin").on("click", function() {
// 		$("#openingpage").hide();
// 		$("#weatherstats").show();
// 	});
// });


  $("#loginButton").on("click", function(callback) {
	
	

	var zipcode = {};
	zipcode = $("#zipCode").val();
	if (zipcode.length < 5 || zipcode.length > 5 || zipcode === "") {
		alert("ENTER VALID ZIPCODE!");
		$("#threeday").hide();
		$("#sevenday").hide();
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

			$(".temp").hide();
		},
		success: function (data) {
			console.log("SUCCESS");
		},
		fail: function() {
			console.log("ERROR");
		}
	});
	
	$("#threeday").show();
	$("#sevenday").show();

});




$("#threeday").on("click", function(callback) {
	var city = {};
	city = $("#location").text();
	console.log("city", city);
	$(".temp",".weatherCondition", ".pressure", ".wind").show();
	$.ajax({
		type: "GET",
		url: "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + ",us&units=imperial&cnt=8" + "&APPID=d918f1afe69b26f495f2dc4f6e949d73",
		complete: function(data) {
			var newData = data;
			console.log("8 days", newData);
// ********TEMP************
	$("#temperature2").html(data.responseJSON.list[1].temp.max + " " + "F").show();		
	$("#temperature3").html(data.responseJSON.list[2].temp.max + " " + "F").show();
	$("#temperature4").html(data.responseJSON.list[3].temp.max + " " + "F").show();
	$("#temperature5").html(data.responseJSON.list[4].temp.max + " " + "F").hide();
	$("#temperature6").html(data.responseJSON.list[5].temp.max + " " + "F").hide();
	$("#temperature7").html(data.responseJSON.list[6].temp.max + " " + "F").hide();
	$("#temperature8").html(data.responseJSON.list[7].temp.max + " " + "F").hide();

// ************CONDITIONS************
    $("#conditions2").html(data.responseJSON.list[1].weather[0].description).show();		
	$("#conditions3").html(data.responseJSON.list[2].weather[0].description).show();
	$("#conditions4").html(data.responseJSON.list[3].weather[0].description).show();
	$("#conditions5").html(data.responseJSON.list[4].weather[0].description).hide();
	$("#conditions6").html(data.responseJSON.list[5].weather[0].description).hide();
	$("#conditions7").html(data.responseJSON.list[6].weather[0].description).hide();
	$("#conditions8").html(data.responseJSON.list[7].weather[0].description).hide();

//**************AIR PRESSURE*****************
	$("#airPressure2").html(data.responseJSON.list[1].pressure + " " + "hPa").show();	
	$("#airPressure3").html(data.responseJSON.list[2].pressure + " " + "hPa").show();
	$("#airPressure4").html(data.responseJSON.list[3].pressure + " " + "hPa").show();
	$("#airPressure5").html(data.responseJSON.list[4].pressure + " " + "hPa").hide();
	$("#airPressure6").html(data.responseJSON.list[5].pressure + " " + "hPa").hide();
	$("#airPressure7").html(data.responseJSON.list[6].pressure + " " + "hPa").hide();
	$("#airPressure8").html(data.responseJSON.list[7].pressure + " " + "hPa").hide();

// **************WIND PRESSURE*****************
	$("#windSpeed2").html(data.responseJSON.list[1].speed + " " + "MPH").show();	
	$("#windSpeed3").html(data.responseJSON.list[2].speed + " " + "MPH").show();
	$("#windSpeed4").html(data.responseJSON.list[3].speed + " " + "MPH").show();
	$("#windSpeed5").html(data.responseJSON.list[4].speed + " " + "MPH").hide();
	$("#windSpeed6").html(data.responseJSON.list[5].speed + " " + "MPH").hide();
	$("#windSpeed7").html(data.responseJSON.list[6].speed + " " + "MPH").hide();
	$("#windSpeed8").html(data.responseJSON.list[7].speed + " " + "MPH").hide();

		},
		success: function (data) {
			console.log("SUCCESS");
		},
		fail: function() {
			console.log("ERROR");
		}
	});

});






$("#sevenday").on("click", function(callback) {
	var city = {};
	city = $("#location").text();
	console.log("city", city);
	$(".temp",".weatherCondition", ".pressure", ".wind").show();
	$.ajax({
		type: "GET",
		url: "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + ",us&units=imperial&cnt=8" + "&APPID=d918f1afe69b26f495f2dc4f6e949d73",
		complete: function(data) {
			var newData = data;
			console.log("8 days", newData);
// ********TEMP************
	$("#temperature2").html(data.responseJSON.list[1].temp.max + " " + "F").show();		
	$("#temperature3").html(data.responseJSON.list[2].temp.max + " " + "F").show();
	$("#temperature4").html(data.responseJSON.list[3].temp.max + " " + "F").show();
	$("#temperature5").html(data.responseJSON.list[4].temp.max + " " + "F").show();
	$("#temperature6").html(data.responseJSON.list[5].temp.max + " " + "F").show();
	$("#temperature7").html(data.responseJSON.list[6].temp.max + " " + "F").show();
	$("#temperature8").html(data.responseJSON.list[7].temp.max + " " + "F").show();

// ************CONDITIONS************
    $("#conditions2").html(data.responseJSON.list[1].weather[0].description).show();		
	$("#conditions3").html(data.responseJSON.list[2].weather[0].description).show();
	$("#conditions4").html(data.responseJSON.list[3].weather[0].description).show();
	$("#conditions5").html(data.responseJSON.list[4].weather[0].description).show();
	$("#conditions6").html(data.responseJSON.list[5].weather[0].description).show();
	$("#conditions7").html(data.responseJSON.list[6].weather[0].description).show();
	$("#conditions8").html(data.responseJSON.list[7].weather[0].description).show();

//**************AIR PRESSURE*****************
	$("#airPressure2").html(data.responseJSON.list[1].pressure + " " + "hPa").show();	
	$("#airPressure3").html(data.responseJSON.list[2].pressure + " " + "hPa").show();
	$("#airPressure4").html(data.responseJSON.list[3].pressure + " " + "hPa").show();
	$("#airPressure5").html(data.responseJSON.list[4].pressure + " " + "hPa").show();
	$("#airPressure6").html(data.responseJSON.list[5].pressure + " " + "hPa").show();
	$("#airPressure7").html(data.responseJSON.list[6].pressure + " " + "hPa").show();
	$("#airPressure8").html(data.responseJSON.list[7].pressure + " " + "hPa").show();

// **************WIND PRESSURE*****************
	$("#windSpeed2").html(data.responseJSON.list[1].speed + " " + "MPH").show();	
	$("#windSpeed3").html(data.responseJSON.list[2].speed + " " + "MPH").show();
	$("#windSpeed4").html(data.responseJSON.list[3].speed + " " + "MPH").show();
	$("#windSpeed5").html(data.responseJSON.list[4].speed + " " + "MPH").show();
	$("#windSpeed6").html(data.responseJSON.list[5].speed + " " + "MPH").show();
	$("#windSpeed7").html(data.responseJSON.list[6].speed + " " + "MPH").show();
	$("#windSpeed8").html(data.responseJSON.list[7].speed + " " + "MPH").show();

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





	
	