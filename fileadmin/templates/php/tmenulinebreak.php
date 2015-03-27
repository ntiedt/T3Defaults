<?php
/***************************************************************
 *  Copyright notice
 *
 *  (c) 2003 Joss Herrmann (joss.herrmann@folge4.de)
 *  All rights reserved
 *
 *  This script is part of the Typo3 project. The Typo3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

/**
 * User class to split the linktext in a TMENU by |-char
 *
 * @author   Joss Herrmann <joss.herrmann@folge4.de>
 */
class user_tmenulinebreak
{
    /**
     *   Function replaces | to <br />
     *
     * @param   array   Menu array including all needed menu items (created by TMENU)
     * @param   array   Configuration array
     * @return   array   returns modified $I array
     * @access   public
     */
    function main($I, $conf)
    {

        #t3lib_div::debug($conf,'$conf');

        // parameter auswerten und defaults setzen
        // trennzeichen:
        if (isset($conf['splitChar'])) {
            $splitChar = $conf['splitChar'];
        } else {
            $splitChar = '|';
        }
        // wird ersetzt durch:
        if (isset($conf['replacement'])) {
            $replacement = $conf['replacement'];
        } else {
            $replacement = '<br />';
        }

        // | ersetzen
        $I['parts']['title'] = str_replace($splitChar, $replacement, $I['parts']['title']);

        // Werte in $I neu setzen
        $conf['parentObj']->I = $I;
        $conf['parentObj']->setATagParts();
        $I = $conf['parentObj']->I;

        //t3lib_div::debug($I,'I_KEY');

        return $I;
    }
}

?>
