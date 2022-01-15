"use strict";

// w.onmessage = function () {
var responsive = {
  0: {
    items: 1
  },
  320: {
    items: 1
  },
  560: {
    items: 2
  },
  960: {
    items: 3
  }
};
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

  $(".go-to-top").click(function () {
    $("html").animate({
      scrollTop: 0
    });
  });
  /* Toggle Nav */

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  /*   var typed = new Typed(".typing", {
  string: ["APIs", "JQuery", "PHP", "And More..."],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
  }); */

  /* OwlCarousel */

  $(".owl-carousel").owlCarousel({
    // loop: true,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeOut: 1000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: [$(".owl-nav .owl-prev"), $(".owl-nav .owl-next")],
    responsiveClass: true,
    responsive: responsive
  });
  /* AOS Initialization */
  // AOS.init();
}); // }