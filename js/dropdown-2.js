$(document).ready(function(){

	$('div.hdskin-dropdown').each(function() {
		var $dropdown = $(this);
		
		$(".hdskin-dropdown-link", $dropdown).click(function(e) {
			  e.preventDefault();	
		  $(".hdskin-dropdown-link").not(this).removeClass('hdskin-hero-open');										
			var visibleTest =  $("div.hdskin-dropdown-container", $dropdown).is(':visible');
				$("div.hdskin-dropdown-container").hide();
				$(".hdskin-dropdown-link", $dropdown).toggleClass('hdskin-hero-open');
		  if(!visibleTest) $("div.hdskin-dropdown-container", $dropdown).toggle();
				return false;
		  });
	});

	$('html').click(function(){
		$("div.hdskin-dropdown-container").hide();
		$(".hdskin-dropdown-link").removeClass("hdskin-hero-open");
	});

		$('div.hdstock-dropdown').each(function() {
		var $dropdown = $(this);
		
		$(".hdstock-dropdown-link", $dropdown).click(function(e) {
			  e.preventDefault();	
		  $(".hdstock-dropdown-link").not(this).removeClass('hdstock-hero-open');										
			var visibleTest =  $("div.hdstock-dropdown-container", $dropdown).is(':visible');
				$("div.hdstock-dropdown-container").hide();
				$(".hdstock-dropdown-link", $dropdown).toggleClass('hdstock-hero-open');
		  if(!visibleTest) $("div.hdstock-dropdown-container", $dropdown).toggle();
				return false;
		  });
	});

	$('html').click(function(){
		$("div.hdstock-dropdown-container").hide();
		$(".hdstock-dropdown-link").removeClass("hdstock-hero-open");
	});
});