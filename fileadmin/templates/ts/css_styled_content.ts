###
### CSS_STYLED_CONTENT ###

[globalVar = LIT:1 = {$t3d_basis.ts_css_styled_content}]
# ***************************************************************************
# Notice: "styles." (and "temp.") objects are UNSET after template parsing!
# Use "lib." for persisting storage of objects.
# ***************************************************************************

# Clear out any constants in this reserved room!
#styles.content >

# get content
styles.content.get = CONTENT
styles.content.get {
	table = tt_content
	select.orderBy = sorting
	select.where = colPos=0
	select.languageField = sys_language_uid
}

# get content, left
styles.content.getLeft < styles.content.get
styles.content.getLeft.select.where = colPos=1

# get content, right
styles.content.getRight < styles.content.get
styles.content.getRight.select.where = colPos=2

# get content, margin
styles.content.getBorder < styles.content.get
styles.content.getBorder.select.where = colPos=3

# get news
styles.content.getNews < styles.content.get
styles.content.getNews.select.pidInList = {$styles.content.getNews.newsPid}

# Edit page object:
styles.content.editPanelPage = COA
styles.content.editPanelPage {
	10 = EDITPANEL
	10 {
		allow = toolbar,move,hide
		label.data = LLL:EXT:css_styled_content/pi1/locallang.xml:eIcon.page
		label.wrap = |&nbsp;<b>%s</b>
	}
}











# *********************************************************************
# "lib." objects are preserved from unsetting after template parsing
# *********************************************************************

# Creates a condition for targets. Not allowed in XHTML except for xhtml frames DTD
lib.parseTarget {
	override =
	override.if {
		isTrue.data = TSFE:dtdAllowsFrames
	}
}

# Creates persistent ParseFunc setup for non-HTML content. This is recommended to use (as a reference!)
lib.parseFunc {
	makelinks = 1
	makelinks.http.keep = {$styles.content.links.keep}
	makelinks.http.extTarget < lib.parseTarget
	makelinks.http.extTarget =
	makelinks.http.extTarget.override = {$styles.content.links.extTarget}
	makelinks.mailto.keep = path
	tags {
		link = TEXT
		link {
			current = 1
			typolink.parameter.data = parameters : allParams
			typolink.extTarget < lib.parseTarget
			typolink.extTarget =
			typolink.extTarget.override = {$styles.content.links.extTarget}
			typolink.target < lib.parseTarget
			typolink.target =
			typolink.target.override = {$styles.content.links.target}
			parseFunc.constants =1
		}
	}
	allowTags = {$styles.content.links.allowTags}
	denyTags = *
	sword = <span class="csc-sword">|</span>
	constants = 1

	nonTypoTagStdWrap.HTMLparser = 1
	nonTypoTagStdWrap.HTMLparser {
		keepNonMatchedTags = 1
		htmlSpecialChars = 2
	}
}

# good old parsefunc in "styles.content.parseFunc" is created for backwards compatibility. Don't use it, just ignore.
styles.content.parseFunc < lib.parseFunc

# Creates persistent ParseFunc setup for RTE content (which is mainly HTML) based on the "ts_css" transformation.
lib.parseFunc_RTE < lib.parseFunc
lib.parseFunc_RTE {
	//  makelinks >
	# Processing <table> and <blockquote> blocks separately
	externalBlocks = article, aside, blockquote, div, dd, dl, footer, header, nav, ol, section, table, ul
	externalBlocks {
		# The blockquote content is passed into parseFunc again...
		blockquote.stripNL=1
		blockquote.callRecursive=1
		blockquote.callRecursive.tagStdWrap.HTMLparser = 1
		blockquote.callRecursive.tagStdWrap.HTMLparser.tags.blockquote.overrideAttribs = style="margin-bottom:0;margin-top:0;"

		ol.stripNL=1
		ol.stdWrap.parseFunc = < lib.parseFunc

		ul.stripNL=1
		ul.stdWrap.parseFunc = < lib.parseFunc

		table.stripNL=1
		table.stdWrap.HTMLparser = 1
		table.stdWrap.HTMLparser.tags.table.fixAttrib.class {
			default = contenttable
			always = 1
			list = contenttable
		}
		table.stdWrap.HTMLparser.keepNonMatchedTags = 1
		table.HTMLtableCells=1
		table.HTMLtableCells {
			# Recursive call to self but without wrapping non-wrapped cell content
			default.stdWrap {
				parseFunc =< lib.parseFunc_RTE
				parseFunc.nonTypoTagStdWrap.encapsLines.nonWrappedTag = 
			}
			addChr10BetweenParagraphs=1
		}
		div.stripNL = 1
		div.callRecursive = 1

		article < .div
		aside < .div
		footer < .div
		header < .div
		nav < .div
		section < .div

		# Definition list processing
		dl < .div
		dd < .div
	}
	nonTypoTagStdWrap.encapsLines {
		encapsTagList = p,pre,h1,h2,h3,h4,h5,h6,hr,dt
		remapTag.DIV = P
		nonWrappedTag = P
		innerStdWrap_all.ifBlank = &nbsp;
		addAttributes.P.class = bodytext
		addAttributes.P.class.setOnly=blank
	}
	nonTypoTagStdWrap.HTMLparser = 1
	nonTypoTagStdWrap.HTMLparser {
		keepNonMatchedTags = 1
		htmlSpecialChars = 2
	}
}


# Content header:
lib.stdheader = COA
lib.stdheader {

	# Create class attribute for <Hx> tags
	3 = LOAD_REGISTER
	3 {
		headerClass {
			cObject = COA
			cObject {
				# Create alignment class for <Hx> tags
				10 = TEXT
				10 {
					field = header_position
					required = 1
					noTrimWrap = |csc-header-alignment-| |
				}
				# Create "csc-firstHeader" class for <Hx> tags
				20 = TEXT
				20 {
					value = csc-firstHeader
					if {
						value = 1
						equals.data = cObj:parentRecordNumber
					}
				}
				stdWrap {
					trim = 1
					noTrimWrap = | class="|"|
					required = 1
				}
			}
		}
	}

	# Date format (not HTML5)
	5 = TEXT
	5 {
		field = date
		if {
			isTrue {
				field = date
			}
			isFalse = 1
			isFalse {
				if {
					value = html5
					equals.data = TSFE:config|config|doctype
				}
			}
		}
		strftime = %x
		wrap = <p class="csc-header-date">|</p>
		prefixComment = 2 | Header date:
	}

	# HTML5 <hgroup> open
	7 = TEXT
	7 {
		value = <hgroup>
		fieldRequired = subheader
		if {
			value = html5
			equals.data = TSFE:config|config|doctype
		}
	}

	# This CASE cObject renders the header content:
	# currentValue is set to the header data, possibly wrapped in link-tags.
	10 = CASE
	10.setCurrent {
		field = header
		htmlSpecialChars = 1
		typolink.parameter.field = header_link
	}
	10.key.field = header_layout
	10.key.ifEmpty = {$content.defaultHeaderType}
	10.key.ifEmpty.override.data = register: defaultHeaderType

	10.1 = TEXT
	10.1.current = 1
	10.1.dataWrap = <h1{register:headerClass}>|</h1>

	10.2 < .10.1
	10.2.dataWrap = <h2{register:headerClass}>|</h2>

	10.3 < .10.1
	10.3.dataWrap = <h3{register:headerClass}>|</h3>

	10.4 < .10.1
	10.4.dataWrap = <h4{register:headerClass}>|</h4>

	10.5 < .10.1
	10.5.dataWrap = <h5{register:headerClass}>|</h5>

	# HTML5 subheader
	20 = CASE
	20 {
		key {
			field = header_layout
		}

		default = TEXT
		default {
			wrap = <h2>|</h2>
			htmlSpecialChars = 1
			field = subheader
		}

		1 < .default

		2 < .default
		2.wrap = <h3>|</h3>

		3 < .default
		3.wrap = <h4>|</h4>

		4 < .default
		4.wrap = <h5>|</h5>

		5 < .default
		5.wrap = <h6>|</h6>

		if {
			isTrue {
				field = subheader
			}
			value = html5
			equals.data = TSFE:config|config|doctype
		}
	}

	# HTML5 <hgroup> close
	30 < lib.stdheader.7
	30 {
		value = </hgroup>
	}

	# HTML5 Date
	40 = COA
	40 {

		stdWrap {
			wrap = <p class="csc-header-date">|</p>
			innerWrap {
				cObject = COA
				cObject {
					10 = TEXT
					10 {
						value = <time
					}
					20 = TEXT
					20 {
						noTrimWrap = | datetime="|"|
						field = date
						strftime = %Y-%m-%d
					}
					30 = TEXT
					30 {
						value = >|</time>
					}
				}
			}
			required = 1
		}
		10 = TEXT
		10 {
			field = date
			strftime = %B %e, %Y
		}
		if {
			isTrue {
				field = date
			}
			value = html5
			equals.data = TSFE:config|config|doctype
		}
	}

	# Pops the used registers off the stack:
	98 = RESTORE_REGISTER

	# Post-processing:
	stdWrap.fieldRequired = header
	stdWrap.if {
		equals.field = header_layout
		value = 100
		negate = 1
	}

	stdWrap.editIcons = tt_content : header, [header_layout | header_position], [header_link|date]
	stdWrap.editIcons.beforeLastTag = 1
	stdWrap.editIcons.iconTitle.data = LLL:EXT:css_styled_content/pi1/locallang.xml:eIcon.header

	stdWrap {
		dataWrap = <div class="csc-header csc-header-n{cObj:parentRecordNumber}">|</div>
		dataWrap {
			override = <header class="csc-header csc-header-n{cObj:parentRecordNumber}">|</header>
			override {
				if {
					value = html5
					equals.data = TSFE:config|config|doctype
				}
			}
		}
	}
	stdWrap.prefixComment = 2 | Header:
}















#******************************************************
# Including library for processing of some elements:
#******************************************************
includeLibs.tx_cssstyledcontent_pi1 = EXT:css_styled_content/pi1/class.tx_cssstyledcontent_pi1.php


#**********************************
# tt_content is started
#**********************************
#tt_content >
tt_content = CASE
tt_content.key.field = CType
tt_content.stdWrap {
	innerWrap.cObject = CASE
	innerWrap.cObject {
		key.field = section_frame

		default = COA
		default {
			10 = TEXT
			10 {
				cObject = CASE
				cObject {
					key.field = CType

					default = TEXT
					default {
						value = <div id="c{field:uid}"
					}

					div = TEXT
					div {
						value = <div
					}

					menu < .default
					menu {
						override = <nav id="c{field:uid}"
						override {
							if {
								value = html5
								equals.data = TSFE:config|config|doctype
							}
						}
					}
				}
				insertData = 1
			}

			20 = COA
			20 {
				# Create default class for content
				10 = TEXT
				10 {
					value = csc-default
					required = 1
					noTrimWrap = || |
				}
				# Create class for space before content
				20 = USER
				20 {
					userFunc = tx_cssstyledcontent_pi1->renderSpace
					space = before
					constant = {$content.spaceBefore}
					stdWrap {
						noTrimWrap = |csc-space-before-| |
					}
				}
				# Create class for space after content
				30 = USER
				30 {
					userFunc = tx_cssstyledcontent_pi1->renderSpace
					space = after
					constant = {$content.spaceAfter}
					stdWrap {
						noTrimWrap = |csc-space-after-| |
					}
				}
				stdWrap {
					trim = 1
					noTrimWrap = | class="|"|
					required = 1
				}
			}

			30 = TEXT
			30 {
				cObject = CASE
				cObject {
					key.field = CType

					default = TEXT
					default {
						value = >|</div>
					}

					menu < .default
					menu {
						override = >|</nav>
						override {
							if {
								value = html5
								equals.data = TSFE:config|config|doctype
							}
						}
					}
				}
			}
		}

		1 =< tt_content.stdWrap.innerWrap.cObject.default
		1.20.10.value = csc-frame csc-frame-invisible

		5 =< tt_content.stdWrap.innerWrap.cObject.default
		5.20.10.value = csc-frame csc-frame-rulerBefore

		6 =< tt_content.stdWrap.innerWrap.cObject.default
		6.20.10.value = csc-frame csc-frame-rulerAfter

		10 =< tt_content.stdWrap.innerWrap.cObject.default
		10.20.10.value = csc-frame csc-frame-indent

		11 =< tt_content.stdWrap.innerWrap.cObject.default
		11.20.10.value = csc-frame csc-frame-indent3366

		12 =< tt_content.stdWrap.innerWrap.cObject.default
		12.20.10.value = csc-frame csc-frame-indent6633

		20 =< tt_content.stdWrap.innerWrap.cObject.default
		20.20.10.value = csc-frame csc-frame-frame1

		21 =< tt_content.stdWrap.innerWrap.cObject.default
		21.20.10.value = csc-frame csc-frame-frame2

		66 = COA
		66 {
			10 = TEXT
			10 {
				value = <a id="c{field:uid}"></a>
				insertData = 1
			}
			# Create div with class for space before content
			20 = COA
			20 {
				10 = USER
				10 {
					userFunc = tx_cssstyledcontent_pi1->renderSpace
					space = before
					constant = {$content.spaceBefore}
					stdWrap {
						wrap = csc-space-before-|
					}
				}
				stdWrap {
					wrap = <div class="|"></div>
					required = 1
				}
			}

			30 = TEXT
			30 {
				value = |
			}

			# Create div with class for space after content
			40 < .20
			40 {
				10 {
					space = after
					constant = {$content.spaceAfter}
					stdWrap {
						wrap = csc-space-after-|
					}
				}
			}
		}
	}

	innerWrap2 = | <p class="csc-linkToTop"><a href="#">{LLL:fileadmin/templates/ts/locallang/t3d.xml:linkToTop}</a></p>
	innerWrap2.insertData = 1
	innerWrap2.fieldRequired = linkToTop

	prepend = TEXT
	prepend.dataWrap = <a id="c{field:_LOCALIZED_UID}"></a>
	prepend.if.isTrue.field = _LOCALIZED_UID

	editPanel = 1
	editPanel {
		allow = move,new,edit,hide,delete
		line = 5
		label = %s
		onlyCurrentPid = 1
		previewBorder = 4
		edit.displayRecord = 1
	}

	prefixComment = 1 | CONTENT ELEMENT, uid:{field:uid}/{field:CType}
}
[global]

[globalVar = LIT:1 = {$t3d_basis.ts_css_styled_content}]
# *****************
# CType: header
# *****************
# See Object path "lib.stdheader"
tt_content.header = COA
tt_content.header {
	10 = < lib.stdheader

	20 = TEXT
	20 {
		field = subheader
		required = 1

		dataWrap = <p class="csc-subheader csc-subheader-{field:layout}">|</p>
		htmlSpecialChars = 1

		if {
			value = html5
			equals.data = TSFE:config|config|doctype
			negate = 1
		}

		editIcons = tt_content:subheader,layout
		editIcons.beforeLastTag = 1
		editIcons.iconTitle.data = LLL:EXT:css_styled_content/pi1/locallang.xml:eIcon.subheader

		prefixComment = 2 | Subheader:
	}
}



# *****************
# CType: text
# *****************
tt_content.text = COA
tt_content.text {
	10 = < lib.stdheader

	20 = TEXT
	20 {
		field = bodytext
		required = 1

		parseFunc = < lib.parseFunc_RTE

		editIcons = tt_content:bodytext, rte_enabled
		editIcons.beforeLastTag = 1
		editIcons.iconTitle.data = LLL:EXT:css_styled_content/pi1/locallang.xml:eIcon.bodytext

		prefixComment = 2 | Text:
	}
}



# *****************
# CType: image
# *****************
# (also used for rendering 'textpic' type):
tt_content.image = COA
tt_content.image.10 = < lib.stdheader
tt_content.image.20 = USER
tt_content.image.20 {
	userFunc = tx_cssstyledcontent_pi1->render_textpic

	# Image source
	imgList.field = image
	imgPath = uploads/pics/

	# Single image rendering
	imgObjNum = 1
	1 {
		file.import.current = 1
		file.width.field = imagewidth
		imageLinkWrap = 1
		imageLinkWrap {
			bodyTag = <body style="margin:0; background:{$t3d_style.bgcolor_showpic};">
			wrap = <a href="javascript:close();"> | </a>
			width = {$styles.content.imgtext.linkWrap.width}
			height = {$styles.content.imgtext.linkWrap.height}
			effects = {$styles.content.imgtext.linkWrap.effects}

			JSwindow = 1
			JSwindow.newWindow = {$styles.content.imgtext.linkWrap.newWindow}
			JSwindow.if.isFalse = {$styles.content.imgtext.linkWrap.lightboxEnabled}

			directImageLink = {$styles.content.imgtext.linkWrap.lightboxEnabled}

			enable.field = image_zoom
			enable.ifEmpty.typolink.parameter.field = image_link
			enable.ifEmpty.typolink.parameter.listNum.splitChar = 10
			enable.ifEmpty.typolink.parameter.listNum.stdWrap.data = register : IMAGE_NUM_CURRENT
			enable.ifEmpty.typolink.returnLast = url

			typolink.parameter.field = image_link
			typolink.parameter.listNum.splitChar = 10
			typolink.parameter.listNum.stdWrap.data = register : IMAGE_NUM_CURRENT

			typolink.target < lib.parseTarget
			typolink.target =
			typolink.target.override = {$styles.content.links.target}

			typolink.extTarget < lib.parseTarget
			typolink.extTarget =
			typolink.extTarget.override = {$styles.content.links.extTarget}

			linkParams.ATagParams.dataWrap =  class="{$styles.content.imgtext.linkWrap.lightboxCssClass}" rel="{$styles.content.imgtext.linkWrap.lightboxRelAttribute}"
		}

		altText = TEXT
		altText {
			field = altText
			stripHtml = 1
			split.token.char = 10
			split.token.if.isTrue = {$styles.content.imgtext.imageTextSplit}
			split.returnKey.data = register : IMAGE_NUM_CURRENT
		}

		params =
		params {
			override {
				dataWrap = aria-describedby="csc-longdesc-{field:uid}-{register:IMAGE_NUM_CURRENT}"
				if {
					isTrue {
						cObject = TEXT
						cObject {
							field = imagecaption
							required = 1
							parseFunc =< lib.parseFunc
							split {
								token {
									char = 10
									if.isPositive = {$styles.content.imgtext.imageTextSplit} + {$styles.content.imgtext.captionSplit}
								}
								returnKey.data = register : IMAGE_NUM_CURRENT
							}
						}
					}
					isFalse = 1
					isFalse {
						if {
							isFalse {
								cObject = TEXT
								cObject {
									field = longdescURL
									split {
										token {
											char = 10
										}
										returnKey.data = register : IMAGE_NUM_CURRENT
									}
								}
							}
						}
					}
					isPositive = {$styles.content.imgtext.imageTextSplit} + {$styles.content.imgtext.captionSplit}
					value = html5
					equals.data = TSFE:config|config|doctype
				}
			}
		}

		titleText < .altText
		titleText.field = titleText

		longdescURL {
			parameter {
				field = longdescURL
				split {
					token {
						char = 10
					}
					returnKey.data = register : IMAGE_NUM_CURRENT
				}
			}
		}

		emptyTitleHandling = {$styles.content.imgtext.emptyTitleHandling}
		titleInLink = {$styles.content.imgtext.titleInLink}
		titleInLinkAndImg = {$styles.content.imgtext.titleInLinkAndImg}
	}

	textPos.field = imageorient
	maxW = {$styles.content.imgtext.maxW}
	maxW.override.data = register:maxImageWidth
	maxWInText = {$styles.content.imgtext.maxWInText}
	maxWInText.override.data = register:maxImageWidthInText

	equalH.field = imageheight

	image_compression.field = image_compression
	image_effects.field = image_effects

	noRows.field = image_noRows

	cols.field = imagecols
	border.field = imageborder

	caption {
		1 = COA
		1 {
			1 = TEXT
			1 {
				field = imagecaption
				required = 1
				parseFunc =< lib.parseFunc
				br = 1
				trim = 1
				split.token.char = 10
				split.token.if.isPositive = {$styles.content.imgtext.imageTextSplit} + {$styles.content.imgtext.captionSplit}
				split.returnKey.data = register : IMAGE_NUM_CURRENT
			}
			stdWrap {
				required = 1
				typolink {
					parameter {
						field = longdescURL
						trim = 1
						split {
							token {
								char = 10
							}
							returnKey.data = register : IMAGE_NUM_CURRENT
						}
						if {
							value = html5
							equals.data = TSFE:config|config|doctype
						}
					}
					ATagParams {
						dataWrap = id="csc-longdesc-{field:uid}-{register:IMAGE_NUM_CURRENT}"
					}
					target = {$styles.content.links.target}
					extTarget = {$styles.content.links.extTarget}
				}
			}
		}
    
    5 = LOAD_REGISTER
    5{
      respClass.cObject = TEXT
      respClass.cObject{
        field = imagecols
        stdWrap.dataWrap = {$t3d_grid.max_cols}/|
        prioriCalc = 1
      }
    }
	}

	# captionSplit is deprecated, use imageTextSplit instead
	captionSplit = {$styles.content.imgtext.captionSplit}
	captionAlign.field = imagecaption_position
	# caption/alttext/title/longdescURL splitting
	imageTextSplit = {$styles.content.imgtext.imageTextSplit}

	borderCol = {$styles.content.imgtext.borderColor}
	borderThick = {$styles.content.imgtext.borderThick}
	borderClass = {$styles.content.imgtext.borderClass}
	colSpace = {$styles.content.imgtext.colSpace}
	rowSpace = {$styles.content.imgtext.rowSpace}
	textMargin = {$styles.content.imgtext.textMargin}

	borderSpace = {$styles.content.imgtext.borderSpace}
	separateRows = {$styles.content.imgtext.separateRows}
	addClasses =
	addClassesCol =
	addClassesCol.ifEmpty = csc-textpic-firstcol csc-textpic-lastcol
	addClassesCol.override = csc-textpic-firstcol |*| |*| csc-textpic-lastcol
	addClassesCol.override.if {
		isGreaterThan.field = imagecols
		value = 1
	}

	addClassesImage = csc-textpic-first |*| |*| csc-textpic-last

	#
	imageStdWrap.dataWrap = <div class="csc-textpic-imagewrap csc-textpic-count-{field:imagecols}" style="width:{register:totalwidth}px;"> | </div>
	imageStdWrapNoWidth.wrap = <div class="csc-textpic-imagewrap csc-textpic-count-{field:imagecols}"> | </div>
	imageStdWrapNoWidth.wrap.insertData = 1

	# if noRows is set, wrap around each column:
	imageColumnStdWrap.dataWrap = <div class="csc-textpic-imagecolumn col span_{register:respClass}" style="width:{register:columnwidth}px;"> | </div>

	layout = CASE
	layout {
		key.field = imageorient
		# above-center
		default = TEXT
		default.value = <div class="csc-textpic csc-textpic-center csc-textpic-above###CLASSES###">###IMAGES######TEXT###</div>
		# above-right
		1 = TEXT
		1.value = <div class="csc-textpic csc-textpic-right csc-textpic-above###CLASSES###">###IMAGES######TEXT###</div>
		# above-left
		2 = TEXT
		2.value = <div class="csc-textpic csc-textpic-left csc-textpic-above###CLASSES###">###IMAGES######TEXT###</div>
		# below-center
		8 = TEXT
		8.value = <div class="csc-textpic csc-textpic-center csc-textpic-below###CLASSES###">###TEXT######IMAGES###</div>
		# below-right
		9 = TEXT
		9.value = <div class="csc-textpic csc-textpic-right csc-textpic-below###CLASSES###">###TEXT######IMAGES###</div>
		# below-left
		10 = TEXT
		10.value = <div class="csc-textpic csc-textpic-left csc-textpic-below###CLASSES###">###TEXT######IMAGES###</div>
		# intext-right
		17 = TEXT
		17.value = <div class="csc-textpic csc-textpic-intext-right###CLASSES###">###IMAGES######TEXT###</div>
		# intext-left
		18 = TEXT
		18.value = <div class="csc-textpic csc-textpic-intext-left###CLASSES###">###IMAGES######TEXT###</div>
		# intext-right-nowrap
		25 = TEXT
		25.value = <div class="csc-textpic csc-textpic-intext-right-nowrap###CLASSES###">###IMAGES######TEXT###</div>
		# intext-left-nowrap
		26 = TEXT
		26.value = <div class="csc-textpic csc-textpic-intext-left-nowrap###CLASSES###">###IMAGES######TEXT###</div>
	}

	rendering {
		# Single image - No caption
		singleNoCaption {
			# Choose another rendering for special edge cases
			fallbackRendering = COA
			fallbackRendering {
				# Single image - Caption
				10 = TEXT
				10 {
					if {
						isTrue.field = imagecaption
						value = 1
						equals.data = register:imageCount
					}
					value = singleCaption
				}

				# Multiple images and split caption
				20 = TEXT
				20 {
					if {
						value = 1
						isGreaterThan.data = register:imageCount
						isTrue.if.isFalse.data = register:renderGlobalCaption
						isTrue.field = imagecaption
					}
					value = splitCaption
				}

				# Multiple images and one global caption
				30 = TEXT
				30 {
					if {
						value = 1
						isGreaterThan.data = register:imageCount
						isTrue.if.isTrue.data = register:renderGlobalCaption
						isTrue.field = imagecaption
					}
					value = globalCaption
				}

				# Multiple images and no caption at all
				40 = TEXT
				40 {
					if {
						value = 1
						isGreaterThan.data = register:imageCount
						isFalse.field = imagecaption
					}
					value = noCaption
				}
			}
			allStdWrap {
				wrap = <div class="csc-textpic-imagewrap csc-textpic-count-{field:imagecols}"> | </div>
				wrap.insertData =1
				innerWrap.cObject = CASE
				innerWrap.cObject {
					key.field = imageorient
					# above-center
					0 = TEXT
					0.value = <div class="csc-textpic-center-outer"><div class="csc-textpic-center-inner"> | </div></div>
					# below-center
					8 < .0
				}
			}
			singleStdWrap {
				wrap = <div class="csc-textpic-image###CLASSES###"> | </div>
				wrap {
					override = <figure class="csc-textpic-image###CLASSES###"> | </figure>
					override {
						if {
							value = html5
							equals.data = TSFE:config|config|doctype
						}
					}
				}
			}
			rowStdWrap.wrap = |
			noRowsStdWrap.wrap = |
			lastRowStdWrap.wrap = |
			columnStdWrap.wrap = |
			imgTagStdWrap.wrap = |
			editIconsStdWrap.wrap = <div> | </div>
			caption.wrap = |
		}
		noCaption {
			# Multiple images and no caption at all
			fallbackRendering < tt_content.image.20.rendering.singleNoCaption.fallbackRendering.10
			allStdWrap.wrap = <div class="csc-textpic-imagewrap csc-textpic-count-{field:imagecols}"> | </div>
			allStdWrap.wrap.insertData = 1
			singleStdWrap {
				wrap = <div class="csc-textpic-image###CLASSES###"> | </div>
				wrap {
					override = <figure class="csc-textpic-image###CLASSES###"> | </figure>
				}
			}
			rowStdWrap.wrap = <div class="csc-textpic-imagerow row"> | </div>
			noRowsStdWrap.wrap = <div class="csc-textpic-imagerow row csc-textpic-imagerow-none"> | </div>
			lastRowStdWrap.wrap = <div class="csc-textpic-imagerow row csc-textpic-imagerow-last"> | </div>
			columnStdWrap.wrap = <div class="csc-textpic-imagecolumn###CLASSES### col span_{register:respClass}"> | </div>
			columnStdWrap.wrap.insertData = 1
		}
		singleCaption {
			# Just one image with a caption
			fallbackRendering < tt_content.image.20.rendering.singleNoCaption.fallbackRendering.10
			singleStdWrap {
				wrap = <div class="csc-textpic-image###CLASSES###"><table>###CAPTION###<tbody><tr><td> | </td></tr></tbody></table></div>
				wrap {
					override = <figure class="csc-textpic-image###CLASSES###">|###CAPTION###</figure>
					override {
						if {
							value = html5
							equals.data = TSFE:config|config|doctype
						}
					}
				}
			}
			caption {
				required = 1
				wrap = <caption class="csc-textpic-caption###CLASSES###"> | </caption>
				wrap {
					override = <figcaption class="csc-textpic-caption###CLASSES###"> | </figcaption>
					override {
						if {
							value = html5
							equals.data = TSFE:config|config|doctype
						}
					}
				}
			}
		}
		splitCaption {
			fallbackRendering < tt_content.image.20.rendering.singleNoCaption.fallbackRendering.10
			singleStdWrap {
				wrap = <div class="csc-textpic-image###CLASSES###"><table>###CAPTION###<tbody><tr><td> | </td></tr></tbody></table></div>
				wrap {
					override = <figure class="csc-textpic-image###CLASSES###">|###CAPTION###</figure>
					override {
						if {
							value = html5
							equals.data = TSFE:config|config|doctype
						}
					}
				}
			}
			rowStdWrap.wrap = <div class="csc-textpic-imagerow row"> | </div>
			noRowsStdWrap.wrap = <div class="csc-textpic-imagerow row csc-textpic-imagerow-none"> | </div>
			lastRowStdWrap.wrap = <div class="csc-textpic-imagerow row csc-textpic-imagerow-last"> | </div>
			columnStdWrap.wrap = <div class="csc-textpic-imagecolumn###CLASSES### col span_{register:respClass}"> | </div>
			columnStdWrap.wrap.insertData = 1
			caption {
				required = 1
				wrap = <caption class="csc-textpic-caption###CLASSES###"> | </caption>
				wrap {
					override = <figcaption class="csc-textpic-caption###CLASSES###"> | </figcaption>
					override {
						if {
							value = html5
							equals.data = TSFE:config|config|doctype
						}
					}
				}
			}
		}
		globalCaption {
			# Just one image without a caption
			fallbackRendering < tt_content.image.20.rendering.singleNoCaption.fallbackRendering.10
			allStdWrap {
				wrap = <div class="csc-textpic-imagewrap csc-textpic-count-{field:imagecols}"><table>###CAPTION###<tbody> | </tbody></table></div>
				wrap.insertData = 1
				wrap {
					override = <figure class="csc-textpic-imagewrap csc-textpic-count-{field:imagecols}"> | ###CAPTION###</figure>
					override.insertData = 1
					override {
						if {
							value = html5
							equals.data = TSFE:config|config|doctype
						}
					}
				}
			}
			singleStdWrap {
				wrap = <div class="csc-textpic-image###CLASSES###"> | </div>
				wrap {
					override = <div class="csc-textpic-image###CLASSES###"> | </div>
				}
			}
			rowStdWrap.wrap = <div class="csc-textpic-imagerow row"> | </div>
			noRowsStdWrap.wrap = <div class="csc-textpic-imagerow row csc-textpic-imagerow-none"> | </div>
			lastRowStdWrap.wrap = <div class="csc-textpic-imagerow row csc-textpic-imagerow-last"> | </div>
			columnStdWrap.wrap = <div class="csc-textpic-imagecolumn###CLASSES### col span_{register:respClass}"> | </div>
			columnStdWrap.wrap.insertData = 1
			caption {
				required = 1
				wrap = <caption class="csc-textpic-caption"> | </caption>
				wrap {
					override = <figcaption class="csc-textpic-caption###CLASSES###"> | </figcaption>
					override {
						if {
							value = html5
							equals.data = TSFE:config|config|doctype
						}
					}
				}
			}
		}
	}
	renderMethod = singleNoCaption

	editIcons = tt_content : image [imageorient|imagewidth|imageheight], [imagecols|image_noRows|imageborder],[image_link|image_zoom],[image_compression|image_effects|image_frames],imagecaption[imagecaption_position]
	editIcons.iconTitle.data = LLL:EXT:css_styled_content/pi1/locallang.xml:eIcon.images

	caption.editIcons = tt_content : imagecaption[imagecaption_position]
	caption.editIcons.beforeLastTag=1
	caption.editIcons.iconTitle.data = LLL:EXT:css_styled_content/pi1/locallang.xml:eIcon.caption

	stdWrap.prefixComment = 2 | Image block:
}

# *****************
# CType: textpic
# *****************
tt_content.textpic = COA
tt_content.textpic {
	10 = COA
	10.if.value = 25
	10.if.isLessThan.field = imageorient
	10.10 = < lib.stdheader

	20  = < tt_content.image.20
	20 {
		text.10 = COA
		text.10 {
			if.value = 24
			if.isGreaterThan.field = imageorient
			10 = < lib.stdheader
			10.stdWrap.dataWrap = <div class="csc-textpicHeader csc-textpicHeader-{field:imageorient}">|</div>
		}
		text.20 = < tt_content.text.20
		text.wrap = <div class="csc-textpic-text"> | </div>
	}
}



# *****************
# CType: bullet
# *****************
tt_content.bullets = COA
tt_content.bullets {
	10 = < lib.stdheader

	20 = TEXT
	20 {
		field = bodytext
		trim = 1
		split{
			token.char = 10
			cObjNum = |*|1|| 2|*|
			1.current = 1
			1.parseFunc =< lib.parseFunc
			1.wrap = <li class="odd">|</li>

			2.current = 1
			2.parseFunc =< lib.parseFunc
			2.wrap = <li class="even">|</li>
		}
		dataWrap = <ul class="csc-bulletlist csc-bulletlist-{field:layout}">|</ul>
	 	editIcons = tt_content: bodytext, [layout]
	 	editIcons.beforeLastTag = 1
	 	editIcons.iconTitle.data = LLL:EXT:css_styled_content/pi1/locallang.php:eIcon.bullets

	 	prefixComment = 2 | Bullet list:
	}
}



# *****************
# CType: table
# *****************
# Rendered by a PHP function specifically written to handle CE tables. See css_styled_content/pi1/class.tx_cssstyledcontent_pi1.php
tt_content.table = COA
tt_content.table {
	10 = < lib.stdheader

	20 = USER
	20.userFunc = tx_cssstyledcontent_pi1->render_table
	20.field = bodytext

	20.color {
		default =
		1 = {$styles.content.table.backgroundColor.1}
		2 = {$styles.content.table.backgroundColor.2}
		200 =
		240 = {$styles.content.table.backgroundColor.240}
		241 = {$styles.content.table.backgroundColor.241}
		242 = {$styles.content.table.backgroundColor.242}
		243 = {$styles.content.table.backgroundColor.243}
		244 = {$styles.content.table.backgroundColor.244}
	}
	20.tableParams_0 {
		border =
		cellpadding =
		cellspacing =
	}
	20.tableParams_1 {
		border =
		cellpadding =
		cellspacing =
	}
	20.tableParams_2 {
		border =
		cellpadding =
		cellspacing =
	}
	20.tableParams_3 {
		border =
		cellpadding =
		cellspacing =
	}
	20.innerStdWrap.wrap = |
	20.innerStdWrap.parseFunc = < lib.parseFunc

	20.stdWrap {
		editIcons = tt_content: cols, bodytext, [layout], [table_bgColor|table_border|table_cellspacing|table_cellpadding]
		editIcons.beforeLastTag = 1
		editIcons.iconTitle.data = LLL:EXT:css_styled_content/pi1/locallang.xml:eIcon.table

		prefixComment = 2 | Table:
	}
}


# *****************
# CType: uploads
# *****************
# Rendered by a PHP function specifically written to handle CE filelists. See css_styled_content/pi1/class.tx_cssstyledcontent_pi1.php
tt_content.uploads = COA
tt_content.uploads {
	10 = < lib.stdheader

	20 = USER
	20 {
		userFunc = tx_cssstyledcontent_pi1->render_uploads
		field = media
		filePath.field = select_key

		outerWrap = <ul class="csc-uploads csc-uploads-{field:layout}">|</ul>
		outerWrap {
			insertData = 1
		}

		labelStdWrap.wrap = <span class="csc-uploads-fileName">|</span>

		# Rendering for each file (e.g. rows of the table) as a cObject
		itemRendering = COA
		itemRendering {
			wrap.cObject = COA
			wrap.cObject {
				10 = LOAD_REGISTER
				10 {
					oddEvenClass = li-odd li-first |*| li-even || li-odd
					elementClass = csc-uploads-element csc-uploads-element-{register:fileExtension}
					elementClass.insertData = 1
				}
				20 = TEXT
				20 {
					value = <li class="{register:oddEvenClass} {register:elementClass}">|</li>
					insertData = 1
				}
				30 = RESTORE_REGISTER
			}

			10 = TEXT
			10 {
				data = register:linkedIcon
			}

			20 = TEXT
			20 {
				data = register:description
				htmlSpecialChars = 1
				wrap = <span class="csc-uploads-description">|</span>
				required = 1
			}

			30 = TEXT
			30 {
				if.isTrue.field = filelink_size
				data = register:fileSize
				wrap = <span class="csc-uploads-fileSize">|</span>
				bytes = 1
				bytes.labels = {$styles.content.uploads.filesizeBytesLabels}
			}
		}
		useSpacesInLinkText = 0
		stripFileExtensionFromLinkText = 0

		linkProc {
			combinedLink = 1

			target < lib.parseTarget
			target =
			target.override = {$styles.content.uploads.target}

			title.htmlSpecialChars = 1

			jumpurl = {$styles.content.uploads.jumpurl}
			jumpurl {
				secure = {$styles.content.uploads.jumpurl_secure}
				secure.mimeTypes = {$styles.content.uploads.jumpurl_secure_mimeTypes}
			}

			removePrependedNumbers = 1

			iconCObject = IMAGE
			iconCObject {
				file {
					import.data = register : ICON_REL_PATH
					width = 150
				}
			}
		}
		filesize {
			bytes = 1
			bytes.labels = {$styles.content.uploads.filesizeBytesLabels}
		}
		stdWrap {
			editIcons = tt_content: media, layout [table_bgColor|table_border|table_cellspacing|table_cellpadding], filelink_size, imagecaption
			editIcons.iconTitle.data = LLL:EXT:css_styled_content/pi1/locallang.xml:eIcon.filelist

			prefixComment = 2 | File list:
		}
	}
}

# ******************
# CType: multimedia
# ******************
tt_content.multimedia = COA
tt_content.multimedia {
	10 = < lib.stdheader

	20 = MULTIMEDIA
	20.file.field = multimedia
	20.file.wrap = uploads/media/
	20.file.listNum = 0
	20.params.field = bodytext

	20.stdWrap {
		editIcons = tt_content: multimedia, bodytext
		editIcons.iconTitle.data = LLL:EXT:css_styled_content/pi1/locallang.xml:eIcon.multimedia

		prefixComment = 2 | Multimedia element:
	}
}

# *****************
# CType: swfobject
# *****************
tt_content.swfobject = COA
tt_content.swfobject {
	10 = < lib.stdheader

	20 = SWFOBJECT
	20 {
		file =
		width =
		height =

		flexParams.field = pi_flexform

		alternativeContent.field = bodytext

		layout = ###SWFOBJECT###

		video {
			player = {$styles.content.media.videoPlayer}

			defaultWidth  = {$styles.content.media.defaultVideoWidth}
			defaultHeight  = {$styles.content.media.defaultVideoHeight}

			default {
				params.quality = high
				params.menu = false
				params.allowScriptAccess = sameDomain
				params.allowFullScreen = true
			}
			mapping {

			}
		}

		audio {
			player = {$styles.content.media.audioPlayer}

			defaultWidth = {$styles.content.media.defaultAudioWidth}
			defaultHeight = {$styles.content.media.defaultAudioHeight}

			default {
				params.quality = high
				params.allowScriptAccess = sameDomain
				params.menu = false
			}
			mapping {
				flashvars.file = soundFile
			}
		}

	}
	20.stdWrap {
		editIcons = tt_content: multimedia, imagewidth, imageheight, pi_flexform, bodytext
		editIcons.iconTitle.data = LLL:EXT:css_styled_content/pi1/locallang.xml:eIcon.multimedia

		prefixComment = 2 | SWFobject element:
	}
}

# *****************
# CType: qtobject
# *****************
tt_content.qtobject = COA
tt_content.qtobject {
	10 = < lib.stdheader

	20 = QTOBJECT
	20 {
		file =
		width =
		height =

		flexParams.field = pi_flexform

		alternativeContent.field = bodytext

		layout = ###QTOBJECT###

		video {
			player = {$styles.content.media.videoPlayer}

			defaultWidth  = {$styles.content.media.defaultVideoWidth}
			defaultHeight  = {$styles.content.media.defaultVideoHeight}

			default {
				params.quality = high
				params.menu = false
				params.allowScriptAccess = sameDomain
				params.allowFullScreen = true
			}
			mapping {

			}
		}

		audio {
			player = {$styles.content.media.audioPlayer}

			defaultWidth = {$styles.content.media.defaultAudioWidth}
			defaultHeight = {$styles.content.media.defaultAudioHeight}

			default {
				params.quality = high
				params.allowScriptAccess = sameDomain
				params.menu = false
			}
			mapping {
				flashvars.file = soundFile
			}
		}
	}
	20.stdWrap {
		editIcons = tt_content: multimedia, imagewidth, imageheight, pi_flexform, bodytext
		editIcons.iconTitle.data = LLL:EXT:css_styled_content/pi1/locallang.xml:eIcon.multimedia

		prefixComment = 2 | QTobject element:
	}
}

# *****************
# CType: media
# *****************
tt_content.media = COA
tt_content.media {
	10 = < lib.stdheader

	20 = MEDIA
	20 {

		flexParams.field = pi_flexform
		alternativeContent < tt_content.text.20
		alternativeContent.field = bodytext

		type = video
		renderType = auto
		allowEmptyUrl = 0
		forcePlayer = 1

		fileExtHandler {
			default = MEDIA
			avi = MEDIA
			asf = MEDIA
			class = MEDIA
			wmv = MEDIA
			mp3 = SWF
			mp4 = SWF
			m4v = SWF
			swa = SWF
			flv = SWF
			swf = SWF
			mov = QT
			m4v = QT
			m4a = QT
		}

		mimeConf.swfobject < tt_content.swfobject.20
		mimeConf.qtobject < tt_content.qtobject.20
		mimeConf.flowplayer < tt_content.swfobject.20
		mimeConf.flowplayer.audio.player = {$styles.content.media.flowPlayer}
		mimeConf.flowplayer.video.player = {$styles.content.media.flowPlayer}

	}
	20.stdWrap {
		editIcons = tt_content: pi_flexform, bodytext
		editIcons.iconTitle.data = LLL:EXT:css_styled_content/pi1/locallang.xml:eIcon.multimedia

		prefixComment = 2 | Media element:
	}
}

# ******************
# CType: mailform
# ******************
tt_content.mailform = COA
tt_content.mailform.10 = < lib.stdheader
tt_content.mailform.20 = FORM
tt_content.mailform.20 {
	accessibility = 1
	noWrapAttr=1
	formName = mailform
	dontMd5FieldNames = 1
	layout = <div class="csc-mailform-field">###LABEL### ###FIELD###</div>
	labelWrap.wrap = |
	commentWrap.wrap = |
	radioWrap.wrap = |<br />
	radioWrap.accessibilityWrap = <fieldset###RADIO_FIELD_ID###><legend>###RADIO_GROUP_LABEL###</legend>|</fieldset>
	REQ = 1
	REQ.labelWrap.wrap = |
	COMMENT.layout = <div class="csc-mailform-label">###LABEL###</div>
	RADIO.layout = <div class="csc-mailform-field">###LABEL### <span class="csc-mailform-radio">###FIELD###</span></div>
	LABEL.layout = <div class="csc-mailform-field">###LABEL### <span class="csc-mailform-label">###FIELD###</span></div>
	target < lib.parseTarget
	target =
	target.override = {$styles.content.mailform.target}
	goodMess = {$styles.content.mailform.goodMess}
	badMess = {$styles.content.mailform.badMess}
	redirect.field = pages
	redirect.listNum = 0
	recipient.field = subheader
	data.field = bodytext
	locationData = 1
	hiddenFields.stdWrap.wrap = <div style="display:none;">|</div>

	params.radio = class="csc-mailform-radio"
	params.check = class="csc-mailform-check"
	params.submit = class="csc-mailform-submit"

	stdWrap.wrap = <fieldset class="csc-mailform"> | </fieldset>
	stdWrap {
		editIcons = tt_content: bodytext, pages, subheader
		editIcons.iconTitle.data = LLL:EXT:css_styled_content/pi1/locallang.xml:eIcon.form

		prefixComment = 2 | Mail form inserted:
	}
}


# ******************
# CType: search
# ******************
tt_content.search = COA
tt_content.search.10 = < lib.stdheader
# Result:
tt_content.search.20 = SEARCHRESULT
tt_content.search.20 {
	allowedCols = pages.title-subtitle-keywords-description : tt_content.header-bodytext-imagecaption : tt_address.name-title-address-email-company-city-country : tt_links.title-note-note2-url : tt_board.subject-message-author-email : tt_calender.title-note : tt_products.title-note-itemnumber
	languageField.tt_content = sys_language_uid
	renderObj = COA
	renderObj {

		10 = TEXT
		10.field = pages_title
		10.htmlSpecialChars = 1
		10.typolink {
			parameter.field = uid
			target < lib.parseTarget
			target =
			target.override = {$styles.content.searchresult.resultTarget}
			additionalParams.data = register:SWORD_PARAMS
			additionalParams.required = 1
			additionalParams.wrap = &no_cache=1
		}
		10.htmlSpecialChars = 1
		10.wrap = <h3 class="csc-searchResultHeader">|</h3>

		20 = COA
		20 {
			10 = TEXT
			10.field = tt_content_bodytext
			10.stripHtml = 1
			10.htmlSpecialChars = 1
		}
		20.stdWrap.crop = 200 | ...
		20.stdWrap.wrap = <p class="csc-searchResult">|</p>
	}

	layout = COA
	layout {
		wrap = <table border="0" cellspacing="0" cellpadding="2" class="csc-searchResultInfo"><tr> | </tr></table> ###RESULT###

		10 = TEXT
		10.data = LLL:EXT:css_styled_content/pi1/locallang.xml:search.resultRange
		10.wrap = <td class="csc-searchResultRange"><p>|</p></td>

		20 = TEXT
		20.value = ###PREV###&nbsp;&nbsp;&nbsp;###NEXT###
		20.wrap = <td class="csc-searchResultPrevNext"><p>|</p></td>
	}

	noResultObj = COA
	noResultObj {
		10 = TEXT
		10.data = LLL:EXT:css_styled_content/pi1/locallang.xml:search.emptySearch
		10.wrap = <h3 class="csc-noSearchResultMsg">|</h3>
	}

	next = TEXT
	next.data = LLL:EXT:css_styled_content/pi1/locallang.xml:search.searchResultNext

	prev = TEXT
	prev.data = LLL:EXT:css_styled_content/pi1/locallang.xml:search.searchResultPrev

	target < lib.parseTarget
	target =
	target.override = {$styles.content.searchresult.target}

	range = 20

	stdWrap.prefixComment = 2 | Search result:
}

# Form:
tt_content.search.30 < tt_content.mailform.20
tt_content.search.30 {
	goodMess = {$styles.content.searchform.goodMess}
	redirect >
	recipient >
	data >
	dataArray {
		10.label.data = LLL:EXT:css_styled_content/pi1/locallang.xml:search.searchWord
		10.type = sword=input
		20.label.data = LLL:EXT:css_styled_content/pi1/locallang.xml:search.searchIn
		20.type = scols=select
		20.valueArray {
			10.label.data = LLL:EXT:css_styled_content/pi1/locallang.xml:search.headersKeywords
			10.value = pages.title-subtitle-keywords-description:tt_content.header
			20.label.data = LLL:EXT:css_styled_content/pi1/locallang.xml:search.pageContent
			20.value = tt_content.header-bodytext-imagecaption
		}
		30.type = stype=hidden
		30.value = L0
		40.type = submit=submit
		40.value.data = LLL:EXT:css_styled_content/pi1/locallang.xml:search.searchButton
	}
	type.field = pages
	type.listNum = 0
	locationData = HTTP_POST_VARS
	no_cache = 1

	stdWrap.wrap = <table border="0" cellspacing="1" cellpadding="1" class="csc-searchform">  | </table>
	stdWrap {
		editIcons.iconTitle.data = LLL:EXT:css_styled_content/pi1/locallang.xml:eIcon.search

		prefixComment = 2 | Search form inserted:
	}
}

# ******************
# CType: splash
# ******************
# Deprecated element.
# Still here for backwards compliance with plugins using the "text box" type.
tt_content.splash = CASE
tt_content.splash.key.field = splash_layout
tt_content.splash.stdWrap {
	prefixComment = 2 | Textbox inserted (Deprecated)
}
tt_content.splash.default = COA
tt_content.splash.default {
	20 = CTABLE
	20 {
		c.1 = < tt_content.text
		lm.1 = IMAGE
		lm.1.file {
			import = uploads/pics/
			import.field = image
			import.listNum = 0
			maxW.field = imagewidth
			maxW.ifEmpty = 200
		}
		cMargins = 30,0,0,0
	}
}
tt_content.splash.1 < tt_content.splash.default
tt_content.splash.1.20.lm.1.file >
tt_content.splash.1.20.lm.1.file = GIFBUILDER
tt_content.splash.1.20.lm.1.file {
	XY = [10.w]+10,[10.h]+10
	backColor = {$content.splash.bgCol}
	backColor.override.data = register:pageColor
	format = jpg
	5 = BOX
	5.dimensions = 3,3,[10.w],[10.h]
	5.color = #333333
	7 = EFFECT
	7.value = blur=99|blur=99|blur=99|blur=99|blur=99|blur=99|blur=99
	10 = IMAGE
	10.file {
		import = uploads/pics/
		import.field = image
		import.listNum = 0
		maxW.field = imagewidth
		maxW.ifEmpty = 200
	}
}
// The image frames are not available unless TypoScript code from styles.content.imgFrames.x is provided manually:
tt_content.splash.2 < tt_content.splash.default
#tt_content.splash.2.20.lm.1.file.m < styles.content.imgFrames.1
tt_content.splash.3 < tt_content.splash.default
#tt_content.splash.3.20.lm.1.file.m < styles.content.imgFrames.2

// From plugin.postit1, if included:
tt_content.splash.20 = < plugin.postit1



# ****************
# CType: menu
# ****************
tt_content.menu = COA
tt_content.menu {
	10 = < lib.stdheader

	20 = CASE
	20 {
		key.field = menu_type

		# "Menu of these pages"
		default = HMENU
		default {
			special = list
			special.value.field = pages
			stdWrap {
				prepend = COA
				prepend {
					stdWrap {
						if.isTrue.field = accessibility_bypass
					}
					10 = LOAD_REGISTER
					10 {
						accessibility_bypass_text = TEXT
						accessibility_bypass_text {
							field = accessibility_bypass_text
						}
					}
					20 = CONTENT
					20 {
						table = tt_content
						select {
							pidInList = this
							orderBy = sorting
							andWhere {
								dataWrap = sorting>{field:sorting}
							}
							languageField = sys_language_uid
							max = 1
						}
						renderObj = TEXT
						renderObj {
							required = 1
							data = LLL:EXT:css_styled_content/pi1/locallang.xml:menu.bypassNavigation
							override.data = register:accessibility_bypass_text
							trim = 1
							htmlSpecialChars = 1
							noBlur = 1
							typolink {
								parameter {
									field = pid
								}
								section {
									field = uid
								}
							}
							wrap = <li class="csc-nav-bypass">|</li>
						}
					}
					30 = RESTORE_REGISTER
				}
				outerWrap = <ul class="csc-menu csc-menu-def">|</ul>
				required = 1
			}
			1 = TMENU
			1 {
				target < lib.parseTarget
				target =
				target.override = {$PAGE_TARGET}
				NO {
					stdWrap.htmlSpecialChars = 1
					wrapItemAndSub = <li>|</li>
					ATagTitle.field = description // title
				}
				noBlur = 1
			}
		}

		# "Menu of subpages to these pages"
		1 < .default
		1 {
			special = directory
			stdWrap {
				outerWrap = <ul class="csc-menu csc-menu-1">|</ul>
			}
		}

		# "Sitemap - liststyle"
		2 = HMENU
		2 {
			stdWrap < tt_content.menu.20.default.stdWrap
			stdWrap {
				outerWrap = <div class="csc-sitemap">|</div>
			}
			1 = TMENU
			1 {
				target < lib.parseTarget
				target =
				target.override = {$PAGE_TARGET}
				noBlur = 1
				expAll = 1
				wrap = <ul>|</ul>
				NO {
					stdWrap.htmlSpecialChars = 1
					wrapItemAndSub = <li>|</li>
					ATagTitle.field = description // title
				}
			}
			2 < .1
			3 < .1
			4 < .1
			5 < .1
			6 < .1
			7 < .1
		}

		# "Section index (pagecontent w/Index checked - liststyle)"
		3 < .default
		3 {
			special {
				value {
					override {
						data = page:uid
						if {
							isFalse.field = pages
						}
					}
				}
			}
			stdWrap {
				outerWrap = <ul class="csc-menu csc-menu-3">|</ul>
			}
			1 = TMENU
			1 {
				sectionIndex = 1
				sectionIndex.type = header
				NO.wrapItemAndSub = <li class="csc-section">|</li>
			}
		}

		# "Menu of subpages to these pages (with abstract)"
		4 < .1
		4 {
			stdWrap {
				prepend.renderObj.wrap = <dt class="csc-nav-bypass">|</dt><dd>&nbsp;</dd>
				outerWrap = <dl class="csc-menu csc-menu-4">|</dl>
			}
			1.NO {
				wrapItemAndSub >
				linkWrap = <dt>|</dt>
				after {
					cObject = TEXT
					cObject {
						data = field : abstract // field : description // field : subtitle
						htmlSpecialChars = 1
						required = 1
					}
					ifBlank = &nbsp;
					wrap = <dd>|</dd>
				}
				ATagTitle.field = description // title
			}
		}

		# "Recently updated pages"
		5 < .default
		5 {
			stdWrap {
				outerWrap = <ul class="csc-menu csc-menu-5">|</ul>
			}
			special = updated
			special {
				maxAge = 3600*24*7
				excludeNoSearchPages = 1
			}
		}

		# "Related pages (based on keywords)"
		6 < .default
		6 {
			stdWrap {
				outerWrap = <ul class="csc-menu csc-menu-6">|</ul>
			}
			special = keywords
			special {
				excludeNoSearchPages = 1
			}
		}

		# "Menu of subpages to these pages + sections - liststyle"
		7 < .1
		7 {
			stdWrap {
				outerWrap = <ul class="csc-menu csc-menu-7">|</ul>
			}
			1.expAll = 1
			2 < .1
			2 {
				sectionIndex = 1
				sectionIndex.type = header
				wrap = <ul>|</ul>
				NO.wrapItemAndSub = <li class="csc-section">|</li>
			}
		}
	}

	20.stdWrap {
		wrap {
			cObject = COA
			cObject {
				10 = TEXT
				10 {
					field = accessibility_title
					htmlSpecialChars = 1
					dataWrap = <map id="map{field:uid}" title="|">
					dataWrap {
						override = <map name="map{field:uid}" title="|">
						override {
							if {
								isFalse.data = TSFE:xhtmlDoctype
							}
						}
					}
				}

				20 = TEXT
				20 {
					value = |</map>
				}
			}
			if {
				isTrue {
					field = accessibility_title
				}
			}
		}
		editIcons = tt_content: menu_type, pages
		editIcons.iconTitle.data = LLL:EXT:css_styled_content/pi1/locallang.xml:eIcon.menuSitemap

		prefixComment = 2 | Menu/Sitemap element:
	}
}



# ****************
# CType: shortcut
# ****************
# Should be a complete copy from the old static template "content (default)"
tt_content.shortcut = COA
tt_content.shortcut {
	20 = CASE
	20.key.field = layout
	20.0= RECORDS
	20.0 {
		source.field = records
		tables = {$content.shortcut.tables}
	}
	20.1= RECORDS
	20.1 {
		source.field = records
		tables = {$content.shortcut.tables}
	}

	20.stdWrap {
		editIcons = tt_content: records
		editIcons.iconTitle.data = LLL:EXT:css_styled_content/pi1/locallang.xml:eIcon.recordList

		prefixComment = 2 | Inclusion of other records (by reference):
	}
}


# ****************
# CType: list
# ****************
# Should be a complete copy from the old static template "content (default)" (except "lib.stdheader")
tt_content.list = COA
tt_content.list {
	10 = < lib.stdheader

	20 = CASE
	20.key.field = list_type

	20.stdWrap {
		editIcons = tt_content: list_type, layout, select_key, pages [recursive]
		editIcons.iconTitle.data = LLL:EXT:css_styled_content/pi1/locallang.xml:eIcon.plugin

		prefixComment = 2 | Plugin inserted:
	}
}


# ****************
# CType: script
# ****************
# OBSOLETE! Please make extensions instead. The "script" content element was meant for these custom purposes in the past. Today extensions will do the job better.
tt_content.script = TEXT
tt_content.script {
	value =

	prefixComment = 2 | Script element (Deprecated)
}


# ****************
# CType: div
# ****************
tt_content.div = TEXT
tt_content.div {
	value = <hr>
	override = <hr />
	override.if {
		isTrue.data = TSFE:xhtmlDoctype
	}
	wrap = <div class="divider">|</div>
	prefixComment = 2 | Div element
}


# ****************
# CType: html
# ****************
# This truely IS a content object, launched from inside the PHP class of course.
# Should be a complete copy from the old static template "content (default)"
tt_content.html = TEXT
tt_content.html {
	field = bodytext

	editIcons = tt_content: pages
	editIcons.iconTitle.data = LLL:EXT:css_styled_content/pi1/locallang.xml:eIcon.html

	prefixComment = 2 | Raw HTML content:
}


# ****************
# Default error msg:
# ****************
tt_content.default = TEXT
tt_content.default {
	field = CType
	wrap = <p style="background-color: yellow;"><b>ERROR:</b> Content Element type "|" has no rendering definition!</p>

	prefixComment = 2 | Unknown element message:
}

# *********************************************************************
# ACCESSIBILTY MODE
# *********************************************************************







plugin.tx_cssstyledcontent._CSS_DEFAULT_STYLE (
	/* Headers */
	.csc-header-alignment-center { text-align: center; }
	.csc-header-alignment-right { text-align: right; }
	.csc-header-alignment-left { text-align: left; }

	/* Clear floats after csc-textpic and after csc-textpic-imagerow */
	DIV.csc-textpic, DIV.csc-textpic DIV.csc-textpic-imagerow, UL.csc-uploads LI { overflow: hidden; }

	/* Set padding for tables */
	DIV.csc-textpic .csc-textpic-imagewrap table { border-collapse: collapse; border-spacing: 0; }
	DIV.csc-textpic .csc-textpic-imagewrap table tr td { padding: 0; vertical-align: top; }

	/* Settings for figure and figcaption (HTML5) */
	DIV.csc-textpic .csc-textpic-imagewrap FIGURE, DIV.csc-textpic FIGURE.csc-textpic-imagewrap { margin: 0; display: table; }

	/* Captions */
	FIGCAPTION.csc-textpic-caption { display: table-caption; }
	.csc-textpic-caption { text-align: left; caption-side: bottom; }
	DIV.csc-textpic-caption-c .csc-textpic-caption, .csc-textpic-imagewrap .csc-textpic-caption-c { text-align: center; }
	DIV.csc-textpic-caption-r .csc-textpic-caption, .csc-textpic-imagewrap .csc-textpic-caption-r { text-align: right; }
	DIV.csc-textpic-caption-l .csc-textpic-caption, .csc-textpic-imagewrap .csc-textpic-caption-l { text-align: left; }

	/* Float the columns */
	DIV.csc-textpic DIV.csc-textpic-imagecolumn { float: left; }

	/* Border just around the image 
	{$styles.content.imgtext.borderSelector} {
		border: {$styles.content.imgtext.borderThick}px solid {$styles.content.imgtext.borderColor};
		padding: {$styles.content.imgtext.borderSpace}px {$styles.content.imgtext.borderSpace}px;
	}*/

	DIV.csc-textpic .csc-textpic-imagewrap IMG { display: block; }

	/* Space below each image (also in-between rows) */
	DIV.csc-textpic .csc-textpic-imagewrap .csc-textpic-image { margin-bottom: {$styles.content.imgtext.rowSpace}px; }
	DIV.csc-textpic .csc-textpic-imagewrap .csc-textpic-imagerow-last .csc-textpic-image {  }

	/* colSpace around image columns, except for last column */
	DIV.csc-textpic-imagecolumn, TD.csc-textpic-imagecolumn .csc-textpic-image {  }
	DIV.csc-textpic-imagecolumn.csc-textpic-lastcol, TD.csc-textpic-imagecolumn.csc-textpic-lastcol .csc-textpic-image { margin-right: 0; }

	/* Add margin from image-block to text (in case of "Text w/ images") */
	DIV.csc-textpic-intext-left .csc-textpic-imagewrap,
	DIV.csc-textpic-intext-left-nowrap .csc-textpic-imagewrap {
		margin-right: {$styles.content.imgtext.textMargin}px;
	}
	DIV.csc-textpic-intext-right .csc-textpic-imagewrap,
	DIV.csc-textpic-intext-right-nowrap .csc-textpic-imagewrap {
		margin-left: {$styles.content.imgtext.textMargin}px;
	}

	/* Positioning of images: */

	/* Center (above or below) */
	DIV.csc-textpic-center .csc-textpic-imagewrap, DIV.csc-textpic-center FIGURE.csc-textpic-imagewrap { overflow: hidden; }
	DIV.csc-textpic-center .csc-textpic-center-outer { position: relative; float: right; right: 50%; }
	DIV.csc-textpic-center .csc-textpic-center-inner { position: relative; float: right; right: -50%; }

	/* Right (above or below) */
	DIV.csc-textpic-right .csc-textpic-imagewrap { float: right; }
	DIV.csc-textpic-right DIV.csc-textpic-text { clear: right; }

	/* Left (above or below) */
	DIV.csc-textpic-left .csc-textpic-imagewrap { float: left; }
	DIV.csc-textpic-left DIV.csc-textpic-text { clear: left; }

	/* Left (in text) */
	DIV.csc-textpic-intext-left .csc-textpic-imagewrap { float: left; }

	/* Right (in text) */
	DIV.csc-textpic-intext-right .csc-textpic-imagewrap { float: right; }

	/* Right (in text, no wrap around) */
	DIV.csc-textpic-intext-right-nowrap .csc-textpic-imagewrap { float: right; }

	/* Left (in text, no wrap around) */
	DIV.csc-textpic-intext-left-nowrap .csc-textpic-imagewrap { float: left; }

	DIV.csc-textpic DIV.csc-textpic-imagerow-last, DIV.csc-textpic DIV.csc-textpic-imagerow-none DIV.csc-textpic-last { margin-bottom: 0; }

	/* Browser fixes: */

	/* Fix for unordered and ordered list with image "In text, left" */
	.csc-textpic-intext-left ol, .csc-textpic-intext-left ul { padding-left: 40px; overflow: auto; }

	/* File Links */
	UL.csc-uploads { padding: 0; }
	UL.csc-uploads LI { list-style: none outside none; margin: 1em 0; }
	UL.csc-uploads IMG { float: left; padding-right: 1em; vertical-align: top; }
	UL.csc-uploads SPAN { display: block; }
	UL.csc-uploads SPAN.csc-uploads-fileName { text-decoration: underline; }

	/* Table background colors: */

	TABLE.contenttable-color-1 { background-color: {$styles.content.table.backgroundColor.1}; }
	TABLE.contenttable-color-2 { background-color: {$styles.content.table.backgroundColor.2}; }
	TABLE.contenttable-color-240 { background-color: {$styles.content.table.backgroundColor.240}; }
	TABLE.contenttable-color-241 { background-color: {$styles.content.table.backgroundColor.241}; }
	TABLE.contenttable-color-242 { background-color: {$styles.content.table.backgroundColor.242}; }
	TABLE.contenttable-color-243 { background-color: {$styles.content.table.backgroundColor.243}; }
	TABLE.contenttable-color-244 { background-color: {$styles.content.table.backgroundColor.244}; }
)




[global]