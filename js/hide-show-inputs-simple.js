$( document ).ready(function() {
	//when checkbox values change re-evaluate
	var first = true;
	$('input[type="checkbox"][name^=Field]').change(function () {
	    var $target = $('#sub' + this.id.replace('Field', '')).toggle(this.checked);
	    if (first) {
	        $('[id^=sub]').not($target).hide();
	        first = false;
	    }
	})
});