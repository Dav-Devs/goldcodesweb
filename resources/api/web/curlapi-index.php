<?php 

include 'func.php';

// $url = "http://api-test.me/product/read_one.php?id=1";
// $url = "http://api-test.me/product/read_paging.php?page=1";

$url = "http://api.me/api/save.php?name=andre&age=37";

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
// curl_setopt($ch, CURLOPT_HEADER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, "name=xavier&age=32");
// curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-type: text/plain"));

$data = curl_exec($ch);

echo "<pre>";
echo $data;

show($_SERVER);
