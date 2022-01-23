<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src="js/frameworks/fontawesome/js/all.min.js"></script>
	<link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="css/preloader.css">
	<script src="js/frameworks/jquery/jquery-3.6.0.min.js"></script>
	<script src="js/frameworks/jquery/jquery.form.js"></script>
	<script src="js/frameworks/jquery/jquery.b.js"></script>
	<title> Upload Ur Files </title>
</head>

<body>
	<div class="wrapper text-decoration-none">
		<div class="preloader" id="pre" style="display: none;"></div>
		<section class="form signup">
			<header>Upload Files</header>
			<form action="#" enctype="multipart/form-data" autocomplete="off">
				<div class="error-txt"></div>
				<div class="success-txt"></div>

				<div class="field image">
					<label>Select Image</label>
					<input type="file" name="upl[]" multiple required>
				</div>
				<div class="field button">
					<input type="submit" value="Upload &raquo;">
				</div>
			</form>
		</section>
	</div>
	<script defer src="js/upl.js"></script>
</body>

</html>