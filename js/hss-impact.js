$(document).ready(function() {
	//hide the breadcrumb nav
	$("#BreadCrumb").remove();

	//hide/show more info section on user click.
	$(".actionLink").click(function() {
		$("#more").slideToggle("fast");
		$(".actionLink").hide();
	});

	$(".error").appendTo(".subscribe");

	$("#label#ctl00_Content_ctl00_txtName-error").css("border","1px solid red");
	$("input.subscribe").css("padding-top","200px");

});