####
#### Basis-Definitionen ####


# Include following tag without # in the typoscript constant section of your root template
#<INCLUDE_TYPOSCRIPT:source="file:fileadmin/templates/ts/basis_constants.ts">

###
### Default Constants ###
PAGE_TARGET = _top
content.pageFrameObj = _top

###
### Define custom categories ###
# customsubcategory=etracker=LLL:fileadmin/templates/ts/locallang/t3d.xml:customsubcategory.etracker
# customsubcategory=google=LLL:fileadmin/templates/ts/locallang/t3d.xml:customsubcategory.google
# customsubcategory=alpha=LLL:fileadmin/templates/ts/locallang/t3d.xml:customsubcategory.alpha
# customsubcategory=beta=LLL:fileadmin/templates/ts/locallang/t3d.xml:customsubcategory.beta


###
### TYPO3 Defaults (T3D) Bereich Config ###
t3d_config{
  #cat=t3d_config/enable/010; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.tx_realurl_enable
  tx_realurl_enable = 0
  
  #cat=t3d_config/links/030; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.baseURL
  baseURL = 
  
  #cat=t3d_config/links/040; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.baseURL_mobil
  baseURL_mobil = 
  
  #cat=t3d_config/enable/050; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.spamProtectEmailAddresses
  spamProtectEmailAddresses = 1
  
  #cat=t3d_config/links/060; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.spamProtectEmailAddresses_atSubst
  spamProtectEmailAddresses_atSubst = (at)
  
  #cat=t3d_config/language/070; type=options[Deutsch=de,Englisch=en,Slowenisch=si,Italienisch=it,Franzoesisch=fr,Polnisch=pl,Spanisch=es,Niederlaendisch=nl,Schwedisch=se,Tschechisch=cz,Rumaenisch=ro]; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.language
  language = de
  
  #cat=t3d_config/language/080; type=options[Deutsch=de_DE,Britisch Englisch=en_GB,Amerikanisch Englisch=en_US,Slowenisch=sl_SI,Italienisch=it_IT,Franzoesisch=fr_FR,Polnisch=pl_PL,Spanisch=es_ES,Niederlaendisch=nl_NL,Schwedisch=sv_SE,Tschechisch=cs_CZ,Rumaenisch=ro_RO]; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.locale_all
  locale_all = de_DE
  
  #cat=t3d_config/language/090; type=options[Deutsch=de,Englisch=en,Slowenisch=si,Italienisch=it,Franzoesisch=fr,Polnisch=pl,Spanisch=es,Niederlaendisch=nl,Schwedisch=se,Tschechisch=cz,Rumaenisch=ro]; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.language_2
  language_2 = en
  
  #cat=t3d_config/language/100; type=options[Deutsch=de_DE,Britisch Englisch=en_GB,Amerikanisch Englisch=en_US,Slowenisch=sl_SI,Italienisch=it_IT,Franzoesisch=fr_FR,Polnisch=pl_PL,Spanisch=es_ES,Niederlaendisch=nl_NL,Schwedisch=sv_SE,Tschechisch=cs_CZ,Rumaenisch=ro_RO]; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.locale_all_2
  locale_all_2 = en_GB
  
  #cat=t3d_config/language/110; type=options[Deutsch=de,Englisch=en,Slowenisch=si,Italienisch=it,Franzoesisch=fr,Polnisch=pl,Spanisch=es,Niederlaendisch=nl,Schwedisch=se,Tschechisch=cz,Rumaenisch=ro]; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.language_3
  language_3 = fr
  
  #cat=t3d_config/language/120; type=options[Deutsch=de_DE,Britisch Englisch=en_GB,Amerikanisch Englisch=en_US,Slowenisch=sl_SI,Italienisch=it_IT,Franzoesisch=fr_FR,Polnisch=pl_PL,Spanisch=es_ES,Niederlaendisch=nl_NL,Schwedisch=sv_SE,Tschechisch=cs_CZ,Rumaenisch=ro_RO]; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.locale_all_3
  locale_all_3 = fr_FR
  
  #cat=t3d_config/language/130; type=options[Deutsch=de,Englisch=en,Slowenisch=si,Italienisch=it,Franzoesisch=fr,Polnisch=pl,Spanisch=es,Niederlaendisch=nl,Schwedisch=se,Tschechisch=cz,Rumaenisch=ro]; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.language_4
  language_4 = it
  
  #cat=t3d_config/language/140; type=options[Deutsch=de_DE,Britisch Englisch=en_GB,Amerikanisch Englisch=en_US,Slowenisch=sl_SI,Italienisch=it_IT,Franzoesisch=fr_FR,Polnisch=pl_PL,Spanisch=es_ES,Niederlaendisch=nl_NL,Schwedisch=sv_SE,Tschechisch=cs_CZ,Rumaenisch=ro_RO]; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.locale_all_4
  locale_all_4 = it_IT
  
  #cat=t3d_config/language/150; type=options[Deutsch=de,Englisch=en,Slowenisch=si,Italienisch=it,Franzoesisch=fr,Polnisch=pl,Spanisch=es,Niederlaendisch=nl,Schwedisch=se,Tschechisch=cz,Rumaenisch=ro]; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.language_5
  language_5 = es
  
  #cat=t3d_config/language/160; type=options[Deutsch=de_DE,Britisch Englisch=en_GB,Amerikanisch Englisch=en_US,Slowenisch=sl_SI,Italienisch=it_IT,Franzoesisch=fr_FR,Polnisch=pl_PL,Spanisch=es_ES,Niederlaendisch=nl_NL,Schwedisch=sv_SE,Tschechisch=cs_CZ,Rumaenisch=ro_RO]; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.locale_all_5
  locale_all_5 = es_ES
  
  #cat=t3d_config/language/170; type=options[Deutsch=de,Englisch=en,Slowenisch=si,Italienisch=it,Franzoesisch=fr,Polnisch=pl,Spanisch=es,Niederlaendisch=nl,Schwedisch=se,Tschechisch=cz,Rumaenisch=ro]; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.language_6
  language_6 = nl
  
  #cat=t3d_config/language/180; type=options[Deutsch=de_DE,Britisch Englisch=en_GB,Amerikanisch Englisch=en_US,Slowenisch=sl_SI,Italienisch=it_IT,Franzoesisch=fr_FR,Polnisch=pl_PL,Spanisch=es_ES,Niederlaendisch=nl_NL,Schwedisch=sv_SE,Tschechisch=cs_CZ,Rumaenisch=ro_RO]; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.locale_all_6
  locale_all_6 = nl_NL
  
  #cat=t3d_config/language/190; type=options[Deutsch=de,Englisch=en,Slowenisch=si,Italienisch=it,Franzoesisch=fr,Polnisch=pl,Spanisch=es,Niederlaendisch=nl,Schwedisch=se,Tschechisch=cz,Rumaenisch=ro]; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.language_7
  language_7 = cz
  
  #cat=t3d_config/language/200; type=options[Deutsch=de_DE,Britisch Englisch=en_GB,Amerikanisch Englisch=en_US,Slowenisch=sl_SI,Italienisch=it_IT,Franzoesisch=fr_FR,Polnisch=pl_PL,Spanisch=es_ES,Niederlaendisch=nl_NL,Schwedisch=sv_SE,Tschechisch=cs_CZ,Rumaenisch=ro_RO]; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.locale_all_7
  locale_all_7 = cs_CZ
  
  #cat=t3d_config/language/210; type=options[Deutsch=de,Englisch=en,Slowenisch=si,Italienisch=it,Franzoesisch=fr,Polnisch=pl,Spanisch=es,Niederlaendisch=nl,Schwedisch=se,Tschechisch=cz,Rumaenisch=ro]; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.language_8
  language_8 = ro
  
  #cat=t3d_config/language/220; type=options[Deutsch=de_DE,Britisch Englisch=en_GB,Amerikanisch Englisch=en_US,Slowenisch=sl_SI,Italienisch=it_IT,Franzoesisch=fr_FR,Polnisch=pl_PL,Spanisch=es_ES,Niederlaendisch=nl_NL,Schwedisch=sv_SE,Tschechisch=cs_CZ,Rumaenisch=ro_RO]; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.locale_all_8
  locale_all_8 = ro_RO
  
  #cat=t3d_config/language/230; type=options[Deutsch=de,Englisch=en,Slowenisch=si,Italienisch=it,Franzoesisch=fr,Polnisch=pl,Spanisch=es,Niederlaendisch=nl,Schwedisch=se,Tschechisch=cz,Rumaenisch=ro]; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.language_9
  language_9 = pl
  
  #cat=t3d_config/language/240; type=options[Deutsch=de_DE,Britisch Englisch=en_GB,Amerikanisch Englisch=en_US,Slowenisch=sl_SI,Italienisch=it_IT,Franzoesisch=fr_FR,Polnisch=pl_PL,Spanisch=es_ES,Niederlaendisch=nl_NL,Schwedisch=sv_SE,Tschechisch=cs_CZ,Rumaenisch=ro_RO]; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.locale_all_9
  locale_all_9 = pl_PL
}


##
## TYPO3 Defaults (T3D) Bereich Basis ###
t3d_basis{
  ### enable ###
  #cat=t3d_basis/enable/10; type=options[Default=0,Fluid=1,Templavoila=2]; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_basis.templateengine
  templateengine = 2
  
  #cat=t3d_basis/enable/12; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_basis.favicon
  favicon = 0
  
  #cat=t3d_basis/enable/80; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_basis.ts_css_styled_content
  ts_css_styled_content = 1
  
  #cat=t3d_basis/enable/82; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_basis.ts_seitentypen
  ts_seitentypen = 1
  
  #cat=t3d_basis/enable/84; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_basis.ts_css
  ts_css = 1
  
  #cat=t3d_basis/enable/86; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_basis.ts_objekte
  ts_objekte = 1
  
  #cat=t3d_basis/enable/88; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_basis.ts_navigation
  ts_navigation = 1
  
  #cat=t3d_basis/enable/90; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_basis.t3d_searchengine
  t3d_searchengine = 1
  
  #cat=t3d_basis/enable/94; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_basis.ts_funktionen
  ts_funktionen = 0
  
  #cat=t3d_basis/enable/96; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_basis.ts_js
  ts_js = 1
}


### TYPO3 Defaults (T3D) Bereich Cache ###
t3d_cache{
  #cat=t3d_cache/enable/10; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_cache.no_cache
  no_cache = 1
  
  #cat=t3d_cache/enable/15; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_cache.clearAtMidnight
  clearAtMidnight = 1
  
  #cat=t3d_cache/enable/20; type=int+; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_cache.period
  period = 86400
  
  #cat=t3d_cache/enable/42; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_cache.concatenateJs
  concatenateJs = 1
  
  #cat=t3d_cache/enable/44; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_cache.concatenateCss
  concatenateCss = 1
  
  #cat=t3d_cache/enable/46; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_cache.compressJs
  compressJs = 1
  
  #cat=t3d_cache/enable/48; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_cache.compressCss
  compressCss = 1
}



### TYPO3 Defaults (T3D) Bereich Pfade ###
t3d_pfade{
  #cat=t3d_pfade/file/5; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_pfade.tmpls
  tmpls = fileadmin/templates/
}




### TYPO3 Defaults (T3D) Bereich Style ###
t3d_style{
  #cat=t3d_style/file/10; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_style.webfont
  webfont = 
  #cat=t3d_style/color/15; type=color; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_style.bgcolor_showpic
  bgcolor_showpic = white
}



###  TYPO3 Defaults (T3D) Bereich Basis - Links ###
t3d_basis{
  ##cat=t3d_basis/links/10; type=string; label=Seitentitel (sitetitle)
  #sitetitle = 
  
  #cat=t3d_basis/links/10; type=int; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_basis.rootpageID
  rootpageID = 1
  
  #cat=t3d_basis/links/18; type=int; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_basis.searchpageID
  searchpageID = 2
  
  #cat=t3d_basis/links/20; type=int; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_basis.adresspageID
  adresspageID = 3
  
  #cat=t3d_basis/links/22; type=int; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_basis.newsfolderID
  newsfolderID = 4
  
  #cat=t3d_basis/links/35; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_basis.obj_logo
  obj_logo = obj_logo.gif
  
  #cat=t3d_basis/links/40; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_basis.favicon_file
  favicon_file = fileadmin/bilder/t3d_basis/favicon.ico
}


###  TYPO3 Defaults (T3D) Bereich Grid ###
t3d_grid{
  #cat=t3d_grid/enable/10; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_grid.enable
  enable = 1
  
  #cat=t3d_grid/dims/15; type=int+; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_grid.max_width
  max_width = 1148
  
  #cat=t3d_grid/dims/20; type=int+; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_grid.max_cols
  max_cols = 24
  
  #cat=t3d_grid/dims/25; type=int+; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_grid.col_width
  col_width = 70
  
  #cat=t3d_grid/dims/30; type=int+; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_grid.col_margin
  col_margin = 20
  
  #cat=t3d_grid/dims/35; type=options[in Pixeln=px,in Prozent=%]; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_grid.unity
  unity = %
}



###  TYPO3 Defaults (T3D) Bereich Etracker ###
t3d_searchengine{
  #cat=t3d_searchengine/etracker/010; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_searchengine.etracker.id
  etracker.id =
  
  #cat=t3d_searchengine/etracker/020; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_searchengine.etracker.asnch.enable
  etracker.asnch_enable = 1
  
  #cat=t3d_searchengine/etracker/015; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_searchengine.etracker.eventtracker.enable
  etracker.eventtracker_enable = 0
  
  #cat=t3d_searchengine/etracker/030; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_searchengine.etracker.range_areas
  etracker.range_areas = 1|-2
  
  #cat=t3d_searchengine/etracker/040; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_searchengine.etracker.areas_splitchar
  etracker.areas_splitchar = ,
  
  #cat=t3d_searchengine/etracker/050; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_searchengine.etracker.range_pagename
  etracker.range_pagename = 1|-1
  
  #cat=t3d_searchengine/etracker/060; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_searchengine.etracker.pagename_splitchar
  etracker.pagename_splitchar = %20->%20
  
  #cat=t3d_searchengine/etracker/070; type=int+; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_searchengine.etracker.ilevel_all
  etracker.ilevel_all = 4
  
  #cat=t3d_searchengine/etracker/080; type=int+; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_searchengine.etracker.ilevel_1
  etracker.ilevel_1 = 5
  
  #cat=t3d_searchengine/etracker/090; type=int+; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_searchengine.etracker.ilevel_2
  etracker.ilevel_2 = 6
  
  #cat=t3d_searchengine/etracker/100; type=int+; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_searchengine.etracker.ilevel_3
  etracker.ilevel_3 = 7
  
  #cat=t3d_searchengine/etracker/110; type=int+; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_searchengine.etracker.ilevel_4
  etracker.ilevel_4 = 8
  
  #cat=t3d_searchengine/etracker/120; type=int+; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_searchengine.etracker.ilevel_5
  etracker.ilevel_5 = 9
  
  #cat=t3d_searchengine/etracker/130; type=int+; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_searchengine.etracker.ilevel_6
  etracker.ilevel_6 = 10
  
  #cat=t3d_searchengine/google/010; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_searchengine.google_ver.enable
  google_ver.enable = 1
  
  #cat=t3d_searchengine/google/020; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_searchengine.google_ver.id
  google_ver.id = Za8YMk2jAVt9oylO8hRVNXHdSwUBuAd6a_rPDFFIomk
  
  #cat=t3d_searchengine/google/030; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_searchengine.google_analytics.enable
  google_analytics.enable = 0
  
  #cat=t3d_searchengine/google/040; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_searchengine.google_analytics.id
  google_analytics.id = 
  
  #cat=t3d_searchengine/google/050; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_searchengine.google_analytics.eventtracker.enable
  google_analytics.eventtracker_enable = 0
}





##  TYPO3 Defaults (T3D) Bereich Navigation ###

## Hauptnavigation #
t3d_navigation{
  #cat=t3d_navigation//15; type=int; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_navigation.nav_main_entryLevel
  nav_main_entryLevel = 0
  
  #cat=t3d_navigation//20; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_navigation.nav_main_excludeUidList
  nav_main_excludeUidList =
  
  ## Unternavigation #
  #cat=t3d_navigation//25; type=int; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_navigation.nav_sub_entryLevel
  nav_sub_entryLevel = 0
  
  #cat=t3d_navigation//30; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_navigation.nav_sub_excludeUidList
  nav_sub_excludeUidList =
  
  ## Verlaufsnavigation #
  #cat=t3d_navigation//35; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_navigation.nav_rootline_text
  nav_rootline_text = Hier bin ich:&nbsp;
  
  #cat=t3d_navigation//40; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_navigation.nav_rootline_range
  nav_rootline_range = 1|5
}

##
## Bereich jQuery ###
t3d_js{
}



##
## Seitentitel ###
t3d_seitentitel{
  #cat=t3d_seitentitel//10; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_seitentitel.enable
  enable = 1
  
  #cat=t3d_seitentitel//20; type=int; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_seitentitel.basisTemplateId
  basisTemplateId = 1
  
  #cat=t3d_seitentitel//30; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_seitentitel.excludeUidList
  excludeUidList = 121
  
  #cat=t3d_seitentitel//40; type=int; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_seitentitel.max
  max = 0
  
  #cat=t3d_seitentitel//50; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_seitentitel.charBetweenWords
  charBetweenWords = |
  
  #cat=t3d_seitentitel//60; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_seitentitel.debug
  debug = 0
}



##
## SeitenTypen ###
t3d_seitentypen{
  #cat=t3d_seitentypen/alpha/010; type=int+; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_seitentypen.a.typenum
  a.typenum = 500
  
  #cat=t3d_seitentypen/alpha/020; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_seitentypen.a.no_cache
  a.no_cache = 0
  
  #cat=t3d_seitentypen/alpha/030; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_seitentypen.a.debug
  a.debug = 0
  
  #cat=t3d_seitentypen/beta/010; type=int+; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_seitentypen.b.typenum
  b.typenum = 22
  
  #cat=t3d_seitentypen/beta/010; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_seitentypen.b.no_cache
  b.no_cache = 1
  
  #cat=t3d_seitentypen/beta/020; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_seitentypen.b.debug
  b.debug = 0
  
  #cat=t3d_seitentypen/beta/030; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_seitentypen.b.cobj_type
  b.cobj_type = 0
  
  #cat=t3d_seitentypen/beta/040; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_seitentypen.b.cobj_tables
  b.cobj_tables = tt_content
  
  #cat=t3d_seitentypen/beta/050; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_seitentypen.b.cobj_tables_ids
  b.cobj_tables_ids = 
  
  #cat=t3d_seitentypen/beta/060; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_seitentypen.b.cobj_tables_ids_data
  b.cobj_tables_ids_data = 0
  
  #cat=t3d_seitentypen/beta/070; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_seitentypen.b.cobj_tables_ids_data_gp
  b.cobj_tables_ids_data_gp = uid
}










##
## Sonstige Hinweise ###

##Waehrend der Entwicklung folgende Zeile unter Admin-Werkzeuge > Verwaltung ins Admin-TSconfig Feld einfuegen.
#admPanel.override.tsdebug.forceTemplateParsing = 1
##Damit braucht man den Cache nicht zu loeschen


