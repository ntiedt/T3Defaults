###
### JAVASCRIPT ###

#----------------------------------------------------------- INCLUDEJSFOOTER-BEGIN
[globalVar = LIT:1 = {$t3d_basis.t3d_js}]
page.includeJSFooter{
  jquery = {$t3d_pfade.tmpls}js/jquery-1.9.1.min.js
  jquery.disableCompression = 1
  jqueryui = {$t3d_pfade.tmpls}js/jquery-ui-1.10.3.custom.min.js
  jqueryui.disableCompression = 1
  colorbox = {$t3d_pfade.tmpls}js/jquery.colorbox-min.js
  colorbox.disableCompression = 1
  flexslider = {$t3d_pfade.tmpls}js/jquery.flexslider-min.js
  flexslider.disableCompression = 1
  funktionen = {$t3d_pfade.tmpls}js/funktionen.js
}
[global]
#----------------------------------------------------------- INCLUDEJSFOOTER-END

#----------------------------------------------------------- INCLUDEJSFOOTER-DEBUG-BEGIN
[globalVar = LIT:1 = {$t3d_basis.t3d_js}] && [globalVar = GP:debug == 1]
page.includeJSFooter{
  jquery >
  jquery = {$t3d_pfade.tmpls}js/jquery-1.9.1.min.js
  jqueryui >
  jqueryui = {$t3d_pfade.tmpls}js/jquery-ui-1.10.3.custom.min.js
  colorbox >
  colorbox = {$t3d_pfade.tmpls}js/jquery.colorbox-min.js
  flexslider >
  flexslider = {$t3d_pfade.tmpls}js/jquery.flexslider-min.js
  debug >
  debug = {$t3d_pfade.tmpls}js/debug.js
  debugbar >
  debugbar = {$t3d_pfade.tmpls}js/debugbar.js
  funktionen >
  funktionen = {$t3d_pfade.tmpls}js/funktionen.js
}
[global]
#----------------------------------------------------------- INCLUDEJSFOOTER-DEBUG-END


#----------------------------------------------------------- HEADERDATA-VARS-BEGIN
[globalVar = LIT:1 = {$t3d_basis.t3d_js}]
page.headerData.150 = COA
page.headerData.150{
  wrap = |
  1 = TEXT
  1.value(
<script type="text/javascript">
  )
  5 = TEXT
  5{
    field = pid
    wrap = var cur_pid = '|';
  }
  7 = TEXT
  7{
    field = uid
    wrap = var cur_uid = '|';
  }
  8= TEXT
  8.value(

var config_baseurl = '{$t3d_config.baseURL}';
  )
  9= TEXT
  9.value(

var ajax_param = '{$t3d_seitentypen.b_typenum}';
  )
  10 = TEXT
  10.value(
var jquery_interval = '{$t3d_jquery.interval}';
  )
  20 = TEXT
  20.value(
var jquery_speed = '{$t3d_jquery.speed}';
  )
  22 = COA
  22{
    wrap = var gp_l = |;
    10 = TEXT
    10{
      data = GP:L
      ifEmpty = 0
    }
  }
  24 = COA
  24{
    wrap = var mobil = |;
    10 = TEXT
    10{
      value = 0
    }
  }
  26 = COA
  26{
    wrap = var job = '|';
    10 = TEXT
    10{
      data = GP:job
    }
  }
  28 = COA
  28{
    wrap = var debug = '|';
    10 = TEXT
    10{
      data = GP:debug
      removeBadHTML = 1
      ifEmpty = 0
    }
  }
  30 = COA
  30{
    wrap = var subscription_mail = '|';
    10 = TEXT
    10{
      data = GP:subscription_mail
      removeBadHTML = 1
      ifEmpty = 0
    }
  }
  32 = COA
  32{
    wrap = var document_url = '|';
    10 = TEXT
    10{
      typolink{
        parameter.data = page:uid
        additionalParams = &debug=0
        addQueryString = 1
        addQueryString.method = GET
        addQueryString.exclude = id,debug
        forceAbsoluteUrl = 1
        returnLast = url
      }
    }
  }
  34 = COA
  34{
    wrap = var debug_url = '|';
    10 = TEXT
    10{
      typolink{
        parameter.data = page:uid
        additionalParams = &debug=1
        addQueryString = 1
        addQueryString.method = GET
        addQueryString.exclude = id
        forceAbsoluteUrl = 1
        returnLast = url
      }
    }
  }
  90 = TEXT
  90{
    wrap = var max_cols = |;
    value = {$t3d_grid.max_cols}
  }
  1000 = TEXT
  1000.value(
</script>
  )
}
#----------------------------------------------------------- HEADERDATA-VARS-END

#----------------------------------------------------------- HEADERDATA-MOBILE-BEGIN
[globalVar = LIT:1 = {$t3d_basis.t3d_js}] AND [globalString = IENV:HTTP_HOST=m.*]
page.headerData.150{
  24.10.value=1
}
[global]
#----------------------------------------------------------- HEADERDATA-MOBILE-END


#----------------------------------------------------------- FOOTERDATA-BEGIN
page.footerData.150 = COA
page.footerData.150{
  wrap = |
  1 = TEXT
  1.value(
<script type="text/javascript">
  )
  10 = TEXT
  10.value(
    var etracker_eventtracker = {$t3d_webanalytic.etracker.eventtracker.enable};
    var google_analytics_eventtracker = {$t3d_webanalytic.google_analytics.eventtracker.enable};
    var eventtracker_debug = {$t3d_webanalytic.eventtracker.debug};
  )
  20 = TEXT
  20.value(
    lightboxEnabled = {$styles.content.imgtext.linkWrap.lightboxEnabled};
    big_title = '<div class="big_title col span_17"><h1 class="color-3">Bildergallerie</h1></div>';
    logo = '<div class="logo col span_7"><img width="324" height="158" border="0" alt="" src="fileadmin/templates/image/obj_logo.png"></div>';
    maxWidth = '100%';
    top = '0';
  )
  30 = COA
  30{
    10 = TEXT
    10{
      wrap = var current = '|';
      data = LLL:fileadmin/templates/ts/locallang/t3d.xml:lightbox.current
    }
    20 = TEXT
    20{
      wrap = var previous = '|';
      data = LLL:fileadmin/templates/ts/locallang/t3d.xml:lightbox.previous
    }
    30 = TEXT
    30{
      wrap = var next = '|';
      data = LLL:fileadmin/templates/ts/locallang/t3d.xml:lightbox.next
    }
    40 = TEXT
    40{
      wrap = var close = '|';
      data = LLL:fileadmin/templates/ts/locallang/t3d.xml:lightbox.close
    }
  }
  1000 = TEXT
  1000.value(
</script>
  )
}
[global]
#----------------------------------------------------------- FOOTERDATA-END

#----------------------------------------------------------- FOOTERDATA-WEBANALYTIC-BEGIN
[globalVar = LIT:1 = {$t3d_webanalytic.etracker.eventtracker.enable}] || [globalVar = LIT:1 = {$t3d_webanalytic.google_analytics.eventtracker.enable}]
page.includeJSFooter{
  t3d_webanalytic_event_tracking = {$t3d_pfade.tmpls}js/jquery.t3d_webanalytic_event_tracking.js
}
[global]
#----------------------------------------------------------- FOOTERDATA-WEBANALYTIC-END