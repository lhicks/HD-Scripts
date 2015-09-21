$(document).ready(function(){

	$('div.dropdown').each(function() {
		var $dropdown = $(this);
		
		$("a.dropdown-link", $dropdown).click(function(e) {
			  e.preventDefault();	
		  $("a.dropdown-link").not(this).removeClass('active');										
			var visibleTest =  $("div.dropdown-container", $dropdown).is(':visible');
				$("div.dropdown-container").hide();
				$("a.dropdown-link", $dropdown).toggleClass('active');
		  if(!visibleTest) $("div.dropdown-container", $dropdown).toggle();
				return false;
		  });
	});

	$('html').click(function(){
		$("div.dropdown-container").hide();
		$("a.dropdown-link").removeClass("active");
	});
	
	
		$("#hdskin-faqs-ordering").click(function() {
			$("#hdskin-faqs-ordering .hdskin-faq-headline").toggleClass( "headline-active" );
			$("#hdskin-faqs-questions-ordering").slideToggle("fast");
		});
		
		$("#hdskin-faqs-maintenance").click(function() {
			$("#hdskin-faqs-maintenance .hdskin-faq-headline").toggleClass( "headline-active" );
			$("#hdskin-faqs-questions-maintenance").slideToggle("fast");
		});
		
		$("#hdskin-faqs-products").click(function() {
			$("#hdskin-faqs-products .hdskin-faq-headline").toggleClass( "headline-active" );
			$("#hdskin-faqs-questions-products").slideToggle("fast");
		});
	

});


// html included here for reference on building dom 
<html>
<div class="dropdown">
<a class="dropdown-link inactive" href="#">
<p><strong>Q:</strong> Can I send a system back to be re-glued? </p>
</a>
<div class="dropdown-container" style="display: none;">
<p><strong>A:</strong> Not at this time.</p>
</div><!--dropdown-container--> 
</div><!--dropdown-->
</html>