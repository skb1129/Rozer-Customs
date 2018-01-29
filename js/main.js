//jQuery to toggle the navbar on scroll
$(window).scroll(function () {
    if ($(".navbar").offset().top > 400) {
        $(".top-nav:hidden").slideDown("slow");
    } else {
        $(".top-nav:visible").slideUp("slow");
    }
    $('.navbar-collapse').collapse('hide');
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(document).ready(function () {
    $('a.page-scroll').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var target = $(this).attr('href');
        $(target).velocity('scroll', {
            duration: 1000,
            easing: [0.17, 0.67, 0.25, 1.02]
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
    }, {
        duration: 0
    });
    $('#intro-logo').velocity({
        top: "45%",
        left: "50%",
        translateX: "-50%",
        translateY: "-50%",
        opacity: 1
    }, {
        duration: 0
    });
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
            }, [0.17, 0.67, 0.25, 1.02]);
            $('#intro-logo').velocity({
                width: '+=75px'
            }, [0.17, 0.67, 0.25, 1.02]);
        } else {
            $('.intro-logo').velocity({
                height: '75px',
                width: '275px'
            }, [0.17, 0.67, 0.25, 1.02]);
            $('#intro-logo').velocity({
                width: '+=25px'
            }, [0.17, 0.67, 0.25, 1.02]);
        }
        setTimeout(function () {
            $('body').css({
                overflow: 'auto'
            });
        }, 2000);
    }, 1000);
});

// Reach page top on reload
$(window).on('beforeunload', function () {
    $(window).scrollTop(0);
});

// Auto-Close Dropdown Menu
$('.page-scroll').click(function () {
    $('.navbar-collapse').collapse('hide');
});

var images = {
    dexter: 3,
    cafe_racer: 4,
    the_bat: 4,
    the_bull: 4,
    popstar: 4,
    ultimate_hulk: 4,
    gangster: 1,
    green_hornet: 5,
    blue_devil: 4,
    shotgun: 3,
    foghorn: 4,
    ironclad: 4
};

// Carousel Filler.
$('.overlay').click(function () {
    var $carousel = $('.carousel-inner:first');
    var imgName = $(this).prev().attr('alt');
    $carousel.empty();
    $carousel.html(
        `<div class="item active">
            <img src="img/${imgName}/1.jpg" alt="${imgName}-1">
        </div>`
    );
    for (var index = 2; index <= images[imgName]; index++) {
        $carousel.append(
            `<div class="item">
                <img src="img/${imgName}/${index}.jpg" alt="${imgName}-${index}">
            </div>`
        );
    }

    $('#image-modal').modal();
});

// Service Worker Register.
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('./sw.js')
        .then(function (registration) {
            console.log(registration);
        })
        .catch(function (e) {
            console.error(e);
        })
} else {
    console.log('Service Worker is not supported in this browser.');
}
