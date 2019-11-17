$(document).on('ready', function() {
	let burger = $("#burger");
	console.log(burger);

	$("#burger").click(function(){
		$("#menu-burger").toggleClass("anvisible");
	})

	
	$("#menu-burger a").click(function(){
			$("#menu-burger").toggleClass("anvisible");
		})
});