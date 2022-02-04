"use strict";
var p = document.querySelector(".form input[type='password']"),
    t = document.querySelector(".form .field i"),
    el = document.querySelectorAll('[type="password"]');
el.forEach(function (e) {
    $(t).on("click", function () {
        "password" === e.type ? (e.type = "text", this.className = "fa fa-eye-slash showpwd") : (e.type = "password", this.className = "fa fa-eye showpwd")
    })
});
