###
### CSS ###

#----------------------------------------------------------- INCLUDECSS-BEGIN
[globalVar = LIT:1 = {$t3d_basis.t3d_css}]
page.includeCSS{
  #reset = {$t3d_pfade.tmpls}css/reset.css
  ie = {$t3d_pfade.tmpls}css/ie.css
  #jqueryui = {$t3d_pfade.tmpls}css/ui-lightness/jquery-ui-1.10.3.custom.min.css
  colorbox = {$t3d_pfade.tmpls}css/colorbox.css
  #powermail = {$t3d_pfade.tmpls}css/powermail.css
  bxslider = {$t3d_pfade.tmpls}css/jquery.bxslider.css
  normal = {$t3d_pfade.tmpls}css/normal.css
  #normal = {$t3d_pfade.tmpls}css/normal.scss
}
[global]
#----------------------------------------------------------- INCLUDECSS-END

#----------------------------------------------------------- INCLUDECSS-DEBUG-BEGIN
[globalVar = LIT:1 = {$t3d_basis.t3d_css}] && [globalVar = GP:debug == 1]
page.includeCSS{
  #reset = {$t3d_pfade.tmpls}css/reset.css
  ie = {$t3d_pfade.tmpls}css/ie.css
  jqueryuidbg = {$t3d_pfade.tmpls}css/dbgsmoothness/jquery-ui-1.9.2.custom.min.css
  colorbox = {$t3d_pfade.tmpls}css/colorbox.css
  #powermail = {$t3d_pfade.tmpls}css/powermail.css
  bxslider = {$t3d_pfade.tmpls}css/jquery.bxslider.css
  debug = {$t3d_pfade.tmpls}css/debug.css
  normal = {$t3d_pfade.tmpls}css/normal.css
}
[global]
#----------------------------------------------------------- INCLUDECSS-DEBUG-END

#----------------------------------------------------------- DYN-CSS-PAGE-BEGIN
[globalVar = LIT:1 = {$t3d_basis.t3d_css}]
css = PAGE
css {
	typeNum = {$t3d_pagetypes.a.typenum}
	config{
		additionalHeaders = Content-type: text/css
		disableAllHeaderCode = 1
    debug = {$t3d_pagetypes.a.debug}
    no_cache = {$t3d_pagetypes.a.no_cache}
	}
	10 = TEXT
	10.value (
    body{
      background-color: {$t3d_style.bgcolor};
    }
	)
  # GRID
	15 = COA
	15{
    20 < temp.grid
	}
}
#----------------------------------------------------------- DYN-CSS-PAGE-END

#----------------------------------------------------------- HEADERDATA-BEGIN
page.headerData{
  110 = COA
  110{
    10 = TEXT
    10{
      if.isTrue = {$t3d_style.webfont}
      value(
      <link href='{$t3d_style.webfont}' rel='stylesheet' type='text/css'>
      )
    }
  }
  111 = COA
  111{
    wrap = <link rel="stylesheet" type="text/css" title="Dynamische TYPO3-Styles" href="|" />
    10 = TEXT
    10{
      typolink{
        parameter.data = field:uid
        additionalParams =&type={$t3d_pagetypes.a.typenum}
        returnLast = url
        useCacheHash = 1
      }
    }
  }
}
[global]
#----------------------------------------------------------- HEADERDATA-END
