##
## Navigation ###

### Hauptnavigation ###
tmp.nav_main = COA
tmp.nav_main{
  10 = HMENU
  10{
    entryLevel = {$navigation.nav_main_entryLevel}
    excludeUidList = {$navigation.nav_main_excludeUidList}
    1 = TMENU
    1 {
      wrap = <div id="nav_main_level1" class="clearfix">|</div>
      IProcFunc = user_tmenulinebreak->main
      NO{
        allWrap = |
        ATagParams = class = nav_main_norm
      }
      CUR < .NO
      CUR.ATagParams = class = nav_main_click
      CUR = 1
      ACT < .CUR
      ACT = 1
    }
  }
}

### Unternavigation ###
tmp.nav_sub = COA
tmp.nav_sub{
  10 = HMENU
  10{
    entryLevel = {$navigation.nav_sub_entryLevel}
    excludeUidList = {$navigation.nav_sub_excludeUidList}
    1 = TMENU
    1 {
      wrap = <div id="nav_sub_level1" class="clearfix">|</div>
      IProcFunc = user_tmenulinebreak->main
      NO{
        allWrap = |
        ATagParams = class = nav_sub_norm
      }
      CUR < .NO
      CUR.ATagParams = class = nav_sub_click
      CUR = 1
      ACT < .CUR
      ACT = 1
    }
    2 < .1
    2 {
      wrap = <div id="nav_sub_level2" class="clearfix">|</div>
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
        #allWrap = |*| |  <img src="fileadmin/bilder/basis/verlaufsnav_trenner_9.png" width="7" height="20" />  |*| |
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


[globalVar = LIT:1 = {$basis.ts_navigation}]
# Include tmenulinebreak script
page.includeLibs.tmenulinebreak = {$navigation.tmenulinebreak}

lib.nav_main < tmp.nav_main
lib.nav_sub < tmp.nav_sub
lib.nav_rootline < tmp.nav_rootline
[global]