"use strict";
// const form = document.querySelector(".signup form");
// const continueBtn = form.querySelector(".button input");
var cbtn = document.querySelector(".button input");

// cbtn.onclick = () => {
//     alert("alert");
//     console.log("hello");
// };
window.onload = function () {

  const form = document.querySelector(".signup form");
  const errorText = document.querySelector(".error-txt");
  const successText = document.querySelector(".success-txt");
  const preloader = document.getElementById("pre");
  $('#pre').hide();

  let xhr = new XMLHttpRequest();

  $("form").on("submit", function (e) {
    //$(this).hide();
    e.preventDefault();
  });

  $(document).ajaxSend($.blockUI).ajaxComplete($.unblockUI);

  $(cbtn).on("click", function () {
    let xhr = new XMLHttpRequest(); // new xml object
    xhr.open("POST", "libs/upload_handler.php", true);
    $(xhr).on("load", function () {
        if (xhr.status === 200) {
          let data = xhr.response;
          if (data == "File Uploaded Successfully") {
            $(".error-txt").hide();
            $(".success-txt").text(data);
            $(".success-txt").show();
          } else {
            $(".success-txt").hide();
            $(".error-txt").text(data);
            $(".error-txt").show();
          }
        }
    });
    // We've got to use AJAX to send the form through to PHP
    let formData = new FormData(form); // New formData Object
    xhr.send(formData); // sends the form data to PHP
  });
};