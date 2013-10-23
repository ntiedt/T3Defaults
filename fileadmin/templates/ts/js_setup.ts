### JAVASCRIPT INCLUDES ANFANG
[globalVar = LIT:1 = {$t3d_basis.ts_js}]

page.includeJSFooter{
  jquery = {$t3d_pfade.tmpls}js/jquery-1.9.1.min.js
  jquery.disableCompression = 1
  #jqueryui = {$t3d_pfade.tmpls}js/jquery-ui-1.10.3.custom.min.js
  #jqueryui.disableCompression = 1
  colorbox = {$t3d_pfade.tmpls}js/jquery.colorbox-min.js
  colorbox.disableCompression = 1
  funktionen = {$t3d_pfade.tmpls}js/funktionen.js
}


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

var config_baseurl = '{$t3d_basis.baseURL}';
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
        addQueryString.exclude = id
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
  100 = TEXT
  100.value(
</script>
  )
}

[global]


[globalVar = LIT:1 = {$t3d_basis.ts_js}] && [globalVar = LIT:1 = {$styles.content.imgtext.linkWrap.lightboxEnabled}]
page.footerData.150 = COA
page.footerData.150{
  wrap = <script>|</script>
  10 = TEXT
  10.value(
    jQuery(function(j){
      /* COLORBOX: http://www.jacklmoore.com/colorbox */
      if(jQuery().colorbox){
        j('a.lightbox').colorbox({
  )
  20 = TEXT
  20.value(
          'current': '{LLL:fileadmin/templates/ts/locallang/t3d.xml:lightbox.current}',
          'previous': '{LLL:fileadmin/templates/ts/locallang/t3d.xml:lightbox.previous}',
          'next': '{LLL:fileadmin/templates/ts/locallang/t3d.xml:lightbox.next}',
          'close': '{LLL:fileadmin/templates/ts/locallang/t3d.xml:lightbox.close}'
  )
  20.insertData = 1
  30 = TEXT
  30.value(
        });
      }
    });
  )
}
[global]

[globalVar = LIT:1 = {$t3d_basis.ts_js}] AND [globalVar = LIT:1 = {$t3d_searchengine.etracker.eventtracker_enable}]
page.includeJSFooter{
  etracker_event_tracking = {$t3d_pfade.tmpls}js/etracker_event_tracking.js
}
[global]

[globalVar = LIT:1 = {$t3d_basis.ts_js}] AND [globalString = IENV:HTTP_HOST=m.*]
page.headerData.150{
  24.10.value=1
}
[global]
### JAVASCRIPT INCLUDES ENDE