###
### CSS ###
[globalVar = LIT:1 = {$t3d_basis.ts_css}]
page.includeCSS{
  normal = {$t3d_pfade.tmpls}css/normal.css
}
css = PAGE
css {
	typeNum = {$t3d_seitentypen.a_typenum}
	config{
		additionalHeaders = Content-type: text/css
		disableAllHeaderCode = 1
    debug = {$t3d_seitentypen.a_debug}
    no_cache = {$t3d_seitentypen.a_no_cache}
	}
	10 = TEXT
	10.value (
    body{
      background-color: {$t3d_basis.bgcolor};
    }
    body, div, a, p, ul, li, input, select, textarea, h1, h2, h3{
    	font-size:{$t3d_basis.font_size};
    	font-weight: {$t3d_basis.font_weight};
    	font-family: Arial, Helvetica, sans-serif, Verdana, Geneva;
    	color: {$t3d_basis.font_color};
    }
    a {
    	font-size:{$t3d_basis.font_size_anchor};
    	font-weight: {$t3d_basis.font_weight_anchor};
    	font-family: Arial, Helvetica, sans-serif, Verdana, Geneva;
    	color: {$t3d_basis.anchor_color};
    	text-decoration: none;
    }
    a:hover {
    	color: {$t3d_basis.anchor_color_hover};
    	font-weight: {$t3d_basis.font_weight_anchor_hover};
    }
    h1, h2, h3{
    	font-weight: {$t3d_basis.font_weight_headlines};
    }
    h1.csc-firstHeader {
    	font-size:{$t3d_basis.font_size_h1_cscFirstHeader};
    }
    h1 {
    	font-size:{$t3d_basis.font_size_h1};
    }
    h2 {
    	font-size:{$t3d_basis.font_size_h2};
    }
    h3 {
    	font-size:{$t3d_basis.font_size_h3};
    }
    ul{
      color:{$t3d_basis.ul_color};
      margin:{$t3d_basis.ul_margin};
      padding:{$t3d_basis.ul_padding};
      list-style-type:{$t3d_basis.ul_liststyletype};
      list-style-position:{$t3d_basis.ul_liststyleposition};
    }
    li{
      margin:{$t3d_basis.li_margin};
      padding:{$t3d_basis.li_padding};
      font-size:{$t3d_basis.font_size_li};
    }
    
    
    
    /* Navigation */
    #nav_main_level1{
      width: 800px;
    }
    #nav_main_level1 a{
    	display: block;
    	width: 150px;
    	height: 20px;
    	text-align: center;
    	float: left;
    	padding: 4px 0px 0px 0px;
    }
    
    a.nav_main_norm{
      color: white;
      background-color: blue;
    }
    a.nav_main_click{
      color: green;
      background-color: red;
    }
    #nav_sub_level1, #nav_sub_level2{
      width: 200px;
    }
    #nav_sub_level1 a, #nav_sub_level2 a{
      display: block;
      width: 200px;
      height: 20px;
      clear: both;
    }
    a.nav_sub_norm{
      color: white;
      background-color: blue;  
    }
    a.nav_sub_click{
      color: green;
      background-color: red;  
    }
    #nav_rootline_text{
      
    }
    #nav_rootline_trenner{
      
    }
    #nav_rootline_text{
      
    }
    a.nav_rootline_norm{
      
    }
    a.nav_rootline_click{
      
    }
    
    
    /* Clearfix */
    #clearfix:before, #clearfix:after, .clearfix:before, .clearfix:after{
      content: "."; 
      display: block; 
      height: 0px; 
      clear: both; 
      visibility: hidden;
    }
    
    /* Hides from IE-mac \*/
    * html #clearfix{height: 1%;}
    /* End hide from IE-mac */
	)
}
page.headerData.111 = COA
page.headerData.111{
  wrap = <link rel="stylesheet" type="text/css" title="Dynamische TYPO3-Styles" href="|" />
  10 = TEXT
  10{
    typolink{
      parameter.data = field:uid
      additionalParams =&type={$t3d_seitentypen.a_typenum}
      returnLast = url
      useCacheHash = 1
    }
  }
}

[global]

### List Image ###
[globalVar = LIT:1 = {$t3d_basis.ts_css}] && [globalVar = LIT:1 = {$t3d_basis.ul_liststyleimage}]
css.20 = TEXT
css.20.value(
    ul{
      list-style-image:url({$t3d_basis.ul_liststyleimage_file});
    }
)
[global]