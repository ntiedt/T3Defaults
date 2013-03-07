###
### Funktionen ###
[globalVar = LIT:1 = {$basis.ts_funktionen}]

includeLibs.testMd5 = fileadmin/templates/ts/userfunc_funktionen.php
temp.info = USER
temp.info {
  userFunc =user_testMd5->main
  value=atest
  color=#11FAAA
}

/* Get-Parameter aus der URL
$get_vars = t3lib_div::_GET();
*/

page.XX < temp.info

[global]