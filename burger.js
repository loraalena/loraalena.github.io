$(document).on('ready', function() {
	let burger = $("#burger");
	console.log(burger);

	$("#burger").click(function(){
		$("#menu").toggleClass("anvisible");
	})


	$("#menu a").click(function(){
			$("#menu").toggleClass("anvisible");
		})
});