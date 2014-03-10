<?
/* Get-Parameter aus der URL
require_once(PATH_tslib.'class.tslib_pibase.php'); */

class user_testMd5 {

  var $cObj;// The backReference to the mother cObj object set at call time
  
  /**
  
  * Call it from a USER cObject with 'userFunc = user_randomImage->main_randomImage'
  
  */
  
  function main($content,$conf){
  
    $content.='<span style="color:'.$conf["color"].'">'.$conf["value"].' as md5 '.md5($conf["value"]).'</span>';
    
    return $content;
  
  }

}

?> 