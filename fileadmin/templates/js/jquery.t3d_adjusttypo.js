/**
 * Title:         TYPO3 Defaults - adjust typography for responsive sites
 * Phase:         Beta
 * Version:       0.5
 * Author:        Niels Tiedt (nt[AT]typo3-coders.org)
 * Date Created:  2013-12-09
 * Date Modified: 2014-02-05
 * URL:
 * Contributors:
 *
 * Usage:
 * $('.t3d_adjusttypo').t3d_adjusttypo();
 * or
 * $('a').t3d_adjusttypo();
 *
 * Important:
 * If your max-width definition is NOT 1272px set the correct value
 * $('.t3d_adjusttypo').t3d_adjusttypo({'maxWidth': '1272'});
 *
 * If another element than your body have the max-width definition correct the selector
 * $('.t3d_adjusttypo').t3d_adjusttypo({'baseObj': $('yourelement')});
 *
 */

(function ($) {
    $.fn.t3d_adjusttypo = function (options) {

// Establish default settings/variables
// ====================================
        var settings = $.extend({
                baseObj: $('body'),
                elementWidth: 0,
                windowWidth: 0,
                maxWidth: 1272,
                baseRatio: 0,
                ratio: 0,
                baseFontSize: 0,
                newFontSize: 0,
                minFontSize: 0,
                maxFontSize: 9999,
                baseFontSizeIsMinFontSize: false,
                baseFontSizeIsMaxFontSize: true,
                baseLineHeight: 0,
                newLineHeight: 0,
                minLineHeight: 0,
                maxLineHeight: 9999,
                baseLineHeightIsMinLineHeight: false,
                baseLineHeightIsMaxLineHeight: true,
                unit: 'px',
                debug: 0,
                debugTo: 2 // 0=Console; 1=Debug plugin; 2=Overlay
            }, options),

// Function checkElementWidth
// =================
            checkElementWidth = function (el) {
                if ($(el).parent().css('width') == '0px') {
                    return;
                } else {
                    settings.elementWidth = $(el).parent().width();
                }
            };

// Function checkWindowWidth
// =================
        checkWindowWidth = function () {
            settings.windowWidth = $(window).width();
        };

// Function checkRatio
// =================
        checkRatio = function (el) {
            settings.baseRatio = settings.maxWidth / settings.elementWidth;
            settings.ratio = settings.windowWidth / settings.elementWidth;
        };

// Function adjustFontSize
// =================
        adjustFontSize = function (el) {
            if (!$(el).data('baseFontSize')) {
                settings.baseFontSize = parseFloat($(el).css('font-size'));
                $(el).data('baseFontSize', settings.baseFontSize);
            } else {
                settings.baseFontSize = $(el).data('baseFontSize');
            }
            if (Math.round(settings.ratio) == 1) {
                settings.newFontSize = settings.baseFontSize * settings.ratio;
            } else {
                settings.newFontSize = settings.baseFontSize * (settings.ratio / settings.baseRatio);
            }

            if (settings.baseFontSizeIsMinFontSize == true) {
                settings.minFontSize = settings.baseFontSize;
            }
            if (settings.baseFontSizeIsMaxFontSize == true) {
                settings.maxFontSize = settings.baseFontSize;
            }
            if ((settings.newFontSize > settings.minFontSize) && (settings.newFontSize < settings.maxFontSize)) {
                $(el).css('font-size', settings.newFontSize + settings.unit);
            }
        };

// Function adjustLineHeight
// =================
        adjustLineHeight = function (el) {
            if (!$(el).data('baseLineHeight')) {
                settings.baseLineHeight = parseFloat($(el).css('line-height'));
                $(el).data('baseLineHeight', settings.baseLineHeight);
            } else {
                settings.baseLineHeight = $(el).data('baseLineHeight');
            }
            if (Math.round(settings.ratio) == 1) {
                settings.newLineHeight = settings.baseLineHeight * settings.ratio;
            } else {
                settings.newLineHeight = settings.baseLineHeight * (settings.ratio / settings.baseRatio);
            }

            if (settings.baseLineHeightIsMinLineHeight == true) {
                settings.minLineHeight = settings.baseLineHeight;
            }
            if (settings.baseLineHeightIsMaxLineHeight == true) {
                settings.maxLineHeight = settings.baseLineHeight;
            }
            if ((settings.newLineHeight > settings.minLineHeight) && (settings.newLineHeight < settings.maxLineHeight)) {
                $(el).css('line-height', settings.newLineHeight + settings.unit);
            }
        };

// Each element
// ======================
        return this.each(function () {

            // Context for resize callback
            var that = this;

            // Get elementWidth on load
            checkElementWidth(this);

            // Get windowWidth on load
            checkWindowWidth();

            // Get checkRatio on load
            checkRatio(this);

            // Set adjustFontSize on load
            adjustFontSize(this);

            // Set adjustLineHeight on load
            adjustLineHeight(this);

            // Debug output
            if (settings.debug == 1) {
                debug(settings);
            }

            // Make adjustFontSize upon resize
            $(window).resize(function () {
                // Get elementWidth on load
                checkElementWidth(that);

                // Get windowWidth on load
                checkWindowWidth();

                // Get checkRatio on load
                checkRatio(that);

                // Set adjustFontSize on load
                adjustFontSize(that);

                // Set adjustLineHeight on load
                adjustLineHeight(that);

                // Debug output
                if (settings.debug == 1) {
                    debug(settings);
                }
            });

        });
    };

    var debug = function (settings) {
        if (window.console && window.console.log && settings.debugTo == 0) {
            $.each(settings, function (name, value) {
                window.console.log(name + ': ' + value);
            });
        } else if ($.debug && settings.debugTo == 1) {
            $.each(settings, function (name, value) {
                $.debug(value);
            });
        } else {
            if ($('.debug.t3d_adjusttypo').length < 1) {
                $('body').prepend('<div class="debug t3d_adjusttypo"></div>');
                $('.debug.t3d_adjusttypo').css({
                    width: 'auto',
                    position: 'fixed',
                    zIndex: 999,
                    top: 40,
                    right: 10,
                    padding: '10px',
                    backgroundColor: 'white',
                    border: '1px solid #ccc',
                    boxShadow: '0 0 5px #ccc'
                });
            }
            var output = '';
            $.each(settings, function (name, value) {
                output += name + ': ' + value + '<br>';
            });
            $('.debug.t3d_adjusttypo').html(output);
        }
    }
})(jQuery);

