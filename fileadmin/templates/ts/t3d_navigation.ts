##
## Navigation ###

#----------------------------------------------------------- NAV_HEADER-BEGIN
tmp.nav_header = COA
tmp.nav_header{
  10 = COA
  10{
    wrap = <ul class="level-1">|</ul>
    10 = HMENU
    10{
      special = directory
      special.value = {$t3d_navigation.nav_header_directory_id}
      1 = TMENU
      1 {
        IProcFunc = user_tmenulinebreak->main
        expAll = 1
        NO{
          wrapItemAndSub = <li class="level-1 norm first">|</li>|*|<li class="level-1 norm">|</li>|*|<li class="level-1 norm last">|</li>
          ATagParams = class="level-1 norm"
          stdWrap.wrap = <span>|</span>
        }
        CUR < .NO
        CUR.wrapItemAndSub = <li class="level-1 click first">|</li>|*|<li class="level-1 click">|</li>|*|<li class="level-1 click last">|</li>
        CUR.ATagParams = class="level-1 click"
        CUR = 1
        ACT < .CUR
        ACT = 1
      }
    }
  }
}
#----------------------------------------------------------- NAV_HEADER-END

#----------------------------------------------------------- NAV_MAIN-BEGIN
### Hauptnavigation ###
tmp.nav_main = COA
tmp.nav_main{
  10 = COA
  10{
    10 = HMENU
    10{
      wrap = <ul class="level-1">|</ul>
      entryLevel = {$t3d_navigation.nav_main_entryLevel}
      excludeUidList = {$t3d_navigation.nav_main_excludeUidList}
      1 = TMENU
      1 {
        IProcFunc = user_tmenulinebreak->main
        expAll = 1
        NO{
          wrapItemAndSub = <li class="level-1 norm first index_{register:count_MENUOBJ}">|</li>|*|<li class="level-1 norm index_{register:count_MENUOBJ}">|</li>|*|<li class="level-1 norm last index_{register:count_MENUOBJ}">|</li>
          wrapItemAndSub.insertData = 1
          ATagParams = class="level-1 norm color-1"
          stdWrap.wrap = <span>|</span>
        }
        CUR < .NO
        CUR.wrapItemAndSub = <li class="level-1 click first index_{register:count_MENUOBJ}">|</li>|*|<li class="level-1 click index_{register:count_MENUOBJ}">|</li>|*|<li class="level-1 click last index_{register:count_MENUOBJ}">|</li>
        CUR.wrapItemAndSub.insertData = 1
        CUR.ATagParams = class="level-1 click color-3"
        CUR = 1
        ACT < .CUR
        ACT = 1
      }
      2 < .1
      2 {
        wrap = <ul class="level-2">|</ul>
        expAll = 1
        NO.wrapItemAndSub = <li class="level-2 norm first">|</li>|*|<li class="level-2 norm">|</li>|*|<li class="level-2 norm last">|</li>
        NO.ATagParams = class="level-2 norm color-2"
        #NO.ATagParams.append >
        CUR.wrapItemAndSub = <li class="level-2 click first">|</li>|*|<li class="level-2 click">|</li>|*|<li class="level-2 click last">|</li>
        CUR.ATagParams = class="level-2 click color-3"
        ACT < .CUR
        ACT = 1
      }
    }
  }
}
#----------------------------------------------------------- NAV_MAIN-END

#----------------------------------------------------------- NAV_SUB-BEGIN
### Unternavigation ###
tmp.nav_sub = COA
tmp.nav_sub{
  10 = COA
  10{
    wrap = <div>|</div>
    10 = HMENU
    10{
      entryLevel = {$t3d_navigation.nav_sub_entryLevel}
      excludeUidList = {$t3d_navigation.nav_sub_excludeUidList}
      1 = TMENU
      1 {
        wrap = <ul class="level-1">|</ul>
        IProcFunc = user_tmenulinebreak->main
        expAll = 1
        NO{
          wrapItemAndSub = <li class="level-1 norm first">|</li>|*|<li class="level-1 norm">|</li>|*|<li class="level-1 norm last">|</li>
          ATagParams = class="level-1 norm"
          stdWrap.wrap = <span>|</span>
        }
        CUR < .NO
        CUR.wrapItemAndSub = <li class="level-1 click first">|</li>|*|<li class="level-1 click">|</li>|*|<li class="level-1 click last">|</li>
        CUR.ATagParams = class="level-1 click"
        CUR = 1
        ACT < .CUR
        ACT = 1
      }
      2 < .1
      2 {
        wrap = <ul class="level-2">|</ul>
        expAll = 1
        NO.wrapItemAndSub = <li class="level-2 norm first">|</li>|*|<li class="level-2 norm">|</li>|*|<li class="level-2 norm last">|</li>
        NO.ATagParams = class="level-2 norm"
        CUR.wrapItemAndSub = <li class="level-2 click first">|</li>|*|<li class="level-2 click">|</li>|*|<li class="level-2 click last">|</li>
        CUR.ATagParams = class="level-2 click"
        ACT < .CUR
        ACT = 1
      }
      3 < .1
      3 {
        wrap = <ul class="level-3">|</ul>
        expAll = 1
        NO.wrapItemAndSub = <li class="level-3 norm first">|</li>|*|<li class="level-3 norm">|</li>|*|<li class="level-3 norm last">|</li>
        NO.ATagParams = class="level-3 norm"
        CUR.wrapItemAndSub = <li class="level-3 click first">|</li>|*|<li class="level-3 click">|</li>|*|<li class="level-3 click last">|</li>
        CUR.ATagParams = class="level-3 click"
        ACT < .CUR
        ACT = 1
      }
    }
  }
}
#----------------------------------------------------------- NAV_SUB-END

#----------------------------------------------------------- NAV_ROOTLINE-BEGIN
tmp.nav_rootline = COA
tmp.nav_rootline{
  wrap = |
  10 = TEXT
  10.value = {$t3d_navigation.nav_rootline_text}
  10.wrap = <div id="nav_rootline_text">|</div>
  20 = HMENU
  20{
    special = rootline
    special.range = {$t3d_navigation.nav_rootline_range}
    1 = TMENU
    1{
      NO {
        ATagParams = class = nav_rootline_norm
        allWrap = <div id="nav_rootline_trenner">></div> |*| <div id="nav_rootline_text">|</div><div id="nav_rootline_trenner">></div> |*| <div id="nav_rootline_norm">|</div>
        #allWrap = |*| |  <img src="{$t3d_pfade.tmpls}verlaufsnav_trenner_9.png" width="7" height="20" />  |*| |
      }
      CUR < .NO
      CUR = 1
      CUR {
        ATagParams = class = nav_rootline_click
        allWrap = <div id="nav_rootline_text">|</div><div id="nav_rootline_trenner">></div> |*| <div id="nav_rootline_text">|</div><div id="nav_rootline_trenner">></div> |*| <div id="nav_rootline_text">|</div>
      }
    }
  }
}
#----------------------------------------------------------- NAV_ROOTLINE-END

#----------------------------------------------------------- NAV_FOOTER-BEGIN
tmp.nav_footer = COA
tmp.nav_footer{
  10 = COA
  10{
    wrap = <ul class="level-1">|</ul>
    10 = HMENU
    10{
      special = directory
      special.value = {$t3d_navigation.nav_footer_directory_id}
      1 = TMENU
      1 {
        IProcFunc = user_tmenulinebreak->main
        expAll = 1
        NO{
          wrapItemAndSub = <li class="level-1 norm first">|</li>|*|<li class="level-1 norm">|</li>|*|<li class="level-1 norm last">|</li>
          ATagParams = class="level-1 norm"
          stdWrap.wrap = <span>|</span>
        }
        CUR < .NO
        CUR.wrapItemAndSub = <li class="level-1 click first">|</li>|*|<li class="level-1 click">|</li>|*|<li class="level-1 click last">|</li>
        CUR.ATagParams = class="level-1 click"
        CUR = 1
        ACT < .CUR
        ACT = 1
      }
    }
  }
}
#----------------------------------------------------------- NAV_FOOTER-END


#----------------------------------------------------------- NAV-INCLUDES-BEGIN
[globalVar = LIT:1 = {$t3d_basis.t3d_navigation}]
# Include tmenulinebreak script
page.includeLibs.tmenulinebreak = {$t3d_pfade.tmpls}php/tmenulinebreak.php

lib.nav_header < tmp.nav_header
lib.nav_main < tmp.nav_main
lib.nav_main_level2 < tmp.nav_main_level2
lib.nav_sub < tmp.nav_sub
lib.nav_rootline < tmp.nav_rootline
lib.nav_footer < tmp.nav_footer
[global]
#----------------------------------------------------------- NAV-INCLUDES-END