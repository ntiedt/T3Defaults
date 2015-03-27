###
### Functions ###

#----------------------------------------------------------- USERFUNC-DEMO-BEGIN
[globalVar = LIT:1 = {$t3d_basis.t3d_functions}]
    includeLibs.testMd5 = {$t3d_pfade.tmpls}php/userfunc_function.php
    temp.info = USER
    temp.info {
        userFunc = user_testMd5->main
        value = atest
        color = #11FAAA
    }

    /* Get-Parameter aus der URL
    $get_vars = t3lib_div::_GET();
    */

    page.XX < temp.info
[global]

#----------------------------------------------------------- USERFUNC-DEMO-END


#----------------------------------------------------------- GRID-BEGIN
[globalVar = LIT:1 = {$t3d_grid.enable}]
    includeLibs.grid = {$t3d_pfade.tmpls}php/grid.php

    temp.grid = COA
    temp.grid {
        10 = USER
        10 {
            userFunc = user_grid->main

            max_width = {$t3d_grid.max_width}
            max_cols = {$t3d_grid.max_cols}
            col_width = {$t3d_grid.col_width}
            unity = {$t3d_grid.unity}
        }

        20 = COA
        20 {
            #wrap = <table style="background: white; color: black;"><tr><td>|</td></tr></table>

            10 = TEXT
            10.value (
/* Begin grid */
/* 
  12 COLUMN - RESPONSIVE GRID SYSTEM
  DEVELOPED BY DENIS LEBLANC
  URL - http://responsive.gs
  VERSION - 2.0
  LICENSED UNDER GPL & MIT
  
  SET ALL ELEMENTS BOX-SIZING TO BORDER-BOX
  If you need support for IE7 and lower use polyfill: https://github.com/Schepp/box-sizing-polyfill
*/
/*
Conf:
max_width={$t3d_grid.max_width}
max_cols={$t3d_grid.max_cols}
col_width={$t3d_grid.col_width}
col_margin={$t3d_grid.col_margin}
unity={$t3d_grid.unity}
*/
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box; }

/* MAIN CONTAINER */
.container{
  max-width: {$t3d_grid.max_width}px;
  margin: 0 auto;
}

/* SELF CLEARING FLOATS - CLEARFIX METHOD */
.row:after, .col:after, .clr:after, .group:after {
  content: ""; 
  display: block; 
  height: 0; 
  clear: both; 
  visibility: hidden;
}

/* DEFAULT ROW STYLES */
.row { margin-bottom: 0; } /* set according to preference*/
								  
/* DEFAULT COLUMN STYLES */
.col {
  display: block;
  float:left;
  width: 100%;
}

/* RESET MARGINS */
.col:first-child{ margin-left: 0; } /* all browsers except IE6 and lower */

/* COLUMN WIDTH ON DISPLAYS +768px */
            )

            50 = COA
            50 {
                wrap = @media ( min-width : 768px ) {|}
                10 = COA
                10 {
                    5 = TEXT
                    5.value (
        
                    )
                    10 = TEXT
                    10 {
                        noTrimWrap = |  .col {margin-left: |%;}|
                        data = register:grid_col_margin
                    }

                    55 = TEXT
                    55.value (
          #layer_grid .col{margin-left: 0;}
        
                    )
                }

                20 = COA
                20 {
                    5 = TEXT
                    5.value (
        
                    )
                    10 = TEXT
                    10 {
                        noTrimWrap = |  .spacer {width: |%;}|
                        data = register:grid_col_margin
                    }

                    55 = TEXT
                    55.value (
        
                    )
                }

                30 = COA
                30 {
                    5 = TEXT
                    5.value (
        
                    )
                    10 = TEXT
                    10 {
                        wrap = |
                        data = register:grid_cols
                        split {
                            token = ;
                            cObjNum = 1
                            1.current = 1
                            1.split {
                                token = ,
                                cObjNum = 1 || 2
                                1.current = 1
                                1.noTrimWrap = |  .||
                                2 {
                                    10 = TEXT
                                    10.current = 1
                                    10.wrap = {width:|%;}
                                    15 = TEXT
                                    15.value (
                
                                    )
                                }
                            }
                        }
                    }

                    55 = TEXT
                    55.value (
        
                    )
                }
            }

            90 = TEXT
            90.value (
    
/* End grid */
            )
        }

        /*
        30 = COA
        30{
        wrap = <table style="background: white; color: black;">|</table>
        5 = TEXT
        5{
        wrap = <tr><td colspan="2">|</td></tr>
        value = ::DEBUG-HTML::
        }

        10 = TEXT
        10{
        wrap = <tr><td style="padding-right: 1em;">grid_max_width: </td><td>|</td></tr>
        data = register:grid_max_width
        }

        20 = TEXT
        20{
        wrap = <tr><td style="padding-right: 1em;">grid_max_cols: </td><td>|</td></tr>
        data = register:grid_max_cols
        }

        30 = TEXT
        30{
        wrap = <tr><td style="padding-right: 1em;">grid_unity: </td><td>|</td></tr>
        data = register:grid_unity
        }

        40 = TEXT
        40{
        wrap = <tr><td style="padding-right: 1em;">grid_col_width: </td><td>|</td></tr>
        data = register:grid_col_width
        }

        50 = TEXT
        50{
        wrap = <tr><td style="padding-right: 1em;">grid_col_margin: </td><td>|</td></tr>
        data = register:grid_col_margin
        }

        60 = TEXT
        60{
        wrap = <tr><td style="padding-right: 1em;">grid_cols: </td><td>|</td></tr>
        data = register:grid_cols
        }

        70 = TEXT
        70{
        wrap = <tr><td style="padding-right: 1em;vertical-align: top;">grid_cols split: </td><td><table>|</table></td></tr>
        data = register:grid_cols
        split{
        token = ;
        cObjNum = 1
        1.wrap = <tr>|</tr>
        1.current = 1
        1.split{
        token = ,
        cObjNum = 1
        1.wrap = <td style="padding-right: 1em;">|</td>
        1.current = 1
        }
        }
        }
        }
        */
    }
[global]

#----------------------------------------------------------- GRID-END