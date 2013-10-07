####
#### Basis-Definitionen ####


# Include following tag without # in the typoscript constant section of your root template
#<INCLUDE_TYPOSCRIPT:source="file:fileadmin/templates/ts/basis_constants.ts">

###
### Default Constants ###
PAGE_TARGET = _top
content.pageFrameObj = _top


###
### TYPO3 Defaults (T3D) Bereich Config ###
t3d_config{
  #cat=t3d_config/enable//; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.tx_realurl_enable
  tx_realurl_enable = 0
  
  #cat=t3d_config/enable//; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.simulateStaticDocuments
  simulateStaticDocuments = 0
  
  #cat=t3d_config/links//; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.baseURL
  baseURL = 
  
  #cat=t3d_config/links//; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.baseURL_mobil
  baseURL_mobil = 
  
  #cat=t3d_config/enable//; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.spamProtectEmailAddresses
  spamProtectEmailAddresses = 1
  
  #cat=t3d_config/links//; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.spamProtectEmailAddresses_atSubst
  spamProtectEmailAddresses_atSubst = (at)
  
  #cat=t3d_config/language//; type=options[Deutsch=de,Englisch=en,Slowenisch=si,Italienisch=it,Franzoesisch=fr,Polnisch(ohne UTF8 metaCharset/renderCharset setzen)=pl,Spanisch=es,Niederlaendisch=nl,Schwedisch=se,Tschechisch=cz,Rumaenisch=ro]; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.language
  language = de
  
  #cat=t3d_config/language//; type=options[Deutsch=de_DE,Britisch Englisch=en_GB,Amerikanisch Englisch=en_US,Slowenisch=sl_SI,Italienisch=it_IT,Franzoesisch=fr_FR,Polnisch(ohne UTF8 metaCharset/renderCharset setzen)=pl_PL,Spanisch=es_ES,Niederlaendisch=nl_NL,Schwedisch=sv_SE,Tschechisch=cs_CZ,Rumaenisch=ro_RO]; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.locale_all
  locale_all = de_DE
  
  #cat=t3d_config/language//; type=options[Deutsch=de,Englisch=en,Slowenisch=si,Italienisch=it,Franzoesisch=fr,Polnisch(ohne UTF8 metaCharset/renderCharset setzen)=pl,Spanisch=es,Niederlaendisch=nl,Schwedisch=se,Tschechisch=cz,Rumaenisch=ro]; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.language_2
  language_2 = en
  
  #cat=t3d_config/language//; type=options[Deutsch=de_DE,Britisch Englisch=en_GB,Amerikanisch Englisch=en_US,Slowenisch=sl_SI,Italienisch=it_IT,Franzoesisch=fr_FR,Polnisch(ohne UTF8 metaCharset/renderCharset setzen)=pl_PL,Spanisch=es_ES,Niederlaendisch=nl_NL,Schwedisch=sv_SE,Tschechisch=cs_CZ,Rumaenisch=ro_RO]; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_config.locale_all_2
  locale_all_2 = en_GB
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
  
  #cat=t3d_basis/enable/90; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_basis.ts_etracker
  ts_etracker = 1
  
  #cat=t3d_basis/enable/92; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_basis.google_ver
  google_ver = 0
  
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
  
  #cat=t3d_pfade/file/10; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_pfade.webfont
  webfont = 
}




### TYPO3 Defaults (T3D) Bereich Style ###
t3d_style{
  #cat=t3d_style/typo/10; type=options[8pt=8pt,9pt=9pt,10pt=10pt,11pt=11pt,12pt=12pt,13pt=13pt,14pt=14pt,15pt=15pt,16pt=16pt,17pt=17pt,18pt=18pt,19pt=19pt,20pt=20pt,21pt=21pt,22pt=22pt,23pt=23pt,24pt=24pt,25pt=25pt]; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_style.font_size.default
  font_size.default = 8pt
  
  #cat=t3d_style/typo/12; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_style.font_size.default
  line_height.default = 13pt
  
  #cat=t3d_style/typo/35; type=options[Normal=normal,Fett=bold]; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_style.font_size.default
  font_weight.default = normal
  
  #cat=t3d_style/typo/15; type=options[8pt=8pt,9pt=9pt,10pt=10pt,11pt=11pt,12pt=12pt,13pt=13pt,14pt=14pt,15pt=15pt,16pt=16pt,17pt=17pt,18pt=18pt,19pt=19pt,20pt=20pt,21pt=21pt,22pt=22pt,23pt=23pt,24pt=24pt,25pt=25pt]; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_style.font_size.default
  font_size.anchor = 8pt
  
  #cat=t3d_style/typo/12; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_style.font_size.default
  line_height.anchor = 13pt
  
  #cat=t3d_style/typo/40; type=options[Normal=normal,Fett=bold]; label=Schriftformatierung Link:(a)
  font_weight.anchor = bold
  
  #cat=t3d_style/typo/43; type=options[Normal=normal,Fett=bold]; label=Schriftformatierung Link Hover:(a:hover)
  font_weight.anchor_hover = bold
  
  #cat=t3d_style/typo/18; type=options[8pt=8pt,9pt=9pt,10pt=10pt,11pt=11pt,12pt=12pt,13pt=13pt,14pt=14pt,15pt=15pt,16pt=16pt,17pt=17pt,18pt=18pt,19pt=19pt,20pt=20pt,21pt=21pt,22pt=22pt,23pt=23pt,24pt=24pt,25pt=25pt]; label=
  font_size.h1_cscFirstHeader = 11pt
  
  #cat=t3d_style/typo/12; type=string; label=
  line_height.h1_cscFirstHeader = 13pt
  
  #cat=t3d_style/typo/40; type=options[Normal=normal,Fett=bold]; label=Schriftformatierung Link:(a)
  font_weight.h1_cscFirstHeader = bold
  
  #cat=t3d_style/typo/20; type=options[8pt=8pt,9pt=9pt,10pt=10pt,11pt=11pt,12pt=12pt,13pt=13pt,14pt=14pt,15pt=15pt,16pt=16pt,17pt=17pt,18pt=18pt,19pt=19pt,20pt=20pt,21pt=21pt,22pt=22pt,23pt=23pt,24pt=24pt,25pt=25pt]; label=
  font_size.h1 = 11pt
  
  #cat=t3d_style/typo/12; type=string; label=
  line_height.h1 = 13pt
  
  #cat=t3d_style/typo/40; type=options[Normal=normal,Fett=bold]; label=Schriftformatierung Link:(a)
  font_weight.h1 = bold
  
  #cat=t3d_style/typo/22; type=options[8pt=8pt,9pt=9pt,10pt=10pt,11pt=11pt,12pt=12pt,13pt=13pt,14pt=14pt,15pt=15pt,16pt=16pt,17pt=17pt,18pt=18pt,19pt=19pt,20pt=20pt,21pt=21pt,22pt=22pt,23pt=23pt,24pt=24pt,25pt=25pt]; label=
  font_size.h2 = 10pt
  
  #cat=t3d_style/typo/12; type=string; label=
  line_height.h2 = 13pt
  
  #cat=t3d_style/typo/40; type=options[Normal=normal,Fett=bold]; label=Schriftformatierung Link:(a)
  font_weight.h2 = bold
  
  #cat=t3d_style/typo/24; type=options[8pt=8pt,9pt=9pt,10pt=10pt,11pt=11pt,12pt=12pt,13pt=13pt,14pt=14pt,15pt=15pt,16pt=16pt,17pt=17pt,18pt=18pt,19pt=19pt,20pt=20pt,21pt=21pt,22pt=22pt,23pt=23pt,24pt=24pt,25pt=25pt]; label=
  font_size.h3 = 9pt
  
  #cat=t3d_style/typo/12; type=string; label=
  line_height.h3 = 13pt
  
  #cat=t3d_style/typo/40; type=options[Normal=normal,Fett=bold]; label=Schriftformatierung Link:(a)
  font_weight.h3 = bold
  
  #cat=t3d_style/typo/26; type=options[8pt=8pt,9pt=9pt,10pt=10pt,11pt=11pt,12pt=12pt,13pt=13pt,14pt=14pt,15pt=15pt,16pt=16pt,17pt=17pt,18pt=18pt,19pt=19pt,20pt=20pt,21pt=21pt,22pt=22pt,23pt=23pt,24pt=24pt,25pt=25pt]; label=
  font_size.h4 = 9pt
  
  #cat=t3d_style/typo/12; type=string; label=
  line_height.h4 = 13pt
  
  #cat=t3d_style/typo/40; type=options[Normal=normal,Fett=bold]; label=Schriftformatierung Link:(a)
  font_weight.h4 = bold
  
  #cat=t3d_style/typo/28; type=options[8pt=8pt,9pt=9pt,10pt=10pt,11pt=11pt,12pt=12pt,13pt=13pt,14pt=14pt,15pt=15pt,16pt=16pt,17pt=17pt,18pt=18pt,19pt=19pt,20pt=20pt,21pt=21pt,22pt=22pt,23pt=23pt,24pt=24pt,25pt=25pt]; label=
  font_size.h5 = 9pt
  
  #cat=t3d_style/typo/12; type=string; label=
  line_height.h5 = 13pt
  
  #cat=t3d_style/typo/40; type=options[Normal=normal,Fett=bold]; label=Schriftformatierung Link:(a)
  font_weight.h5 = bold
  
  #cat=t3d_style/typo/30; type=options[8pt=8pt,9pt=9pt,10pt=10pt,11pt=11pt,12pt=12pt,13pt=13pt,14pt=14pt,15pt=15pt,16pt=16pt,17pt=17pt,18pt=18pt,19pt=19pt,20pt=20pt,21pt=21pt,22pt=22pt,23pt=23pt,24pt=24pt,25pt=25pt]; label=
  font_size.h6 = 9pt
  
  #cat=t3d_style/typo/12; type=string; label=
  line_height.h6 = 13pt
  
  #cat=t3d_style/typo/40; type=options[Normal=normal,Fett=bold]; label=Schriftformatierung Link:(a)
  font_weight.h6 = bold
  
  #cat=t3d_style/typo/32; type=options[8pt=8pt,9pt=9pt,10pt=10pt,11pt=11pt,12pt=12pt,13pt=13pt,14pt=14pt,15pt=15pt,16pt=16pt,17pt=17pt,18pt=18pt,19pt=19pt,20pt=20pt,21pt=21pt,22pt=22pt,23pt=23pt,24pt=24pt,25pt=25pt]; label=
  font_size.li = 9pt
  
  #cat=t3d_style/typo/12; type=string; label=
  line_height.li = 13pt
  
  #cat=t3d_style/typo/40; type=options[Normal=normal,Fett=bold]; label=Schriftformatierung Link:(a)
  font_weight.li = bold
  
  #cat=t3d_style/typo/50; type=string; label=Listen Aussenabstand (ul margin):-> 0px 0px 0px 0px
  ul.margin = 0px 0px 0px 0px
  
  #cat=t3d_style/typo/55; type=string; label=Listenpunkt Aussenabstand (li margin):-> 0px 0px 0px 0px
  li.margin = 0px 0px 0px 0px
  
  #cat=t3d_style/typo/60; type=string; label=Listen Innenabstand (ul padding):-> 0px 0px 0px 0px
  ul.padding = 0px 0px 0px 0px
  
  #cat=t3d_style/typo/65; type=string; label=Listenpunkt Innenabstand (li padding):-> 0px 0px 0px 0px
  li.padding = 0px 0px 0px 0px
  
  #cat=t3d_style/enable/15; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_basis.ul.liststyleimage
  ul.liststyleimage = 0
  
  #cat=t3d_style/typo/70; type=options[gefuellter Kreis als Bullet-Zeichen=disc,leerer Kreis als Bullet-Zeichen=circle,rechteckiges Bullet-Zeichen=square,kein Zeichen=none]; label=Listen Darstellung (ul list-style-type)
  ul.liststyletype = disc
  
  #cat=t3d_style/typo/80; type=string; label=eigenes Listenbild (ul list-style-image):z.b. bg_liste.gif
  ul.liststyleimage_file = bg_liste.gif
  
  #cat=t3d_style/color/15; type=color; label=Hintergrundfarbe der Klickvergroesserung
  bgcolor_showpic = white
  
  #cat=t3d_style/color/20; type=color; label=Schriftfarbe
  font_color = black
  
  #cat=t3d_style/color/25; type=color; label=Linkfarbe:(href)
  anchor_color = blue
  
  #cat=t3d_style/color/30; type=color; label=Linkfarbe-Hover
  anchor_color_hover = red
  
  #cat=t3d_style/color/35; type=color; label=Schriftfarbe Liste
  ul.color = black
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
  max_cols = 12
  
  #cat=t3d_grid/dims/25; type=int+; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_grid.col_width
  col_width = 70
  
  #cat=t3d_grid/dims/30; type=int+; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_grid.col_margin
  col_margin = 20
  
  #cat=t3d_grid/dims/35; type=options[in Pixeln=px,in Prozent=%]; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_grid.unity
  unity = %
}



###  TYPO3 Defaults (T3D) Bereich Etracker ###
t3d_searchengine{
  #cat=t3d_searchengine/links/10; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_searchengine.etracker.id
  etracker.id =
  
  #cat=t3d_searchengine/links/15; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_searchengine.etracker.range_areas
  etracker.range_areas = 1|-2
  
  #cat=t3d_searchengine/links/20; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_searchengine.etracker.areas_splitchar
  etracker.areas_splitchar = ,
  
  #cat=t3d_searchengine/links/25; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_searchengine.etracker.range_pagename
  etracker.range_pagename = 1|-1
  
  #cat=t3d_searchengine/links/30; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_searchengine.etracker.pagename_splitchar
  etracker.pagename_splitchar = %20->%20
  
  #cat=t3d_searchengine/links/35; type=int+; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_searchengine.etracker.ilevel_all
  etracker.ilevel_all = 4
  
  #cat=t3d_searchengine/links/40; type=int+; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_searchengine.etracker.ilevel_1
  etracker.ilevel_1 = 5
  
  #cat=t3d_searchengine/links/45; type=int+; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_searchengine.etracker.ilevel_2
  etracker.ilevel_2 = 6
  
  #cat=t3d_searchengine/links/50; type=int+; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_searchengine.etracker.ilevel_3
  etracker.ilevel_3 = 7
  
  #cat=t3d_searchengine/links/55; type=int+; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_searchengine.etracker.ilevel_4
  etracker.ilevel_4 = 8
  
  #cat=t3d_searchengine/links/60; type=int+; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_searchengine.etracker.ilevel_5
  etracker.ilevel_5 = 9
  
  #cat=t3d_searchengine/links/65; type=int+; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_searchengine.etracker.ilevel_6
  etracker.ilevel_6 = 10
  
  #cat=t3d_searchengine/links/90; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_searchengine.google.id
  google.id = 
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
  #cat=t3d_seitentypen//; type=int+; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_seitentypen.a.typenum
  a.typenum = 500
  
  #cat=t3d_seitentypen//; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_seitentypen.a.no_cache
  a.no_cache = 0
  
  #cat=t3d_seitentypen//; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_seitentypen.a.debug
  a.debug = 0
  
  #cat=t3d_seitentypen//; type=int+; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_seitentypen.b.typenum
  b.typenum = 22
  
  #cat=t3d_seitentypen//; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_seitentypen.b.no_cache
  b.no_cache = 1
  
  #cat=t3d_seitentypen//; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_seitentypen.b.debug
  b.debug = 0
  
  #cat=t3d_seitentypen//; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_seitentypen.b.cobj_type
  b.cobj_type = 0
  
  #cat=t3d_seitentypen//; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_seitentypen.debug.b.cobj_tables
  b.cobj_tables = tt_content
  
  #cat=t3d_seitentypen//; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_seitentypen.debug.b.cobj_tables_ids
  b.cobj_tables_ids = 
  
  #cat=t3d_seitentypen//; type=boolean; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_seitentypen.debug.b.cobj_tables_ids_data
  b.cobj_tables_ids_data = 0
  
  #cat=t3d_seitentypen//; type=string; label=LLL:fileadmin/templates/ts/locallang/t3d.xml:t3d_seitentypen.debug.b.cobj_tables_ids_data_gp
  b.cobj_tables_ids_data_gp = uid
}










##
## Sonstige Hinweise ###

##Waehrend der Entwicklung folgende Zeile unter Admin-Werkzeuge > Verwaltung ins Admin-TSconfig Feld einfuegen.
#admPanel.override.tsdebug.forceTemplateParsing = 1
##Damit braucht man den Cache nicht zu loeschen


