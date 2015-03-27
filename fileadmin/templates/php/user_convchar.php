<?php

class user_convchar
{
    function encode($content, $conf)
    {
        $convmap = array(0x80, 0xff, 0, 0xff);
        return mb_encode_numericentity($content, $convmap, "iso-8859-1");
    }
}

?>
