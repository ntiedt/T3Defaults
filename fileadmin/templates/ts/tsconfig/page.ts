# Include following tag without # in the page TSconfig section of your root page
#<INCLUDE_TYPOSCRIPT:source="file:fileadmin/templates/ts/tsconfig/page.ts">

#----------------------------------------------------------- PAGE-TSCONFIG-NEWS-SYSORDNER-BEGIN
# FE-Cache fuer Seiten mit News loeschen
# z.b. 2,3,4 = Seiten auf denen News sind
# all = gesamter Auftritt
TCEMAIN.clearCacheCmd = all
#----------------------------------------------------------- PAGE-TSCONFIG-NEWS-SYSORDNER-END

#----------------------------------------------------------- PAGE-TSCONFIG-ROOTPAGE-BEGIN
TCEMAIN.table.tt_content {
  disablePrependAtCopy = 1
  disableHideAtCopy = 1
}

### Page Layout
TCEFORM.pages {
  layout.altLabels.0 = Standard
  layout.altLabels.1 = Layout 1
  layout.altLabels.2 = Layout 2
  layout.altLabels.3 = Layout 3
  layout.removeItems = 1,2,3
  
  #backend_layout.label = Layout
  #backend_layout.altLabels.-1 = 2 Spalter (1 große Spalte links / 1 kleine rechts)
  #backend_layout.altLabels.1 = 1 Spalter
  backend_layout.altLabels.0 = Vererbt
  backend_layout_next_level.altLabels.0 = Vererbt
  backend_layout.removeItems= -1
  backend_layout_next_level.removeItems= -1
}

### tt_content Layout
TCEFORM.tt_content {
  #header_layout.altLabels.0 = Standard
  #header_layout.altLabels.1 = Layout 1
  #header_layout.altLabels.2 = Layout 2
  #header_layout.altLabels.3 = Layout 3
  #header_layout.altLabels.4 = Layout 4
  #header_layout.altLabels.5 = Layout 5
  #header_layout.altLabels.100 = Verborgen
  #header_layout.addItems.7 = Bereichsheadline (H1)
  
  #layout.altLabels.0 = Standard
  #layout.altLabels.1 = Layout 1
  #layout.altLabels.2 = Layout 2
  #layout.altLabels.3 = Layout 3
  layout.removeItems = 1,2,3
  
  #section_frame.altLabels.0 = Standardframe
  #section_frame.altLabels.1 = Unsichtbar
  #section_frame.altLabels.5 = Linie davor
  #section_frame.altLabels.6 = Linie danach
  #section_frame.altLabels.10 = Einrücken
  #section_frame.altLabels.11 = Einrücken, 33/66%
  #section_frame.altLabels.12 = Einrücken, 66/33%
  section_frame.altLabels.20 = Rahmen mit weißem Hintergrund
  section_frame.altLabels.21 = Rahmen mit aprikot Hintergrund
  #section_frame.altLabels.66 = Kein Frame
  #section_frame.addItems.22=3 Name de Rahmens
  section_frame.removeItems = 1,10,11,12,66
}

### language default flag
mod.SHARED {
  defaultLanguageFlag = gb
  defaultLanguageLabel = English
}

# ***************************************************************************************
# "Typical" Page TSconfig for htmlArea RTE and Classic RTE
#
# Sets Page TSConfig with most commonly used features representing a good start for typical sites.
#
# @author	Stanislas Rolland <typo3(arobas)sjbr.ca>
# ***************************************************************************************

	## Define labels and styles to be applied to class selectors in the interface of the RTE
	## The examples included here make partial re-use of color scheme and frame scheme from CSS Styled Content extension
RTE.classes {
  /*
	align-left {
		name = LLL:EXT:rtehtmlarea/htmlarea/locallang_tooltips.xml:justifyleft
		value = text-align: left;
	}
	align-center {
		name = LLL:EXT:rtehtmlarea/htmlarea/locallang_tooltips.xml:justifycenter
		value = text-align: center;
	}
	align-right {
		name = LLL:EXT:rtehtmlarea/htmlarea/locallang_tooltips.xml:justifyright
		value = text-align: right;
	}
	csc-frame-frame1 {
		name = LLL:EXT:rtehtmlarea/res/contentcss/locallang.xml:frame-frame1
		value = background-color: #EDEBF1; border: 1px solid #333333;
	}
	csc-frame-frame2 {
		name = LLL:EXT:rtehtmlarea/res/contentcss/locallang.xml:frame-frame2
		value = background-color: #F5FFAA; border: 1px solid #333333;
	}
	important {
		name = LLL:EXT:rtehtmlarea/res/contentcss/locallang.xml:important
		value = color: #8A0020;
	}
	name-of-person {
		name = LLL:EXT:rtehtmlarea/res/contentcss/locallang.xml:name-of-person
		value = color: #10007B;
	}
	detail {
		name = LLL:EXT:rtehtmlarea/res/contentcss/locallang.xml:detail
		value = color: #186900;
	}
	component-items {
		name = LLL:EXT:rtehtmlarea/res/contentcss/locallang.xml:component-items
		value = color: #186900;
	}
	action-items {
		name = LLL:EXT:rtehtmlarea/res/contentcss/locallang.xml:action-items
		value = color: #8A0020;
	}
	component-items-ordered {
		name = LLL:EXT:rtehtmlarea/res/contentcss/locallang.xml:component-items
		value = color: #186900;
	}
	action-items-ordered {
		name = LLL:EXT:rtehtmlarea/res/contentcss/locallang.xml:action-items
		value = color: #8A0020;
	}
  */
}

	## Anchor classes configuration for use by the anchor accesibility feature
RTE.classesAnchor {
	externalLink {
		class = external-link
		type = url
		titleText = 
	}
	externalLinkInNewWindow {
		class = external-link-new-window
		type = url
		titleText = 
	}
	externalDialog {
		class = external-dialog
		type = url
		titleText = 
	}
	internalLink {
		class = internal-link
		type = page
		titleText = 
	}
	internalLinkInNewWindow {
		class = internal-link-new-window
		type = page
		titleText = 
	}
	internalDialog {
		class = internal-dialog
		type = page
		titleText = 
	}
	internalJob {
		class = internal-job
		type = page
		titleText = 
	}
	download {
		class = download
		type = file
		titleText = 
	}
	mail {
		class = mail
		type = mail
		titleText = 
	}
}

	## Default RTE configuration
RTE.default {
  #contentCSS = fileadmin/templates/css/rte/default.css
  
		## Markup options
	enableWordClean = 1
	removeTrailingBR = 1
	removeComments = 1
	removeTags = center, font, o:p, sdfield, strike, u
	removeTagsAndContents = link, meta, script, style, title

		## Toolbar options
		## The TCA configuration may add buttons to the toolbar
	showButtons (
		blockstylelabel, blockstyle, textstylelabel, textstyle,
		formatblock, bold, italic, subscript, superscript,
		orderedlist, unorderedlist, outdent, indent, textindicator,
		insertcharacter, link, table, findreplace, chMode, removeformat, undo, redo, about,
		toggleborders, tableproperties,
		rowproperties, rowinsertabove, rowinsertunder, rowdelete, rowsplit,
		columninsertbefore, columninsertafter, columndelete, columnsplit,
		cellproperties, cellinsertbefore, cellinsertafter, celldelete, cellsplit, cellmerge
	)

		## More toolbar options
	keepButtonGroupTogether = 1

		## Enable status bar
	showStatusBar =  1

		## Hide infrequently used block types in the block formatting selector
	buttons.formatblock.removeItems = pre,address

		## Property ignoreMainStyleOverride is DEPRECATED as of TYPO3 4.6 and will be removed in TYPO3 6.0
		## Use stylesheet file rather than mainStyleOverride and inlineStyle properties to style the contents.
		## When RTE.default.contentCSS is not specified, file EXT:rtehtmlarea/res/contentcsss/default.css is used.
	ignoreMainStyleOverride = 1

		## List all class selectors that are allowed on the way to the database
	proc.allowedClasses (
		external-link, external-link-new-window, external-dialog, internal-link, internal-link-new-window, internal-dialog, internal-job, download, mail,
		align-left, align-center, align-right, align-justify,
		csc-frame-frame1, csc-frame-frame2,
		component-items, action-items,
		component-items-ordered, action-items-ordered,
		important, name-of-person, detail,
		indent
	)

		## Restrict the list of class selectors presented by the RTE to the following for the specified tags:
	buttons.blockstyle.tags.div.allowedClasses (
		align-left, align-center, align-right,
		csc-frame-frame1, csc-frame-frame2
	)
	buttons.blockstyle.tags.table.allowedClasses = csc-frame-frame1, csc-frame-frame2
	buttons.blockstyle.tags.td.allowedClasses = align-left, align-center, align-right
	buttons.textstyle.tags.span.allowedClasses = important, name-of-person, detail

		## Configuration of links
		## These classes should also be in the list proc.allowedClasses
	buttons.link.properties.class.allowedClasses = external-link, external-link-new-window, external-dialog, internal-link, internal-link-new-window, internal-dialog, internal-job, download, mail
	buttons.link.page.properties.class.default = internal-link
	buttons.link.url.properties.class.default = external-link-new-window
	buttons.link.file.properties.class.default = download
	buttons.link.mail.properties.class.default = mail
  
  ## internal links with url parameters                                              
  #buttons.link.queryParametersSelector.enabled = 1

		## Configuration specific to the TableOperations feature
		## Remove the following fieldsets from the table operations dialogs
	disableAlignmentFieldsetInTableOperations = 1
	disableSpacingFieldsetInTableOperations = 1
	disableColorFieldsetInTableOperations = 1
	disableLayoutFieldsetInTableOperations = 1
	disableBordersFieldsetInTableOperations = 1
		## Show borders on table creation
	buttons.toggleborders.setOnTableCreation = 1

		## Configuration specific to the bold and italic buttons
		## Add hotkeys associated with bold and italic buttons
	buttons.bold.hotKey = b
	buttons.italic.hotKey = i

		## Configuration of microdata schema
	schema {
		sources {
			schemaOrg = EXT:rtehtmlarea/extensions/MicrodataSchema/res/schemaOrgAll.rdf
		}
	}
}

	## front end RTE configuration for the general public
RTE.default.FE < RTE.default
RTE.default.FE.showStatusBar = 0
RTE.default.FE.hideButtons = chMode, blockstyle, textstyle, underline, strikethrough, subscript, superscript, lefttoright, righttoleft, left, center, right, justifyfull, table, inserttag, findreplace, removeformat, copy, cut, paste
RTE.default.FE.FE >
RTE.default.FE.userElements >
RTE.default.FE.userLinks >
#----------------------------------------------------------- PAGE-TSCONFIG-ROOTPAGE-END