$(document).ready(function () {
    $("header>img").click(function () {
        $('html,body').animate({
            scrollTop: $('h1').offset().top
        }, 1700);
    });
});
