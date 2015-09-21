//only used on intro video - hide/show video summary section on user click.
		$("#more").click(function() {
			$("#more p").toggleClass( "active" );
			$("#hdskinStepsWrapper").slideToggle("fast");
		});