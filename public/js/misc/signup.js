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

  $("form").on("submit", function (e) {
    //$(this).hide();
    e.preventDefault();
  });

  $(cbtn).on("click", function () {
    let xhr = new XMLHttpRequest(); // new xml object
    xhr.open("POST", "../libs/signup.php", true);
    $(xhr).on("load", function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          let data = xhr.response;
          if (data == "success") {
            errorText.style.display = "none";
            successText.textContent = data;
            successText.style.display = "block";
            setInterval(() => {location.href = "users.php"}, 10000);
          } else {
            successText.style.display = "none";
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

  // const elements = document.querySelectorAll('.button input');
  // const form = document.querySelector(".signup form");
  // const continueBtn = form.querySelector(".button input");

  // elements.forEach(function (elem) {
  //     elem.parentNode.querySelector('.button input').addEventListener('click', function () {
  //         alert("alert");
  //         console.log("hello");
  //     });
  //     elem.parentNode.querySelector('.button input').addEventListener('', function () {

  //     });
  // });
};
