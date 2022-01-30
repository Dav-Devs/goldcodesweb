<?php
header( 'Content-Type: application/json' );

$s = "/path/to/file";
$sz = 32;
$t = "file/type";
$s_n = "sn";
$n = "n";
$s_u = "su";
$d = "d";
$t_c = "tc";
$b_c = "bc";

function fmt($var)
{
    echo "<pre>";
    print_r($var);
    echo "</pre>";
}

function mkmanifest() {

    $s = "/path/to/file";
    $sz = 32;
    $t = "file/type";
    $s_n = "sn";
    $n = "n";
    $s_u = "su";
    $d = "d";
    $t_c = "tc";
    $b_c = "bc";

// $i_arr = array(
//     "src" => $s,
//     "sizes" => $sz,
//     "type" => $t,
// );

// $i_arr["src"] = $sn;
// $i_arr["sizes"] = $n;
// $i_arr["type"] = $i;

// array_push($i_arr["icons"], $i);

$manifest = array(
    "short_name" => $s_n,
    "name" => $n,
    // "icons" => $i_arr,
    "start_url" => $s_u,
    "display" => $d,
    "theme_color" => $t_c,
    "background_color" => $b_c,
);

// array_push($products_arr["records"], $product_item);

// $manifest = json_encode($_GET, JSON_PRETTY_PRINT);
$manifest = json_encode($manifest, JSON_PRETTY_PRINT);

file_put_contents("manifest.json", $manifest);
// $manifest = fmt($manifest);

return $manifest;

}

mkmanifest();

?>