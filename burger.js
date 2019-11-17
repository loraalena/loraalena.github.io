$(document).on('ready', function() {
	let burger = $("#burger");
	console.log(burger);

	$("#burger").click(function(){
		$("#menu").toggleClass("invisible");
	})


	$("#menu a").click(function(){
			$("#menu").toggleClass("invisible");
		})
});