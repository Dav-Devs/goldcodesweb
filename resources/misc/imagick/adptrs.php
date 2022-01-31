<?php
header('Content-type: image/png');

$image = new Imagick('/img/logos/gcwlogo.png');
$image->adaptiveResizeImage(1024,768);

echo $image;
?>