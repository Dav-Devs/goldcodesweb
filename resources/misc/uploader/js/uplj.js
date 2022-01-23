"use strict";
// const form = document.querySelector(".signup form");
// const continueBtn = form.querySelector(".button input");
var cbtn = document.querySelector(".button input");

let xhr = new XMLHttpRequest();

let data = xhr.response;

// cbtn.onclick = () => {
//     alert("alert");
//     console.log("hello");
// };
window.onload = function () {

  const form = document.querySelector(".signup form");
  const errorText = document.querySelector(".error-txt");
  const successText = document.querySelector(".success-txt");
  const preloader = document.getElementById("pre");
  

  

  $("form").on("submit", function (e) {
    //$(this).hide();
    e.preventDefault();
  });

  function successtxt() {
    errorText.style.display = "none";
    successText.textContent = data;
    successText.style.display = "";
  }

  function errortxt() {
    successText.style.display = "none";
    errorText.textContent = data;
    errorText.style.display = "";
  }

$('#pre').hide();

$(document).ajaxSend($.blockUI).ajaxComplete($.unblockUI);


   $(cbtn).on("click", function () {
   	  $(this).ajaxForm({
    	url: "libs/upload_handler.php",
    	cache: false,
    	method: 'POST',
        success: function (xhr) {
        	let data = xhr;
        if (data == "File Uploaded Successfully") {
        	successtxt();
          } else {
          	errortxt();
          }
        },
        error
    });
   });
  
};