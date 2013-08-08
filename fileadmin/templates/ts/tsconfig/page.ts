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
}

### tt_content Layout
TCEFORM.tt_content {
  header_layout.altLabels.0 = Standard
  header_layout.altLabels.1 = Layout 1
  header_layout.altLabels.2 = Layout 2
  header_layout.altLabels.3 = Layout 3
  header_layout.altLabels.4 = Layout 4
  header_layout.altLabels.5 = Layout 5
  header_layout.altLabels.100 = Verborgen
  #header_layout.addItems.7 = Bereichsheadline (H1)
  
  layout.altLabels.0 = Standard
  layout.altLabels.1 = Layout 1
  layout.altLabels.2 = Layout 2
  layout.altLabels.3 = Layout 3
  layout.removeItems = 1,2,3
  
  section_frame.altLabels.0 = Standardframe
  section_frame.altLabels.1 = Unsichtbar
  section_frame.altLabels.5 = Linie davor
  section_frame.altLabels.6 = Linie danach
  section_frame.altLabels.10 = Einrücken
  section_frame.altLabels.11 = Einrücken, 33/66%
  section_frame.altLabels.12 = Einrücken, 66/33%
  section_frame.altLabels.20 = Rahmen 1
  section_frame.altLabels.21 = Rahmen 2
  section_frame.altLabels.66 = Kein Frame
  #section_frame.addItems.22=3 Name de Rahmens
  section_frame.removeItems = 1,5,6,10,11,12,20,21,66
}

### language default flag
mod.SHARED {
defaultLanguageFlag = gb
defaultLanguageLabel = English
}

### RTE
RTE {
  ## Anchor classes configuration for use by the anchor accesibility feature
  classesAnchor {
    externalLink {
      altText =
      titleText =
    }
    externalLinkInNewWindow {
      altText =
      titleText =
    }
    externalOverlay {
      class = external-overlay
      type = url
      altText =
      titleText =
      target = overlay
    }
    internalLink {
      altText =
      titleText =
    }
    internalLinkInNewWindow {
      altText =
      titleText =
    }
    internalOverlay {
      class = internal-overlay
      type = page
      altText =
      titleText =
      target = overlay
    }
    download {
      altText =
      titleText =
    }
    mail {
      altText =
      titleText =
    }
  }
  default{
  	## List all class selectors that are allowed on the way to the database
  	proc.allowedClasses (
  		external-link, external-link-new-window, external-overlay, internal-link, internal-link-new-window, internal-overlay, download, mail,
  		align-left, align-center, align-right, align-justify,
  		csc-frame-frame1, csc-frame-frame2,
  		component-items, action-items,
  		component-items-ordered, action-items-ordered,
  		important, name-of-person, detail,
  		indent
  	)
		## Configuration of links
		## These classes should also be in the list proc.allowedClasses
  	buttons.link.properties.class.allowedClasses = external-link, external-link-new-window, external-overlay, internal-link, internal-link-new-window, internal-overlay, download, mail
  }
}
#----------------------------------------------------------- PAGE-TSCONFIG-ROOTPAGE-END