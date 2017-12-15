//jQuery to toggle the navbar on scroll
$(window).scroll(function () {
    if ($(".navbar").offset().top > 400) {
        $(".top-nav:hidden").slideDown("slow");
    } else {
        $(".top-nav:visible").slideUp("slow");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(document).ready(function () {
    $('a.page-scroll').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var target = $(this).attr('href');
        $(target).velocity('scroll', {
            duration: 1000,
            easing: [.17, .67, .25, 1.02]
        });
    });
});

//jQuery for Shuffle Letters
$(document).ready(function () {
    $('.intro-logo').velocity({
        top: "50%",
        left: "50%",
        translateX: "-50%",
        translateY: "-50%"
    }, {duration: 0});
    $('#intro-logo').velocity({
        top: "45%",
        left: "50%",
        translateX: "-50%",
        translateY: "-50%",
        opacity: 1
    }, {duration: 0});
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
    setTimeout(function () {
        if ($(window).width() > 767) {
            $('.intro-logo').velocity({
                height: '125px',
                width: '500px'
            }, [.17, .67, .25, 1.02]);
            $('#intro-logo').velocity({
                width: '+=75px'
            }, [.17, .67, .25, 1.02]);
        } else {
            $('.intro-logo').velocity({
                height: '75px',
                width: '275px'
            }, [.17, .67, .25, 1.02]);
            $('#intro-logo').velocity({
                width: '+=25px'
            }, [.17, .67, .25, 1.02]);
        }
        setTimeout(function () {
            $('body').css({
                overflow: 'auto'
            });
        }, 2000);
    }, 1000);
});


$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});
