
const p = document.querySelector(".form input[type='password']"),
  t = document.querySelector(".form .field i");

const el = document.querySelectorAll('[type="password"]');

el.forEach(function (elem) {
  $(t).on("click", function () {
    if (elem.type === "password") {
      elem.type = "text";
      this.className = "fa fa-eye-slash showpwd";
    } else {
      elem.type = "password";
      this.className = "fa fa-eye showpwd";
    }
  });
});
