define(["jquery", "lodash", "hbs", "bootstrap", "q", "firebase"], function($, _, Handlebars, bootstrap, q, Firebase) {



	var ref = new Firebase("https://weatherproject.firebaseio.com/");

	ref.on("value", function(snapshot) {
  	console.log(snapshot.val());
	}, 	
	function (errorObject) {
  	console.log("The read failed: " + errorObject.code);
	});

});
	