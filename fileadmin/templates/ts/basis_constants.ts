###
### Basis-Definitionen ###


# Include following tag without # in the typoscript constant section of your root template
#<INCLUDE_TYPOSCRIPT:source="file:fileadmin/templates/ts/basis_constants.ts">

##
## Default Constants ###
PAGE_TARGET = _top
content.pageFrameObj = _top


##
## TYPO3 Defaults (T3D) Bereich Basis ###

### enable ###
#cat=t3d_basis/enable/10; type=options[Default=0,Fluid=1,Templavoila=2]; label=Templateengine
t3d_basis.templateengine = 2

#cat=t3d_basis/enable/12; type=boolean; label=Favicon verwenden:-> 0=Aus / 1=Ein
t3d_basis.favicon = 0

#cat=t3d_basis/enable/15; type=boolean; label=eigenes Listenbild verwenden:-> 0=Aus / 1=Ein
t3d_basis.ul_liststyleimage = 0

#cat=t3d_basis/enable/25; type=boolean; label=RealUrl (config.tx_realurl_enable):-> 0=Aus / 1=Ein
t3d_basis.tx_realurl_enable = 0

#cat=t3d_basis/enable/30; type=boolean; label=simulateStaticDocuments (config.simulateStaticDocuments):-> 0=Aus / 1=Ein
t3d_basis.simulateStaticDocuments = 0

#cat=t3d_basis/enable/35; type=boolean; label=UTF-8 Support :-> 0=Aus / 1=Ein : Zusaetzlich im Install-Tool unter forceCharset "utf-8" eingeben
t3d_basis.utf8_support = 1

#cat=t3d_basis/enable/40; type=boolean; label=Seitencache wenn BE-User eingeloggt (config.no_cache):-> 0=Ein / 1=Aus, Nach Entwicklung deaktivieren!!
t3d_basis.no_cache = 1

#cat=t3d_basis/enable/43; type=boolean; label=TS tt_content laden:-> 0=Aus / 1=Ein
t3d_basis.ts_tt_content = 1

#cat=t3d_basis/enable/45; type=boolean; label=TS Seitentypen laden:-> 0=Aus / 1=Ein
t3d_basis.ts_seitentypen = 1

#cat=t3d_basis/enable/50; type=boolean; label=TS CSS laden:-> 0=Aus / 1=Ein
t3d_basis.ts_css = 1

#cat=t3d_basis/enable/55; type=boolean; label=TS Objekte laden:-> 0=Aus / 1=Ein
t3d_basis.ts_objekte = 1

#cat=t3d_basis/enable/60; type=boolean; label=TS Navigation laden:-> 0=Aus / 1=Ein
t3d_basis.ts_navigation = 1

#cat=t3d_basis/enable/65; type=boolean; label=TS E-Tracker laden:-> 0=Aus / 1=Ein
t3d_basis.ts_etracker = 1

#cat=t3d_basis/enable/70; type=boolean; label=Google Verifizierung einschalten:-> 0=Aus / 1=Ein
t3d_basis.google_ver = 0

#cat=t3d_basis/enable/75; type=boolean; label=TS Funktionen laden:-> 0=Aus / 1=Ein
t3d_basis.ts_funktionen = 0

#cat=t3d_basis/enable/80; type=boolean; label=TS JS laden:-> 0=Aus / 1=Ein
t3d_basis.ts_js = 1




### TYPO3 Defaults (T3D) Bereich Pfade ###

#cat=t3d_pfade//10; type=string; label=Pfad zum Template Standard Verzeichnis:z.b. fileadmin/templates/
t3d_pfade.tmpls = fileadmin/templates/




###  TYPO3 Defaults (T3D) Bereich Basis - Typographie ###
#cat=t3d_basis/typo/5; type=string; label=Pfad zur Webfont:e.g.http://fonts.googleapis.com/css?family=Roboto+Condensed
t3d_basis.webfont = 

#cat=t3d_basis/typo/10; type=options[8pt=8pt,9pt=9pt,10pt=10pt,11pt=11pt,12pt=12pt,13pt=13pt,14pt=14pt,15pt=15pt,16pt=16pt,17pt=17pt,18pt=18pt,19pt=19pt,20pt=20pt,21pt=21pt,22pt=22pt,23pt=23pt,24pt=24pt,25pt=25pt]; label=Schriftgroesse
t3d_basis.font_size = 8pt

#cat=t3d_basis/typo/12; type=string; label=Zeilenabstand (line-height):-> 13pt
t3d_basis.line_height = 13pt

#cat=t3d_basis/typo/15; type=options[8pt=8pt,9pt=9pt,10pt=10pt,11pt=11pt,12pt=12pt,13pt=13pt,14pt=14pt,15pt=15pt,16pt=16pt,17pt=17pt,18pt=18pt,19pt=19pt,20pt=20pt,21pt=21pt,22pt=22pt,23pt=23pt,24pt=24pt,25pt=25pt]; label=Schriftgroesse Link:(href)
t3d_basis.font_size_anchor = 8pt

#cat=t3d_basis/typo/18; type=options[8pt=8pt,9pt=9pt,10pt=10pt,11pt=11pt,12pt=12pt,13pt=13pt,14pt=14pt,15pt=15pt,16pt=16pt,17pt=17pt,18pt=18pt,19pt=19pt,20pt=20pt,21pt=21pt,22pt=22pt,23pt=23pt,24pt=24pt,25pt=25pt]; label=Schriftgroesse erster H1 auf Seite
t3d_basis.font_size_h1_cscFirstHeader = 11pt

#cat=t3d_basis/typo/20; type=options[8pt=8pt,9pt=9pt,10pt=10pt,11pt=11pt,12pt=12pt,13pt=13pt,14pt=14pt,15pt=15pt,16pt=16pt,17pt=17pt,18pt=18pt,19pt=19pt,20pt=20pt,21pt=21pt,22pt=22pt,23pt=23pt,24pt=24pt,25pt=25pt]; label=Schriftgroesse H1
t3d_basis.font_size_h1 = 11pt

#cat=t3d_basis/typo/25; type=options[8pt=8pt,9pt=9pt,10pt=10pt,11pt=11pt,12pt=12pt,13pt=13pt,14pt=14pt,15pt=15pt,16pt=16pt,17pt=17pt,18pt=18pt,19pt=19pt,20pt=20pt,21pt=21pt,22pt=22pt,23pt=23pt,24pt=24pt,25pt=25pt]; label=Schriftgroesse H2
t3d_basis.font_size_h2 = 10pt

#cat=t3d_basis/typo/30; type=options[8pt=8pt,9pt=9pt,10pt=10pt,11pt=11pt,12pt=12pt,13pt=13pt,14pt=14pt,15pt=15pt,16pt=16pt,17pt=17pt,18pt=18pt,19pt=19pt,20pt=20pt,21pt=21pt,22pt=22pt,23pt=23pt,24pt=24pt,25pt=25pt]; label=Schriftgroesse H3
t3d_basis.font_size_h3 = 9pt

#cat=t3d_basis/typo/32; type=options[8pt=8pt,9pt=9pt,10pt=10pt,11pt=11pt,12pt=12pt,13pt=13pt,14pt=14pt,15pt=15pt,16pt=16pt,17pt=17pt,18pt=18pt,19pt=19pt,20pt=20pt,21pt=21pt,22pt=22pt,23pt=23pt,24pt=24pt,25pt=25pt]; label=Schriftgroesse Liste
t3d_basis.font_size_li = 9pt

#cat=t3d_basis/typo/35; type=options[Normal=normal,Fett=bold]; label=Schriftformatierung
t3d_basis.font_weight = normal

#cat=t3d_basis/typo/40; type=options[Normal=normal,Fett=bold]; label=Schriftformatierung Link:(a)
t3d_basis.font_weight_anchor = bold

#cat=t3d_basis/typo/43; type=options[Normal=normal,Fett=bold]; label=Schriftformatierung Link Hover:(a:hover)
t3d_basis.font_weight_anchor_hover = bold

#cat=t3d_basis/typo/46; type=options[Normal=normal,Fett=bold]; label=Schriftformatierung Headlines (h1+h2+h3)
t3d_basis.font_weight_headlines = bold

#cat=t3d_basis/typo/50; type=string; label=Listen Aussenabstand (ul margin):-> 0px 0px 0px 0px
t3d_basis.ul_margin = 0px 0px 0px 0px

#cat=t3d_basis/typo/55; type=string; label=Listenpunkt Aussenabstand (li margin):-> 0px 0px 0px 0px
t3d_basis.li_margin = 0px 0px 0px 0px

#cat=t3d_basis/typo/60; type=string; label=Listen Innenabstand (ul padding):-> 0px 0px 0px 0px
t3d_basis.ul_padding = 0px 0px 0px 0px

#cat=t3d_basis/typo/65; type=string; label=Listenpunkt Innenabstand (li padding):-> 0px 0px 0px 0px
t3d_basis.li_padding = 0px 0px 0px 0px

#cat=t3d_basis/typo/70; type=options[gefuellter Kreis als Bullet-Zeichen=disc,leerer Kreis als Bullet-Zeichen=circle,rechteckiges Bullet-Zeichen=square,kein Zeichen=none]; label=Listen Darstellung (ul list-style-type)
t3d_basis.ul_liststyletype = disc

#cat=t3d_basis/typo/75; type=options[ausgerueckt=outside,eingerueckt=inside]; label=Listeneinrueckung (ul list-style-position)
t3d_basis.ul_liststyleposition = outside

#cat=t3d_basis/typo/80; type=string; label=eigenes Listenbild (ul list-style-image):z.b. bg_liste.gif
t3d_basis.ul_liststyleimage_file = bg_liste.gif



###  TYPO3 Defaults (T3D) Bereich Basis - Color ###
#cat=t3d_basis/color/10; type=color; label=Hintergrundfarbe der Seite
t3d_basis.bgcolor = white

#cat=t3d_basis/color/15; type=color; label=Hintergrundfarbe der Klickvergroesserung
t3d_basis.bgcolor_showpic = white

#cat=t3d_basis/color/20; type=color; label=Schriftfarbe
t3d_basis.font_color = black

#cat=t3d_basis/color/25; type=color; label=Linkfarbe:(href)
t3d_basis.anchor_color = blue

#cat=t3d_basis/color/30; type=color; label=Linkfarbe-Hover
t3d_basis.anchor_color_hover = red

#cat=t3d_basis/color/35; type=color; label=Schriftfarbe Liste
t3d_basis.ul_color = black



###  TYPO3 Defaults (T3D) Bereich Basis - Links ###
##cat=t3d_basis/links/10; type=string; label=Seitentitel (sitetitle)
#t3d_basis.sitetitle = 

#cat=t3d_basis/links/10; type=int; label=Root-Seite:z.b.1
t3d_basis.rootpageID = 1

#cat=t3d_basis/links/15; type=string; label=Basis-Url (config.baseURL):z.b. http://www.kunde.de/
t3d_basis.baseURL = 

#cat=t3d_basis/links/17; type=string; label=Basis-Url Mobil (config.baseURL):z.b. http://m.kunde.de/
t3d_basis.baseURL_mobil = 

#cat=t3d_basis/links/10; type=int; label=Adress-Seite:z.b.2
t3d_basis.adresspageID = 2

#cat=t3d_basis/links/10; type=int; label=News-Sysordner:z.b.3
t3d_basis.newsfolderID = 3

#cat=t3d_basis/links/20; type=string; label=Kontakt-E-Mail:-> z.b. info@kunde.de
t3d_basis.kontaktemail = 

#cat=t3d_basis/links/25; type=string; label=Shop-E-Mail:-> z.b. shop@kunde.de
t3d_basis.shopemail = 

#cat=t3d_basis/links/30; type=string; label=@-Zeichen Ersetzung (config.spamProtectEmailAddresses_atSubst):-> (at)
t3d_basis.spamProtectEmailAddresses_atSubst = (at)

#cat=t3d_basis/links/35; type=string; label=Name Objekt Logo (lib.obj_logo.file):-> z.b. obj_logo.gif
t3d_basis.obj_logo = obj_logo.gif

#cat=t3d_basis/links/40; type=string; label=Favicon (page.shortcutIcon):-> z.b. fileadmin/bilder/t3d_basis/favicon.ico
t3d_basis.favicon_file = fileadmin/bilder/t3d_basis/favicon.ico




###  TYPO3 Defaults (T3D) Bereich Etracker ###
#cat=t3d_etracker/links/10; type=string; label=E-Tracker ID
t3d_etracker.id =

#cat=t3d_etracker/links/15; type=string; label=E-Tracker Range (et_areas):z.b. 1|-2
t3d_etracker.range_areas = 1|-2

#cat=t3d_etracker/links/20; type=string; label=E-Tracker Trennerzeichen (et_areas):-> ,=Standard und /=Bereichsabhaengige Auswertung
t3d_etracker.areas_splitchar = ,

#cat=t3d_etracker/links/25; type=string; label=E-Tracker Range (et_pagename):-> z.b. 1|-1
t3d_etracker.range_pagename = 1|-1

#cat=t3d_etracker/links/30; type=string; label=E-Tracker Trennerzeichen (et_pagename):-> z.b. %20->%20
t3d_etracker.pagename_splitchar = %20->%20

#cat=t3d_etracker/links/35; type=int+; label=Bewertung Standard Level(et_ilevel):-> 0-10
t3d_etracker.ilevel_all = 4

#cat=t3d_etracker/links/40; type=int+; label=Bewertung Level 1(et_ilevel):-> 0-10
t3d_etracker.ilevel_1 = 5

#cat=t3d_etracker/links/45; type=int+; label=Bewertung Level 2(et_ilevel):-> 0-10
t3d_etracker.ilevel_2 = 6

#cat=t3d_etracker/links/50; type=int+; label=Bewertung Level 3(et_ilevel):-> 0-10
t3d_etracker.ilevel_3 = 7

#cat=t3d_etracker/links/55; type=int+; label=Bewertung Level 4(et_ilevel):-> 0-10
t3d_etracker.ilevel_4 = 8

#cat=t3d_etracker/links/60; type=int+; label=Bewertung Level 5(et_ilevel):-> 0-10
t3d_etracker.ilevel_5 = 9

#cat=t3d_etracker/links/65; type=int+; label=Bewertung Level 6(et_ilevel):-> 0-10
t3d_etracker.ilevel_6 = 10

#cat=t3d_basis/links/90; type=string; label=Google Verifizierung ID
t3d_basis.google_vid = 



### TYPO3 Defaults (T3D) Bereich Basis - Language ###
#cat=t3d_basis/language/10; type=string; label=Text Link zum Seitenanfang (Standardsprache):z.b. Seitenanfang
t3d_basis.linktotop = Seitenanfang

#cat=t3d_basis/language/15; type=string; label=Text Link zum Seitenanfang (2. Sprache):z.b. To Top
t3d_basis.second_lang_linktotop = To Top

#cat=t3d_basis/language/20; type=options[Deutsch=de,Englisch=en,Slowenisch=si,Italienisch=it,Franzoesisch=fr,Polnisch(ohne UTF8 metaCharset/renderCharset setzen)=pl,Spanisch=es,Niederlaendisch=nl,Schwedisch=se,Tschechisch=cz,Rumaenisch=ro]; label=Standardsprache (config.language)
t3d_basis.language = de

#cat=t3d_basis/language/25; type=options[Deutsch=de_DE,Englisch=english,Slowenisch=sl_SI,Italienisch=it_IT,Franzoesisch=fr_FR,Polnisch(ohne UTF8 metaCharset/renderCharset setzen)=pl_PL,Spanisch=es_ES,Niederlaendisch=nl_NL,Schwedisch=sv_SE,Tschechisch=cs_CZ,Rumaenisch=ro_RO]; label=Standardlokalisierung (config.locale_all)
t3d_basis.locale_all = de_DE

#cat=t3d_basis/language/30; type=options[0=0,1=1,2=2,3=3,4=4,5=5,6=6,7=7,8=8,9=9,10=10]; label=Standard-PI_VARS (Seiten-id):(plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang)
t3d_basis._DEFAULT_PI_VARS_lang = 0

#cat=t3d_basis/language/35; type=boolean; label=2. Seitensprache aktivieren:-> 0=Aus / 1=Ein
t3d_basis.second_lang = 0

#cat=t3d_basis/language/40; type=options[Deutsch=de,Englisch=en,Slowenisch=si,Italienisch=it,Franzoesisch=fr,Polnisch(ohne UTF8 metaCharset/renderCharset setzen)=pl,Spanisch=es,Niederlaendisch=nl,Schwedisch=se,Tschechisch=cz,Rumaenisch=ro]; label=2. Standardsprache (config.language)
t3d_basis.second_lang_language = en

#cat=t3d_basis/language/45; type=options[Deutsch=de_DE,Englisch=english,Slowenisch=sl_SI,Italienisch=it_IT,Franzoesisch=fr_FR,Polnisch(ohne UTF8 metaCharset/renderCharset setzen)=pl_PL,Spanisch=es_ES,Niederlaendisch=nl_NL,Schwedisch=sv_SE,Tschechisch=cs_CZ,Rumaenisch=ro_RO]; label=2. Standardlokalisierung (config.locale_all)
t3d_basis.second_lang_locale_all = english

#cat=t3d_basis/language/50; type=options[0=0,1=1,2=2,3=3,4=4,5=5,6=6,7=7,8=8,9=9,10=10]; label=2. Standard-PI_VARS (Seiten-id):(plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang)
t3d_basis.second_lang_DEFAULT_PI_VARS_lang = 1





##  TYPO3 Defaults (T3D) Bereich Navigation ###

## Hauptnavigation #
#cat=t3d_navigation//15; type=int; label=Hauptnavigation Einstiegslevel(entryLevel):z.b. 1
t3d_navigation.nav_main_entryLevel = 0

#cat=t3d_navigation//20; type=string; label=Hauptnavigation Seiten ausschliesen(excludeUidList):z.b. 350
t3d_navigation.nav_main_excludeUidList =

## Unternavigation #
#cat=t3d_navigation//25; type=int; label=Unternavigation Einstiegslevel(entryLevel):z.b. 1
t3d_navigation.nav_sub_entryLevel = 0

#cat=t3d_navigation//30; type=string; label=Unternavigation Seiten ausschliesen(excludeUidList):z.b. 350
t3d_navigation.nav_sub_excludeUidList =

## Verlaufsnavigation #
#cat=t3d_navigation//35; type=string; label=Text vor Verlaufnavigation:z.b. Hier bin ich:&nbsp;
t3d_navigation.nav_rootline_text = Hier bin ich:&nbsp;

#cat=t3d_navigation//40; type=string; label=Verlaufnavigation Bereich (range):z.b. 1|5
t3d_navigation.nav_rootline_range = 1|5





##
## Bereich jQuery ###

#cat=t3d_jquery//10; type=string; label=jQuery Animation-Geschwindigkeit:slow/normal/fast oder in ms z.b. 400(normal)
t3d_jquery.speed = normal

#cat=t3d_jquery//20; type=string; label=jQuery Slideshow Interval:in ms z.b. 1000
t3d_jquery.interval = 1000

#cat=t3d_jquery//20; type=string; label=jQuery Slideshow Animation-Geschwindigkeit:in ms z.b. 1000
t3d_jquery.speed = 1000




##
## Seitentitel ###
#cat=t3d_seitentitel//10; type=boolean; label=Seitentitelersetzung aktivieren:-> 0=Aus / 1=Ein
t3d_seitentitel.activate = 1

#cat=t3d_seitentitel//20; type=int; label=ID des Basis-Templates:z.b. 1
t3d_seitentitel.basisTemplateId = 1

#cat=t3d_seitentitel//30; type=string; label=Seiten ausschliesen(Liste von IDs):z.b. 1,2,3
t3d_seitentitel.excludeUidList = 121

#cat=t3d_seitentitel//40; type=int; label=Max. Anzahl an Unterseiten:0=alle anzeigen
t3d_seitentitel.max = 0

#cat=t3d_seitentitel//50; type=string; label=Trennzeichen zwischen Woertern:z.b. |
t3d_seitentitel.charBetweenWords = |

#cat=t3d_seitentitel//60; type=boolean; label=Debug-Modus fuer eingeloggt BE-User:-> 0=Aus / 1=Ein
t3d_seitentitel.debug = 0




##
## SeitenTypen ###
#cat=t3d_seitentypen//; type=int+; label=Typ A(CSS) - TypeNum(&type=) :-> 500
t3d_seitentypen.a_typenum = 500

#cat=t3d_seitentypen//; type=boolean; label=Typ A(CSS) - no_cache :-> 0=Cache an / 1=Cache aus
t3d_seitentypen.a_no_cache = 0

#cat=t3d_seitentypen//; type=boolean; label=Typ A(CSS) - debug :-> 0=Aus / 1=Ein
t3d_seitentypen.a_debug = 0

#cat=t3d_seitentypen//; type=int+; label=Typ B(nur Inhalt) - TypeNum(&type=) :-> 500
t3d_seitentypen.b_typenum = 22

#cat=t3d_seitentypen//; type=boolean; label=Typ B(nur Inhalt) - no_cache :-> 0=Cache an / 1=Cache aus
t3d_seitentypen.b_no_cache = 1

#cat=t3d_seitentypen//; type=boolean; label=Typ B(nur Inhalt) - debug :-> 0=Aus / 1=Ein
t3d_seitentypen.b_debug = 0

#cat=t3d_seitentypen//; type=boolean; label=Typ B(nur Inhalt) - Content/Records :-> 0=Content / 1=Records
t3d_seitentypen.b_cobj_type = 0

#cat=t3d_seitentypen//; type=string; label=Typ B(nur Inhalt) - Tabelle(n) :-> tt_content,...
t3d_seitentypen.b_cobj_tables = tt_content

#cat=t3d_seitentypen//; type=string; label=Typ B(nur Inhalt) - Bei Auswahl Content -> Page-UID(s), bei Auswahl Records -> Element-UID(s) :-> 1,2,3
t3d_seitentypen.b_cobj_tables_ids = 

#cat=t3d_seitentypen//; type=boolean; label=Typ B(nur Inhalt) - UIDs von Post Objekt laden :-> 0=Nein / 1=Ja
t3d_seitentypen.b_cobj_tables_ids_data = 0

#cat=t3d_seitentypen//; type=string; label=Typ B(nur Inhalt) - UIDs von Post Objekt laden (z.b &uid=) :-> z.b. uid 
t3d_seitentypen.b_cobj_tables_ids_data_gp = uid











##
## Sonstige Hinweise ###

##Waehrend der Entwicklung folgende Zeile unter Admin-Werkzeuge > Verwaltung ins Admin-TSconfig Feld einfuegen.
#admPanel.override.tsdebug.forceTemplateParsing = 1
##Damit braucht man den Cache nicht zu loeschen


