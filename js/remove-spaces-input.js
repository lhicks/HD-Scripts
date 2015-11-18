$(document).ready(function(){
	$('#ctl00_Content_ctl00_txtName').keyup(function() {
		$(this).val($(this).val().replace(/ +?/g, ''));
	});
});