setTimeout(function() {
    $.get("https://salekit.io/globalaction/solution_menu_html", function( content ) {
        $("ul.solution_menu .menu-drop").html(content);
    });
}, 500);
$(document).on("click", "#solution_button", function() {
    $(".menu-drop").toggle();
});


