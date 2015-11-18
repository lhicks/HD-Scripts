$(document).ready(function(){	
	setTimeout(function() {
		console.log("I'm ready");
		$('<style type="text/css"> .round-button-active { background-color: yellow; } </style>').appendTo(document.head);

		$( "label.card" ).on( "click", function() {
  		//console.log( $( this ).text() );
				  /* var $this = $(this);
				  $('label.card').not(this).children().removeClass('round-button-active');
				  $(this).children(":first").toggleClass("round-button-active");		  
		  alert('Clicked'); */
			
			$(".Shipping .round-button").css("background-color", "#fff");
			$(this).find("> .round-button").css("background-color", "yellow");
//alert($(this).find("> .round-button").css("background-color"));
		});	
	}, 5000);
});