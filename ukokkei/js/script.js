/***************************************************************************
 *
 * script.js
 *
 ***************************************************************************/
$(document).ready(function() {
    /*=============================================================*/
    /* Hover Button for All Pages */
    $('.hoverJS').hover(function() {
        $(this).stop().fadeTo(100, 0.8);
    }, function() {
        $(this).stop().fadeTo(100, 1);
    });
    /*=============================================================*/
    // menu dropdown
    // $("ul li").hover(function() {
    //     $(this).children('ul').stop().slideToggle();
    // });
    // menu dropdown div out ul
    $('.menu li a').mouseover(function() {
        var id = $(this).attr('title');
        var $currentWidget = $('#' + id);
        $currentWidget.stop().slideDown().siblings('.hove').stop().slideUp();
    });
    $('.header_menu').mouseleave(function() {
        $('.hove').stop().slideUp();
    });
    /*=============================================================*/
    // menu responsive
    $(".menu_click").click(function() {
        $("#menu").stop().slideToggle();
    });
    if (window.screen.width <= 768) {
        var top = $("#header").outerHeight();
        $("#menu").css('top', top + 'px');
    }
    $(window).resize(function() {
        if (window.screen.width <= 768) {
            var top = $("#header").outerHeight();
            $("#menu").css('top', top + 'px');
        }
        if (window.screen.width > 768) {
            $('#menu').show();
        } else {
            $('#menu').hide();
        }
    });
    /*=============================================================*/
    // scrolltotop not position fixed
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    //Click event to scroll to top
    $('.scrollToTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
    /*=============================================================*/
    //Click event to scroll to top
    jQuery(document).ready(function($) {
        if ($(".backtop").length > 0) {
            $(window).scroll(function() {
                var e = $(window).scrollTop();
                if (e > 300) {
                    $(".backtop").show(400)
                } else {
                    $(".backtop").hide(400)
                }
            });
            $(".backtop").click(function() {
                $('body,html').animate({
                    scrollTop: 0
                })
            })
        }
    });
    /*=============================================================*/
    // active menu
    $('nav-menu li a').click(function() {
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
    /*=============================================================*/
    // bxslider-only
    $('.bxslider').bxSlider({
        minSlides: 1,
        maxSlides: 5,
        auto: true,
        pager: false,
        slideWidth: 260,
        slideMargin: 10
    });
    //bxslider-multiple slideshows
    $('#slider1').bxSlider({
        auto: true,
        pager: true,
        slideWidth: 550,
    });
    /*=============================================================*/
    var maxHeight = -1;
    $('.list li img').each(function() {
        maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
    });
    $('.list li img').each(function() {
        $(this).css('min-height', maxHeight + 'px');
    });
});
