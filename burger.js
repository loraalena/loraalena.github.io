$(document).on('ready', function() {
	

	$(document).mouseup(function (e){
	let burger = $("#menu-burger");
		if(!burger.is(e.target) && burger.has(e.target).length === 0){
		$("#menu, .open, .close-btn").toggleClass("invisible");
		}
	})
	


});