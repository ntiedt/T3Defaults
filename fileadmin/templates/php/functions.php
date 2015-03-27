<?php

require_once(PATH_tslib . 'class.tslib_pibase.php');

class user_flexform_order_pi extends tslib_pibase
{
    function field($content, $conf)
    {

        $this->pi_loadLL();
        $this->pi_setPiVarDefaults();
        $this->pi_initPIflexForm();

        $flex_array = t3lib_div::xml2array($this->cObj->data['' . $conf['field'] . '']);
        $tv_field = $this->pi_getFFvalue($flex_array, $conf['flex_data'], $conf['sheet_pointer'], $conf['lang'], $conf['value_def']);

        return $tv_field;
    }
}

class user_functions
{
    /**
     * Generate a playlist
     *
     * @param string $content
     * @param array $conf
     * @return string
     */
    public function makePlaylist($content = "", $conf = array())
    {
        global $TSFE;
        $local_cObj = $TSFE->cObj; // cObject
        $conf = $conf["userFunc."]; // ts config
        $videos_str = $local_cObj->cObjGetSingle($conf["videos"], $conf["videos."]);
        $thumbnails_str = $local_cObj->cObjGetSingle($conf["thumbnails"], $conf["thumbnails."]);
        $titles_str = $local_cObj->cObjGetSingle($conf["titles"], $conf["titles."]);
        $test = $local_cObj->cObjGetSingle($conf["test"], $conf["test."]);
        $basepath = $local_cObj->cObjGetSingle($conf["basepath"], $conf["basepath."]);

        if ($videos_str == "") {
            return;
        }

        $videos = explode(",", $videos_str);
        if ($thumbnails_str != "") {
            $thumbnails = explode(",", $thumbnails_str);
        }
        if ($titles_str != "") {
            $titlesAndArtists = explode("\n", $titles_str);
        }

        for ($x = 0; $x < sizeof($videos); $x++) {
            if ($videos[$x] == "") {
                break;
            }
            $content .= "{";

            // Videos
            $content .= "m4v:'" . $basepath . $videos[$x] . "',";

            // Thumbnails
            $content .= "thumb:'";
            if ($thumbnails[$x] != "") {
                $content .= $basepath . $thumbnails[$x];
            }
            $content .= "',";

            // Titles and artists
            if ($titlesAndArtists[$x] == "") {
                continue;
            } else {
                $titleAndArtist = explode("|", $titlesAndArtists[$x]);
                // Title
                $content .= "title:'";
                if ($titleAndArtist[0] != "") {
                    $content .= $titleAndArtist[0];
                }
                $content .= "',";
                // Artist
                $content .= "artist:'";
                if ($titleAndArtist[1] != "") {
                    $content .= $titleAndArtist[1];
                }
                $content .= "'";
            }

            if ($x < (sizeof($videos) - 1)) {
                $content .= "},";
            } else {
                $content .= "}";
            }
        }

        return $content;
    }
}

?>