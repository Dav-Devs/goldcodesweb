<?php 

$get = json_encode($_GET, JSON_PRETTY_PRINT);
$post = json_encode($_POST, JSON_PRETTY_PRINT);
$data_raw = file_get_contents("php://input");

file_put_contents("get.json", $get);
file_put_contents("post.json", $post);
file_put_contents("data_raw.txt", $data_raw);

?>