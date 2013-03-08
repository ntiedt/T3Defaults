### JAVASCRIPT INCLUDES ANFANG
[globalVar = LIT:1 = {$t3d_basis.ts_js}]

page.includeJSFooter{
  jquery = {$t3d_pfade.tmpls}js/jquery-1.9.1.min.js
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

var ajax_param = '{$seitentypen.b_typenum}';
  )
  10 = TEXT
  10.value(
var jquery_interval = '{$jquery.interval}';
  )
  20 = TEXT
  20.value(
var jquery_speed = '{$jquery.speed}';
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
  100 = TEXT
  100.value(
</script>
  )
}

[global]
### JAVASCRIPT INCLUDES ENDE