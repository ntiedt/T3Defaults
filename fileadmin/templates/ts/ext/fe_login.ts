plugin.tx_felogin_pi1 {
  storagePid = {$t3d_exts.felogin_folderID}
  templateFile = {$t3d_pfade.tmpls}/html/felogin.html
  
  showForgotPasswordLink = {$t3d_exts.felogin_showForgotPasswordLink}
  showPermaLogin = {$t3d_exts.felogin_showPermaLogin}
  
  #welcomeMessage_stdWrap = <span>|</span>
  
  #redirectMode = groupLogin,userLogin,login,logout,loginError
  #redirectFirstMethod = 1
  #redirectPageLogin = 12
  #redirectPageLoginError = 13
  #redirectPageLogout = 8
  
  _LOCAL_LANG{
    de {
      username = Benutzer:
    }
  }
}