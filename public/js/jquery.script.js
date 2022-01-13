// w.onmessage = function () {

$(document).ready(function () {

  /* Sticky Scroll */
  $(window).scroll(function () {
    if (this.scrollY > 40) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    if (this.scrollY > 500) {
      $(".go-to-top").addClass("show");
    } else {
      $(".go-to-top").removeClass("show");
    }
  });

  /* Go-to-top */
  $(".go-to-top").click(() => {
    $("html").animate({
      scrollTop: 0
    });
  });

  /* Toggle Nav */
  $('.menu-btn').click(function () { 
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });

/*   var typed = new Typed(".typing", {
    string: ["APIs", "JQuery", "PHP", "And More..."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  }); */

});

// }
