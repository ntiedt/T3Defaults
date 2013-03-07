# Thumb mit Bildern
seitentypen_a = PAGE
seitentypen_a{
  typeNum = {$seitentypen.b_typenum}
  config{
    disableAllHeaderCode = 1
    xhtml_cleaning = 0
    admPanel = 0
    debug = {$seitentypen.b_debug}
    no_cache = {$seitentypen.b_no_cache}
  }
  10 = CONTENT
  10{
  	table = {$seitentypen.b_cobj_tables}
    select{
      pidInList = {$seitentypen.b_cobj_tables_ids}
    }
  }
}
[globalVar = LIT:1 = {$seitentypen.b_cobj_tables_ids_data}]
seitentypen_a{
  10{
    select{
      pidInList >
      pidInList.data = GP:{$seitentypen.b_cobj_tables_ids_data_gp}
    }
  }
}
[global]

[globalVar = LIT:1 = {$seitentypen.b_cobj_type}]
seitentypen_a{
  10 >
  10 = RECORDS
  10{
  	tables = {$seitentypen.b_cobj_tables}
    source = {$seitentypen.b_cobj_tables_ids}
  }
}
[global]

[globalVar = LIT:1 = {$seitentypen.b_cobj_type}] && [globalVar = LIT:1 = {$seitentypen.b_cobj_tables_ids_data}]
seitentypen_a{
  10{
    source >
    source.data = GP:{$seitentypen.b_cobj_tables_ids_data_gp}
  }
}
[global]
