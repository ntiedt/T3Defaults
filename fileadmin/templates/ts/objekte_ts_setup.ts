###
### Objekte ###
tmp.obj_logo = IMAGE
tmp.obj_logo {
  file = {$basis.logopfad}
  stdWrap.typolink.parameter = {$basis.rootpageID}
  file.import = uploads/tx_templavoila/
  file.import.listNum = 0
}

tmp.obj_copyright = COA
tmp.obj_copyright{
  10 = TEXT
  10.data = date:U
  10.strftime =%Y
  10.wrap= ©&nbsp;|&nbsp;
  20 < temp.pageTitle
}


[globalVar = LIT:1 = {$basis.ts_objekte}]
lib.obj_logo < tmp.obj_logo
lib.obj_copyright < tmp.obj_copyright
[global]