/**
 * Title:         TYPO3 Defaults - adjust typography for responsive sites
 * Version:       0.1
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
      baseFontSizeIsMaxFontSize: 1,
      unit: 'px',
      debug: 0
    }, options),

// Function changes
// =================
    changes = function(el) {
      settings.baseWidth = $('body').width();
      
      if($(el).data('fontSize')){
        settings.baseFontSize = $(el).data('fontSize');
      }else{
        settings.baseFontSize = parseFloat($(el).css('font-size'));
        $(el).data('fontSize',settings.baseFontSize);
      }
      settings.newFontSize = settings.baseFontSize * (settings.baseWidth / settings.maxWidth);
      if(settings.baseFontSizeIsMaxFontSize == 1){
        settings.maxFontSize = settings.baseFontSize;
      }
      if((settings.newFontSize > settings.minFontSize) && (settings.newFontSize < settings.maxFontSize)){
        $(el).css('font-size', settings.newFontSize + settings.unit);
      }
    };

// Each element
// ======================
    return this.each(function() {
       
      // Context for resize callback
      var that = this;
         
      // Set changes on load
      changes(this);

      if(settings.debug==1){
        debug(settings);
      }
         
      // Make changes upon resize
      $(window).resize(function(){
        if(settings.debug==1){
          debug(settings);
        }
        changes(that);
      });
      
    });
  };
  

  var debug = function(settings){
    if ( window.console && window.console.log ) {
      window.console.log( 'settings.baseWidth: ' + settings.baseWidth );
      window.console.log( 'settings.maxWidth: ' + settings.maxWidth );
      window.console.log( 'settings.baseFontSize: ' + settings.baseFontSize );
      window.console.log( 'settings.newFontSize: ' + settings.newFontSize );
      window.console.log( 'settings.minFontSize: ' + settings.minFontSize );
      window.console.log( 'settings.maxFontSize: ' + settings.maxFontSize );
      window.console.log( 'settings.baseFontSizeIsMaxFontSize: ' + settings.baseFontSizeIsMaxFontSize );
      window.console.log( 'settings.unit: ' + settings.unit );
    }else if($.debug){
      $.debug(settings.baseWidth);
      $.debug(settings.maxWidth);
      $.debug(settings.baseFontSize);
      $.debug(settings.newFontSize);
      $.debug(settings.minFontSize);
      $.debug(settings.maxFontSize);
      $.debug(settings.baseFontSizeIsMaxFontSize);
      $.debug(settings.unit);
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
      $('.debug.t3d_adjusttypo').append( 'settings.baseWidth: ' + settings.baseWidth + '<br>');
      $('.debug.t3d_adjusttypo').append( 'settings.maxWidth: ' + settings.maxWidth + '<br>');
      $('.debug.t3d_adjusttypo').append( 'settings.baseFontSize: ' + settings.baseFontSize + '<br>');
      $('.debug.t3d_adjusttypo').append( 'settings.newFontSize: ' + settings.newFontSize + '<br>');
      $('.debug.t3d_adjusttypo').append( 'settings.minFontSize: ' + settings.minFontSize + '<br>');
      $('.debug.t3d_adjusttypo').append( 'settings.maxFontSize: ' + settings.maxFontSize + '<br>');
      $('.debug.t3d_adjusttypo').append( 'settings.baseFontSizeIsMaxFontSize: ' + settings.baseFontSizeIsMaxFontSize + '<br>');
      $('.debug.t3d_adjusttypo').append( 'settings.unit: ' + settings.unit + '<br><hr>');
    }
  }
})(jQuery);

