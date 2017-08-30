/*jslint browser: true*/
/*global $, jQuery, alert*/

//jQuery to toggle the navbar on scroll
$(window).scroll(function () {
    "use strict";
    if ($(".navbar").offset().top > 400) {
        $(".top-nav:hidden").slideDown("slow");
    } else {
        $(".top-nav:visible").slideUp("slow");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    "use strict";
    $(document).on('click', 'a.page-scroll', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//jQuery for Shuffle Letters
$(document).ready(function () {
    "use strict";
    $('h1').on('inview', function (event, isInView) {
        if ($(this).css('opacity') == 0) {
            if (isInView) {
                $(this).shuffleLetters();
                $(this).css('opacity', '1');
            }
        }
    });
});

//Intro Wrapper
$(window).on('load', function () {
    "use strict";
    setTimeout(function () {
        if ($(window).width() > 767) {
            $('.intro-logo').animate({
                height: '125px',
                width: '500px'
            });
            $('#intro-logo').animate({
                width: '+=75px'
            });
        } else {
            $('.intro-logo').animate({
                height: '75px',
                width: '275px'
            });
            $('#intro-logo').animate({
                width: '+=25px'
            });
        }
        setTimeout(function () {
            $('body').css({
                overflow: 'auto'
            });
        }, 2000);
    }, 1000);
});

//Reach Page Top on Reload
$(window).on('beforeunload', function () {
    "use strict";
    $(window).scrollTop(0);
});
