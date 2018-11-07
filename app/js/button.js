$(".button").click(function() {
    $('html,body').animate({
        scrollTop: $(".copy").offset().top},
        'slow');
});
