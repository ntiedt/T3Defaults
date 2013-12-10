###
### Objekte ###

#----------------------------------------------------------- OBJ_LOGO-BEGIN
tmp.obj_logo = IMAGE
tmp.obj_logo {
  file = {$t3d_pfade.tmpls}image/{$t3d_basis.obj_logo}
  stdWrap.typolink.parameter = {$t3d_basis.rootpageID}
  file.import = uploads/tx_templavoila/
  file.import.listNum = 0
}
#----------------------------------------------------------- OBJ_LOGO-END

#----------------------------------------------------------- OBJ_CLAIM-BEGIN
tmp.obj_claim = COA
tmp.obj_claim{
  10=RECORDS
  10{
    source={$t3d_seitentitel.basisTemplateId}
    tables = sys_template
    conf.sys_template >
    conf.sys_template = TEXT
    conf.sys_template.field=description
  }
}
#----------------------------------------------------------- OBJ_CLAIM-END

#----------------------------------------------------------- OBJ_SEARCH-BEGIN
tmp.obj_search = COA
tmp.obj_search{
  10 < plugin.tx_indexedsearch
  10{
    templateFile = {$t3d_pfade.tmpls}html/ext_indexed_search_mini.html
    search.targetPid = {$t3d_basis.searchpageID}
  }
}
#----------------------------------------------------------- OBJ_SEARCH-END

#----------------------------------------------------------- OBJ_COPYRIGHT-BEGIN
tmp.obj_copyright = COA
tmp.obj_copyright{
  10 = TEXT
  10.data = date:U
  10.strftime =%Y
  10.wrap= ©&nbsp;|&nbsp;
  20 < temp.pageTitle
}
#----------------------------------------------------------- OBJ_COPYRIGHT-END

#----------------------------------------------------------- OBJ_ADDRESS-BEGIN
tmp.obj_address = COA
tmp.obj_address{
  10 = CONTENT
  10{
    table = tt_content
    select{
      pidInList = {$t3d_basis.adresspageID}
    }
  }
}
#----------------------------------------------------------- OBJ_ADDRESS-END

#----------------------------------------------------------- OBJS-BEGIN
tmp.objs = COA
tmp.objs{
}
#----------------------------------------------------------- OBJS-END

#----------------------------------------------------------- OBJ-INCLUDES-BEGIN
[globalVar = LIT:1 = {$t3d_basis.t3d_objekte}]
lib.obj_logo < tmp.obj_logo
lib.obj_claim < tmp.obj_claim
lib.obj_search < tmp.obj_search
lib.obj_copyright < tmp.obj_copyright
lib.obj_address < tmp.obj_address
lib.objs < tmp.objs
[global]
#----------------------------------------------------------- OBJ-INCLUDES-END