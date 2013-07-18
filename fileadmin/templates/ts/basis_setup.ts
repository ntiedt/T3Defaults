###
### Basis-Definitionen ###

# Include following tag without # in the typoscript setup section of your root template
#<INCLUDE_TYPOSCRIPT:source="file:fileadmin/templates/ts/basis_setup.ts">

##
## Setup ###

#----------------------------------------------------------- CONFIG-BEGIN
config{
  doctype = xhtml_trans
  htmlTag_langKey = {$t3d_basis.locale_all}
  xhtml_cleaning = all
  removeDefaultJS = external
  doctypeSwitch = 1
  
  ## 1. Sprache Deutsch
  sys_language_uid = 0
  language = {$t3d_basis.language}
  locale_all = {$t3d_basis.locale_all}
  sys_language_mode = content_fallback
  sys_language_overlay = hideNonTranslated
  # Setting up the language variable "L" to be passed along with links
  linkVars = L(0-11)
  uniqueLinkVars = L
  
  index_enable = 1
  
  simulateStaticDocuments = {$t3d_basis.simulateStaticDocuments}
  baseURL = {$t3d_basis.baseURL}
  tx_realurl_enable = {$t3d_basis.tx_realurl_enable}

  spamProtectEmailAddresses = 1
  spamProtectEmailAddresses_atSubst = {$t3d_basis.spamProtectEmailAddresses_atSubst}

  # JS/CSS/Cache Einstellungen
  concatenateJs = {$t3d_cache.concatenateJs}
  concatenateCss = {$t3d_cache.concatenateCss}
  compressJs = {$t3d_cache.compressJs}
  compressCss = {$t3d_cache.compressCss}
  cache_period = {$t3d_cache.period}
  cache_clearAtMidnight = {$t3d_cache.clearAtMidnight}
}
#----------------------------------------------------------- CONFIG-END

#------------------------------------------------------------ CONFIG-MOBIL-BEGIN
[globalString = IENV:HTTP_HOST=m.*]
config{
  baseURL = {$t3d_basis.baseURL_mobil}
}
[global]
#------------------------------------------------------------ CONFIG-MOBIL-END

#----------------------------------------------------------- EXT-INDEXEDSEARCH-LANG-BEGIN
plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = {$t3d_basis._DEFAULT_PI_VARS_lang}
#----------------------------------------------------------- EXT-INDEXEDSEARCH-LANG-END

#----------------------------------------------------------- PAGE-CONFIG-UTF8-BEGIN
[globalVar = LIT:1 = {$t3d_basis.utf8_support}]
page.config.metaCharset = utf-8
page.config.additionalHeaders = Content-Type:text/html;charset=utf-8
[global]
#----------------------------------------------------------- PAGE-CONFIG-UTF8-END

#----------------------------------------------------------- CONFIG-LANGUAGE-BEGIN
[globalVar = GP:L = 1] && [globalVar = LIT:1 = {$t3d_basis.second_lang}]
config.sys_language_uid = 1
config.language = {$t3d_basis.second_lang_language}
config.locale_all = {$t3d_basis.second_lang_locale_all}
#----------------------------- EXT-INDEXEDSEARCH-LANG
plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = {$t3d_basis.second_lang_DEFAULT_PI_VARS_lang}
[global]
#------------------------------------------------------------ CONFIG-LANGUAGE-BEGIN

## Sprache Slowenisch
[globalVar = GP:L = 3]
config.sys_language_uid = 3
config.language = si
config.locale_all = sl_SI
plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 3
[global]

## Sprache Italienisch
[globalVar = GP:L = 4]
config.sys_language_uid = 4
config.language = it
config.locale_all = it_IT
plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 4
[global]

## Sprache Franzoesisch
[globalVar = GP:L = 5]
config.sys_language_uid = 5
config.language = fr
config.locale_all = fr_FR
plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 5
[global]

## Sprache Polnisch
[globalVar = GP:L = 6]0
config.sys_language_uid = 6
config.language = pl 
config.locale_all = pl_PL
config.metaCharset = ISO-8859-2
config.renderCharset = ISO-8859-2
plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 6
#page.config.sys_language_uid = 6
#page.config.language = pl
#page.config.locale_all = pl_PL
#page.config.metaCharset = ISO-8859-2
#page.config.renderCharset = ISO-8859-2
[global]

## Sprache Spanisch
[globalVar = GP:L = 7]
config.sys_language_uid = 7
config.language = es
config.locale_all = es_ES
plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 7
[global]

## Sprache Niederlaendisch
[globalVar = GP:L = 8]
config.sys_language_uid = 8
config.language = nl
config.locale_all = nl_NL
plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 8
[global]

## Sprache Schwedisch
[globalVar = GP:L = 9]
config.sys_language_uid = 9
config.language = se
config.locale_all = sv_SE
plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 9
[global]

## Sprache Tschechisch
[globalVar = GP:L = 10]
config.sys_language_uid = 10
config.language = cz
config.locale_all = cs_CZ
plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 10
[global]

## Sprache Rumaenisch
[globalVar = GP:L = 11]
config.sys_language_uid = 11
config.language = ro 
config.locale_all = ro_RO 
plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 11
[global]

#----------------------------------------------------------- CONFIG-CACHE-BEGIN
[globalVar = TSFE : beUserLogin > 0]
config.no_cache = {$t3d_cache.no_cache}
[global]
#----------------------------------------------------------- CONFIG-CACHE-END

#----------------------------------------------------------- DEFAULT-PAGE-BEGIN
### Default PAGE object ###
page = PAGE
page.typeNum = 0

## Templateengine fluid
[globalVar = LIT:1 = {$t3d_basis.templateengine}]
page.10 = FLUIDTEMPLATE
page.10 {
  file = {$t3d_pfade.tmpls}fluid/normal.html
  partialRootPath = {$t3d_pfade.tmpls}fluid/partials
  variables{
    content_main < styles.content.get
  }
}
[global]

## Templateengine templavoila
[globalVar = LIT:2 = {$t3d_basis.templateengine}]
page.10 = USER
page.10.userFunc = tx_templavoila_pi1->main_page
page.10.disableExplosivePreview = 1
[global]
#----------------------------------------------------------- DEFAULT-PAGE-END

#------------------------------------------------------------ PAGE-CONFIG-MOBIL-BEGIN
[globalString = IENV:HTTP_HOST=m.*]
page.headerData.10 = HTML
page.headerData.10.value(
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
)
[global]
#------------------------------------------------------------ PAGE-CONFIG-MOBIL-END

#----------------------------------------------------------- PAGE-SHORTCUT-ICON-BEGIN
[globalVar = LIT:1 = {$t3d_basis.favicon}]
page.shortcutIcon = {$t3d_basis.favicon_file}
[global]
#----------------------------------------------------------- PAGE-SHORTCUT-ICON-END

#------------------------------------------------------------ BODY-TAG-BEGIN
page.bodyTagCObject = COA
page.bodyTagCObject{
  wrap = <body|>
  5 = TEXT
  5.noTrimWrap = | ||
  10 = TEXT
  10{
    wrap = id="uid_|"
    data = page:uid
  }
  15 = TEXT
  15.noTrimWrap = | ||
  20 = COA
  20{
    wrap = class="|"
    10 = TEXT
    10.value = 
    20 = TEXT
    20.data = TSFE:sys_language_uid
    20.noTrimWrap = | l_|| 
  }
}

[globalString = IENV:HTTP_HOST=m.*]
page.bodyTagCObject.20.30 = TEXT
page.bodyTagCObject.20.30.noTrimWrap = | mobil||
[global]

[browser = msie]
page.bodyTagCObject.20.10.value = msie
[global]
[browser = chrome]
page.bodyTagCObject.20.10.value = chrome
[global]
[browser = firefox]
page.bodyTagCObject.20.10.value = firefox
[global]
[browser = opera]
page.bodyTagCObject.20.10.value = opera
[global]
[browser = safari]
page.bodyTagCObject.20.10.value = safari
[global]
#------------------------------------------------------------ BODY-TAG-END

#----------------------------------------------------------- PAGETITLE-BEGIN
[globalVar = LIT:1 = {$t3d_seitentitel.activate}]
temp.pageTitle=COA
temp.pageTitle{
  10 = TEXT
  10{
    if.isTrue.field = subtitle
    data = page:subtitle
    stdWrap.append = TEXT
    stdWrap.append.value = {$t3d_seitentitel.charBetweenWords}
    stdWrap.append.noTrimWrap = | | |
  }
  20 = TEXT
  20{
    if.isFalse.field = subtitle
    data = page:title
    stdWrap.append = TEXT
    stdWrap.append.value = {$t3d_seitentitel.charBetweenWords}
    stdWrap.append.noTrimWrap = | | |
  }
  30 = HMENU
  30{
    if.isFalse.field = subtitle
    special = directory
    excludeUidList = {$t3d_seitentitel.excludeUidList}
    maxItems = {$t3d_seitentitel.max}
    1 = TMENU
    1{
      NO{
        doNotLinkIt = 1
        stdWrap.append = TEXT
        stdWrap.append.value = {$t3d_seitentitel.charBetweenWords}
        stdWrap.append.noTrimWrap = | | |
      }
    }
  }
  100=RECORDS
  100{
    # id of the template record
    source={$t3d_seitentitel.basisTemplateId}
    tables = sys_template
    conf.sys_template >
    conf.sys_template = TEXT
    conf.sys_template.field=sitetitle
  }
}

### Standard Seitentitle abschalten
config.noPageTitle = 2
page {
  # Seitentitle einfuegen
  headerData.1 = TEXT
  headerData.1 < temp.pageTitle
  headerData.1.wrap = <title>|</title>
}
[global]

### Seitentitle im Content ausgeben wenn Debug-Modus eingeschalten
[globalVar = TSFE : beUserLogin > 0] AND [globalVar = LIT:1 = {$t3d_seitentitel.activate}]
page.10000 = COA
page.10000{
  if.isTrue ={$t3d_seitentitel.debug}
  wrap=<div id="seitentitel_debug" style="position:absolute;top:0;left:0;background-color:white;color:black;">|</div>
  20 < temp.pageTitle
}
[global]
#----------------------------------------------------------- PAGETITLE-END


#----------------------------------------------------------- EXTERNAL-TS-SCRIPT-FILE-INCLUDE-BEGIN
### css_styled_content Definitionen ###
<INCLUDE_TYPOSCRIPT:source="file:fileadmin/templates/ts/css_styled_content.ts">

### Seitentypen ###
<INCLUDE_TYPOSCRIPT:source="file:fileadmin/templates/ts/seitentypen_setup.ts">


### CSS ###
<INCLUDE_TYPOSCRIPT:source="file:fileadmin/templates/ts/css_setup.ts">


### JS ###
<INCLUDE_TYPOSCRIPT:source="file:fileadmin/templates/ts/js_setup.ts">

### Navigation ###
<INCLUDE_TYPOSCRIPT:source="file:fileadmin/templates/ts/navigation_setup.ts">

### Objekte ###
<INCLUDE_TYPOSCRIPT:source="file:fileadmin/templates/ts/objekte_setup.ts">

### E-Tracker ###
<INCLUDE_TYPOSCRIPT:source="file:fileadmin/templates/ts/etracker_setup.ts">

### Funktionen ###
<INCLUDE_TYPOSCRIPT:source="file:fileadmin/templates/ts/funktionen_setup.ts">
#----------------------------------------------------------- EXTERNAL-TS-SCRIPT-FILE-INCLUDE-END
