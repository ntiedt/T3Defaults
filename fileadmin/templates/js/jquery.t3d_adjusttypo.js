/**
 * Title:         TYPO3 Defaults - adjust typography for responsive sites
 * Version:       0.2
 * Author:        Niels Tiedt (nt[AT]typo3-coders.org)
 * Date Created:  2013-12-09
 * Date Modified: 2013-12-09
 * URL:           
 * Contributors:  
 */

(function($) {
  $.fn.t3d_adjusttypo = function(options) {

// Establish default settings/variables
// ====================================
    var settings = $.extend({
      baseWidth: $('body').width(),
      maxWidth: parseInt($('.container').css('max-width')),
      baseFontSize: 0,
      newFontSize: 0,
      minFontSize: 0,
      maxFontSize: 9999,
      baseFontSizeIsMinFontSize: 0,
      baseFontSizeIsMaxFontSize: 1,
      baseLineHeight: 0,
      newLineHeight: 0,
      minLineHeight: 0,
      maxLineHeight: 9999,
      baseLineHeightIsMinLineHeight: 0,
      baseLineHeightIsMaxLineHeight: 1,
      unit: 'px',
      debug: 1
    }, options),

// Function adjustFontSize
// =================
    adjustFontSize = function(el) {      
      if($(el).data('fontSize')){
        settings.baseFontSize = $(el).data('fontSize');
      }else{
        settings.baseFontSize = parseFloat($(el).css('font-size'));
        $(el).data('fontSize',settings.baseFontSize);
      }
      settings.newFontSize = settings.baseFontSize * (settings.baseWidth / settings.maxWidth);
      if(settings.baseFontSizeIsMinFontSize == 1){
        settings.minFontSize = settings.baseFontSize;
      }
      if(settings.baseFontSizeIsMaxFontSize == 1){
        settings.maxFontSize = settings.baseFontSize;
      }
      if((settings.newFontSize > settings.minFontSize) && (settings.newFontSize < settings.maxFontSize)){
        $(el).css('font-size', settings.newFontSize + settings.unit);
      }
    };

// Function adjustLineHeight
// =================
    adjustLineHeight = function(el) {
      if($(el).data('lineHeight')){
        settings.baseLineHeight = $(el).data('lineHeight');
      }else{
        settings.baseLineHeight = parseFloat($(el).css('line-height'));
        $(el).data('lineHeight',settings.baseLineHeight);
      }
      settings.newLineHeight = settings.baseLineHeight * (settings.baseWidth / settings.maxWidth);
      if(settings.baseLineHeightIsMinLineHeight == 1){
        settings.minLineHeight = settings.baseLineHeight;
      }
      if(settings.baseLineHeightIsMaxLineHeight == 1){
        settings.maxLineHeight = settings.baseLineHeight;
      }
      if((settings.newLineHeight > settings.minLineHeight) && (settings.newLineHeight < settings.maxLineHeight)){
        $(el).css('line-height', settings.newLineHeight + settings.unit);
      }
    };

// Each element
// ======================
    return this.each(function() {
       
      // Context for resize callback
      var that = this;

      if(settings.debug==1){
        debug(settings);
      }
         
      // Set adjustFontSize on load
      adjustFontSize(this);
         
      // Set adjustLineHeight on load
      adjustLineHeight(this);
         
      // Make adjustFontSize upon resize
      $(window).resize(function(){
        if(settings.debug==1){
          debug(settings);
        }
        settings.baseWidth = $('body').width();
        adjustFontSize(that);
        adjustLineHeight(that);
      });
      
    });
  };
  

  var debug = function(settings){
    if ( window.console && window.console.log ) {
      $.each(settings, function(name, value){
        window.console.log( name + ': ' + value );
      });
    }else if($.debug){
      $.each(settings, function(name, value){
        $.debug(value);
      });
    }else{
      if($('.debug.t3d_adjusttypo').length<1){
        $('body').prepend('<div class="debug t3d_adjusttypo"></div>');
        $('.debug.t3d_adjusttypo').css({
          width: 'auto',
          position: 'fixed',
          top: 40,
          right: 10,
          padding: '10px',
          backgroundColor: 'white',
          border: '1px solid #ccc',
          boxShadow: '0 0 5px #ccc'
        });
      }
      $.each(settings, function(name, value){
        $('.debug.t3d_adjusttypo').append( name + ': ' + value + '<br>');
      });
    }
  }
})(jQuery);

