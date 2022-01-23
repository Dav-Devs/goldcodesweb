
const pswrdField = document.querySelector(".form input[type='password']"),
  togglebtn = document.querySelector(".form .field i");

const elements = document.querySelectorAll('[type="password"]');

elements.forEach(function (elem) {
  $(togglebtn).on("click", function () {
    if (elem.type === "password") {
      elem.type = "text";
      this.className = "fa fa-eye-slash showpwd";
    } else {
      elem.type = "password";
      this.className = "fa fa-eye showpwd";
    }
  });
});

  // togglebtn.onclick = () => {
  // if (pswrdField.type == "password") {
  //   pswrdField.type == "text";
  //   alert()
  // } else {
  //   pswrdField.type == "password";
  // }

/* window.onload = function () {


  const elements = document.querySelectorAll('[type="password"]');

  elements.forEach(function(elem) {
    elem.parentNode.querySelector('i').addEventListener('click', function(){
      if (elem.type === "password") {
        elem.type = "text";
        this.className = 'fa fa-eye-slash showpwd';
      } else {
        elem.type = "password";
        this.className = 'fa fa-eye showpwd';
      }
    });
  });


}

 */
