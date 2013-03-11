# Seitentypen
[globalVar = LIT:1 = {$t3d_basis.ts_seitentypen}]
seitentypen_a = PAGE
seitentypen_a{
  typeNum = {$t3d_seitentypen.b_typenum}
  config{
    disableAllHeaderCode = 1
    xhtml_cleaning = 0
    admPanel = 0
    debug = {$t3d_seitentypen.b_debug}
    no_cache = {$t3d_seitentypen.b_no_cache}
  }
  10 = CONTENT
  10{
  	table = {$t3d_seitentypen.b_cobj_tables}
    select{
      pidInList = {$t3d_seitentypen.b_cobj_tables_ids}
    }
  }
}
[global]

[globalVar = LIT:1 = {$t3d_seitentypen.b_cobj_tables_ids_data}]
seitentypen_a{
  10{
    select{
      pidInList >
      pidInList.data = GP:{$t3d_seitentypen.b_cobj_tables_ids_data_gp}
    }
  }
}
[global]

[globalVar = LIT:1 = {$t3d_seitentypen.b_cobj_type}]
seitentypen_a{
  10 >
  10 = RECORDS
  10{
  	tables = {$t3d_seitentypen.b_cobj_tables}
    source = {$t3d_seitentypen.b_cobj_tables_ids}
  }
}
[global]

[globalVar = LIT:1 = {$t3d_seitentypen.b_cobj_type}] && [globalVar = LIT:1 = {$t3d_seitentypen.b_cobj_tables_ids_data}]
seitentypen_a{
  10{
    source >
    source.data = GP:{$t3d_seitentypen.b_cobj_tables_ids_data_gp}
  }
}
[global]
