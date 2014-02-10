// Default JS
jQuery.noConflict();

function dbg(el){
  if(jQuery.debug){
    jQuery.debug(el);
  }
}

jQuery(function(j){
  var the_overlay;
  var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
  

	j(document).keydown(function(e) {
    // Shift / Strg / Alt / D
		if (e.which === 68 && e.ctrlKey && e.altKey && e.shiftKey){
      if(debug==1){
		    window.location.href = document_url;
		  }else{
		    window.location.href = debug_url;
		  }
      return false;
		}
	});
  
  /* SETUP: Ajax */
  if(typeof ajax_param!='undefined'){
    j.ajaxSetup({
      data: {'type': ajax_param}
    });
  }


  /* EVENTS (nav_main) */
  j('.nav_main ul.level-1 > li').add('.nav_header ul li').hover(
    function(){
      j(this).addClass('hover');
      if(j(this).parents('.nav_main').length>0){
        j(this).find('ul.level-2').position({
          of: j( this ).find('a.level-1'),
          my: 'left top',
          at: 'left bottom',
          collision: 'flipfit'
        });
      }
    }, function(){
      j(this).removeClass('hover');
    }
  );

  /* FUNC: Jobs: Uebergabe */
  if(j('* a.internal-job').length>0){
    href = j('* a.internal-job').attr('href');
    field = '&job=';
    job = j('.news-single-item h1:first').text();
    j('* a.internal-job').attr('href',encodeURI(href+field+job));
    j('form.powermail_form .powermail_field:first').val(job);
  };
  
  /* COLORBOX: http://www.jacklmoore.com/colorbox */
  if(typeof lightboxEnabled!='undefined'){
    if(lightboxEnabled==1){
      if(jQuery().colorbox){
        j('a.lightbox').colorbox({
          onOpen:function(){
            if(j('.big_title').length<1){
              j('#cboxTopCenter').append(big_title+logo);
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
  etracker_eventtracker = (typeof etracker_eventtracker=='undefined') ? etracker_eventtracker='' : etracker_eventtracker=etracker_eventtracker;
  google_analytics_eventtracker = (typeof google_analytics_eventtracker=='undefined') ? google_analytics_eventtracker='' : google_analytics_eventtracker=google_analytics_eventtracker;
  if( (etracker_eventtracker==1) || (google_analytics_eventtracker==1) ){
  j.debug(etracker_eventtracker);
  j.debug(google_analytics_eventtracker);
    j('body a').t3d_webanalytic_event_tracking({
      config_baseurl: config_baseurl,
      etracker_eventtracker: etracker_eventtracker,
      google_analytics_eventtracker: google_analytics_eventtracker,
      debug: eventtracker_debug 
    });
  }
  
  
  /* FLEXSLIDER: */
  if(jQuery().flexslider){
    j('.flexslider').flexslider({
      animation: "slide",
      selector: ".slides > .csc-textpic-imagerow",
      slideshowSpeed: 7000,
      animationSpeed: 600,
      initDelay: 0
    });
  }
});