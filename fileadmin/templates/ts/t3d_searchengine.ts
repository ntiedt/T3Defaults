###
### eTracker ###

#----------------------------------------------------------- BEREICHE(et_areas)-BEGIN
temp.etrackerareas = HMENU
temp.etrackerareas.special.range = {$t3d_searchengine.etracker.range_areas}
temp.etrackerareas.special = rootline
temp.etrackerareas.includeNotInMenu = 1
temp.etrackerareas.1 = TMENU
temp.etrackerareas.1 {
  NO.allWrap = | {$t3d_searchengine.etracker.areas_splitchar} |*||*| |
  NO.doNotLinkIt = 1
}
#----------------------------------------------------------- BEREICHE(et_areas)-END


#----------------------------------------------------------- SEITENNAME(et_pagename)-BEGIN
temp.etrackerpagename < temp.etrackerareas 
temp.etrackerpagename.special.range = {$t3d_searchengine.etracker.range_pagename}
temp.etrackerpagename.1.NO.allWrap = | {$t3d_searchengine.etracker.pagename_splitchar}  |*||*| |
#----------------------------------------------------------- SEITENNAME(et_pagename)-END


#----------------------------------------------------------- URL(et_url)-BEGIN
temp.etrackerurl=COA
temp.etrackerurl{
  10 = TEXT
  10{
    data=getIndpEnv:TYPO3_HOST_ONLY
    wrap = http://|/
  }
  20 = TEXT
  20.typolink{
    parameter.data=TSFE:id
    returnLast=url
  }
}
#----------------------------------------------------------- URL(et_url)-END


#----------------------------------------------------------- BESUCHERINTERESSE(et_ilevel)-BEGIN
temp.etrackerilevel=TEXT
temp.etrackerilevel.value = {$t3d_searchengine.etracker.ilevel_all}

[treeLevel = 1]
temp.etrackerilevel.value = {$t3d_searchengine.etracker.ilevel_1}
[global]
[treeLevel = 2]
temp.etrackerilevel.value = {$t3d_searchengine.etracker.ilevel_2}
[global]
[treeLevel = 3]
temp.etrackerilevel.value = {$t3d_searchengine.etracker.ilevel_3}
[global]
[treeLevel = 4]
temp.etrackerilevel.value = {$t3d_searchengine.etracker.ilevel_4}
[global]
[treeLevel = 5]
temp.etrackerilevel.value = {$t3d_searchengine.etracker.ilevel_5}
[global]
[treeLevel = 6]
temp.etrackerilevel.value = {$t3d_searchengine.etracker.ilevel_6}
[global]
#----------------------------------------------------------- BESUCHERINTERESSE(et_ilevel)-END


#----------------------------------------------------------- JS-BEGIN
temp.etrackerjavascript = COA
temp.etrackerjavascript.10 = TEXT
temp.etrackerjavascript.10.value (

<!-- Copyright (c) 2000-2009 etracker GmbH. All rights reserved. -->
<!-- This material may not be reproduced, displayed, modified or distributed -->
<!-- without the express prior written permission of the copyright holder. -->

<!-- BEGIN etracker Tracklet 3.0 -->
<script type="text/javascript">document.write(String.fromCharCode(60)+"script type=\"text/javascript\" src=\"http"+("https:"==document.location.protocol?"s":"")+"://code.etracker.com/t.js?et={$t3d_searchengine.etracker.id}\">"+String.fromCharCode(60)+"/script>");</script>

<!-- etracker PARAMETER 3.0 -->
<script type="text/javascript">
)

[globalVar = LIT:1 = {$t3d_searchengine.etracker.asnch_enable}]
temp.etrackerjavascript.10.value >
temp.etrackerjavascript.10.value(

<!-- BEGIN etracker Tracklet 3.0 async --> 
<script type="text/javascript"> 
function et_params() {
)
[global]

temp.etrackerjavascript.20 < temp.etrackerpagename
temp.etrackerjavascript.20.wrap = var et_pagename = "|";
temp.etrackerjavascript.30 = TEXT
temp.etrackerjavascript.30.value (

)
temp.etrackerjavascript.40 < temp.etrackerareas
temp.etrackerjavascript.40.wrap = var et_areas = "|";
temp.etrackerjavascript.42 = TEXT
temp.etrackerjavascript.42.value (

)
temp.etrackerjavascript.45 < temp.etrackerurl
temp.etrackerjavascript.45.wrap = var et_url = "|";
temp.etrackerjavascript.47 = TEXT
temp.etrackerjavascript.47.value (

)
temp.etrackerjavascript.48 = COA
temp.etrackerjavascript.48{
  wrap = var et_ilevel = "|";
  10 < temp.etrackerilevel
}
temp.etrackerjavascript.50 = TEXT
temp.etrackerjavascript.50.value (

var et_tag          = "";
var et_target       = "";
var et_tval         = "0";
var et_tonr         = "";
var et_tsale        = 0;
var et_cust         = 0;
var et_basket       = "";
var et_lpage        = "0";
var et_trig         = "";
var et_se           = "0";
)
[globalVar = LIT:1 = {$t3d_searchengine.etracker.asnch_enable}]
temp.etrackerjavascript.55 = TEXT
temp.etrackerjavascript.55.value(
}

(function(){ 
  var et_init = function(){     
  var et = document.createElement('script'); 
  et.src = 'http'+('https:'==document.location.protocol?'s':'') 
+'://code.etracker.com/a.js?et={$t3d_searchengine.etracker.id}'; 
  var head = document.getElementsByTagName('head')[0]; 
  head.insertBefore(et, head.firstChild); 
  }; 
  window.addEventListener 
    ? window.addEventListener('load', et_init, false) 
    : window.attachEvent('onload', et_init); 
  })(); 
</script> 
<!-- etracker Tracklet END -->
)
[global]

temp.etrackerjavascript.60 = TEXT
temp.etrackerjavascript.60.value (
<!-- etracker PARAMETER END -->

</script>
<script type="text/javascript">_etc();</script>
<noscript><p><a href="www.etracker.com"><img style="border:0px;" alt="" src="http://www.etracker.com/nscnt.php?et={$t3d_searchengine.etracker.id}" /></a></p></noscript>
<!-- etracker CODE NOSCRIPT 3.0 -->
<noscript>
<p><a href='http://www.etracker.de/app?et={$t3d_searchengine.etracker.id}'>
<img style='border:0px;' alt='' src='http://www.etracker.de/cnt.php?
et={$t3d_searchengine.etracker.id}&amp;v=3.0&amp;java=n&amp;et_easy=0
&amp;et_pagename=
&amp;et_areas=&amp;et_ilevel=0&amp;et_target=,0,,0
&amp;et_lpage=0&amp;et_trig=&amp;et_se=0&amp;et_cust=0
&amp;et_basket=&amp;et_url=&amp;et_tag=
&amp;et_organisation=&amp;et_demographic=' /></a></p>
</noscript>
<!-- etracker CODE NOSCRIPT END-->

<!-- etracker CODE END -->
)
[globalVar = LIT:1 = {$t3d_searchengine.etracker.asnch_enable}]
temp.etrackerjavascript.60 >
[global]

[globalVar = LIT:1 = {$t3d_basis.t3d_searchengine}]
page.1001 < temp.etrackerjavascript
[global]
#----------------------------------------------------------- JS-END


#----------------------------------------------------------- GOOGLE-BEGIN
### Google Verifizierung ###
[globalVar = LIT:1 = {$t3d_searchengine.google.enable}]
page.meta.verify-v1.cObject = COA
page.meta.verify-v1.cObject.10 = TEXT
page.meta.verify-v1.cObject.10.value= {$t3d_searchengine.google.id}
[global]
#----------------------------------------------------------- GOOGLE-END