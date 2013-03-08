###
### eTracker ###

### Bereiche - et_areas ###
 temp.etrackerareas = HMENU
 temp.etrackerareas.special.range = {$t3d_etracker.range_areas}
 temp.etrackerareas.special = rootline
 temp.etrackerareas.1 = TMENU
 temp.etrackerareas.1 {
 NO.allWrap = | {$t3d_etracker.areas_splitchar} |*||*| |
 NO.doNotLinkIt = 1
 }


### Seitenname -  et_pagename ###
 temp.etrackerpagename < temp.etrackerareas 
 temp.etrackerpagename.special.range = {$t3d_etracker.range_pagename}
 temp.etrackerpagename.1.NO.allWrap = | {$t3d_etracker.pagename_splitchar}  |*||*| |


### URL -  et_url ###
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


### Besucherinteresse -  et_ilevel ###
temp.etrackerilevel=TEXT
temp.etrackerilevel.value = {$t3d_etracker.ilevel_all}

[treeLevel = 1]
temp.etrackerilevel.value = {$t3d_etracker.ilevel_1}
[global]
[treeLevel = 2]
temp.etrackerilevel.value = {$t3d_etracker.ilevel_2}
[global]
[treeLevel = 3]
temp.etrackerilevel.value = {$t3d_etracker.ilevel_3}
[global]
[treeLevel = 4]
temp.etrackerilevel.value = {$t3d_etracker.ilevel_4}
[global]
[treeLevel = 5]
temp.etrackerilevel.value = {$t3d_etracker.ilevel_5}
[global]
[treeLevel = 6]
temp.etrackerilevel.value = {$t3d_etracker.ilevel_6}
[global]


### TS Objekt zum generieren vom JS ###
temp.etrackerjavascript = COA
temp.etrackerjavascript.10 = TEXT
temp.etrackerjavascript.10.value (

<!-- Copyright (c) 2000-2009 etracker GmbH. All rights reserved. -->
<!-- This material may not be reproduced, displayed, modified or distributed -->
<!-- without the express prior written permission of the copyright holder. -->

<!-- BEGIN etracker Tracklet 3.0 -->
<script type="text/javascript">document.write(String.fromCharCode(60)+"script type=\"text/javascript\" src=\"http"+("https:"==document.location.protocol?"s":"")+"://code.t3d_etracker.com/t.js?et={$t3d_etracker.id}\">"+String.fromCharCode(60)+"/script>");</script>

<!-- etracker PARAMETER 3.0 -->
<script type="text/javascript">
)

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
</script>
<!-- etracker PARAMETER END -->

<script type="text/javascript">_etc();</script>
<noscript><p><a href="www.t3d_etracker.com"><img style="border:0px;" alt="" src="http://www.t3d_etracker.com/nscnt.php?et={$t3d_etracker.id}" /></a></p></noscript>
<!-- etracker CODE NOSCRIPT 3.0 -->
<noscript>
<p><a href='http://www.t3d_etracker.de/app?et={$t3d_etracker.id}'>
<img style='border:0px;' alt='' src='http://www.t3d_etracker.de/cnt.php?
et={$t3d_etracker.id}&amp;v=3.0&amp;java=n&amp;et_easy=0
&amp;et_pagename=
&amp;et_areas=&amp;et_ilevel=0&amp;et_target=,0,,0
&amp;et_lpage=0&amp;et_trig=&amp;et_se=0&amp;et_cust=0
&amp;et_basket=&amp;et_url=&amp;et_tag=
&amp;et_organisation=&amp;et_demographic=' /></a></p>
</noscript>
<!-- etracker CODE NOSCRIPT END-->

<!-- etracker CODE END -->

)

[globalVar = LIT:1 = {$t3d_basis.ts_etracker}]
page.1001 < temp.etrackerjavascript
[global]


### Google Verifizierung ###
[globalVar = LIT:1 = {$t3d_basis.google_ver}]
page.meta.verify-v1.cObject = COA
page.meta.verify-v1.cObject.10 = TEXT
page.meta.verify-v1.cObject.10.value= {$t3d_basis.google_vid}
[global]