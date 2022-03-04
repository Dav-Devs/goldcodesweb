<?php include "./func.php";?>

<!-- <?php $file = file_get_contents("http://book_shop.me") ?> -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='apple-touch-icon' href='https://favicons.me/favicon.ico?nocache=<?=time()?>' />
    <link rel='shortcut icon' href='https://favicons.me/favicon.ico?nocache=<?=time()?>' type='image/x-icon' />
    <title>API - D.Network</title>
</head>

<body>

<? /* = $file */ ?>

    <!-- <button onclick="ajax_notify()">ajax</button> -->

    <div id="ajax_notify"></div>

    <div class="output"></div>

    <script src="js/ajax_notify.js?nocache=<?=time()?>"></script>
    <script>
    const xajax = new XMLHttpRequest();
    const url = "https://api-test.me/product/read_one.php?<?=isset($_GET['id']) ? "id=" . $_GET['id'] : ""?>";

    ajaxstate();

    xajax.open("get", url, true);

    xajax.send();
    </script>

    <!-- ?nocache=<?=time()?> -->
    <!-- <script src="js/ajax.js"></script> ?nocache=<?=time()?> -->
</body>

</html>