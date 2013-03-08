###
### Objekte ###
tmp.obj_logo = IMAGE
tmp.obj_logo {
  file = {$t3d_pfade.tmpls}/image/{$t3d_basis.obj_logo}
  stdWrap.typolink.parameter = {$t3d_basis.rootpageID}
  file.import = uploads/tx_templavoila/
  file.import.listNum = 0
}

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

tmp.obj_search = COA
tmp.obj_search{
  10 < plugin.tx_indexedsearch
  10{
    templateFile = fileadmin/templates/html/ext_indexed_search_mini.html
  }
}

tmp.obj_copyright = COA
tmp.obj_copyright{
  10 = TEXT
  10.data = date:U
  10.strftime =%Y
  10.wrap= ©&nbsp;|&nbsp;
  20 < temp.pageTitle
}

tmp.obj_address = COA
tmp.obj_address{
  10 = CONTENT
  10{
    table = tt_content
    select{
      pidInList = 116
    }
  }
}

tmp.objs = COA
tmp.objs{
}


[globalVar = LIT:1 = {$t3d_basis.ts_objekte}]
lib.obj_logo < tmp.obj_logo
lib.obj_claim < tmp.obj_claim
lib.obj_search < tmp.obj_search
lib.obj_copyright < tmp.obj_copyright
lib.obj_address < tmp.obj_address
lib.objs < tmp.objs
[global]