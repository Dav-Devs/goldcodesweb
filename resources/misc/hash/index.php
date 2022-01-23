<?php

$get_hash = "";

$get_val = "";

$hash = "";

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

$get_hash = isset($_GET['h']) ? $_GET['h'] : $hash = "hash type not specified";
$get_val = isset($_GET['v']) ? $_GET['v'] : $hash = "value not specified";

	if (!empty($get_hash) && !empty($get_val)) {


if ($get_hash == "md5") {

	$hash = md5($get_val);
} elseif ($get_hash == "sha1") {

	$hash = sha1($get_val);
} elseif ($get_hash == "sha256") {

	$hash = hash('sha256', $get_val);
} elseif ($get_hash == "sha512") {

	$hash = hash('sha512', $get_val);
} elseif ($get_hash == "pv_d") {

	$hash = password_hash($get_val, PASSWORD_DEFAULT);
} elseif ($get_hash == "argon2i") {

	$hash = password_hash($get_val, PASSWORD_ARGON2I);
} elseif ($get_hash == "argon2id") {

	$hash = password_hash($get_val, PASSWORD_ARGON2ID);
} else {

	$hash = "hash not supported";
}

} else {
	$hash = "Inputs not specified";
}

} else {
	$hash = "Hashing Error!";
}

// echo $hash;

?>

<!DOCTYPE html>
<html lang='en'>

<head>
    <meta charset='UTF-8' />
    <meta http-equiv='X-UA-Compatible' content='IE=edge' />
    <meta name='viewport' content='width = device-width, initial-scale = 1.0' />
    <link rel='apple-touch-icon' href='https://favicons.me/favicon.ico' />
    <link rel='shortcut icon' href='https://favicons.me/favicon.ico?nocache=<?= time() ?>' type='image/x-icon' />
    <title>Hash · DNHash</title>
    <link rel='stylesheet' href='https://assets.me/css/bootstrap5.min.css'>
    <script src="https://assets.me/js/bootstrap.bundle.min.js"></script>
    <script src="https://assets.me/frameworks/jquery/jquery-3.6.0.min.js"></script>
    <script src="https://assets.me/js/jquery.blockUI.js"></script>
    <!-- <link rel = 'stylesheet' href = 'http://view.me/bsdocs/bootstrap4-offline-docs-4.4/dist/css/bootstrap.min.css'> -->

    <style>
        .bd-placeholder-img {
            font-size: 1.125rem;
            text-anchor: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
        }

        @media (min-width: 768px) {
            .bd-placeholder-img-lg {
                font-size: 3.5rem;
            }
        }

        a {
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
            color: blue;
        }

        .alert {
            position: relative;
            padding: .75rem 1.25rem;
            margin-bottom: 1rem;
            border: 1px solid #0000;
            border-radius: .25rem;
        }

        .alert-danger-d {
            color: #721c24;
            background-color: #f8d7da;
            border-color: #f5c6cb;
        }
    </style>

    <script>
$(document).ready(function() {
   $('#outputhash').focus(function() {

  $('#outputhash').select();
  /* Or */
  // $('#outputhash').setSelectionRange(0, 99999); /* For mobile devices */

  document.execCommand("copy");

       $.growlUI('<span style="font-size: 25px;">DNHash</span>', '<span style="font-size: 20px;color:green;">Hash Copied!</span>');
   });
});
    </script>

    <!-- Custom styles for this template -->
    <link href='https://assets.me/css/signin.css' rel='stylesheet'>
    <style>
    	select {
    		overflow: auto;
    	}
    </style>
</head>

<body class='text-center'>

    <main class='form-signin'>
        <form method='get'>
            <!-- Bootstrap Validation Class: 'is-invalid' -->
            <!-- <img class='mb-5' src='https://assets.me/img/nav/D.Src.ico' alt='D.Src' width='120' height='50'> -->

            <h1 class='h3 mb-4 fw-normal text-secondary'>Hash Me</h1>

  <div class="form-group">
    <label for="inputselect">Select Hash</label>
    <select class="form-control" id="inputselect" name="h">
      <option value="pv_d">Default Hash</option>
      <option value="sha1">sha1</option>
      <option value="sha256">sha256</option>
      <option value="sha512">sha512</option>
      <option value="md5">md5</option>
      <option value="argon2i">argon2i</option>
      <option value="argon2id">argon2id</option>
    </select>
  </div>

            <!--div>
                <label for='inputHashType' class='visually-hidden'>Hash Type</label>
                <input type='text' id='inputHashType' name='h' class='form-control' value="<?= $get_hash ?>" placeholder='Hash Type: sha1 md5...' required autofocus>
                <div class='invalid-feedback'>
                    Please fill this required field
                </div>
            </div-->

            <div>
                <label for='inputValue' class='visually-hidden'>Value</label>
                <input type='text' id='inputValue' name='v' class='form-control' value="<?= $get_val ?>" placeholder='Value to be hashed' required autofocus>
                <div class='invalid-feedback'>
                    Please fill this required field
                </div>
            </div>

  <div class="form-group mt-3">
    <label for="outputhash">Output Hash</label>
    <textarea class="form-control" id="outputhash" rows="6"><?= $hash ?></textarea>
  </div>

            <button class='w-100 btn btn-lg btn-primary mt-3' type='submit'>Hash Away</button>

            <p class='mt-5 mb-3 text-muted'>&copy; <?= date('Y') ?></p>
        </form>

    </main>

</body>

</html>
