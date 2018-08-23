   var parked = false;
   var notparked = false;

	$(document).ready(function(){
		loadDoc();
		setInterval(loadDoc, 1000);
	});

	function loadDoc() {
	  $.getJSON("/parks",function(json){
	    parkjson = json;
	    // var last = (last=Object.keys(json))[last.length-1];
	    // var lastElement = jsonObject.parks[jsonObject.parks.length-1].status
	    // JSONObject tot_obj = parkjson.getJSONObject(parkjson.length()-1);
	    lastobj = parkjson[parkjson.length-1]
	    console.log(lastobj.status)

	    if (lastobj.status == true)
	    {
	    	 notparked = false;
	    	 document.getElementById("dem1").className = "img-circle btn btn-danger";
    	     document.getElementById("demo1").innerHTML = "<div style=\"color:white;\">Parked</p>";
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
