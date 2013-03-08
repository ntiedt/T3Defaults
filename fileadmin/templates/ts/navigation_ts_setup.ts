##
## Navigation ###

### Hauptnavigation ###
tmp.nav_main = COA
tmp.nav_main{
  10 = COA
  10{
    wrap = <div>|</div>
    10 = HMENU
    10{
      entryLevel = {$navigation.nav_main_entryLevel}
      excludeUidList = {$navigation.nav_main_excludeUidList}
      1 = TMENU
      1 {
        wrap = <ul class="level-1">|</ul>
        IProcFunc = user_tmenulinebreak->main
        expAll = 1
        noBlur = 1
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
        noBlur = 1
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
        noBlur = 1
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

### Unternavigation ###
tmp.nav_sub = COA
tmp.nav_sub{
  10 = COA
  10{
    wrap = <div>|</div>
    10 = HMENU
    10{
      entryLevel = {$navigation.nav_sub_entryLevel}
      excludeUidList = {$navigation.nav_sub_excludeUidList}
      1 = TMENU
      1 {
        wrap = <ul class="level-1">|</ul>
        IProcFunc = user_tmenulinebreak->main
        expAll = 1
        noBlur = 1
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
        noBlur = 1
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
        noBlur = 1
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

### Verlaufsnavigation ###
tmp.nav_rootline = COA
tmp.nav_rootline{
  wrap = |
  10 = TEXT
  10.value = {$navigation.nav_rootline_text}
  10.wrap = <div id="nav_rootline_text">|</div>
  20 = HMENU
  20{
    special = rootline
    special.range = {$navigation.nav_rootline_range}
    1 = TMENU
    1{
      NO {
        ATagParams = class = nav_rootline_norm
        allWrap = <div id="nav_rootline_trenner">></div> |*| <div id="nav_rootline_text">|</div><div id="nav_rootline_trenner">></div> |*| <div id="nav_rootline_norm">|</div>
        #allWrap = |*| |  <img src="{$pfade.tmpls}verlaufsnav_trenner_9.png" width="7" height="20" />  |*| |
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


[globalVar = LIT:1 = {$t3d_basis.ts_navigation}]
# Include tmenulinebreak script
page.includeLibs.tmenulinebreak = {$pfade.tmpls}php/tmenulinebreak.php

lib.nav_main < tmp.nav_main
lib.nav_sub < tmp.nav_sub
lib.nav_rootline < tmp.nav_rootline
[global]