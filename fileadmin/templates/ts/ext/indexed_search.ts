##
## EXT:tx_indexedsearch ###
config.index_enable = 1
config.index_externals = 1
config.index_metatags = 1

plugin.tx_indexedsearch {
    templateFile = {$t3d_pfade.tmpls}html/ext_indexed_search.html

    ## Date formats for created/modified dates in search results. See PHP strftime() function.
    ## Leave blank for using system defaults
    dateFormat {
        created =
        modified =
    }

    show {
        ### Settings: 1=aktiv (sichtbar), 0 inaktiv (nicht sichtbar)
        ## Hilfe einblenden
        rules = 0
        ## Angabe der Suchzeit
        parsetimes = 0
        ## Erste Ebene im Bereichs-Pulldown anzeigen
        L1sections = 1
        ## Zweite Ebene im Bereichs-Dropdown anzeigen
        L2sections = 0
        ## Alle "nicht im Menue" oder "im Menue verstecken" (aber nicht "versteckte" Seiten) mit anzeigen in section?
        LxALLtypes = 0
        ## leeren des Suchfeldes nach suche
        clearSearchBox = 0
        ## Aktuelles Suchwort zu den bisherigen Suchwoertern hinzufuegen
        clearSearchBox.enableSubSearchCheckBox = 0
        ## Die Anzahl der gefundenen Seiten enthält keine Suchergebnisse
        ## auf dessen Seiten der Suchende keinen Zugriff hat. Sollen diese
        ## dennoch eingerechnet werden, so ist die Option auf 1 zu setzen
        forbiddenRecords = 0
        ## Anzeige des Seitenbrowsers (auch wenn weniger als 10 Ergebnisse)
        alwaysShowPageLinks = 0
        ## erweiterte Suche abschalten
        advancedSearchLink = 0
        ## Die Anzahl der Suchergebnisse anzeigen
        resultNumber = 0
        ## Kommaseparierte Liste von Medientypen, die als Ergebnisse angezeigt werden sollen.
        mediaList =
    }

    # Blinding of option-selectors / values in these (advanced search) (see $optValues array in source code for options + extResume checkbox)
    blind {
        ### Settings: 0=aktiv (sichtbar), -1 inaktiv (nicht sichtbar)
        ## Vergleichs-Typ (Ganzes Wort, Wortteil,etc)
        type = 0
        ## Logische Verknüpfung der Suchbegriffe
        ## 0 = Alle Wörter (UND), 1 = Jedes Wort (ODER)
        defOp = 0
        ## Sektionen, in denen gesucht wird:
        ## 0 = ganze Website, -1 = Aktuelle Seite,
        ## -2 = Homepage + Ebene 1, -3 = Ebene 2 und tiefer
        ## rlx_y = Ebene x, Seite y
        sections = 0
        ## Liste von indizierten UIDs die als Kategorie angezeigt werden sollen
        freeIndexUid = 1
        ## -1 = Alle Medien, 0 = Interne Seiten, -2 = Alle externen Seiten
        ## pdf = PDF-Dokumente, doc = MS-Word, sxw = OpenOffice , ?
        media = -1
        ## Sortierung:
        ## rank_flag = Trefferquote/Vorkommen, mtime = letzte Änderung
        ## rank_first = Nähe zum Dokumentenanfang, title = Titel der Seite
        order = 0
        ## Gruppierung:
        ## sections = Sektionshierarchie, flat = Flache Liste
        group = 0
        ## Sprachwahlbox
        lang = 0
        ## Reihenfolge:
        ## 0 = höchstes zuerst, 1 = geringstes zuerst
        desc = 0
        ## Anzahl der Suchergebnisse auf einer Seite:
        ## 0 (oder 10) = Standard 10 Ergebnisse, 20 = 20 Ergebnisse, ?
        results = 0
        ## Erweiterte Vorschau: 0 = nein, 1 = ja
        extResume=-1
    }
    rules_stdWrap {
    }
    sectionlinks_stdWrap {
    }
    path_stdWrap {
    }
    search {
        ## Liste von Root Seiten-IDs von den gesucht werden soll.
        ## Damit kann man mehrere Seitenbaeume durch suchen.
        ## Auf -1 setzen wenn man alle Seitenbaeume durch suchen will ohne Ruecksicht auf Zweige
        rootPidList =
        ## Anzahl der auszugebenden Trefferseitenlinks z.b. Seite 1 | Seite 2 | Seite 3
        page_links = 9
        ## Wenn gesetzt, dann werden die Suchergebnisse in die richtigen Bereiche, in denen sie gefunden werden verknuepft.
        detect_sys_domain_records = 0
        ## Liste der Indexing Configuration UIDs welche als Kategorien im Such-Formular gezeigt wird.
        ## Die Reihenfolge bestimmt die Reihenfolge, in der Suchergebnisliste angezeigt werden.
        defaultFreeIndexUidList = -1
        skipExtendToSubpagesChecking = 0
        exactCount = 0
        targetPid.data = TSFE:id
    }

    result_link_target =
    /*
    flagRendering = CASE
    flagRendering {
    key.current = 1
    2 = TEXT
    2.value = German
    default = TEXT
    default.value = English
    }
    */
    /*
    iconRendering = CASE
    iconRendering {
    key.current = 1
    html = TEXT
    html.value = HtmL
    default = TEXT
    default.value = TYPO3 pages
    }
    */
    forwardSearchWordsInResultLink = 0

    # Setting default values for piVars (please see the source code for the form-field names which you can preset values for here)
    _DEFAULT_PI_VARS.results = 6
    _DEFAULT_PI_VARS {
        extResume = 1
        type = 1
        ## Anzahl Suchergebnisse
        #results = 6
        group = flat
    }
    _CSS_DEFAULT_STYLE (
    .tx-indexedsearch-form,
    .tx-indexedsearch-search-submit{
      float: left;
      padding-bottom: 15px;
    }
		.tx-indexedsearch .tx-indexedsearch-browsebox LI { display:inline; margin-right:5px; }
		.tx-indexedsearch .tx-indexedsearch-searchbox INPUT.tx-indexedsearch-searchbox-button {  }
		.tx-indexedsearch .tx-indexedsearch-searchbox INPUT.tx-indexedsearch-searchbox-sword {  }
		.tx-indexedsearch .tx-indexedsearch-whatis {
      border-top: 2px solid #E3E4E4;
      border-bottom: 2px solid #E3E4E4;
      clear: left;
      padding: 15px 0;
    }
		.obj_search .tx-indexedsearch .tx-indexedsearch-whatis { display: none; }
		.tx-indexedsearch .tx-indexedsearch-whatis .tx-indexedsearch-sw { font-weight:bold; color:#0070B8; }
		.tx-indexedsearch .tx-indexedsearch-noresults { text-align:center; font-weight:bold; }
		.obj_search .tx-indexedsearch .tx-indexedsearch-noresults { display: none; }
		.tx-indexedsearch .tx-indexedsearch-res {
      padding-top: 15px;
    }
		.tx-indexedsearch .tx-indexedsearch-res.res {
      padding-top: 0px;
    }
		.tx-indexedsearch .tx-indexedsearch-res TD.tx-indexedsearch-descr { font-style:italic; }
		.tx-indexedsearch .tx-indexedsearch-res .tx-indexedsearch-descr .tx-indexedsearch-redMarkup { color:#0070B8; }
		.tx-indexedsearch .tx-indexedsearch-res .tx-indexedsearch-info { background:#eeeeee; }
		.tx-indexedsearch .tx-indexedsearch-res .tx-indexedsearch-secHead { margin-top:20px; margin-bottom:5px; }
		.tx-indexedsearch .tx-indexedsearch-res .tx-indexedsearch-secHead H2 { margin-top:0px; margin-bottom:0px; }
		.tx-indexedsearch .tx-indexedsearch-res .tx-indexedsearch-secHead TD { background:#cccccc; vertical-align:middle; }
		.tx-indexedsearch .tx-indexedsearch-res .noResume { color:#666666; }
		.tx-indexedsearch .tx-indexedsearch-category { background:#cccccc; font-size:16px; font-weight:bold; }

		/* Additional styles, needed for the tableless template_css.tmpl (styles don't conflict with the original template) */
		.tx-indexedsearch .res-tmpl-css {
      border-bottom: 2px solid #E3E4E4;
      clear:both; margin-bottom:1em;
    }
		.tx-indexedsearch .res-tmpl-css:first-child {
      border-top: 2px solid #E3E4E4;
      margin-top:1rem;
      padding-top:1rem;
    }
		.tx-indexedsearch .searchbox-tmpl-css LABEL { margin-right:1em; width:10em; float:left; }
		.tx-indexedsearch .result-count-tmpl-css, .tx-indexedsearch .percent-tmpl-css { letter-spacing:0; font-weight:normal; float:right; }
		.tx-indexedsearch .info-tmpl-css dt, .tx-indexedsearch dl.info-tmpl-css dd { float:left; }
		.tx-indexedsearch .info-tmpl-css dd.item-mtime { float:none; }
		.tx-indexedsearch .info-tmpl-css dd.item-path { float:none; }
    )
    _LOCAL_LANG{
        en{
            submit_button_label = Search
        }
        fr{
            submit_button_label = Recherche
        }
        es{
            submit_button_label = Búsqueda
        }
        ch{
            submit_button_label = 搜索
        }
    }
}