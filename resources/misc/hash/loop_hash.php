<?php

include "hash.php";

for ($i = 0; $i < count($hasharr);) {

    if ($hasharr[$i] == $get_val) {

        $hash = hash($_GET['h'], $get_val);
        echo $hash . "<br />";
        $i++;
    }else {
        $hash = "Hash not supported"; 
    }
}
