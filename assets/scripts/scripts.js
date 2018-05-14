jQuery(function($) {

    var $nav = $('.food-menu-nav');
    var $win = $(window);
    var winH = $win.height()-60;   // Get the window height


    $win.on("scroll", function () {
        if ($(this).scrollTop() > winH ) {
            $nav.addClass("stick");
        } else {
            $nav.removeClass("stick");
        }
    }).on("resize", function(){ // If the user resizes the window
       winH = $(this).height(); // this gets new height value
    });

});
