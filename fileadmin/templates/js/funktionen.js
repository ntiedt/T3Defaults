// Default JS
jQuery.noConflict();
/* FUNCTION DEBUG */
function dbg(what, value){
  if(debug==1){
    if(jQuery('.debugbox').length<1){
      jQuery('body').prepend('<style>.debugbox td{padding: 5px;border: 1px solid black;}</style><div class="debugbox" style="position:fixed ;top:0;left:0;z-index:2000;width:auto;height:auto;background-color:white;font-size: 15pt;overflow: scroll;opacity: 0.9;"><table width="100%"></table></div>');
    }
    jQuery('.debugbox table').append('<tr><td>'+what+': </td><td>'+value+'</td></tr>');
  }
}

jQuery(function(j){
  var the_overlay;
  

	j(document).keypress(function(e) {
		if (e.which === 68 && e.ctrlKey && e.altKey && e.shiftKey){
      if(debug==1){
		    window.location.href = document_url;
		  }else{
		    window.location.href = debug_url;
		  }
		}
	});
  if(debug==1){
    dbg('appCodeName',navigator.appCodeName);
    dbg('appName',navigator.appName);
    dbg('appVersion',navigator.appVersion);
    dbg('cookieEnabled',navigator.cookieEnabled);
    dbg('language',navigator.language);
    dbg('platform',navigator.platform);
    dbg('userAgent',navigator.userAgent);
    dbg('window.location.href',window.location.href);
  }
  
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

  /* FUNC: Jobs: Uebergabe */
  if(j('* a.internal-job').length>0){
    href = j('* a.internal-job').attr('href');
    field = '&job=';
    job = j('.news-single-item h1:first').text();
    j('* a.internal-job').attr('href',encodeURI(href+field+job));
  };
  if(job!==''){
    j('form.powermail_form .powermail_field:first').val(job);
  };
  
  /* COLORBOX: http://www.jacklmoore.com/colorbox */
  if(typeof jQuery == "colorbox"){
    j('li').not('.cloned').find('a.lightbox').colorbox({
      'current': '{current} / {total}',
      'previous': '<',
      'next': '>',
      'close': 'X'
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