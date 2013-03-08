// Default JS
jQuery.noConflict();
/* FUNCTION DEBUG */
function dbg(what, value){
  if(jQuery('.debugbox').length<1){
    jQuery('body').prepend('<div class="debugbox" style="position:fixed ;top:0;left:0;z-index:2000;width:auto;height:auto;border:1px solid black;background-color:white;font-size: 15pt;overflow: scroll;"><table width="100%"></table></div>');
  }
  jQuery('.debugbox').append('<tr><td>'+what+': </td><td>'+value+'</td></tr>');
}

jQuery(function(j){
  var the_overlay;
  
  /* SETUP: Ajax */
  j.ajaxSetup({
    data: {'type': ajax_param}
  });


  /* EVENTS (nav_main) */
  j('.nav_main ul li').add('.nav_header ul li').hover(
    function(){
      j(this).addClass('hover');
    }, function(){
      j(this).removeClass('hover');
    }
  );
  
  /* COLORBOX: http://www.jacklmoore.com/colorbox */
  j('li').not('.cloned').find('a.lightbox').colorbox({
    'current': '{current} / {total}',
    'previous': '<',
    'next': '>',
    'close': 'X'
  });
});