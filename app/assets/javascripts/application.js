   var parked = false;
   var notparked = false;

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
	    	 notparked = false;
	    	 document.getElementById("dem1").className = "img-circle btn btn-danger";
    	     document.getElementById("demo1").innerHTML = "<div style=\"color:white;\">Parked</p>";
    	     console.log("777777777777777777777777777777777777");
    	     if (!parked) {
	    	     var msg = new SpeechSynthesisUtterance('Parking spot taken');
	    	     speechSynthesis.cancel();
		    	 speechSynthesis.speak(msg);
		    	 parked = !parked;
    	     }
    	   
    	     
	    }
	    else
	    {
	    	parked = false;
	    	document.getElementById("dem1").className = "img-circle btn btn-success";
     		document.getElementById("demo1").innerHTML = "<div style=\"color:white;\">Free</p>";
     		console.log("99999999999999999999999999999999999999");
     		 if (!notparked)
    	     {
	     		 var msg = new SpeechSynthesisUtterance('Spot available for parking');
	     		 speechSynthesis.cancel();
		    	 speechSynthesis.speak(msg);
		    	 notparked = !notparked;
    	     }
	    }
	});
	}


// testing speech testing speech why is this not working when included in application.js,however works best when included on the html page???? needs to be debugged

	// $('#speak').click(function(){
	     
	//       var msg = new SpeechSynthesisUtterance('Obstacle ahead');
	//       speechSynthesis.speak(msg);
	// })

// testing speech testing speech
	
