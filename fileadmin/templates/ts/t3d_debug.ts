###
### Debug ###

#----------------------------------------------------------- DEBUG-BEGIN
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

        40 = TEXT
        40{
            wrap = <input type="checkbox" id="debugwidth" /><label for="debugwidth" id="bt_debugwidth">|</label>
            lang.en = Window size
            lang.de = Fenstergröße
        }
        # 35 - grid

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
                    typolink.parameter = info@gedankenfolger.de
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
                                lang.en = REPLACE THIS TEXT WITH YOUR QUESTION
                                lang.de = ERSETZEN SIE DIESEN TEXT DURCH IHRE FRAGE.
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
                            50 = TEXT
                            50{
                                dataWrap = |%0A
                                value = %20
                            }
                            60 = TEXT
                            60{
                                wrap = |
                                lang.en = YOUR NAME
                                lang.de = IHR NAME
                                rawUrlEncode = 1
                            }
                        }
                    }
                }
                20 = TEXT
                20{
                    wrap = <li class="debug_msg">|</li>
                    lang.en = Debug mail to webmaster
                    lang.de = Debug-Nachricht an Webmaster
                    typolink.parameter = debug@gedankenfolger.de
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
                                lang.en = The following error occured.
                                lang.de = Der folgende Fehler ist aufgetreten.
                                rawUrlEncode = 1
                            }
                            25 = TEXT
                            25{
                                dataWrap = %0A|
                                lang.en = REPLACE THIS TEXT WITH YOUR PROBLEM.
                                lang.de = ERSETZEN SIE DIESEN TEXT DURCH IHR PROBLEM.
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
                            50 = TEXT
                            50{
                                dataWrap = |%0A
                                value = %20
                            }
                            60 = TEXT
                            60{
                                wrap = |
                                lang.en = YOUR NAME
                                lang.de = IHR NAME
                                rawUrlEncode = 1
                            }
                            100 = TEXT
                            100{
                                wrap = %0A%0A|
                                value = ----------------
                                rawUrlEncode = 1
                            }
                            105 = COA
                            105{
                                wrap = %0ADebug%0A|
                                10 = TEXT
                                10{
                                    wrap = |%20
                                    value = Domain
                                }
                                20 = TEXT
                                20{
                                    value = {$t3d_config.baseURL}
                                    rawUrlEncode = 1
                                }
                            }
                            110 = COA
                            110{
                                wrap = %0A|%20
                                10 = TEXT
                                10{
                                    wrap = |%20
                                    lang.en = Pagetitle
                                    lang.de = Seitentitle
                                }
                                20 = TEXT
                                20{
                                    data = page:title
                                    rawUrlEncode = 1
                                }
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
                                data ={GP:L}
                                ifEmpty.lang.en = Single%20language
                                ifEmpty.lang.de = Einzelsprache
                            }
                            150 = TEXT
                            150{
                                wrap =%0A|%20XXX
                                ifEmpty.lang.en = Window%20width
                                ifEmpty.lang.de = Fensterbreite
                            }
                            160 = TEXT
                            160{
                                wrap =%0A|%20YYY
                                ifEmpty.lang.en = Window%20height
                                ifEmpty.lang.de = Fensterhoehe
                            }
                            170 = TEXT
                            170{
                                wrap =%0A|%20TOUCH
                                ifEmpty.lang.en = Touch
                                ifEmpty.lang.de = Touch
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
                    value = Homepage gedankenfolger
                    typolink.parameter = http://www.gedankenfolger.de/ _blank
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
            10 = COA
            10{
                wrap = |</div>
                10 = TEXT
                10{
                    wrap = <div id="dialog_dimensions" title="|">
                    lang.en = Window size
                    lang.de = Fenstergröße
                }
                20 = COA
                20{
                    wrap = <table>|</table><br />
                    10 = COA
                    10{
                        wrap = <tr>|</tr><tr><td class="width"></td><td class="height"></td></tr>
                        10 = TEXT
                        10{
                            wrap = <td>|</td>
                            lang.en = Width
                            lang.de = Breite
                        }
                        20 = TEXT
                        20{
                            wrap = <td>|</td>
                            lang.en = Height
                            lang.de = Höhe
                        }
                    }
                }
                30 = TEXT
                30{
                    wrap = <form action="#"><label for="windowwidth">|</label>
                }
                32 = TEXT
                32.value(
                   <select name="windowwidth" id="windowwidth" style="display: block;">
                        <option value="0">-</option>
                        <option value="360">360</option>
                        <option value="480">480</option>
                        <option value="640">640</option>
                        <option value="800">800</option>
                        <option value="1024">1024</option>
                        <option value="1280">1280</option>
                        <option value="1440">1440</option>
                        <option value="1680">1680</option>
                        <option value="1920">1920</option>
                    </select></form>
                )
            }
        }
    }
[global]
#----------------------------------------------------------- DEBUG-END


#----------------------------------------------------------- DEBUG-BEUSER-BEGIN
[globalVar = GP:debug = 1] && [globalVar = TSFE : beUserLogin > 0]
    page.55{
        35 = TEXT
        35{
            wrap = <input type="checkbox" id="showgrid" /><label for="showgrid" id="bt_showgrid">|</label>
            lang.en = Show grid
            lang.de = Zeige Grid
            if.isPositive = {$t3d_grid.enable}
        }
        100.20{
            120 = TEXT
            120{
                wrap = <li>|</li>
                value = TYPO3 CMS Documentation
                typolink.parameter = http://docs.typo3.org/typo3cms/ _blank
            }
            130 = TEXT
            130{
                wrap = <li>|</li>
                value = TYPO3 Extension Repository
                typolink.parameter = http://typo3.org/extensions/repository/ _blank
            }
            140 = TEXT
            140{
                wrap = <li>|</li>
                value = jQuery
                typolink.parameter = http://jquery.com/ _blank
            }
            150 = TEXT
            150{
                wrap = <li>|</li>
                value = typo3.net
                typolink.parameter = http://www.typo3.net/ _blank
            }
        }
    }
[global]
#----------------------------------------------------------- DEBUG-BEUSER-END