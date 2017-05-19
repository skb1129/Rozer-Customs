//jQuery to toggle the navbar on scroll
$(window).scroll(function () {
    if ($(".navbar").offset().top > 400) {
        $(".top-nav:hidden").slideDown("slow");
    } else {
        $(".top-nav:visible").slideUp("slow");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $(document).on('click', 'a.page-scroll', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//Intro Wrapper
$(window).on('load', function(){
    setTimeout(function(){
        $('.intro-logo').animate({
            height: '150px',
            width: '500px'
        });
        setTimeout(function(){
            $('body').css({
                overflow: 'auto'
            });
        },2000);
    },1000);
});