<style>
		.round-button-active {
			background-color: yellow;
			border: 1px solid yellow;
		}
</style>


<script type="text/javascript">
$("label.card").on("tap", toggleCheckboxes);
	var toggleCheckboxes = function(evt){
		  var $this = $(this);
		  $(this).children(":first").toggleClass("round-button-active");
		  evt.preventDefault()
}
console.log("script is running");
</script>