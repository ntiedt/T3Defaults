###
### Page ###
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
  ## Frontend Template analog zum BE Template auswählen

  variables{
    layout = TEXT
    layout.data = levelfield:-1, backend_layout_next_level, slide
    layout.override.field = backend_layout
    
    # colPos=0
    content < styles.content.get
    # colPos=1
    content_left < styles.content.getLeft
    # colPos=2
    content_right < styles.content.getRight
    # colPos=3
    content_border < styles.content.getBorder
    # colPos=4
    #content_bottomcenter < styles.content.get
    #content_bottomcenter.select.where = colPos=4
    # colPos=5
    #content_bottomright < styles.content.get
    #content_bottomright.select.where = colPos=5
  }
}
tt_content.gridelements_pi1.20.10.setup {
  1 < lib.gridelements.defaultGridSetup
  1 {
    wrap = <div class="row">|</div>
    columns {
      100 < .default
      100.wrap = <div class="col col-1 span_12">|</div>
      120 < .default
      120.wrap = <div class="col col-2 span_12">|</div>
    }
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

#----------------------------------------------------------- META-IE-BEGIN 
[browser = msie]
page{
  meta.X-UA-Compatible = IE=edge
  meta.X-UA-Compatible.httpEquivalent = 1
}
[end]
#----------------------------------------------------------- META-IE-END

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
    # Browser
    10 = TEXT
    10.value =
    # Version 
    15 = TEXT 
    15.value =
    # Language Parameter
    20 = TEXT
    20.data = TSFE:sys_language_uid
    20.noTrimWrap = | l_|| 
    #30 Mobil
    #40 startseite
  }
}

[globalString = IENV:HTTP_HOST=m.*]
page.bodyTagCObject.20.30 = TEXT
page.bodyTagCObject.20.30.noTrimWrap = | mobil||
[global]

[globalVar = TSFE:id = {$t3d_basis.rootpageID}]
page.bodyTagCObject.20.40 = TEXT
page.bodyTagCObject.20.40.noTrimWrap = | rootpage||
[global]

[browser = msie]
page.bodyTagCObject.20.10.value = msie
[global]
[browser = msie] && [version = 8]
page.bodyTagCObject.20.15.value = version-8
page.bodyTagCObject.20.15.noTrimWrap = | || 
[global]
[browser = msie] && [version = 9]
page.bodyTagCObject.20.15.value = version-9
page.bodyTagCObject.20.15.noTrimWrap = | || 
[global]
[browser = msie] && [version = 10]
page.bodyTagCObject.20.15.value = version-10
page.bodyTagCObject.20.15.noTrimWrap = | || 
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
[browser = chrome]
page.bodyTagCObject.20.10.value = chrome
[global]
#------------------------------------------------------------ BODY-TAG-END

#----------------------------------------------------------- PAGETITLE-BEGIN
[globalVar = LIT:1 = {$t3d_seitentitel.enable}]
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
[globalVar = TSFE : beUserLogin > 0] AND [globalVar = LIT:1 = {$t3d_seitentitel.enable}]
page.10000 = COA
page.10000{
  if.isTrue ={$t3d_seitentitel.debug}
  wrap=<div id="seitentitel_debug" style="position:absolute;top:0;left:0;background-color:white;color:black;">|</div>
  20 < temp.pageTitle
}
[global]
#----------------------------------------------------------- PAGETITLE-END