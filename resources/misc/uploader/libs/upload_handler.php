<?php

include_once("thumbnail.php");
$uploaded_images = array();
$thumb_width = 100;
$thumb_height = 90;
$upload_dir = 'uploads/';
$upload_dir_thumbs = 'upl/thumbs/';

foreach($_FILES['upl']['name'] as $key=>$val){
// checking if user uploaded file or not
if (isset($_FILES['upl'])) {
    // if user uploaded file
    $img_name = $_FILES['upl']['name'][$key];
    // obtaining uploaded image's name
    $img_type = $_FILES['upl']['type'][$key]; // obtaining the file's type
    $img_size = $_FILES['upl']['size'][$key]; // obtaining the file's size
    $tmp_name = $_FILES['upl']['tmp_name'][$key];
    // it's the name used to save/move into our folder

    $img_explode = explode('.', $img_name);
    $img_ext = end($img_explode); // the file's extension ( i.e. *.jpg, *.png ...etc ) will be gotten from here

    $extensions = ['image/png', 'image/jpeg', 'application/octet-stream', 'application/x-msdownload'];
    // Valid file extensions stored in array

    if (in_array($img_type, $extensions) === true) {
        // if image extensions matches the array defined in @var $extensions
        $time = time(); // this will return us the current time, As of which is used to rename each uploaded images with unique names ;)

        // lets move the uploaded images to our particular folder
        $new_img_name = 'file_' . $time. '_' . $img_name;

        if (move_uploaded_file($tmp_name, '../upl/' . $new_img_name)) {
            // On Success
			echo 'File Uploaded Successfully';
            createThumbnail($filename, $thumb_width, $thumb_height, $upload_dir, $upload_dir_thumbs);
        }else {
                echo 'Something went wrong! try again later';
            }

        //$statuslastlogintime = $checklast;
    } else {
        echo " $img_ext  Not Supported or Invalid - Use valid images";
    }
} else {
    echo 'Please Upload Image file';
}
}

?>