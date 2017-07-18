// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .


	$(document).ready(function(){
		loadDoc();
		setInterval(loadDoc, 1000);
	});
	
	function loadDoc() {
	  $.getJSON("/parks",function(json){
	  //xhttp.open("GET", "state3.txt function(json){
	    parkjson = json;
	    // var last = (last=Object.keys(json))[last.length-1];
	    // var lastElement = jsonObject.parks[jsonObject.parks.length-1].status
	    console.log("2222222222222222222222222")
	   
	    // JSONObject tot_obj = parkjson.getJSONObject(parkjson.length()-1);
	    lastobj = parkjson[parkjson.length-1]
	    console.log(lastobj.status)
	    if (lastobj.status == true)
	    {
	    	 document.getElementById("dem1").className = "img-circle btn btn-danger";
    	     document.getElementById("demo1").innerHTML = "<div style=\"color:red;\">Parked</p>";
    	     console.log("777777777777777777777777777777777777")
	    }
	    else
	    {
	    	document.getElementById("dem1").className = "img-circle btn btn-success";
     		document.getElementById("demo1").innerHTML = "<div style=\"color:green;\">Free</p>";
     		console.log("99999999999999999999999999999999999999")
	    }
	});
	}

	
