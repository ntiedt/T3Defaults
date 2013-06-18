<?
/* Get-Parameter aus der URL
require_once(PATH_tslib.'class.tslib_pibase.php'); */

class user_grid {

  var $cObj;// The backReference to the mother cObj object set at call time
  
  /**
  
  * Call it from a USER cObject with 'userFunc = user_randomImage->main_randomImage'
  
  */
  
  function main($content,$conf){
    // If conf not set byebye
    if((!$conf["max_width"]) || (!$conf["col_width"]) || (!$conf["max_cols"]) || (!$conf["unity"])){
      return;
    }
    
    // Debug Wrapper
    $debug = '<tr><td colspan="2">::DEBUG-PHP::</td></tr>';
    
    // Calc col margin
    $conf["col_margin"] = ( $conf["max_width"] - ( $conf["col_width"] * $conf["max_cols"] ) ) / ( $conf["max_cols"] - 1 );
    
    // Build array $Register
    $Register = array (
      "grid_max_width"      => $conf["max_width"],
      "grid_max_cols"       => $conf["max_cols"],
      "grid_col_width"      => $conf["col_width"],
      "grid_col_margin"     => $conf["col_margin"],
      "grid_unity"          => $conf["unity"]
    );
    $debug .= '<tr><td style="padding-right: 1em;">Register grid_max_width: </td><td>'.$conf["max_width"].'</td></tr>';
    $debug .= '<tr><td style="padding-right: 1em;">Register grid_max_cols: </td><td>'.$Register["grid_max_cols"].'</td></tr>';
    $debug .= '<tr><td style="padding-right: 1em;">Register grid_col_width: </td><td>'.$Register["grid_col_width"].'</td></tr>';
    $debug .= '<tr><td style="padding-right: 1em;">Register grid_col_margin: </td><td>'.$Register["grid_col_margin"].'</td></tr>';
    $debug .= '<tr><td style="padding-right: 1em;">Register grid_cols: </td><td>'.$Register["grid_cols"].'</td></tr>';
    
    // If unity is percentage recalc col width and margin of 1 item
    if($conf["unity"]=='%'){
      $Register["grid_col_width"] = $conf["col_width"] / $conf["max_width"] * 100;
      $Register["grid_col_margin"] = $conf["col_margin"] / $conf["max_width"] * 100;
    }
           
    // Build comma/semicolon separated list
    for($i=1; $i<=$conf["max_cols"]; $i++){
      // Col 1 (no margin)
      if($i==1){
        $Register["grid_cols"] = ("span_" . $i) . "," . ($Register["grid_col_width"] * $i) . ";";
        $debug .= '<tr><td style="padding-right: 1em;">ohne: </td><td>'.$i.'</td></tr>';
        
      // Col 2 to max cols (with margin)
      }else if(($i>1) && ($i<$Register["grid_max_cols"])){
        $Register["grid_cols"] .= ("span_" . $i) . "," . ($Register["grid_col_width"] * $i + ( $Register["grid_col_margin"] * ($i-1) )) . ";";
        $debug .= '<tr><td style="padding-right: 1em;">mit: </td><td>'.$i.'</td></tr>';
      
      // Last col (100%)
      }else if($i==$Register["grid_max_cols"]){
        $Register["grid_cols"] .= ("span_" . $i) . ",100;";
        $debug .= '<tr><td style="padding-right: 1em;">last: </td><td>'.$i.'</td></tr>';
      }
      $debug .= '<tr><td style="padding-right: 1em;">'.$Register["grid_cols"].': </td><td>'.$i.'</td></tr>';
    }
    
    // Register
    $this->l_cObj = t3lib_div::makeInstance('tslib_cObj');
    $this->l_cObj->LOAD_REGISTER($Register,''); 
    
    // Output
    if($conf["debug"]==1){
      $content = '<table style="background: white; color: black;">'.$debug.'</table>';
    }
    return $content;
  
  }

}

?> 