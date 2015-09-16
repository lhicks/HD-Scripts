$( document ).ready(function() {

//this script grab the values being passed into the url and prefills the form with them

//declare the variables we want to use
var fname = GetQueryStringParams('field1');
var lname = GetQueryStringParams('field148');
var email = GetQueryStringParams('field149');
var ponum = GetQueryStringParams('field5');

	//grab and parse the var values from the url
	function GetQueryStringParams(sParam) {

	    var sPageURL = window.location.search.substring(1);
	    var sURLVariables = sPageURL.split('&');
	    for (var i = 0; i < sURLVariables.length; i++)

	    {
	        var sParameterName = sURLVariables[i].split('=');
	        if (sParameterName[0] == sParam)

	        {
	            return sParameterName[1];

	        }
	    }
	}

	// if the var values are not empty, fill form with them
	if(fname === undefined){
		//do nothing
	} else {
		$("form input#Field1").val(decodeURI(fname));
	}

	if(lname === undefined){
		//do nothing
	} else {
		$("form input#Field148").val(decodeURI(lname));
	}

	if(email === undefined){
		//do nothing
	} else {
		$("form input#Field149").val(decodeURI(email));
	}

	if(ponum === undefined){
		//do nothing
	} else {
		$("form input#Field5").val(decodeURI(ponum));
	}

});