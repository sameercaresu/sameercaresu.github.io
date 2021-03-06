$(function () {
    // firts thing is load home.html by default to main-content div
    $("#main-content").load("home.html");

    $(window).scroll(function () {
        if ($(".navbar").offset().top > 50) {
            console.log('hi');
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });
    $("#menu-close").click(function (e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    // loading html pages for home and blog
    $('#home').click(function () {
        $("#main-content").load("home.html");
    });
    $('#blog').click(function () {
        $("#main-content").load("blog.html");
    });
});