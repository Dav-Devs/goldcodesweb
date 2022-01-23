<?php 

switch ($get_hash) {
    case $get_hash == "md5":
        $hash = md5($get_val);

        break;

    case $get_hash == "sha1":
        $hash = sha1($get_val);

        break;

    case $get_hash == "sha256":
        $hash = hash('sha256', $get_val);

        break;

    case $get_hash == "sha512":
        $hash = hash('sha512', $get_val);

        break;

    case $get_hash == "pv_d":
        $hash = password_hash($get_val, PASSWORD_DEFAULT);

        break;

    case $get_hash == "argon2i":
        $hash = password_hash($get_val, PASSWORD_ARGON2I);

        break;

    case $get_hash == "argon2id":
        $hash = password_hash($get_val, PASSWORD_ARGON2ID);

        break;

    case $get_hash == "":
        # code...
        break;

    default:
        $hash = "Hash not supported";

        break;
}

?>