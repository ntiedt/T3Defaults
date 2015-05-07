// Default JS
jQuery.noConflict();

function dbg(el) {
    if (jQuery.debug) {
        jQuery.debug(el);
    }
}

jQuery(function ($) {
    var the_overlay;
    if (typeof isTouch != 'undefined') {
        if (isTouch == 1) {
            isTouch = true;
        } else {
            isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
        }
        if (isTouch == true) $('body').addClass('touch');
    }

    $(document).keydown(function (e) {
        // Shift / Strg / Alt / D
        if (e.which === 68 && e.ctrlKey && e.altKey && e.shiftKey) {
            if (debug == 1) {
                window.location.href = document_url;
            } else {
                window.location.href = debug_url;
            }
            return false;
        }
    });

    /* SETUP: Ajax */
    if (typeof ajax_param != 'undefined') {
        $.ajaxSetup({
            data: {'type': ajax_param}
        });
    }

    /* EVENTS (nav_main / nav_header) */
    $('.nav_main ul.level-1 > li').add('.nav_header ul.level-1 > li').hover(
        function () {
            $(this).addClass('hover');
            $(this).find('ul.level-2').position({
                of: $(this).find('a.level-1'),
                my: 'left top',
                at: 'left bottom',
                collision: 'flipfit'
            });
        }, function () {
            $(this).removeClass('hover');
        }
    );

    /* FUNC: Jobs: Uebergabe */
    if ($('* a.internal-job').length > 0) {
        href = $('* a.internal-job').attr('href');
        field = '&job=';
        job = $('.news-single-item h1:first').text();
        $('* a.internal-job').attr('href', encodeURI(href + field + job));
        $('form.powermail_form .powermail_field:first').val(job);
    }

    /* COLORBOX: http://www.jacklmoore.com/colorbox */
    if (typeof lightboxEnabled != 'undefined') {
        if (lightboxEnabled == 1) {
            if (jQuery().colorbox) {
                $('a.lightbox').colorbox({
                    onOpen: function () {
                        if ($('.big_title').length < 1) {
                            $('#cboxTopCenter').append(big_title + logo);
                        }
                    },
                    'maxWidth': maxWidth,
                    'top': top,
                    'current': current,
                    'previous': previous,
                    'next': next,
                    'close': close
                });
            }
        }
    }

    /* Event Tracker */
    etracker_eventtracker = (typeof etracker_eventtracker == 'undefined') ? '' : etracker_eventtracker;
    google_analytics_eventtracker = (typeof google_analytics_eventtracker == 'undefined') ? '' : google_analytics_eventtracker;
    if ((etracker_eventtracker == 1) || (google_analytics_eventtracker == 1)) {
        $.debug(etracker_eventtracker);
        $.debug(google_analytics_eventtracker);
        $('body a').t3d_webanalytic_event_tracking({
            config_baseurl: config_baseurl,
            etracker_eventtracker: etracker_eventtracker,
            google_analytics_eventtracker: google_analytics_eventtracker,
            debug: eventtracker_debug
        });
    }

    /* FLEXSLIDER: */
    if (jQuery().flexslider) {
        $('.flexslider').flexslider({
            animation: "slide",
            selector: ".slides > .csc-textpic-imagerow",
            slideshowSpeed: 7000,
            animationSpeed: 600,
            initDelay: 0
        });
    }
});