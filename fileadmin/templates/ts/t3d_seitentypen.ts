###
### Seitentypen ###

#----------------------------------------------------------- SEITENTYPEN-BEGIN
#-Load content from table(specified in constants. default:tt_content) of current page, specified in constants or from page of the post var getid
[globalVar = LIT:1 = {$t3d_basis.ts_seitentypen}]
seitentypen_b = PAGE
seitentypen_b{
  typeNum = {$t3d_seitentypen.b.typenum}
  config{
    disableAllHeaderCode = 1
    xhtml_cleaning = 0
    admPanel = 0
    debug = {$t3d_seitentypen.b.debug}
    no_cache = {$t3d_seitentypen.b.no_cache}
  }
  10 = CONTENT
  10{
  	table = {$t3d_seitentypen.b.cobj_tables}
    select{
      pidInList = {$t3d_seitentypen.b.cobj_tables_ids}
      # Von Post Objekt getid laden
      pidInList.override.data = GP:getid    
    }
  }
}
[global]

#-Load content from table(specified in constants. default:tt_content) with pid of the post var(specified in constants)
[globalVar = LIT:1 = {$t3d_seitentypen.b.cobj_tables_ids_data}]
seitentypen_b{
  10{
    select{
      pidInList >
      pidInList.data = GP:{$t3d_seitentypen.b.cobj_tables_ids_data_gp}
    }
  }
}
[global]

#-Load records from table(specified in constants) and id(specified in constants)
[globalVar = LIT:1 = {$t3d_seitentypen.b.cobj_type}]
seitentypen_b{
  10 >
  10 = RECORDS
  10{
  	tables = {$t3d_seitentypen.b.cobj_tables}
    source = {$t3d_seitentypen.b.cobj_tables_ids}
  }
}
[global]

#Records von Post Objekt laden
#-Load records from table(specified in constants) and post var(specified in constants)
[globalVar = LIT:1 = {$t3d_seitentypen.b.cobj_type}] && [globalVar = LIT:1 = {$t3d_seitentypen.b.cobj_tables_ids_data}]
seitentypen_b{
  10{
    source >
    source.data = GP:{$t3d_seitentypen.b.cobj_tables_ids_data_gp}
  }
}
[global]
#----------------------------------------------------------- SEITENTYPEN-END
