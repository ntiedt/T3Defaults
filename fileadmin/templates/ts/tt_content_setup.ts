###
### tt_content Definitionen ###
[globalVar = LIT:1 = {$t3d_basis.ts_tt_content}]

### Eigenschaften von showpic.php -> bild -> Klickvergroesserung ### 
tt_content.textpic.20.1.imageLinkWrap = 1 
tt_content.textpic.20.1.imageLinkWrap { 
  enable = 1 
  bodyTag = <BODY bgColor={$t3d_basis.bgcolor_showpic}> 
  wrap = <A href="javascript:close();"> | </A>  
  JSwindow = 1 
  JSwindow.newWindow = 1 
  JSwindow.expand = 18,18
  title < temp.pageTitle
}  
tt_content.image.20.1.imageLinkWrap = 1 
tt_content.image.20.1.imageLinkWrap { 
  enable = 1 
  bodyTag = <BODY bgColor={$t3d_basis.bgcolor_showpic}> 
  wrap = <A href="javascript:close();"> | </A>  
  JSwindow = 1 
  JSwindow.newWindow = 1 
  JSwindow.expand = 18,18
  title < temp.pageTitle
} 



### Formulare ###
tt_content.mailform.20 {
  params.input = class="mailform-input"
  params.password = class="mailform-pass"
  params.textarea = class="mailform-textarea"
  params.check = class="mailform-check"
  params.radio = class="mailform-radio"
  params.select = class="mailform-select"
  params.file = class="mailform-file"
  params.reset = class="mailform-reset"
  params.submit = class="mailform-submit"
  params.captchainput = class="mailform-captchainput"
}


[global]

### Link to top ###
tt_content.stdWrap.innerWrap2 = |<a href="#top">{$t3d_basis.linktotop}</ a>
[globalVar = LIT:1 = {$t3d_basis.ts_tt_content}] && [globalVar = GP:L = 1] && [globalVar = LIT:1 = {$t3d_basis.second_lang}]
tt_content.stdWrap.innerWrap2 = |<a href="#top">{$t3d_basis.second_lang_linktotop}</ a>
[global]

### CType: image / Lightbox + Scrollable ###
tt_content.image.20 {
  imageStdWrap.dataWrap = <div class="csc-textpic-imagewrap" style="width:{register:totalwidth}px;"><div class="scrollable scrollable-textpic"> | </div><div class="navi navi-scrollable"></div></div>
  imageStdWrapNoWidth.wrap = <div class="csc-textpic-imagewrap"><div class="scrollable scrollable-textpic"> | </div><div class="navi navi-scrollable"></div></div>
  rendering {
		ul {
			# Just one image without a caption => don't need the ul-overhead, use the "simple" rendering
      /*
			fallbackRendering < tt_content.image.20.rendering.dl.fallbackRendering.10
      */
			#imageRowStdWrap.dataWrap = <div class="csc-textpic-imagerow" style="width:{register:rowwidth}px;"><ul class="items"> | </ul></div>
			#imageLastRowStdWrap.dataWrap = <div class="csc-textpic-imagerow csc-textpic-imagerow-last" style="width:{register:rowwidth}px;"><ul class="items"> | </ul></div>
			noRowsStdWrap.wrap = <ul class="items"> | </ul>
			oneImageStdWrap.dataWrap = <li class="item csc-textpic-image###CLASSES###" style="width:{register:imagespace}px;"> | </li>
      /*
			imgTagStdWrap.wrap =
			editIconsStdWrap.wrap = <div> | </div>
			caption.wrap = <div class="csc-textpic-caption"> | </div>
      */
		}
	}
}

### Rahmen ###
/*
### IN SEITEN TS-CONFIG
# alle Rahmen entfernen
TCEFORM.tt_content.section_frame {
     removeItems = 1,5,6,10,11,12,20,21
}


# neuen Rahmen hinzufuegen
TCEFORM.tt_content.section_frame {
     addItems.100 = mein neuer Rahmen
}
*/
/*
tt_content.stdWrap {
	innerWrap.cObject = CASE
	innerWrap.cObject  {
		key.field = section_frame
		1 = TEXT
		1.value = <div class="{$t3d_basis.bgcolor_showpic}">|</div>
		5 = TEXT
		5.value = <div class="{$t3d_basis.bgcolor_showpic}">|</div>
		6 = TEXT
		6.value = <div class="{$t3d_basis.bgcolor_showpic}">|</div>
		10 = TEXT
		10.value = <div class="{$t3d_basis.bgcolor_showpic}">|</div>
		11 = TEXT
		11.value = <div class="{$t3d_basis.bgcolor_showpic}">|</div>
		12 = TEXT
		12.value = <div class="{$t3d_basis.bgcolor_showpic}">|</div>
		20 = TEXT
		20.value = <div class="{$t3d_basis.bgcolor_showpic}">|</div>
		21 = TEXT
		21.value = <div class="{$t3d_basis.bgcolor_showpic}">|</div>
		#22
	}
}
*/
