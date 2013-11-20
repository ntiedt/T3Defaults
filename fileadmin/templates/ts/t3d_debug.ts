###
### Debug ###
[globalVar = GP:debug = 1]
page.55 = COA
page.55{
  wrap = <div id="toolbar" class="ui-widget-header ui-corner-all">|</div>
  /*
  20 = TEXT
  20{
    wrap = <input type="checkbox" id="output" /><label for="output" id="bt_output">|</label>
    lang.en = Debug output
    lang.de = Debug-Ausgabe
  }
  */
  30 = TEXT
  30{
    wrap = <button id="print">|</button>
    lang.en = Print
    lang.de = Drucken
  }
  35 = TEXT
  35{
    wrap = <input type="checkbox" id="showgrid" /><label for="showgrid" id="bt_showgrid">|</label>
    lang.en = Show grid
    lang.de = Zeige Grid
    if.isPositive = {$t3d_grid.enable}
  }
  /*
  40 = TEXT
  40{
    wrap = <button id="colorpicker">|</button>
    lang.en = Colorpicker
    lang.de = Colorpicker
  }
  50 = TEXT
  50{
    wrap = <button id="measure">|</button>
    lang.en = Measure
    lang.de = Messen
  }
  */
  80 = COA
  80{
    #wrap = <span id="mdebug_buttonset">|</span>
    10 = TEXT
    10{
      wrap = <input type="checkbox" id="mdebug" /><label for="mdebug" id="bt_mdebug">|</label>
      lang.en = Debug element
      lang.de = Element debuggen
    }
    /*
    20 = TEXT
    20{
      wrap = <input type="checkbox" id="mdebug_overwrite" /><label for="mdebug_overwrite">|</label>
      lang.en = Overwrite
      lang.de = &Uuml;berschreiben
    }
    */
  }
  100 = COA
  100{
    wrap = <div id="help">|</div>
    10 = TEXT
    10{
      wrap = <div><button id="select">|</button></div>
      lang.en = Help
      lang.de = Hilfe
    }
    20 = COA
    20{
      wrap = <ul>|</ul>
      10 = TEXT
      10{
        wrap = <li>|</li>
        lang.en = Mail to agency
        lang.de = Nachricht an Agentur
        typolink.parameter = webmaster@folge4.de
        typolink.parameter.postCObject = COA
        typolink.parameter.postCObject {
          10 = TEXT
          10{
            lang.en = Question
            lang.de = Frage
            wrap3 = ?subject=|
          }
          20 = COA
          20{
            wrap =&body=|
            10 = TEXT
            10{
              dataWrap = |%0A%0A
              lang.en = Dear agency.
              lang.de = Sehr geehrte Agentur.
              rawUrlEncode = 1
            }
            20 = TEXT
            20{
              dataWrap = |%0A
              lang.en = Question
              lang.de = Frage
              rawUrlEncode = 1
            }
            30 = TEXT
            30{
              dataWrap = |%0A
              value = %20
            }
            40 = TEXT
            40{
              wrap = |
              lang.en = Kind regards
              lang.de = Mit freundlichen Grüßen
              rawUrlEncode = 1
            }
          }
        }
      }
      20 = TEXT
      20{
        wrap = <li class="debug_msg">|</li>
        lang.en = Send debug mail to webmaster
        lang.de = Debug-Nachricht an Webmaster senden
        typolink.parameter = webmaster@folge4.de
        typolink.parameter.postCObject = COA
        typolink.parameter.postCObject {
          10 = TEXT
          10{
            value = Debug
            wrap3 = ?subject=|
          }
          20 = COA
          20{
            wrap =&body=|
            10 = TEXT
            10{
              dataWrap = |%0A%0A
              lang.en = Dear webmaster.
              lang.de = Sehr geehrter Webmaster.
              rawUrlEncode = 1
            }
            20 = TEXT
            20{
              dataWrap = |%0A
              lang.en = The following error occured
              lang.de = Der folgende Fehler ist aufgetreten
              rawUrlEncode = 1
            }
            30 = TEXT
            30{
              dataWrap = |%0A%0A
              value = %20
            }
            40 = TEXT
            40{
              wrap = |
              lang.en = Kind regards
              lang.de = Mit freundlichen Grüßen
              rawUrlEncode = 1
            }
            100 = TEXT
            100{
              wrap = %0A|
              value = ----------------
              rawUrlEncode = 1
            }
            110 = TEXT
            110{
              dataWrap = %0ADebug%0A|%20{page:title}
              lang.en = Pagetitle
              lang.de = Seitentitle
            }
            120 = TEXT
            120{
              dataWrap = %0A|%20{page:uid}
              value = ID
            }
            130 = TEXT
            130{
              dataWrap = %0A|%20{GP:L}
              lang.en = Language
              lang.de = Sprache
            }
            140 = TEXT
            140{
              value =aaaa
            }
          }
        }
      }
      100 = TEXT
      100{
        wrap = <li>|</li>
        value = -
      }
      110 = TEXT
      110{
        wrap = <li>|</li>
        value = Homepage folge4 agentur
        typolink.parameter = http://www.folge4.de/ _blank
      }
    }
  }
  200 = COA
  200{
    10 = TEXT
    10{
      wrap = <div id="dialog_mdebug">|</div>
      lang.en = Select an element!
      lang.de = W&auml;hlen Sie ein Element aus!
    }
  }
}
[global]


[globalVar = GP:debug = 1] && [globalVar = TSFE : beUserLogin > 0]
page.55{
  100.20{
    120 = TEXT
    120{
      wrap = <li>|</li>
      value = TYPO3 TSref 4.7
      typolink.parameter = http://typo3.org/documentation/document-library/core-documentation/doc_core_tsref/4.7.0/view _blank
    }
    130 = TEXT
    130{
      wrap = <li>|</li>
      value = TYPO3 Extension repository
      typolink.parameter = http://typo3.org/extensions/repository/ _blank
    }
    140 = TEXT
    140{
      wrap = <li>|</li>
      value = jQuery
      typolink.parameter = http://jquery.com/ _blank
    }
  }
}
[global]