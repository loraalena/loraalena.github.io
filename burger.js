$(document).on('ready', function () {

    function showMenu() {
        $("#menu, .close-btn").removeClass("invisible");
        $(".open").addClass("invisible");
    }

    function hideMenu() {
        $("#menu, .close-btn").addClass("invisible");
        $(".open").removeClass("invisible");
    }

    $(document).click(function (e) {
        let currentElement = e.target;
        if (currentElement === $(".open")[0]) {
            showMenu();
        } else {
            hideMenu();
        }
    })


});