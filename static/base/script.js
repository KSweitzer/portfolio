$(document).ready(function () {
    // Smooth scroll to anchor links
    $('a[href^="#"]').on('click', function (event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            var offset = target.offset().top - $('nav').outerHeight();
            $('html, body').stop().animate({
                scrollTop: offset
            }, 1000);
        }
    });
});
