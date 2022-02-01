"use strict";
window.onload = function () {
  const form = document.querySelector(".login form");
  const errorText = document.querySelector(".error-txt");
  var cbtn = document.querySelector(".button input");

  $("form").on("submit", function (e) {
    //$(this).hide();
    e.preventDefault();
  });

  $(cbtn).on("click", function () {
    let xhr = new XMLHttpRequest(); // new xml object
    xhr.open("POST", "../libs/change-password.php", true);
    $(xhr).on("load", function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          let data = xhr.response;
          if (data == "success") {
            location.href = "users.php";
          } else {
            errorText.textContent = data;
            errorText.style.display = "block";
          }
        }
      }
    });
    // We've got to use AJAX to send the form through to PHP
    let formData = new FormData(form); // New formData Object
    xhr.send(formData); // sends the form data to PHP
  });
};