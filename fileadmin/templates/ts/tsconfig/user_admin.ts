# Include following tag without # in the user TSconfig section of your admin user
#<INCLUDE_TYPOSCRIPT:source="file:fileadmin/templates/ts/tsconfig/user_admin.ts">

# Schaltet das cachen von externen TS-Dateien aus
admPanel.override.tsdebug.forceTemplateParsing = 1

# Zeigt im Seitenbaum vor dem Seitennamen die ID der Seite
options { 
  pageTree.showPageIdWithTitle = 1
}