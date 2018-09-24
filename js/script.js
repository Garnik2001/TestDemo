$(document).ready(function () {


    $(document).scroll(function () {

        var scroll = $(window).scrollTop();
        if (scroll > 150) {
            $('.navbar-nav > li').css({
                "margin": "5px 10px",
                "transition": "0.4s"
            });
            $('#logo').css({
                "top": "15px",
                "transition": "0.4s"
            });
            $('.bg-light ').css({
                "transition": "0.2s",
                "opacity": "0.9"
            });
        }
        else {

            $('.navbar-nav > li').css({
                "margin": "10px 20px",
                "transition": "0.4s"
            });
            $('#logo').css({
                "top": "20px"
            });
            $('.bg-light ').css({
                "transition": "0.3s",
                "opacity": "0.8"
            });
            $('.navbar-nav > li:nth-child(4)').css({
                "margin-left": "80px",

            });


        }

    });

    $('.nav-item').mouseenter(function () {

        $(this).css({

            "transform": "scale(1.1)",
            "transition": "0.5s",
            "color": "red"


        });

    });
    $('.nav-item').mouseleave(function () {

        $(this).css({

            "transform": "scale(1)",
            "transition": "0.5s",
            "color": "blue"


        });

    });
});