"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

/*! For license information please see app.js.LICENSE.txt */
(function () {
  var __webpack_modules__ = {
    219: function _() {
      jQuery, $(window).on("load", function () {
        $(".wave-container").fadeOut(), $(".page-loader").delay(350).fadeOut("slow");
      }), $(document).ready(function () {
        wow = new WOW({
          mobile: !1
        }), wow.init(), $(window).scroll(function () {
          $(this).scrollTop() > 100 ? $(".scroll-up").fadeIn() : $(".scroll-up").fadeOut();
        }), $('a[href="#totop"]').click(function () {
          return $("html, body").animate({
            scrollTop: 0
          }, "slow"), !1;
        });
        var e = $("section"),
            t = $(".navbar-custom"),
            n = t.height(),
            r = Math.max($(window).width(), window.innerWidth),
            i = !1;

        function o(e) {
          e.length > 0 && (e.hasClass("full-height") ? e.height($(window).height()) : e.height(.85 * $(window).height()));
        }

        function a(e, t, n) {
          var r = $(window).scrollTop();
          e.length > 0 && t.length > 0 && (r >= n ? e.removeClass("navbar-transparent") : e.addClass("navbar-transparent"));
        }

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (i = !0), o(e), a(t, e, n), function (e) {
          e > 767 && $(".navbar-custom .navbar-nav > li.dropdown").hover(function () {
            var t = $(".dropdown-menu", $(this)).offset().left,
                n = $(".dropdown-menu", $(this)).width();

            if (e - t < 2 * n ? $(this).children(".dropdown-menu").addClass("leftauto") : $(this).children(".dropdown-menu").removeClass("leftauto"), $(".dropdown", $(this)).length > 0) {
              var r = $(".dropdown-menu", $(this)).width();
              e - t - n < r ? $(this).children(".dropdown-menu").addClass("left-side") : $(this).children(".dropdown-menu").removeClass("left-side");
            }
          });
        }(r), $(window).resize(function () {
          Math.max($(window).width(), window.innerWidth), o(e);
        }), $(window).scroll(function () {
          !function (e, t) {
            if (e.length > 0) {
              var n = e.height(),
                  r = $(document).scrollTop();
              e.hasClass("dparallax") && $(t).scrollTop() <= n && e.css("top", .55 * r), e.hasClass("dfade") && $(t).scrollTop() <= n && $(".caption-content").css("opacity", 1 - r / e.height() * 1);
            }
          }(e, this), a(t, e, n);
        }), $(".home-section, .module, .module-small, .side-image").each(function (e) {
          $(this).attr("data-background") && $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
        }), $(".rotate").textrotator({
          animation: "dissolve",
          separator: "|",
          speed: 3e3
        }), $(".video-pop-up").magnificPopup({
          type: "iframe"
        }), $(".gallery-item").magnificPopup({
          delegate: "a",
          type: "image",
          gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [0, 1]
          },
          image: {
            titleSrc: "title",
            tError: "The image could not be loaded."
          }
        }), $(".post-images-slider").length > 0 && $(".post-images-slider").flexslider({
          animation: "slide",
          smoothHeight: !0
        }), $(".progress-bar").each(function (e) {
          $(this).appear(function () {
            var e = $(this).attr("aria-valuenow");
            $(this).animate({
              width: e + "%"
            }), $(this).find("span").animate({
              opacity: 1
            }, 900), $(this).find("span").countTo({
              from: 0,
              to: e,
              speed: 900,
              refreshInterval: 30
            });
          });
        }), $(".count-item").each(function (e) {
          $(this).appear(function () {
            var e = $(this).find(".count-to").data("countto");
            $(this).find(".count-to").countTo({
              from: 0,
              to: e,
              speed: 1200,
              refreshInterval: 30
            });
          });
        }), $(function () {
          $(".video-player").mb_YTPlayer();
        }), $("#video-play").click(function (e) {
          return e.preventDefault(), $(this).hasClass("fa-play") ? $(".video-player").playYTP() : $(".video-player").pauseYTP(), $(this).toggleClass("fa-play fa-pause"), !1;
        }), $("#video-volume").click(function (e) {
          return e.preventDefault(), $(this).hasClass("fa-volume-off") ? $(".video-player").YTPUnmute() : $(".video-player").YTPMute(), $(this).toggleClass("fa-volume-off fa-volume-up"), !1;
        }), $(".post-masonry").imagesLoaded(function () {
          $(".post-masonry").masonry();
        }), $(".section-scroll").bind("click", function (e) {
          var t = $(this);
          $("html, body").stop().animate({
            scrollTop: $(t.attr("href")).offset().top - 50
          }, 1e3), e.preventDefault();
        }), $("#contactForm").submit(function (e) {
          e.preventDefault();
          var t = jQuery,
              n = t(this).serializeArray(),
              r = t(this).attr("action"),
              i = t("#contactFormResponse"),
              o = t("#cfsubmit"),
              a = o.text();
          return o.text("Sending..."), t.ajax({
            url: r,
            type: "POST",
            data: n,
            success: function success(e) {
              i.html(e), o.text(a), t("#contactForm input[name=name]").val(""), t("#contactForm input[name=email]").val(""), t("#contactForm textarea[name=message]").val("");
            },
            error: function error(e) {
              alert("Error occurd! Please try again");
            }
          }), !1;
        }), $("#subscription-form").submit(function (e) {
          e.preventDefault();
          var t = $("#subscription-form"),
              n = $("#subscription-form-submit"),
              r = $("#subscription-response"),
              i = $("input#semail").val();
          $.ajax({
            type: "POST",
            url: "assets/php/subscribe.php",
            dataType: "json",
            data: {
              email: i
            },
            cache: !1,
            beforeSend: function beforeSend(e) {
              n.empty(), n.append('<i class="fa fa-cog fa-spin"></i> Wait...');
            },
            success: function success(e) {
              1 == e.sendstatus ? (r.html(e.message), t.fadeOut(500)) : r.html(e.message);
            }
          });
        }), 0 != $("#map").length && "undefined" != typeof google) {
          google.maps.event.addDomListener(window, "load", function () {
            var e = {
              zoom: 11,
              scrollwheel: !1,
              center: l,
              styles: [{
                featureType: "all",
                elementType: "geometry.fill",
                stylers: [{
                  visibility: "on"
                }, {
                  saturation: "-11"
                }]
              }, {
                featureType: "administrative",
                elementType: "geometry.fill",
                stylers: [{
                  saturation: "22"
                }]
              }, {
                featureType: "administrative",
                elementType: "geometry.stroke",
                stylers: [{
                  saturation: "-58"
                }, {
                  color: "#cfcece"
                }]
              }, {
                featureType: "administrative",
                elementType: "labels.text",
                stylers: [{
                  color: "#f8f8f8"
                }]
              }, {
                featureType: "administrative",
                elementType: "labels.text.fill",
                stylers: [{
                  color: "#999999"
                }, {
                  visibility: "on"
                }]
              }, {
                featureType: "administrative",
                elementType: "labels.text.stroke",
                stylers: [{
                  visibility: "on"
                }]
              }, {
                featureType: "administrative.country",
                elementType: "geometry.fill",
                stylers: [{
                  color: "#f9f9f9"
                }, {
                  visibility: "simplified"
                }]
              }, {
                featureType: "landscape",
                elementType: "all",
                stylers: [{
                  color: "#f2f2f2"
                }]
              }, {
                featureType: "landscape",
                elementType: "geometry",
                stylers: [{
                  saturation: "-19"
                }, {
                  lightness: "-2"
                }, {
                  visibility: "on"
                }]
              }, {
                featureType: "poi",
                elementType: "all",
                stylers: [{
                  visibility: "off"
                }]
              }, {
                featureType: "road",
                elementType: "all",
                stylers: [{
                  saturation: -100
                }, {
                  lightness: 45
                }]
              }, {
                featureType: "road.highway",
                elementType: "all",
                stylers: [{
                  visibility: "simplified"
                }]
              }, {
                featureType: "road.arterial",
                elementType: "labels.icon",
                stylers: [{
                  visibility: "off"
                }]
              }, {
                featureType: "transit",
                elementType: "all",
                stylers: [{
                  visibility: "off"
                }]
              }, {
                featureType: "water",
                elementType: "all",
                stylers: [{
                  color: "#d8e1e5"
                }, {
                  visibility: "on"
                }]
              }, {
                featureType: "water",
                elementType: "geometry.fill",
                stylers: [{
                  color: "#dedede"
                }]
              }, {
                featureType: "water",
                elementType: "labels.text",
                stylers: [{
                  color: "#cbcbcb"
                }]
              }, {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{
                  color: "#9c9c9c"
                }]
              }, {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{
                  visibility: "off"
                }]
              }]
            },
                t = document.getElementById("map"),
                n = new google.maps.Map(t, e),
                r = new google.maps.MarkerImage("assets/images/map-icon.png", new google.maps.Size(59, 65), new google.maps.Point(0, 0), new google.maps.Point(24, 42));
            new google.maps.Marker({
              position: s,
              icon: r,
              title: "Titan",
              infoWindow: {
                content: "<p><strong>Rival</strong><br/>121 Somewhere Ave, Suite 123<br/>P: (123) 456-7890<br/>Australia</p>"
              },
              map: n
            });
          });
          var s = new google.maps.LatLng(40.67, -74.2),
              l = i ? s : new google.maps.LatLng(40.67, -73.94);
        }
      });
    },
    944: function _() {
      !function (e) {
        e.fn.appear = function (t, n) {
          var r = e.extend({
            data: void 0,
            one: !0,
            accX: 0,
            accY: 0
          }, n);
          return this.each(function () {
            var n = e(this);

            if (n.appeared = !1, t) {
              var i = e(window),
                  o = function o() {
                if (n.is(":visible")) {
                  var e = i.scrollLeft(),
                      t = i.scrollTop(),
                      o = n.offset(),
                      a = o.left,
                      s = o.top,
                      l = r.accX,
                      u = r.accY,
                      c = n.height(),
                      f = i.height(),
                      d = n.width(),
                      p = i.width();
                  s + c + u >= t && s <= t + f + u && a + d + l >= e && a <= e + p + l ? n.appeared || n.trigger("appear", r.data) : n.appeared = !1;
                } else n.appeared = !1;
              },
                  a = function a() {
                if (n.appeared = !0, r.one) {
                  i.unbind("scroll", o);
                  var a = e.inArray(o, e.fn.appear.checks);
                  a >= 0 && e.fn.appear.checks.splice(a, 1);
                }

                t.apply(this, arguments);
              };

              r.one ? n.one("appear", r.data, a) : n.bind("appear", r.data, a), i.scroll(o), e.fn.appear.checks.push(o), o();
            } else n.trigger("appear", r.data);
          });
        }, e.extend(e.fn.appear, {
          checks: [],
          timeout: null,
          checkAll: function checkAll() {
            var t = e.fn.appear.checks.length;
            if (t > 0) for (; t--;) {
              e.fn.appear.checks[t]();
            }
          },
          run: function run() {
            e.fn.appear.timeout && clearTimeout(e.fn.appear.timeout), e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20);
          }
        }), e.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function (t, n) {
          var r = e.fn[n];
          r && (e.fn[n] = function () {
            var t = r.apply(this, arguments);
            return e.fn.appear.run(), t;
          });
        });
      }(jQuery), function (e) {
        e.fn.countTo = function (t) {
          t = e.extend({}, e.fn.countTo.defaults, t || {});
          var n = Math.ceil(t.speed / t.refreshInterval),
              r = (t.to - t.from) / n;
          return e(this).each(function () {
            var i = this,
                o = 0,
                a = t.from,
                s = setInterval(function () {
              a += r, o++, e(i).html(a.toFixed(t.decimals)), "function" == typeof t.onUpdate && t.onUpdate.call(i, a);
              o >= n && (clearInterval(s), a = t.to, "function" == typeof t.onComplete && t.onComplete.call(i, a));
            }, t.refreshInterval);
          });
        }, e.fn.countTo.defaults = {
          from: 0,
          to: 100,
          speed: 1e3,
          refreshInterval: 100,
          decimals: 0,
          onUpdate: null,
          onComplete: null
        };
      }(jQuery);
    },
    373: function _() {
      function _typeof(e) {
        return _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
          return _typeof2(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
        }, _typeof(e);
      }

      var ytp = ytp || {};

      function onYouTubeIframeAPIReady() {
        ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"));
      }

      var getYTPVideoID = function getYTPVideoID(e) {
        var t, n;
        return e.indexOf("youtu.be") > 0 ? (n = (t = e.substr(e.lastIndexOf("/") + 1, e.length)).indexOf("?list=") > 0 ? t.substr(t.lastIndexOf("="), t.length) : null, t = n ? t.substr(0, t.lastIndexOf("?")) : t) : e.indexOf("http") > -1 ? (t = e.match(/[\\?&]v=([^&#]*)/)[1], n = e.indexOf("list=") > 0 ? e.match(/[\\?&]list=([^&#]*)/)[1] : null) : n = (t = e.length > 15 ? null : e) ? null : e, {
          videoID: t,
          playlistID: n
        };
      },
          t;

      function uncamel(e) {
        return e.replace(/([A-Z])/g, function (e) {
          return "-" + e.toLowerCase();
        });
      }

      function setUnit(e, t) {
        return "string" != typeof e || e.match(/^[\-0-9\.]+jQuery/) ? "" + e + t : e;
      }

      function setFilter(e, t, n) {
        var r = uncamel(t),
            i = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx;
        e[i + "filter"] = e[i + "filter"] || "", n = setUnit(n > jQuery.CSS.filters[t].max ? jQuery.CSS.filters[t].max : n, jQuery.CSS.filters[t].unit), e[i + "filter"] += r + "(" + n + ") ", delete e[t];
      }

      (function (jQuery, ytp) {
        jQuery.mbYTPlayer = {
          name: "jquery.mb.YTPlayer",
          version: "3.0.12",
          build: "6132",
          author: "Matteo Bicocchi (pupunzi)",
          apiKey: "",
          defaults: {
            containment: "body",
            ratio: "auto",
            videoURL: null,
            playlistURL: null,
            startAt: 0,
            stopAt: 0,
            autoPlay: !0,
            vol: 50,
            addRaster: !1,
            mask: !1,
            opacity: 1,
            quality: "default",
            mute: !1,
            loop: !0,
            fadeOnStartTime: 1e3,
            showControls: !0,
            showAnnotations: !1,
            showYTLogo: !0,
            stopMovieOnBlur: !0,
            realfullscreen: !0,
            mobileFallbackImage: null,
            gaTrack: !0,
            optimizeDisplay: !0,
            anchor: "center,center",
            onReady: function onReady(e) {},
            onError: function onError(e, t) {}
          },
          controls: {
            play: "P",
            pause: "p",
            mute: "M",
            unmute: "A",
            onlyYT: "O",
            showSite: "R",
            ytLogo: "Y"
          },
          controlBar: null,
          loading: null,
          locationProtocol: "https:",
          filters: {
            grayscale: {
              value: 0,
              unit: "%"
            },
            hue_rotate: {
              value: 0,
              unit: "deg"
            },
            invert: {
              value: 0,
              unit: "%"
            },
            opacity: {
              value: 0,
              unit: "%"
            },
            saturate: {
              value: 0,
              unit: "%"
            },
            sepia: {
              value: 0,
              unit: "%"
            },
            brightness: {
              value: 0,
              unit: "%"
            },
            contrast: {
              value: 0,
              unit: "%"
            },
            blur: {
              value: 0,
              unit: "px"
            }
          },
          buildPlayer: function buildPlayer(options) {
            return this.each(function () {
              var YTPlayer = this,
                  $YTPlayer = jQuery(YTPlayer);
              YTPlayer.loop = 0, YTPlayer.opt = {}, YTPlayer.state = {}, YTPlayer.filters = jQuery.mbYTPlayer.filters, YTPlayer.filtersEnabled = !0, YTPlayer.id = YTPlayer.id || "YTP_" + new Date().getTime(), $YTPlayer.addClass("mb_YTPlayer");
              var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
              void 0 !== property && void 0 !== property.vol && (property.vol = 0 === property.vol ? property.vol = 1 : property.vol), jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property), YTPlayer.hasChanged || (YTPlayer.defaultOpt = {}, jQuery.extend(YTPlayer.defaultOpt, jQuery.mbYTPlayer.defaults, options)), "true" == YTPlayer.opt.loop && (YTPlayer.opt.loop = 9999), YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1;

              var isIframe = function isIframe() {
                var e = !1;

                try {
                  self.location.href != top.location.href && (e = !0);
                } catch (t) {
                  e = !0;
                }

                return e;
              };

              YTPlayer.canGoFullScreen = !(jQuery.browser.msie || jQuery.browser.opera || isIframe()), YTPlayer.canGoFullScreen || (YTPlayer.opt.realfullscreen = !1), $YTPlayer.attr("id") || $YTPlayer.attr("id", "ytp_" + new Date().getTime());
              var playerID = "mbYTP_" + YTPlayer.id;
              YTPlayer.isAlone = !1, YTPlayer.hasFocus = !0, YTPlayer.videoID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).videoID : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).videoID, YTPlayer.playlistID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).playlistID : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).playlistID, YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "0" : "3";
              var playerVars = {
                modestbranding: 1,
                autoplay: 0,
                controls: 0,
                showinfo: 0,
                rel: 0,
                enablejsapi: 1,
                version: 3,
                playerapiid: playerID,
                origin: "*",
                allowfullscreen: !0,
                wmode: "transparent",
                iv_load_policy: YTPlayer.opt.showAnnotations
              };

              if (document.createElement("video").canPlayType && jQuery.extend(playerVars, {
                html5: 1
              }), jQuery.browser.msie && jQuery.browser.version < 9 && (this.opt.opacity = 1), YTPlayer.isSelf = "self" == YTPlayer.opt.containment, YTPlayer.defaultOpt.containment = YTPlayer.opt.containment = "self" == YTPlayer.opt.containment ? jQuery(this) : jQuery(YTPlayer.opt.containment), YTPlayer.isBackground = YTPlayer.opt.containment.is("body"), !YTPlayer.isBackground || !ytp.backgroundIsInited) {
                var isPlayer = YTPlayer.opt.containment.is(jQuery(this));
                YTPlayer.canPlayOnMobile = isPlayer && 0 === jQuery(this).children().length, YTPlayer.isPlayer = !1, isPlayer ? YTPlayer.isPlayer = !0 : $YTPlayer.hide();
                var overlay = jQuery("<div/>").css({
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%"
                }).addClass("mbYTP_overlay");
                YTPlayer.isPlayer && overlay.on("click", function () {
                  $YTPlayer.YTPTogglePlay();
                });
                var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID);
                wrapper.css({
                  position: "absolute",
                  zIndex: 0,
                  minWidth: "100%",
                  minHeight: "100%",
                  left: 0,
                  top: 0,
                  overflow: "hidden",
                  opacity: 0
                });
                var playerBox = jQuery("<div/>").addClass("mbYTP_playerBox").attr("id", playerID);
                if (playerBox.css({
                  position: "absolute",
                  zIndex: 0,
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  overflow: "hidden"
                }), wrapper.append(playerBox), YTPlayer.opt.containment.children().not("script, style").each(function () {
                  "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative");
                }), YTPlayer.isBackground ? (jQuery("body").css({
                  boxSizing: "border-box"
                }), wrapper.css({
                  position: "fixed",
                  top: 0,
                  left: 0,
                  zIndex: 0
                }), $YTPlayer.hide()) : "static" == YTPlayer.opt.containment.css("position") && YTPlayer.opt.containment.css({
                  position: "relative"
                }), YTPlayer.opt.containment.prepend(wrapper), YTPlayer.wrapper = wrapper, playerBox.css({
                  opacity: 1
                }), jQuery.browser.mobile || (playerBox.after(overlay), YTPlayer.overlay = overlay), YTPlayer.isBackground || overlay.on("mouseenter", function () {
                  YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.addClass("visible");
                }).on("mouseleave", function () {
                  YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.removeClass("visible");
                }), ytp.YTAPIReady) setTimeout(function () {
                  jQuery(document).trigger("YTAPIReady");
                }, 100);else {
                  jQuery("#YTAPI").remove();
                  var tag = jQuery("<script><\/script>").attr({
                    src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
                    id: "YTAPI"
                  });
                  jQuery("head").prepend(tag);
                }
                if (jQuery.browser.mobile && !YTPlayer.canPlayOnMobile) return YTPlayer.opt.mobileFallbackImage && wrapper.css({
                  backgroundImage: "url(" + YTPlayer.opt.mobileFallbackImage + ")",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  opacity: 1
                }), $YTPlayer.remove(), void jQuery(document).trigger("YTPUnavailable");
                jQuery(document).on("YTAPIReady", function () {
                  YTPlayer.isBackground && ytp.backgroundIsInited || YTPlayer.isInit || (YTPlayer.isBackground && (ytp.backgroundIsInited = !0), YTPlayer.opt.autoPlay = void 0 === YTPlayer.opt.autoPlay ? !!YTPlayer.isBackground : YTPlayer.opt.autoPlay, YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100, jQuery.mbYTPlayer.getDataFromAPI(YTPlayer), jQuery(YTPlayer).on("YTPChanged", function () {
                    if (!YTPlayer.isInit) if (YTPlayer.isInit = !0, jQuery.browser.mobile && YTPlayer.canPlayOnMobile) {
                      if (YTPlayer.opt.containment.outerWidth() > jQuery(window).width()) {
                        YTPlayer.opt.containment.css({
                          maxWidth: "100%"
                        });
                        var h = .563 * YTPlayer.opt.containment.outerWidth();
                        YTPlayer.opt.containment.css({
                          maxHeight: h
                        });
                      }

                      new YT.Player(playerID, {
                        videoId: YTPlayer.videoID.toString(),
                        width: "100%",
                        height: h,
                        playerVars: playerVars,
                        events: {
                          onReady: function onReady(e) {
                            YTPlayer.player = e.target, playerBox.css({
                              opacity: 1
                            }), YTPlayer.wrapper.css({
                              opacity: 1
                            });
                          }
                        }
                      });
                    } else new YT.Player(playerID, {
                      videoId: YTPlayer.videoID.toString(),
                      playerVars: playerVars,
                      events: {
                        onReady: function onReady(e) {
                          YTPlayer.player = e.target, YTPlayer.isReady || (YTPlayer.isReady = !(YTPlayer.isPlayer && !YTPlayer.opt.autoPlay), YTPlayer.playerEl = YTPlayer.player.getIframe(), jQuery(YTPlayer.playerEl).unselectable(), $YTPlayer.optimizeDisplay(), jQuery(window).off("resize.YTP_" + YTPlayer.id).on("resize.YTP_" + YTPlayer.id, function () {
                            $YTPlayer.optimizeDisplay();
                          }), jQuery.mbYTPlayer.checkForState(YTPlayer));
                        },
                        onStateChange: function onStateChange(event) {
                          if ("function" == typeof event.target.getPlayerState) {
                            var state = event.target.getPlayerState();
                            if (YTPlayer.preventTrigger) YTPlayer.preventTrigger = !1;else {
                              var eventType;

                              switch (YTPlayer.state = state, state) {
                                case -1:
                                  eventType = "YTPUnstarted";
                                  break;

                                case 0:
                                  eventType = "YTPEnd";
                                  break;

                                case 1:
                                  eventType = "YTPPlay", YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause), "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) && _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()]), "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString());
                                  break;

                                case 2:
                                  eventType = "YTPPause", YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                  break;

                                case 3:
                                  YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality), eventType = "YTPBuffering", YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                  break;

                                case 5:
                                  eventType = "YTPCued";
                              }

                              var YTPEvent = jQuery.Event(eventType);
                              YTPEvent.time = YTPlayer.currentTime, YTPlayer.canTrigger && jQuery(YTPlayer).trigger(YTPEvent);
                            }
                          }
                        },
                        onPlaybackQualityChange: function onPlaybackQualityChange(e) {
                          var t = e.target.getPlaybackQuality(),
                              n = jQuery.Event("YTPQualityChange");
                          n.quality = t, jQuery(YTPlayer).trigger(n);
                        },
                        onError: function onError(e) {
                          150 == e.data && (console.log("Embedding this video is restricted by Youtube."), YTPlayer.isPlayList && jQuery(YTPlayer).playNext()), 2 == e.data && YTPlayer.isPlayList && jQuery(YTPlayer).playNext(), "function" == typeof YTPlayer.opt.onError && YTPlayer.opt.onError($YTPlayer, e);
                        }
                      }
                    });
                  }));
                }), $YTPlayer.off("YTPTime.mask"), jQuery.mbYTPlayer.applyMask(YTPlayer);
              }
            });
          },
          getDataFromAPI: function getDataFromAPI(e) {
            if (e.videoData = jQuery.mbStorage.get("YTPlayer_data_" + e.videoID), jQuery(e).off("YTPData.YTPlayer").on("YTPData.YTPlayer", function () {
              if (e.hasData && e.isPlayer && !e.opt.autoPlay) {
                var t = e.videoData.thumb_max || e.videoData.thumb_high || e.videoData.thumb_medium;
                e.opt.containment.css({
                  background: "rgba(0,0,0,0.5) url(" + t + ") center center",
                  backgroundSize: "cover"
                }), e.opt.backgroundUrl = t;
              }
            }), e.videoData) setTimeout(function () {
              e.opt.ratio = "auto" == e.opt.ratio ? "16/9" : e.opt.ratio, e.dataReceived = !0, jQuery(e).trigger("YTPChanged");
              var t = jQuery.Event("YTPData");

              for (var n in t.prop = {}, e.videoData) {
                t.prop[n] = e.videoData[n];
              }

              jQuery(e).trigger(t);
            }, 500), e.hasData = !0;else if (jQuery.mbYTPlayer.apiKey) jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//www.googleapis.com/youtube/v3/videos?id=" + e.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function (t) {
              e.dataReceived = !0, jQuery(e).trigger("YTPChanged"), function (t) {
                e.videoData = {}, e.videoData.id = e.videoID, e.videoData.channelTitle = t.channelTitle, e.videoData.title = t.title, e.videoData.description = t.description.length < 400 ? t.description : t.description.substring(0, 400) + " ...", e.videoData.aspectratio = "auto" == e.opt.ratio ? "16/9" : e.opt.ratio, e.opt.ratio = e.videoData.aspectratio, e.videoData.thumb_max = t.thumbnails.maxres ? t.thumbnails.maxres.url : null, e.videoData.thumb_high = t.thumbnails.high ? t.thumbnails.high.url : null, e.videoData.thumb_medium = t.thumbnails.medium ? t.thumbnails.medium.url : null, jQuery.mbStorage.set("YTPlayer_data_" + e.videoID, e.videoData);
              }(t.items[0].snippet), e.hasData = !0;
              var n = jQuery.Event("YTPData");

              for (var r in n.prop = {}, e.videoData) {
                n.prop[r] = e.videoData[r];
              }

              jQuery(e).trigger(n);
            });else {
              if (setTimeout(function () {
                jQuery(e).trigger("YTPChanged");
              }, 50), e.isPlayer && !e.opt.autoPlay) {
                var t = jQuery.mbYTPlayer.locationProtocol + "//i.ytimg.com/vi/" + e.videoID + "/hqdefault.jpg";
                t && e.opt.containment.css({
                  background: "rgba(0,0,0,0.5) url(" + t + ") center center",
                  backgroundSize: "cover"
                }), e.opt.backgroundUrl = t;
              }

              e.videoData = null, e.opt.ratio = "auto" == e.opt.ratio ? "16/9" : e.opt.ratio;
            }
            !e.isPlayer || e.opt.autoPlay || jQuery.browser.mobile || (e.loading = jQuery("<div/>").addClass("loading").html("Loading").hide(), jQuery(e).append(e.loading), e.loading.fadeIn());
          },
          removeStoredData: function removeStoredData() {
            jQuery.mbStorage.remove();
          },
          getVideoData: function getVideoData() {
            return this.get(0).videoData;
          },
          getVideoID: function getVideoID() {
            return this.get(0).videoID || !1;
          },
          setVideoQuality: function setVideoQuality(e) {
            this.get(0).player.setPlaybackQuality(e);
          },
          playlist: function playlist(e, t, n, r) {
            var i = this.get(0);
            return i.isPlayList = !0, t && (e = jQuery.shuffle(e)), i.videoID || (i.videos = e, i.videoCounter = 0, i.videoLength = e.length, jQuery(i).data("property", e[0]), jQuery(i).mb_YTPlayer()), "function" == typeof n && jQuery(i).one("YTPChanged", function () {
              n(i);
            }), jQuery(i).on("YTPEnd", function () {
              r = void 0 === r || r, jQuery(i).playNext(r);
            }), this;
          },
          playNext: function playNext(e) {
            var t = this.get(0);
            return t.checkForStartAt && (clearTimeout(t.checkForStartAt), clearInterval(t.getState)), t.videoCounter++, t.videoCounter >= t.videoLength && e && (t.videoCounter = 0), t.videoCounter < t.videoLength ? jQuery(t).YTPChangeMovie(t.videos[t.videoCounter]) : t.videoCounter--, this;
          },
          playPrev: function playPrev() {
            var e = this.get(0);
            return e.checkForStartAt && (clearInterval(e.checkForStartAt), clearInterval(e.getState)), e.videoCounter--, e.videoCounter < 0 && (e.videoCounter = e.videoLength - 1), jQuery(e).YTPChangeMovie(e.videos[e.videoCounter]), this;
          },
          playIndex: function playIndex(e) {
            var t = this.get(0);
            return e -= 1, t.checkForStartAt && (clearInterval(t.checkForStartAt), clearInterval(t.getState)), t.videoCounter = e, t.videoCounter >= t.videoLength - 1 && (t.videoCounter = t.videoLength - 1), jQuery(t).YTPChangeMovie(t.videos[t.videoCounter]), this;
          },
          changeMovie: function changeMovie(e) {
            var t = this.get(0);
            t.opt.startAt = 0, t.opt.stopAt = 0, t.opt.mask = !1, t.opt.mute = !0, t.hasData = !1, t.hasChanged = !0, t.player.loopTime = void 0, e && jQuery.extend(t.opt, e), t.videoID = getYTPVideoID(t.opt.videoURL).videoID, "true" == t.opt.loop && (t.opt.loop = 9999), jQuery(t.playerEl).CSSAnimate({
              opacity: 0
            }, t.opt.fadeOnStartTime, function () {
              var e = jQuery.Event("YTPChangeMovie");
              e.time = t.currentTime, e.videoId = t.videoID, jQuery(t).trigger(e), jQuery(t).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + t.videoID), 1, t.opt.quality), jQuery(t).optimizeDisplay(), jQuery.mbYTPlayer.checkForState(t), jQuery.mbYTPlayer.getDataFromAPI(t);
            }), jQuery.mbYTPlayer.applyMask(t);
          },
          getPlayer: function getPlayer() {
            return jQuery(this).get(0).player;
          },
          playerDestroy: function playerDestroy() {
            var e = this.get(0);
            return ytp.YTAPIReady = !0, ytp.backgroundIsInited = !1, e.isInit = !1, e.videoID = null, e.isReady = !1, e.wrapper.remove(), jQuery("#controlBar_" + e.id).remove(), clearInterval(e.checkForStartAt), clearInterval(e.getState), this;
          },
          fullscreen: function fullscreen(real) {
            var YTPlayer = this.get(0);
            void 0 === real && (real = YTPlayer.opt.realfullscreen), real = eval(real);
            var controls = jQuery("#controlBar_" + YTPlayer.id),
                fullScreenBtn = controls.find(".mb_OnlyYT"),
                videoWrapper = YTPlayer.isSelf ? YTPlayer.opt.containment : YTPlayer.wrapper;

            if (real) {
              var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
              jQuery(document).off(fullscreenchange).on(fullscreenchange, function () {
                RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen") ? (jQuery(YTPlayer).YTPSetVideoQuality("default"), jQuery(YTPlayer).trigger("YTPFullScreenStart")) : (YTPlayer.isAlone = !1, fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality), videoWrapper.removeClass("YTPFullscreen"), videoWrapper.CSSAnimate({
                  opacity: YTPlayer.opt.opacity
                }, YTPlayer.opt.fadeOnStartTime), videoWrapper.css({
                  zIndex: 0
                }), YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls), jQuery(window).resize(), jQuery(YTPlayer).trigger("YTPFullScreenEnd"));
              });
            }

            if (YTPlayer.isAlone) jQuery(document).off("mousemove.YTPlayer"), clearTimeout(YTPlayer.hideCursor), YTPlayer.overlay.css({
              cursor: "auto"
            }), real ? cancelFullscreen() : (videoWrapper.CSSAnimate({
              opacity: YTPlayer.opt.opacity
            }, YTPlayer.opt.fadeOnStartTime), videoWrapper.css({
              zIndex: 0
            })), fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), YTPlayer.isAlone = !1;else {
              var hideMouse = function hideMouse() {
                YTPlayer.overlay.css({
                  cursor: "none"
                });
              };

              jQuery(document).on("mousemove.YTPlayer", function (e) {
                YTPlayer.overlay.css({
                  cursor: "auto"
                }), clearTimeout(YTPlayer.hideCursor), jQuery(e.target).parents().is(".mb_YTPBar") || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3));
              }), hideMouse(), real ? (videoWrapper.css({
                opacity: 0
              }), videoWrapper.addClass("YTPFullscreen"), launchFullscreen(videoWrapper.get(0)), setTimeout(function () {
                videoWrapper.CSSAnimate({
                  opacity: 1
                }, YTPlayer.opt.fadeOnStartTime), YTPlayer.wrapper.append(controls), jQuery(YTPlayer).optimizeDisplay(), YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0);
              }, 500)) : videoWrapper.css({
                zIndex: 1e4
              }).CSSAnimate({
                opacity: 1
              }, YTPlayer.opt.fadeOnStartTime), fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite), YTPlayer.isAlone = !0;
            }

            function RunPrefixMethod(e, t) {
              for (var n, r, i = ["webkit", "moz", "ms", "o", ""], o = 0; o < i.length && !e[n];) {
                if (n = t, "" == i[o] && (n = n.substr(0, 1).toLowerCase() + n.substr(1)), "undefined" != (r = _typeof(e[n = i[o] + n]))) return i = [i[o]], "function" == r ? e[n]() : e[n];
                o++;
              }
            }

            function launchFullscreen(e) {
              RunPrefixMethod(e, "RequestFullScreen");
            }

            function cancelFullscreen() {
              (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen");
            }

            return this;
          },
          toggleLoops: function toggleLoops() {
            var e = this.get(0),
                t = e.opt;
            return 1 == t.loop ? t.loop = 0 : (t.startAt ? e.player.seekTo(t.startAt) : e.player.playVideo(), t.loop = 1), this;
          },
          play: function play() {
            var e = this.get(0);
            return e.isReady ? (e.player.playVideo(), e.wrapper.CSSAnimate({
              opacity: e.isAlone ? 1 : e.opt.opacity
            }, 2 * e.opt.fadeOnStartTime), jQuery(e.playerEl).CSSAnimate({
              opacity: 1
            }, e.opt.fadeOnStartTime), jQuery("#controlBar_" + e.id).find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause), e.state = 1, e.orig_background = jQuery(e).css("background-image"), this) : this;
          },
          togglePlay: function togglePlay(e) {
            var t = this.get(0);
            return 1 == t.state ? this.YTPPause() : this.YTPPlay(), "function" == typeof e && e(t.state), this;
          },
          stop: function stop() {
            var e = this.get(0);
            return jQuery("#controlBar_" + e.id).find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play), e.player.stopVideo(), this;
          },
          pause: function pause() {
            var e = this.get(0);
            return e.player.pauseVideo(), e.state = 2, this;
          },
          seekTo: function seekTo(e) {
            return this.get(0).player.seekTo(e, !0), this;
          },
          setVolume: function setVolume(e) {
            var t = this.get(0);
            return e || t.opt.vol || 0 != t.player.getVolume() ? !e && t.player.getVolume() > 0 || e && t.opt.vol == e ? t.isMute ? jQuery(t).YTPUnmute() : jQuery(t).YTPMute() : (t.opt.vol = e, t.player.setVolume(t.opt.vol), t.volumeBar && t.volumeBar.length && t.volumeBar.updateSliderVal(e)) : jQuery(t).YTPUnmute(), this;
          },
          toggleVolume: function toggleVolume() {
            var e = this.get(0);
            if (e) return e.player.isMuted() ? (jQuery(e).YTPUnmute(), !0) : (jQuery(e).YTPMute(), !1);
          },
          mute: function mute() {
            var e = this.get(0);

            if (!e.isMute) {
              e.player.mute(), e.isMute = !0, e.player.setVolume(0), e.volumeBar && e.volumeBar.length && e.volumeBar.width() > 10 && e.volumeBar.updateSliderVal(0), jQuery("#controlBar_" + e.id).find(".mb_YTPMuteUnmute").html(jQuery.mbYTPlayer.controls.unmute), jQuery(e).addClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.addClass("muted");
              var t = jQuery.Event("YTPMuted");
              return t.time = e.currentTime, e.canTrigger && jQuery(e).trigger(t), this;
            }
          },
          unmute: function unmute() {
            var e = this.get(0);

            if (e.isMute) {
              e.player.unMute(), e.isMute = !1, e.player.setVolume(e.opt.vol), e.volumeBar && e.volumeBar.length && e.volumeBar.updateSliderVal(e.opt.vol > 10 ? e.opt.vol : 10), jQuery("#controlBar_" + e.id).find(".mb_YTPMuteUnmute").html(jQuery.mbYTPlayer.controls.mute), jQuery(e).removeClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.removeClass("muted");
              var t = jQuery.Event("YTPUnmuted");
              return t.time = e.currentTime, e.canTrigger && jQuery(e).trigger(t), this;
            }
          },
          applyFilter: function applyFilter(e, t) {
            return this.each(function () {
              var n = this;
              n.filters[e].value = t, n.filtersEnabled && jQuery(n).YTPEnableFilters();
            });
          },
          applyFilters: function applyFilters(e) {
            return this.each(function () {
              var t = this;

              if (t.isReady) {
                for (var n in e) {
                  jQuery(t).YTPApplyFilter(n, e[n]);
                }

                jQuery(t).trigger("YTPFiltersApplied");
              } else jQuery(t).on("YTPReady", function () {
                jQuery(t).YTPApplyFilters(e);
              });
            });
          },
          toggleFilter: function toggleFilter(e, t) {
            return this.each(function () {
              var n = this;
              n.filters[e].value ? n.filters[e].value = 0 : n.filters[e].value = t, n.filtersEnabled && jQuery(this).YTPEnableFilters();
            });
          },
          toggleFilters: function toggleFilters(e) {
            return this.each(function () {
              var t = this;
              t.filtersEnabled ? (jQuery(t).trigger("YTPDisableFilters"), jQuery(t).YTPDisableFilters()) : (jQuery(t).YTPEnableFilters(), jQuery(t).trigger("YTPEnableFilters")), "function" == typeof e && e(t.filtersEnabled);
            });
          },
          disableFilters: function disableFilters() {
            return this.each(function () {
              var e = jQuery(this.playerEl);
              e.css("-webkit-filter", ""), e.css("filter", ""), this.filtersEnabled = !1;
            });
          },
          enableFilters: function enableFilters() {
            return this.each(function () {
              var e = this,
                  t = jQuery(e.playerEl),
                  n = "";

              for (var r in e.filters) {
                e.filters[r].value && (n += r.replace("_", "-") + "(" + e.filters[r].value + e.filters[r].unit + ") ");
              }

              t.css("-webkit-filter", n), t.css("filter", n), e.filtersEnabled = !0;
            });
          },
          removeFilter: function removeFilter(e, t) {
            return this.each(function () {
              if ("function" == typeof e && (t = e, e = null), e) jQuery(this).YTPApplyFilter(e, 0), "function" == typeof t && t(e);else for (var n in this.filters) {
                jQuery(this).YTPApplyFilter(n, 0), "function" == typeof t && t(n);
              }
            });
          },
          getFilters: function getFilters() {
            return this.get(0).filters;
          },
          addMask: function addMask(e) {
            var t = this.get(0),
                n = t.overlay;
            e || (e = t.actualMask);
            var r = jQuery("<img/>").attr("src", e).on("load", function () {
              n.CSSAnimate({
                opacity: 0
              }, t.opt.fadeOnStartTime, function () {
                t.hasMask = !0, r.remove(), n.css({
                  backgroundImage: "url(" + e + ")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundSize: "cover"
                }), n.CSSAnimate({
                  opacity: 1
                }, t.opt.fadeOnStartTime);
              });
            });
            return this;
          },
          removeMask: function removeMask() {
            var e = this.get(0),
                t = e.overlay;
            return t.CSSAnimate({
              opacity: 0
            }, e.opt.fadeOnStartTime, function () {
              e.hasMask = !1, t.css({
                backgroundImage: "",
                backgroundRepeat: "",
                backgroundPosition: "",
                backgroundSize: ""
              }), t.CSSAnimate({
                opacity: 1
              }, e.opt.fadeOnStartTime);
            }), this;
          },
          applyMask: function applyMask(e) {
            var t = jQuery(e);
            if (t.off("YTPTime.mask"), e.opt.mask) if ("string" == typeof e.opt.mask) t.YTPAddMask(e.opt.mask), e.actualMask = e.opt.mask;else if ("object" == _typeof(e.opt.mask)) {
              for (var n in e.opt.mask) {
                if (e.opt.mask[n]) jQuery("<img/>").attr("src", e.opt.mask[n]);
              }

              e.opt.mask[0] && t.YTPAddMask(e.opt.mask[0]), t.on("YTPTime.mask", function (n) {
                for (var r in e.opt.mask) {
                  n.time == r && (e.opt.mask[r] ? (t.YTPAddMask(e.opt.mask[r]), e.actualMask = e.opt.mask[r]) : t.YTPRemoveMask());
                }
              });
            }
          },
          toggleMask: function toggleMask() {
            var e = this.get(0),
                t = $(e);
            return e.hasMask ? t.YTPRemoveMask() : t.YTPAddMask(), this;
          },
          manageProgress: function manageProgress() {
            var e = this.get(0),
                t = jQuery("#controlBar_" + e.id),
                n = t.find(".mb_YTPProgress"),
                r = t.find(".mb_YTPLoaded"),
                i = t.find(".mb_YTPseekbar"),
                o = n.outerWidth(),
                a = Math.floor(e.player.getCurrentTime()),
                s = Math.floor(e.player.getDuration()),
                l = a * o / s,
                u = 100 * e.player.getVideoLoadedFraction();
            return r.css({
              left: 0,
              width: u + "%"
            }), i.css({
              left: 0,
              width: l
            }), {
              totalTime: s,
              currentTime: a
            };
          },
          buildControls: function buildControls(YTPlayer) {
            var data = YTPlayer.opt;

            if (data.showYTLogo = data.showYTLogo || data.printUrl, !jQuery("#controlBar_" + YTPlayer.id).length) {
              YTPlayer.controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
                whiteSpace: "noWrap",
                position: YTPlayer.isBackground ? "fixed" : "absolute",
                zIndex: YTPlayer.isBackground ? 1e4 : 1e3
              }).hide();
              var buttonBar = jQuery("<div/>").addClass("buttonBar"),
                  playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlaypause ytpicon").click(function () {
                1 == YTPlayer.player.getPlayerState() ? jQuery(YTPlayer).YTPPause() : jQuery(YTPlayer).YTPPlay();
              }),
                  MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function () {
                0 == YTPlayer.player.getVolume() ? jQuery(YTPlayer).YTPUnmute() : jQuery(YTPlayer).YTPMute();
              }),
                  volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({
                display: "inline-block"
              });
              YTPlayer.volumeBar = volumeBar;
              var idx = jQuery("<span/>").addClass("mb_YTPTime"),
                  vURL = data.videoURL ? data.videoURL : "";
              vURL.indexOf("http") < 0 && (vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL);
              var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function () {
                window.open(vURL, "viewOnYT");
              }),
                  onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function () {
                jQuery(YTPlayer).YTPFullscreen(data.realfullscreen);
              }),
                  progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").click(function (e) {
                timeBar.css({
                  width: e.clientX - timeBar.offset().left
                }), YTPlayer.timeW = e.clientX - timeBar.offset().left, YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                  width: 0
                });
                var t = Math.floor(YTPlayer.player.getDuration());
                YTPlayer["goto"] = timeBar.outerWidth() * t / progressBar.outerWidth(), YTPlayer.player.seekTo(parseFloat(YTPlayer["goto"]), !0), YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                  width: 0
                });
              }),
                  loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute"),
                  timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
              progressBar.append(loadedBar).append(timeBar), buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx), data.showYTLogo && buttonBar.append(movieUrl), (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo), YTPlayer.controlBar.append(buttonBar).append(progressBar), YTPlayer.isBackground ? jQuery("body").after(YTPlayer.controlBar) : (YTPlayer.controlBar.addClass("inlinePlayer"), YTPlayer.wrapper.before(YTPlayer.controlBar)), volumeBar.simpleSlider({
                initialval: YTPlayer.opt.vol,
                scale: 100,
                orientation: "h",
                callback: function callback(e) {
                  0 == e.value ? jQuery(YTPlayer).YTPMute() : jQuery(YTPlayer).YTPUnmute(), YTPlayer.player.setVolume(e.value), YTPlayer.isMute || (YTPlayer.opt.vol = e.value);
                }
              });
            }
          },
          checkForState: function checkForState(YTPlayer) {
            var interval = YTPlayer.opt.showControls ? 100 : 400;
            if (clearInterval(YTPlayer.getState), !jQuery.contains(document, YTPlayer)) return jQuery(YTPlayer).YTPPlayerDestroy(), clearInterval(YTPlayer.getState), void clearInterval(YTPlayer.checkForStartAt);
            jQuery.mbYTPlayer.checkForStart(YTPlayer), YTPlayer.getState = setInterval(function () {
              var prog = jQuery(YTPlayer).YTPManageProgress(),
                  $YTPlayer = jQuery(YTPlayer),
                  data = YTPlayer.opt,
                  startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1,
                  stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;

              if (stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0, YTPlayer.currentTime != prog.currentTime) {
                var YTPEvent = jQuery.Event("YTPTime");
                YTPEvent.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(YTPEvent);
              }

              if (YTPlayer.currentTime = prog.currentTime, YTPlayer.totalTime = YTPlayer.player.getDuration(), 0 == YTPlayer.player.getVolume() ? $YTPlayer.addClass("isMuted") : $YTPlayer.removeClass("isMuted"), YTPlayer.opt.showControls && (prog.totalTime ? YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime)) : YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")), eval(YTPlayer.opt.stopMovieOnBlur) && (document.hasFocus() ? document.hasFocus() && !YTPlayer.hasFocus && -1 != YTPlayer.state && 0 != YTPlayer.state && (YTPlayer.hasFocus = !0, $YTPlayer.YTPPlay()) : 1 == YTPlayer.state && (YTPlayer.hasFocus = !1, $YTPlayer.YTPPause())), YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact ? (YTPlayer.controlBar.addClass("compact"), YTPlayer.isCompact = !0, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)) : YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact && (YTPlayer.controlBar.removeClass("compact"), YTPlayer.isCompact = !1, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)), 1 == YTPlayer.player.getPlayerState() && (parseFloat(YTPlayer.player.getDuration() - 1.5) < YTPlayer.player.getCurrentTime() || stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt)) {
                if (YTPlayer.isEnded) return;

                if (YTPlayer.isEnded = !0, setTimeout(function () {
                  YTPlayer.isEnded = !1;
                }, 1e3), YTPlayer.isPlayList) {
                  if (!data.loop || data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1) {
                    YTPlayer.player.loopTime = void 0, clearInterval(YTPlayer.getState);
                    var YTPEnd = jQuery.Event("YTPEnd");
                    return YTPEnd.time = YTPlayer.currentTime, void jQuery(YTPlayer).trigger(YTPEnd);
                  }
                } else if (!data.loop || data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1) return YTPlayer.player.loopTime = void 0, YTPlayer.preventTrigger = !0, YTPlayer.state = 2, jQuery(YTPlayer).YTPPause(), void YTPlayer.wrapper.CSSAnimate({
                  opacity: 0
                }, YTPlayer.opt.fadeOnStartTime, function () {
                  YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                  var e = jQuery.Event("YTPEnd");
                  e.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(e), YTPlayer.player.seekTo(startAt, !0), YTPlayer.isBackground ? YTPlayer.orig_background && jQuery(YTPlayer).css("background-image", YTPlayer.orig_background) : YTPlayer.opt.backgroundUrl && YTPlayer.isPlayer && (YTPlayer.opt.backgroundUrl = YTPlayer.opt.backgroundUrl || YTPlayer.orig_background, YTPlayer.opt.containment.css({
                    background: "url(" + YTPlayer.opt.backgroundUrl + ") center center",
                    backgroundSize: "cover"
                  }));
                });

                YTPlayer.player.loopTime = YTPlayer.player.loopTime ? ++YTPlayer.player.loopTime : 1, startAt = startAt || 1, YTPlayer.preventTrigger = !0, YTPlayer.state = 2, jQuery(YTPlayer).YTPPause(), YTPlayer.player.seekTo(startAt, !0), $YTPlayer.YTPPlay();
              }
            }, interval);
          },
          getTime: function getTime() {
            var e = this.get(0);
            return jQuery.mbYTPlayer.formatTime(e.currentTime);
          },
          getTotalTime: function getTotalTime() {
            var e = this.get(0);
            return jQuery.mbYTPlayer.formatTime(e.totalTime);
          },
          checkForStart: function checkForStart(e) {
            var t = jQuery(e);

            if (jQuery.contains(document, e)) {
              if (e.preventTrigger = !0, e.state = 2, jQuery(e).YTPPause(), jQuery(e).muteYTPVolume(), jQuery("#controlBar_" + e.id).remove(), e.controlBar = !1, e.opt.showControls && jQuery.mbYTPlayer.buildControls(e), e.opt.addRaster) {
                var n = "dot" == e.opt.addRaster ? "raster-dot" : "raster";
                e.overlay.addClass(e.isRetina ? n + " retina" : n);
              } else e.overlay.removeClass(function (e, t) {
                var n = t.split(" "),
                    r = [];
                return jQuery.each(n, function (e, t) {
                  /raster.*/.test(t) && r.push(t);
                }), r.push("retina"), r.join(" ");
              });

              var r = e.opt.startAt ? e.opt.startAt : 1;
              e.player.playVideo(), e.player.seekTo(r, !0), e.checkForStartAt = setInterval(function () {
                jQuery(e).YTPMute();
                var n = e.player.getVideoLoadedFraction() >= r / e.player.getDuration();

                if (e.player.getDuration() > 0 && e.player.getCurrentTime() >= r && n) {
                  clearInterval(e.checkForStartAt), "function" == typeof e.opt.onReady && e.opt.onReady(e), e.isReady = !0;
                  var i = jQuery.Event("YTPReady");

                  if (i.time = e.currentTime, jQuery(e).trigger(i), e.preventTrigger = !0, e.state = 2, jQuery(e).YTPPause(), e.opt.mute || jQuery(e).YTPUnmute(), e.canTrigger = !0, e.opt.autoPlay) {
                    var o = jQuery.Event("YTPStart");
                    o.time = e.currentTime, jQuery(e).trigger(o), jQuery(e.playerEl).CSSAnimate({
                      opacity: 1
                    }, 1e3), t.YTPPlay(), e.wrapper.CSSAnimate({
                      opacity: e.isAlone ? 1 : e.opt.opacity
                    }, e.opt.fadeOnStartTime), jQuery.browser.safari && (e.safariPlay = setInterval(function () {
                      1 != e.state ? t.YTPPlay() : clearInterval(e.safariPlay);
                    }, 10)), t.on("YTPReady", function () {
                      t.YTPPlay();
                    });
                  } else e.player.pauseVideo(), e.isPlayer || (jQuery(e.playerEl).CSSAnimate({
                    opacity: 1
                  }, e.opt.fadeOnStartTime), e.wrapper.CSSAnimate({
                    opacity: e.isAlone ? 1 : e.opt.opacity
                  }, e.opt.fadeOnStartTime)), e.controlBar.length && e.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);

                  e.isPlayer && !e.opt.autoPlay && e.loading && e.loading.length && (e.loading.html("Ready"), setTimeout(function () {
                    e.loading.fadeOut();
                  }, 100)), e.controlBar && e.controlBar.length && e.controlBar.slideDown(1e3);
                } else jQuery.browser.safari && (e.player.playVideo(), r >= 0 && e.player.seekTo(r, !0));
              }, 1);
            } else jQuery(e).YTPPlayerDestroy();
          },
          setAnchor: function setAnchor(e) {
            this.optimizeDisplay(e);
          },
          getAnchor: function getAnchor() {
            return this.get(0).opt.anchor;
          },
          formatTime: function formatTime(e) {
            var t = Math.floor(e / 60),
                n = Math.floor(e - 60 * t);
            return (t <= 9 ? "0" + t : t) + " : " + (n <= 9 ? "0" + n : n);
          }
        }, jQuery.fn.optimizeDisplay = function (e) {
          var t = this.get(0),
              n = jQuery(t.playerEl),
              r = {};
          t.opt.anchor = e || t.opt.anchor, t.opt.anchor = "undefined " != typeof t.opt.anchor ? t.opt.anchor : "center,center";
          var i = t.opt.anchor.split(",");

          if (t.opt.optimizeDisplay) {
            var o = t.isPlayer ? 0 : 80,
                a = {},
                s = t.wrapper;
            a.width = s.outerWidth(), a.height = s.outerHeight() + o, r.width = a.width, r.height = "16/9" == t.opt.ratio ? Math.ceil(r.width * (9 / 16)) : Math.ceil(r.width * (3 / 4)), r.marginTop = -(r.height - a.height) / 2, r.marginLeft = 0;
            var l = r.height < a.height;

            for (var u in l && (r.height = a.height, r.width = "16/9" == t.opt.ratio ? Math.floor(r.height * (16 / 9)) : Math.floor(r.height * (4 / 3)), r.marginTop = 0, r.marginLeft = -(r.width - a.width) / 2), i) {
              if (i.hasOwnProperty(u)) switch (i[u].replace(/ /g, "")) {
                case "top":
                  r.marginTop = l ? -(r.height - a.height) / 2 : 0;
                  break;

                case "bottom":
                  r.marginTop = l ? 0 : -(r.height - a.height);
                  break;

                case "left":
                  r.marginLeft = 0;
                  break;

                case "right":
                  r.marginLeft = l ? -(r.width - a.width) : 0;
                  break;

                default:
                  r.width > a.width && (r.marginLeft = -(r.width - a.width) / 2);
              }
            }
          } else r.width = "100%", r.height = "100%", r.marginTop = 0, r.marginLeft = 0;

          n.css({
            width: r.width,
            height: r.height,
            marginTop: r.marginTop,
            marginLeft: r.marginLeft,
            maxWidth: "initial"
          });
        }, jQuery.shuffle = function (e) {
          for (var t = e.slice(), n = t.length, r = n; r--;) {
            var i = parseInt(Math.random() * n),
                o = t[r];
            t[r] = t[i], t[i] = o;
          }

          return t;
        }, jQuery.fn.unselectable = function () {
          return this.each(function () {
            jQuery(this).css({
              "-moz-user-select": "none",
              "-webkit-user-select": "none",
              "user-select": "none"
            }).attr("unselectable", "on");
          });
        }, jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play, jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay, jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop, jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause, jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo, jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist, jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext, jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex, jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute, jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute, jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume, jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData, jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter, jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters, jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter, jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters, jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter, jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters, jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters, jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters, jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime, jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime, jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask, jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask, jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask, jQuery.fn.YTPSetAnchor = jQuery.mbYTPlayer.setAnchor, jQuery.fn.YTPGetAnchor = jQuery.mbYTPlayer.getAnchor, jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.playNext = jQuery.mbYTPlayer.playNext, jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildControls, jQuery.fn.playYTP = jQuery.mbYTPlayer.play, jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.stopYTP = jQuery.mbYTPlayer.stop, jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pause, jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekTo, jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.mute, jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmute, jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPGetDataFromFeed = jQuery.mbYTPlayer.getVideoData;
      })(jQuery, ytp), jQuery.support.CSStransition = (t = (document.body || document.documentElement).style, void 0 !== t.transition || void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.MsTransition || void 0 !== t.OTransition), jQuery.CSS = {
        name: "mb.CSSAnimate",
        author: "Matteo Bicocchi",
        version: "2.0.0",
        transitionEnd: "transitionEnd",
        sfx: "",
        filters: {
          blur: {
            min: 0,
            max: 100,
            unit: "px"
          },
          brightness: {
            min: 0,
            max: 400,
            unit: "%"
          },
          contrast: {
            min: 0,
            max: 400,
            unit: "%"
          },
          grayscale: {
            min: 0,
            max: 100,
            unit: "%"
          },
          hueRotate: {
            min: 0,
            max: 360,
            unit: "deg"
          },
          invert: {
            min: 0,
            max: 100,
            unit: "%"
          },
          saturate: {
            min: 0,
            max: 400,
            unit: "%"
          },
          sepia: {
            min: 0,
            max: 100,
            unit: "%"
          }
        },
        normalizeCss: function normalizeCss(e) {
          var t = jQuery.extend(!0, {}, e);

          for (var n in jQuery.browser.webkit || jQuery.browser.opera ? jQuery.CSS.sfx = "-webkit-" : jQuery.browser.mozilla ? jQuery.CSS.sfx = "-moz-" : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-"), t) {
            "transform" === n && (t[jQuery.CSS.sfx + "transform"] = t[n], delete t[n]), "transform-origin" === n && (t[jQuery.CSS.sfx + "transform-origin"] = e[n], delete t[n]), "filter" !== n || jQuery.browser.mozilla || (t[jQuery.CSS.sfx + "filter"] = e[n], delete t[n]), "blur" === n && setFilter(t, "blur", e[n]), "brightness" === n && setFilter(t, "brightness", e[n]), "contrast" === n && setFilter(t, "contrast", e[n]), "grayscale" === n && setFilter(t, "grayscale", e[n]), "hueRotate" === n && setFilter(t, "hueRotate", e[n]), "invert" === n && setFilter(t, "invert", e[n]), "saturate" === n && setFilter(t, "saturate", e[n]), "sepia" === n && setFilter(t, "sepia", e[n]);
            var r = "";
            "x" === n && (t[r = jQuery.CSS.sfx + "transform"] = t[r] || "", t[r] += " translateX(" + setUnit(e[n], "px") + ")", delete t[n]), "y" === n && (t[r = jQuery.CSS.sfx + "transform"] = t[r] || "", t[r] += " translateY(" + setUnit(e[n], "px") + ")", delete t[n]), "z" === n && (t[r = jQuery.CSS.sfx + "transform"] = t[r] || "", t[r] += " translateZ(" + setUnit(e[n], "px") + ")", delete t[n]), "rotate" === n && (t[r = jQuery.CSS.sfx + "transform"] = t[r] || "", t[r] += " rotate(" + setUnit(e[n], "deg") + ")", delete t[n]), "rotateX" === n && (t[r = jQuery.CSS.sfx + "transform"] = t[r] || "", t[r] += " rotateX(" + setUnit(e[n], "deg") + ")", delete t[n]), "rotateY" === n && (t[r = jQuery.CSS.sfx + "transform"] = t[r] || "", t[r] += " rotateY(" + setUnit(e[n], "deg") + ")", delete t[n]), "rotateZ" === n && (t[r = jQuery.CSS.sfx + "transform"] = t[r] || "", t[r] += " rotateZ(" + setUnit(e[n], "deg") + ")", delete t[n]), "scale" === n && (t[r = jQuery.CSS.sfx + "transform"] = t[r] || "", t[r] += " scale(" + setUnit(e[n], "") + ")", delete t[n]), "scaleX" === n && (t[r = jQuery.CSS.sfx + "transform"] = t[r] || "", t[r] += " scaleX(" + setUnit(e[n], "") + ")", delete t[n]), "scaleY" === n && (t[r = jQuery.CSS.sfx + "transform"] = t[r] || "", t[r] += " scaleY(" + setUnit(e[n], "") + ")", delete t[n]), "scaleZ" === n && (t[r = jQuery.CSS.sfx + "transform"] = t[r] || "", t[r] += " scaleZ(" + setUnit(e[n], "") + ")", delete t[n]), "skew" === n && (t[r = jQuery.CSS.sfx + "transform"] = t[r] || "", t[r] += " skew(" + setUnit(e[n], "deg") + ")", delete t[n]), "skewX" === n && (t[r = jQuery.CSS.sfx + "transform"] = t[r] || "", t[r] += " skewX(" + setUnit(e[n], "deg") + ")", delete t[n]), "skewY" === n && (t[r = jQuery.CSS.sfx + "transform"] = t[r] || "", t[r] += " skewY(" + setUnit(e[n], "deg") + ")", delete t[n]), "perspective" === n && (t[r = jQuery.CSS.sfx + "transform"] = t[r] || "", t[r] += " perspective(" + setUnit(e[n], "px") + ")", delete t[n]);
          }

          return t;
        },
        getProp: function getProp(e) {
          var t = [];

          for (var n in e) {
            t.indexOf(n) < 0 && t.push(uncamel(n));
          }

          return t.join(",");
        },
        animate: function animate(e, t, n, r, i) {
          return this.each(function () {
            function o() {
              a.called = !0, a.CSSAIsRunning = !1, s.off(jQuery.CSS.transitionEnd + "." + a.id), clearTimeout(a.timeout), s.css(jQuery.CSS.sfx + "transition", ""), "function" == typeof i && i.apply(a), "function" == typeof a.CSSqueue && (a.CSSqueue(), a.CSSqueue = null);
            }

            var a = this,
                s = jQuery(this);
            a.id = a.id || "CSSA_" + new Date().getTime();
            var l = l || {
              type: "noEvent"
            };
            if (a.CSSAIsRunning && a.eventType == l.type && !jQuery.browser.msie && jQuery.browser.version <= 9) a.CSSqueue = function () {
              s.CSSAnimate(e, t, n, r, i);
            };else if (a.CSSqueue = null, a.eventType = l.type, 0 !== s.length && e) {
              if (e = jQuery.normalizeCss(e), a.CSSAIsRunning = !0, "function" == typeof t && (i = t, t = jQuery.fx.speeds._default), "function" == typeof n && (r = n, n = 0), "string" == typeof n && (i = n, n = 0), "function" == typeof r && (i = r, r = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof t) for (var u in jQuery.fx.speeds) {
                if (t == u) {
                  t = jQuery.fx.speeds[u];
                  break;
                }

                t = jQuery.fx.speeds._default;
              }

              if (t || (t = jQuery.fx.speeds._default), "string" == typeof i && (r = i, i = null), !jQuery.support.CSStransition) {
                for (var c in e) {
                  if ("transform" === c && delete e[c], "filter" === c && delete e[c], "transform-origin" === c && delete e[c], "auto" === e[c] && delete e[c], "x" === c) {
                    var f = e[c];
                    e["left"] = f, delete e[c];
                  }

                  if ("y" === c) {
                    f = e[c];
                    e["top"] = f, delete e[c];
                  }

                  ("-ms-transform" === c || "-ms-filter" === c) && delete e[c];
                }

                return void s.delay(n).animate(e, t, i);
              }

              var d = {
                "default": "ease",
                "in": "ease-in",
                out: "ease-out",
                "in-out": "ease-in-out",
                snap: "cubic-bezier(0,1,.5,1)",
                easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                easeInOutExpo: "cubic-bezier(1,0,0,1)",
                easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                easeInSine: "cubic-bezier(.47,0,.745,.715)",
                easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
              };
              d[r] && (r = d[r]), s.off(jQuery.CSS.transitionEnd + "." + a.id);
              var p = jQuery.CSS.getProp(e),
                  h = {};
              jQuery.extend(h, e), h[jQuery.CSS.sfx + "transition-property"] = p, h[jQuery.CSS.sfx + "transition-duration"] = t + "ms", h[jQuery.CSS.sfx + "transition-delay"] = n + "ms", h[jQuery.CSS.sfx + "transition-timing-function"] = r, setTimeout(function () {
                s.one(jQuery.CSS.transitionEnd + "." + a.id, o), s.css(h);
              }, 1), a.timeout = setTimeout(function () {
                return a.called || !i ? (a.called = !1, void (a.CSSAIsRunning = !1)) : (s.css(jQuery.CSS.sfx + "transition", ""), i.apply(a), a.CSSAIsRunning = !1, void ("function" == typeof a.CSSqueue && (a.CSSqueue(), a.CSSqueue = null)));
              }, t + n + 10);
            }
          });
        }
      }, jQuery.fn.CSSAnimate = jQuery.CSS.animate, jQuery.normalizeCss = jQuery.CSS.normalizeCss, jQuery.fn.css3 = function (e) {
        return this.each(function () {
          var t = jQuery(this),
              n = jQuery.normalizeCss(e);
          t.css(n);
        });
      };
      var nAgt = navigator.userAgent;

      if (!jQuery.browser) {
        var nameOffset, verOffset, ix;
        if (jQuery.browser = {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.androidStock = !1, jQuery.browser.msie = !1, jQuery.browser.ua = nAgt, jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10), -1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);else if (-1 != nAgt.indexOf("Trident") || -1 != nAgt.indexOf("Edge")) {
          jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
          var start = nAgt.indexOf("rv:") + 3,
              end = start + 4;
          jQuery.browser.fullVersion = nAgt.substring(start, end);
        } else -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : nAgt.indexOf("mozilla/5.0") > -1 && nAgt.indexOf("android ") > -1 && nAgt.indexOf("applewebkit") > -1 && !(nAgt.indexOf("chrome") > -1) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) || -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));
        -1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion;
      }

      jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && jQuery(window).width() > 765, jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt);
      var nAgt = navigator.userAgent,
          b,
          a;

      if (!jQuery.browser) {
        var nameOffset, verOffset, ix;
        if (jQuery.browser = {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.androidStock = !1, jQuery.browser.msie = !1, jQuery.browser.ua = nAgt, jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10), -1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);else if (-1 != nAgt.indexOf("Trident") || -1 != nAgt.indexOf("Edge")) {
          jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
          var start = nAgt.indexOf("rv:") + 3,
              end = start + 4;
          jQuery.browser.fullVersion = nAgt.substring(start, end);
        } else -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : nAgt.indexOf("mozilla/5.0") > -1 && nAgt.indexOf("android ") > -1 && nAgt.indexOf("applewebkit") > -1 && !(nAgt.indexOf("chrome") > -1) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) || -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));
        -1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion;
      }

      jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && jQuery(window).width() > 765, jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt), b = jQuery, b.simpleSlider = {
        defaults: {
          initialval: 0,
          scale: 100,
          orientation: "h",
          readonly: !1,
          callback: !1
        },
        events: {
          start: b.browser.mobile ? "touchstart" : "mousedown",
          end: b.browser.mobile ? "touchend" : "mouseup",
          move: b.browser.mobile ? "touchmove" : "mousemove"
        },
        init: function init(e) {
          return this.each(function () {
            var t = this,
                n = b(t);
            n.addClass("simpleSlider"), t.opt = {}, b.extend(t.opt, b.simpleSlider.defaults, e), b.extend(t.opt, n.data());
            var r = "h" == t.opt.orientation ? "horizontal" : "vertical";
            r = b("<div/>").addClass("level").addClass(r), n.prepend(r), t.level = r, n.css({
              cursor: "default"
            }), "auto" == t.opt.scale && (t.opt.scale = b(t).outerWidth()), n.updateSliderVal(), t.opt.readonly || (n.on(b.simpleSlider.events.start, function (e) {
              b.browser.mobile && (e = e.changedTouches[0]), t.canSlide = !0, n.updateSliderVal(e), "h" == t.opt.orientation ? n.css({
                cursor: "col-resize"
              }) : n.css({
                cursor: "row-resize"
              }), e.preventDefault(), e.stopPropagation();
            }), b(document).on(b.simpleSlider.events.move, function (e) {
              b.browser.mobile && (e = e.changedTouches[0]), t.canSlide && (b(document).css({
                cursor: "default"
              }), n.updateSliderVal(e), e.preventDefault(), e.stopPropagation());
            }).on(b.simpleSlider.events.end, function () {
              b(document).css({
                cursor: "auto"
              }), t.canSlide = !1, n.css({
                cursor: "auto"
              });
            }));
          });
        },
        updateSliderVal: function updateSliderVal(e) {
          var t = this.get(0);

          if (t.opt) {
            t.opt.initialval = "number" == typeof t.opt.initialval ? t.opt.initialval : t.opt.initialval(t);
            var n = b(t).outerWidth(),
                r = b(t).outerHeight();
            t.x = "object" == _typeof(e) ? e.clientX + document.body.scrollLeft - this.offset().left : "number" == typeof e ? e * n / t.opt.scale : t.opt.initialval * n / t.opt.scale, t.y = "object" == _typeof(e) ? e.clientY + document.body.scrollTop - this.offset().top : "number" == typeof e ? (t.opt.scale - t.opt.initialval - e) * r / t.opt.scale : t.opt.initialval * r / t.opt.scale, t.y = this.outerHeight() - t.y, t.scaleX = t.x * t.opt.scale / n, t.scaleY = t.y * t.opt.scale / r, t.outOfRangeX = t.scaleX > t.opt.scale ? t.scaleX - t.opt.scale : 0 > t.scaleX ? t.scaleX : 0, t.outOfRangeY = t.scaleY > t.opt.scale ? t.scaleY - t.opt.scale : 0 > t.scaleY ? t.scaleY : 0, t.outOfRange = "h" == t.opt.orientation ? t.outOfRangeX : t.outOfRangeY, t.value = void 0 !== e ? "h" == t.opt.orientation ? t.x >= this.outerWidth() ? t.opt.scale : 0 >= t.x ? 0 : t.scaleX : t.y >= this.outerHeight() ? t.opt.scale : 0 >= t.y ? 0 : t.scaleY : "h" == t.opt.orientation ? t.scaleX : t.scaleY, "h" == t.opt.orientation ? t.level.width(Math.floor(100 * t.x / n) + "%") : t.level.height(Math.floor(100 * t.y / r)), "function" == typeof t.opt.callback && t.opt.callback(t);
          }
        }
      }, b.fn.simpleSlider = b.simpleSlider.init, b.fn.updateSliderVal = b.simpleSlider.updateSliderVal, a = jQuery, a.mbCookie = {
        set: function set(e, t, n, r) {
          t = JSON.stringify(t), n || (n = 7), r = r ? "; domain=" + r : "";
          var i,
              o = new Date();
          o.setTime(o.getTime() + 864e5 * n), i = "; expires=" + o.toGMTString(), document.cookie = e + "=" + t + i + "; path=/" + r;
        },
        get: function get(e) {
          for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
            for (var i = n[r]; " " == i.charAt(0);) {
              i = i.substring(1, i.length);
            }

            if (0 == i.indexOf(t)) return JSON.parse(i.substring(t.length, i.length));
          }

          return null;
        },
        remove: function remove(e) {
          a.mbCookie.set(e, "", -1);
        }
      }, a.mbStorage = {
        set: function set(e, t) {
          t = JSON.stringify(t), localStorage.setItem(e, t);
        },
        get: function get(e) {
          return localStorage[e] ? JSON.parse(localStorage[e]) : null;
        },
        remove: function remove(e) {
          e ? localStorage.removeItem(e) : localStorage.clear();
        }
      };
    },
    748: function _() {
      function e() {
        if (document.body) {
          var e = document.body,
              t = document.documentElement,
              r = window.innerHeight,
              i = e.scrollHeight;
          if (_ = document.compatMode.indexOf("CSS") >= 0 ? t : e, u = e, T = !0, top != self) v = !0;else if (i > r && (e.offsetHeight <= r || t.offsetHeight <= r) && (_.style.height = "auto", _.offsetHeight <= r)) {
            var a = document.createElement("div");
            a.style.clear = "both", e.appendChild(a);
          }
          w || (e.style.backgroundAttachment = "scroll", t.style.backgroundAttachment = "scroll"), m && o("keydown", n);
        }
      }

      function t(e, t, n, r) {
        if (r || (r = 1e3), function (e, t) {
          e = e > 0 ? 1 : -1, t = t > 0 ? 1 : -1, (b.x !== e || b.y !== t) && (b.x = e, b.y = t, j = []);
        }(t, n), j.push({
          x: t,
          y: n,
          lastX: t < 0 ? .99 : -.99,
          lastY: n < 0 ? .99 : -.99,
          start: +new Date()
        }), !k) {
          setTimeout(function i() {
            for (var o = +new Date(), a = 0, s = 0, u = 0; u < j.length; u++) {
              var d = j[u],
                  h = o - d.start,
                  y = h >= f,
                  m = y ? 1 : h / f;
              p && (m = l(m));
              var g = d.x * m - d.lastX >> 0,
                  v = d.y * m - d.lastY >> 0;
              a += g, s += v, d.lastX += g, d.lastY += v, y && (j.splice(u, 1), u--);
            }

            if (t) {
              var b = e.scrollLeft;
              e.scrollLeft += a, a && e.scrollLeft === b && (t = 0);
            }

            if (n) {
              var T = e.scrollTop;
              e.scrollTop += s, s && e.scrollTop === T && (n = 0);
            }

            t || n || (j = []), j.length ? setTimeout(i, r / c + 1) : k = !1;
          }, 0), k = !0;
        }
      }

      function n(e) {
        var n = e.target,
            r = e.ctrlKey || e.altKey || e.metaKey;
        if (/input|textarea|embed/i.test(n.nodeName) || n.isContentEditable || e.defaultPrevented || r) return !0;
        if (a(n, "button") && e.keyCode === P.spacebar) return !0;
        var o = 0,
            s = 0,
            l = i(u),
            c = l.clientHeight;

        switch (l == document.body && (c = window.innerHeight), e.keyCode) {
          case P.up:
            s = -g;
            break;

          case P.down:
            s = g;
            break;

          case P.spacebar:
            s = -(e.shiftKey ? 1 : -1) * c * .9;
            break;

          case P.pageup:
            s = .9 * -c;
            break;

          case P.pagedown:
            s = .9 * c;
            break;

          case P.home:
            s = -l.scrollTop;
            break;

          case P.end:
            var f = l.scrollHeight - l.scrollTop - c;
            s = f > 0 ? f + 10 : 0;
            break;

          case P.left:
            o = -g;
            break;

          case P.right:
            o = g;
            break;

          default:
            return !0;
        }

        t(l, o, s), e.preventDefault();
      }

      function r(e, t) {
        for (var n = e.length; n--;) {
          x[S(e[n])] = t;
        }

        return t;
      }

      function i(e) {
        var t = [],
            n = _.scrollHeight;

        do {
          var i = x[S(e)];
          if (i) return r(t, i);

          if (t.push(e), n === e.scrollHeight) {
            if (!v || _.clientHeight + 10 < n) return r(t, document.body);
          } else if (e.clientHeight + 10 < e.scrollHeight && (overflow = getComputedStyle(e, "").getPropertyValue("overflow"), "scroll" === overflow || "auto" === overflow)) return r(t, e);
        } while (e = e.parentNode);
      }

      function o(e, t, n) {
        window.addEventListener(e, t, n || !1);
      }

      function a(e, t) {
        return e.nodeName.toLowerCase() === t.toLowerCase();
      }

      function s(e) {
        var t, n;
        return (e *= h) < 1 ? t = e - (1 - Math.exp(-e)) : (e -= 1, t = (n = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - n)), t * y;
      }

      function l(e) {
        return e >= 1 ? 1 : e <= 0 ? 0 : (1 == y && (y /= s(1)), s(e));
      }

      var u,
          c = 150,
          f = 500,
          d = 150,
          p = !0,
          h = 6,
          y = 1,
          m = !0,
          g = 50,
          v = !1,
          b = {
        x: 0,
        y: 0
      },
          T = !1,
          w = !0,
          _ = document.documentElement,
          P = {
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        spacebar: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36
      },
          j = [],
          k = !1,
          x = {};
      setInterval(function () {
        x = {};
      }, 1e4);
      var Y,
          S = (Y = 0, function (e) {
        return e.ssc_uniqueID || (e.ssc_uniqueID = Y++);
      });
      /chrome/.test(navigator.userAgent.toLowerCase()) && (o("mousedown", function (e) {
        u = e.target;
      }), o("mousewheel", function (n) {
        T || e();
        var r = n.target,
            o = i(r);
        if (!o || n.defaultPrevented || a(u, "embed") || a(r, "embed") && /\.pdf/i.test(r.src)) return !0;
        var s = n.wheelDeltaX || 0,
            l = n.wheelDeltaY || 0;
        s || l || (l = n.wheelDelta || 0), Math.abs(s) > 1.2 && (s *= d / 120), Math.abs(l) > 1.2 && (l *= d / 120), t(o, -s, -l), n.preventDefault();
      }), o("load", e));
    },
    545: function _() {
      (function () {
        var e,
            t,
            n,
            r,
            i,
            o = function o(e, t) {
          return function () {
            return e.apply(t, arguments);
          };
        },
            a = [].indexOf || function (e) {
          for (var t = 0, n = this.length; t < n; t++) {
            if (t in this && this[t] === e) return t;
          }

          return -1;
        };

        t = function () {
          function e() {}

          return e.prototype.extend = function (e, t) {
            var n, r;

            for (n in t) {
              r = t[n], null == e[n] && (e[n] = r);
            }

            return e;
          }, e.prototype.isMobile = function (e) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e);
          }, e.prototype.createEvent = function (e, t, n, r) {
            var i;
            return null == t && (t = !1), null == n && (n = !1), null == r && (r = null), null != document.createEvent ? (i = document.createEvent("CustomEvent")).initCustomEvent(e, t, n, r) : null != document.createEventObject ? (i = document.createEventObject()).eventType = e : i.eventName = e, i;
          }, e.prototype.emitEvent = function (e, t) {
            return null != e.dispatchEvent ? e.dispatchEvent(t) : t in (null != e) ? e[t]() : "on" + t in (null != e) ? e["on" + t]() : void 0;
          }, e.prototype.addEvent = function (e, t, n) {
            return null != e.addEventListener ? e.addEventListener(t, n, !1) : null != e.attachEvent ? e.attachEvent("on" + t, n) : e[t] = n;
          }, e.prototype.removeEvent = function (e, t, n) {
            return null != e.removeEventListener ? e.removeEventListener(t, n, !1) : null != e.detachEvent ? e.detachEvent("on" + t, n) : delete e[t];
          }, e.prototype.innerHeight = function () {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight;
          }, e;
        }(), n = this.WeakMap || this.MozWeakMap || (n = function () {
          function e() {
            this.keys = [], this.values = [];
          }

          return e.prototype.get = function (e) {
            var t, n, r, i;

            for (t = n = 0, r = (i = this.keys).length; n < r; t = ++n) {
              if (i[t] === e) return this.values[t];
            }
          }, e.prototype.set = function (e, t) {
            var n, r, i, o;

            for (n = r = 0, i = (o = this.keys).length; r < i; n = ++r) {
              if (o[n] === e) return void (this.values[n] = t);
            }

            return this.keys.push(e), this.values.push(t);
          }, e;
        }()), e = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (e = function () {
          function e() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.");
          }

          return e.notSupported = !0, e.prototype.observe = function () {}, e;
        }()), r = this.getComputedStyle || function (e, t) {
          return this.getPropertyValue = function (t) {
            var n;
            return "float" === t && (t = "styleFloat"), i.test(t) && t.replace(i, function (e, t) {
              return t.toUpperCase();
            }), (null != (n = e.currentStyle) ? n[t] : void 0) || null;
          }, this;
        }, i = /(\-([a-z]){1})/g, this.WOW = function () {
          function i(e) {
            null == e && (e = {}), this.scrollCallback = o(this.scrollCallback, this), this.scrollHandler = o(this.scrollHandler, this), this.resetAnimation = o(this.resetAnimation, this), this.start = o(this.start, this), this.scrolled = !0, this.config = this.util().extend(e, this.defaults), this.animationNameCache = new n(), this.wowEvent = this.util().createEvent(this.config.boxClass);
          }

          return i.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null
          }, i.prototype.init = function () {
            var e;
            return this.element = window.document.documentElement, "interactive" === (e = document.readyState) || "complete" === e ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = [];
          }, i.prototype.start = function () {
            var t, n, r, i, o;
            if (this.stopped = !1, this.boxes = function () {
              var e, n, r, i;

              for (i = [], e = 0, n = (r = this.element.querySelectorAll("." + this.config.boxClass)).length; e < n; e++) {
                t = r[e], i.push(t);
              }

              return i;
            }.call(this), this.all = function () {
              var e, n, r, i;

              for (i = [], e = 0, n = (r = this.boxes).length; e < n; e++) {
                t = r[e], i.push(t);
              }

              return i;
            }.call(this), this.boxes.length) if (this.disabled()) this.resetStyle();else for (n = 0, r = (i = this.boxes).length; n < r; n++) {
              t = i[n], this.applyStyle(t, !0);
            }
            if (this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) return new e((o = this, function (e) {
              var t, n, r, i, a;

              for (a = [], t = 0, n = e.length; t < n; t++) {
                i = e[t], a.push(function () {
                  var e, t, n, o;

                  for (o = [], e = 0, t = (n = i.addedNodes || []).length; e < t; e++) {
                    r = n[e], o.push(this.doSync(r));
                  }

                  return o;
                }.call(o));
              }

              return a;
            })).observe(document.body, {
              childList: !0,
              subtree: !0
            });
          }, i.prototype.stop = function () {
            if (this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval) return clearInterval(this.interval);
          }, i.prototype.sync = function (t) {
            if (e.notSupported) return this.doSync(this.element);
          }, i.prototype.doSync = function (e) {
            var t, n, r, i, o;

            if (null == e && (e = this.element), 1 === e.nodeType) {
              for (o = [], n = 0, r = (i = (e = e.parentNode || e).querySelectorAll("." + this.config.boxClass)).length; n < r; n++) {
                t = i[n], a.call(this.all, t) < 0 ? (this.boxes.push(t), this.all.push(t), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0), o.push(this.scrolled = !0)) : o.push(void 0);
              }

              return o;
            }
          }, i.prototype.show = function (e) {
            return this.applyStyle(e), e.className = e.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(e), this.util().emitEvent(e, this.wowEvent), this.util().addEvent(e, "animationend", this.resetAnimation), this.util().addEvent(e, "oanimationend", this.resetAnimation), this.util().addEvent(e, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(e, "MSAnimationEnd", this.resetAnimation), e;
          }, i.prototype.applyStyle = function (e, t) {
            var n, r, i, o;
            return r = e.getAttribute("data-wow-duration"), n = e.getAttribute("data-wow-delay"), i = e.getAttribute("data-wow-iteration"), this.animate((o = this, function () {
              return o.customStyle(e, t, r, n, i);
            }));
          }, i.prototype.animate = "requestAnimationFrame" in window ? function (e) {
            return window.requestAnimationFrame(e);
          } : function (e) {
            return e();
          }, i.prototype.resetStyle = function () {
            var e, t, n, r, i;

            for (i = [], t = 0, n = (r = this.boxes).length; t < n; t++) {
              e = r[t], i.push(e.style.visibility = "visible");
            }

            return i;
          }, i.prototype.resetAnimation = function (e) {
            var t;
            if (e.type.toLowerCase().indexOf("animationend") >= 0) return (t = e.target || e.srcElement).className = t.className.replace(this.config.animateClass, "").trim();
          }, i.prototype.customStyle = function (e, t, n, r, i) {
            return t && this.cacheAnimationName(e), e.style.visibility = t ? "hidden" : "visible", n && this.vendorSet(e.style, {
              animationDuration: n
            }), r && this.vendorSet(e.style, {
              animationDelay: r
            }), i && this.vendorSet(e.style, {
              animationIterationCount: i
            }), this.vendorSet(e.style, {
              animationName: t ? "none" : this.cachedAnimationName(e)
            }), e;
          }, i.prototype.vendors = ["moz", "webkit"], i.prototype.vendorSet = function (e, t) {
            var n, r, i, o;

            for (n in r = [], t) {
              i = t[n], e["" + n] = i, r.push(function () {
                var t, r, a, s;

                for (s = [], t = 0, r = (a = this.vendors).length; t < r; t++) {
                  o = a[t], s.push(e["" + o + n.charAt(0).toUpperCase() + n.substr(1)] = i);
                }

                return s;
              }.call(this));
            }

            return r;
          }, i.prototype.vendorCSS = function (e, t) {
            var n, i, o, a, s, l;

            for (a = (s = r(e)).getPropertyCSSValue(t), n = 0, i = (o = this.vendors).length; n < i; n++) {
              l = o[n], a = a || s.getPropertyCSSValue("-" + l + "-" + t);
            }

            return a;
          }, i.prototype.animationName = function (e) {
            var t;

            try {
              t = this.vendorCSS(e, "animation-name").cssText;
            } catch (n) {
              t = r(e).getPropertyValue("animation-name");
            }

            return "none" === t ? "" : t;
          }, i.prototype.cacheAnimationName = function (e) {
            return this.animationNameCache.set(e, this.animationName(e));
          }, i.prototype.cachedAnimationName = function (e) {
            return this.animationNameCache.get(e);
          }, i.prototype.scrollHandler = function () {
            return this.scrolled = !0;
          }, i.prototype.scrollCallback = function () {
            var e;
            if (this.scrolled && (this.scrolled = !1, this.boxes = function () {
              var t, n, r, i;

              for (i = [], t = 0, n = (r = this.boxes).length; t < n; t++) {
                (e = r[t]) && (this.isVisible(e) ? this.show(e) : i.push(e));
              }

              return i;
            }.call(this), !this.boxes.length && !this.config.live)) return this.stop();
          }, i.prototype.offsetTop = function (e) {
            for (var t; void 0 === e.offsetTop;) {
              e = e.parentNode;
            }

            for (t = e.offsetTop; e = e.offsetParent;) {
              t += e.offsetTop;
            }

            return t;
          }, i.prototype.isVisible = function (e) {
            var t, n, r, i, o;
            return n = e.getAttribute("data-wow-offset") || this.config.offset, i = (o = window.pageYOffset) + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, t = (r = this.offsetTop(e)) + e.clientHeight, r <= i && t >= o;
          }, i.prototype.util = function () {
            return null != this._util ? this._util : this._util = new t();
          }, i.prototype.disabled = function () {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent);
          }, i;
        }();
      }).call(this);
    },
    80: function _(e, t, n) {
      n(470), n(47), n(545), n(373), n(748), n(944), n(219);
    },
    47: function _(e, t, n) {
      var r, i, o;

      function a() {
        return a = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
          var r = s(e, t);

          if (r) {
            var i = Object.getOwnPropertyDescriptor(r, t);
            return i.get ? i.get.call(arguments.length < 3 ? e : n) : i.value;
          }
        }, a.apply(this, arguments);
      }

      function s(e, t) {
        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = m(e));) {
          ;
        }

        return e;
      }

      function l(e, t) {
        var n = Object.keys(e);

        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })), n.push.apply(n, r);
        }

        return n;
      }

      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? l(Object(n), !0).forEach(function (t) {
            c(e, t, n[t]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }

        return e;
      }

      function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e;
      }

      function f(e) {
        return function (e) {
          if (Array.isArray(e)) return _(e);
        }(e) || function (e) {
          if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
        }(e) || w(e) || function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }

      function d(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        Object.defineProperty(e, "prototype", {
          value: Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }),
          writable: !1
        }), t && p(e, t);
      }

      function p(e, t) {
        return p = Object.setPrototypeOf || function (e, t) {
          return e.__proto__ = t, e;
        }, p(e, t);
      }

      function h(e) {
        var t = function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;

          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
          } catch (e) {
            return !1;
          }
        }();

        return function () {
          var n,
              r = m(e);

          if (t) {
            var i = m(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);

          return y(this, n);
        };
      }

      function y(e, t) {
        if (t && ("object" === P(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return function (e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }(e);
      }

      function m(e) {
        return m = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }, m(e);
      }

      function g(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      function v(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }

      function b(e, t, n) {
        return t && v(e.prototype, t), n && v(e, n), Object.defineProperty(e, "prototype", {
          writable: !1
        }), e;
      }

      function T(e, t) {
        return function (e) {
          if (Array.isArray(e)) return e;
        }(e) || function (e, t) {
          var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null == n) return;
          var r,
              i,
              o = [],
              a = !0,
              s = !1;

          try {
            for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0) {
              ;
            }
          } catch (e) {
            s = !0, i = e;
          } finally {
            try {
              a || null == n["return"] || n["return"]();
            } finally {
              if (s) throw i;
            }
          }

          return o;
        }(e, t) || w(e, t) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }

      function w(e, t) {
        if (e) {
          if ("string" == typeof e) return _(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _(e, t) : void 0;
        }
      }

      function _(e, t) {
        (null == t || t > e.length) && (t = e.length);

        for (var n = 0, r = new Array(t); n < t; n++) {
          r[n] = e[n];
        }

        return r;
      }

      function P(e) {
        return P = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
          return _typeof2(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
        }, P(e);
      }

      o = function o() {
        "use strict";

        var e = "transitionend",
            t = function t(e) {
          var t = e.getAttribute("data-bs-target");

          if (!t || "#" === t) {
            var n = e.getAttribute("href");
            if (!n || !n.includes("#") && !n.startsWith(".")) return null;
            n.includes("#") && !n.startsWith("#") && (n = "#".concat(n.split("#")[1])), t = n && "#" !== n ? n.trim() : null;
          }

          return t;
        },
            n = function n(e) {
          var n = t(e);
          return n && document.querySelector(n) ? n : null;
        },
            r = function r(e) {
          var n = t(e);
          return n ? document.querySelector(n) : null;
        },
            i = function i(t) {
          t.dispatchEvent(new Event(e));
        },
            o = function o(e) {
          return !(!e || "object" != P(e)) && (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType);
        },
            s = function s(e) {
          return o(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? document.querySelector(e) : null;
        },
            l = function l(e, t, n) {
          Object.keys(n).forEach(function (r) {
            var i,
                a = n[r],
                s = t[r],
                l = s && o(s) ? "element" : null == (i = s) ? "".concat(i) : {}.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
            if (!new RegExp(a).test(l)) throw new TypeError("".concat(e.toUpperCase(), ': Option "').concat(r, '" provided type "').concat(l, '" but expected type "').concat(a, '".'));
          });
        },
            c = function c(e) {
          return !(!o(e) || 0 === e.getClientRects().length) && "visible" === getComputedStyle(e).getPropertyValue("visibility");
        },
            p = function p(e) {
          return !e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled"));
        },
            y = function e(t) {
          if (!document.documentElement.attachShadow) return null;

          if ("function" == typeof t.getRootNode) {
            var n = t.getRootNode();
            return n instanceof ShadowRoot ? n : null;
          }

          return t instanceof ShadowRoot ? t : t.parentNode ? e(t.parentNode) : null;
        },
            v = function v() {},
            w = function w(e) {
          e.offsetHeight;
        },
            _ = function _() {
          var e = window.jQuery;
          return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null;
        },
            j = [],
            k = function k() {
          return "rtl" === document.documentElement.dir;
        },
            x = function x(e) {
          var t;
          t = function t() {
            var t = _();

            if (t) {
              var n = e.NAME,
                  r = t.fn[n];
              t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = function () {
                return t.fn[n] = r, e.jQueryInterface;
              };
            }
          }, "loading" === document.readyState ? (j.length || document.addEventListener("DOMContentLoaded", function () {
            j.forEach(function (e) {
              return e();
            });
          }), j.push(t)) : t();
        },
            Y = function Y(e) {
          "function" == typeof e && e();
        },
            S = function S(t, n) {
          var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];

          if (r) {
            var o = function (e) {
              if (!e) return 0;
              var t = window.getComputedStyle(e),
                  n = t.transitionDuration,
                  r = t.transitionDelay,
                  i = Number.parseFloat(n),
                  o = Number.parseFloat(r);
              return i || o ? (n = n.split(",")[0], r = r.split(",")[0], 1e3 * (Number.parseFloat(n) + Number.parseFloat(r))) : 0;
            }(n) + 5,
                a = !1,
                s = function r(i) {
              i.target === n && (a = !0, n.removeEventListener(e, r), Y(t));
            };

            n.addEventListener(e, s), setTimeout(function () {
              a || i(n);
            }, o);
          } else Y(t);
        },
            C = function C(e, t, n, r) {
          var i = e.indexOf(t);
          if (-1 === i) return e[!n && r ? e.length - 1 : 0];
          var o = e.length;
          return i += n ? 1 : -1, r && (i = (i + o) % o), e[Math.max(0, Math.min(i, o - 1))];
        },
            E = /[^.]*(?=\..*)\.|.*/,
            A = /\..*/,
            Q = /::\d+$/,
            O = {},
            D = 1,
            I = {
          mouseenter: "mouseover",
          mouseleave: "mouseout"
        },
            L = /^(mouseenter|mouseleave)/i,
            N = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

        function M(e, t) {
          return t && "".concat(t, "::").concat(D++) || e.uidEvent || D++;
        }

        function B(e) {
          var t = M(e);
          return e.uidEvent = t, O[t] = O[t] || {}, O[t];
        }

        function R(e, t) {
          for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, r = Object.keys(e), i = 0, o = r.length; i < o; i++) {
            var a = e[r[i]];
            if (a.originalHandler === t && a.delegationSelector === n) return a;
          }

          return null;
        }

        function F(e, t, n) {
          var r = "string" == typeof t,
              i = r ? n : t,
              o = V(e);
          return N.has(o) || (o = e), [r, i, o];
        }

        function q(e, t, n, r, i) {
          if ("string" == typeof t && e) {
            if (n || (n = r, r = null), L.test(t)) {
              var o = function o(e) {
                return function (t) {
                  if (!t.relatedTarget || t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget)) return e.call(this, t);
                };
              };

              r ? r = o(r) : n = o(n);
            }

            var a = T(F(t, n, r), 3),
                s = a[0],
                l = a[1],
                u = a[2],
                c = B(e),
                f = c[u] || (c[u] = {}),
                d = R(f, l, s ? n : null);
            if (d) d.oneOff = d.oneOff && i;else {
              var p = M(l, t.replace(E, "")),
                  h = s ? function (e, t, n) {
                return function r(i) {
                  for (var o = e.querySelectorAll(t), a = i.target; a && a !== this; a = a.parentNode) {
                    for (var s = o.length; s--;) {
                      if (o[s] === a) return i.delegateTarget = a, r.oneOff && $.off(e, i.type, t, n), n.apply(a, [i]);
                    }
                  }

                  return null;
                };
              }(e, n, r) : function (e, t) {
                return function n(r) {
                  return r.delegateTarget = e, n.oneOff && $.off(e, r.type, t), t.apply(e, [r]);
                };
              }(e, n);
              h.delegationSelector = s ? n : null, h.originalHandler = l, h.oneOff = i, h.uidEvent = p, f[p] = h, e.addEventListener(u, h, s);
            }
          }
        }

        function H(e, t, n, r, i) {
          var o = R(t[n], r, i);
          o && (e.removeEventListener(n, o, Boolean(i)), delete t[n][o.uidEvent]);
        }

        function V(e) {
          return e = e.replace(A, ""), I[e] || e;
        }

        var $ = {
          on: function on(e, t, n, r) {
            q(e, t, n, r, !1);
          },
          one: function one(e, t, n, r) {
            q(e, t, n, r, !0);
          },
          off: function off(e, t, n, r) {
            if ("string" == typeof t && e) {
              var i = T(F(t, n, r), 3),
                  o = i[0],
                  a = i[1],
                  s = i[2],
                  l = s !== t,
                  u = B(e),
                  c = t.startsWith(".");

              if (void 0 === a) {
                c && Object.keys(u).forEach(function (n) {
                  !function (e, t, n, r) {
                    var i = t[n] || {};
                    Object.keys(i).forEach(function (o) {
                      if (o.includes(r)) {
                        var a = i[o];
                        H(e, t, n, a.originalHandler, a.delegationSelector);
                      }
                    });
                  }(e, u, n, t.slice(1));
                });
                var f = u[s] || {};
                Object.keys(f).forEach(function (n) {
                  var r = n.replace(Q, "");

                  if (!l || t.includes(r)) {
                    var i = f[n];
                    H(e, u, s, i.originalHandler, i.delegationSelector);
                  }
                });
              } else {
                if (!u || !u[s]) return;
                H(e, u, s, a, o ? n : null);
              }
            }
          },
          trigger: function trigger(e, t, n) {
            if ("string" != typeof t || !e) return null;

            var r,
                i = _(),
                o = V(t),
                a = t !== o,
                s = N.has(o),
                l = !0,
                u = !0,
                c = !1,
                f = null;

            return a && i && (r = i.Event(t, n), i(e).trigger(r), l = !r.isPropagationStopped(), u = !r.isImmediatePropagationStopped(), c = r.isDefaultPrevented()), s ? (f = document.createEvent("HTMLEvents")).initEvent(o, l, !0) : f = new CustomEvent(t, {
              bubbles: l,
              cancelable: !0
            }), void 0 !== n && Object.keys(n).forEach(function (e) {
              Object.defineProperty(f, e, {
                get: function get() {
                  return n[e];
                }
              });
            }), c && f.preventDefault(), u && e.dispatchEvent(f), f.defaultPrevented && void 0 !== r && r.preventDefault(), f;
          }
        },
            z = new Map(),
            W = function W(e, t, n) {
          z.has(e) || z.set(e, new Map());
          var r = z.get(e);
          r.has(t) || 0 === r.size ? r.set(t, n) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(r.keys())[0], "."));
        },
            U = function U(e, t) {
          return z.has(e) && z.get(e).get(t) || null;
        },
            X = function X(e, t) {
          if (z.has(e)) {
            var n = z.get(e);
            n["delete"](t), 0 === n.size && z["delete"](e);
          }
        },
            K = function () {
          function e(t) {
            g(this, e), (t = s(t)) && (this._element = t, W(this._element, this.constructor.DATA_KEY, this));
          }

          return b(e, [{
            key: "dispose",
            value: function value() {
              var e = this;
              X(this._element, this.constructor.DATA_KEY), $.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(function (t) {
                e[t] = null;
              });
            }
          }, {
            key: "_queueCallback",
            value: function value(e, t) {
              var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              S(e, t, n);
            }
          }], [{
            key: "getInstance",
            value: function value(e) {
              return U(s(e), this.DATA_KEY);
            }
          }, {
            key: "getOrCreateInstance",
            value: function value(e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              return this.getInstance(e) || new this(e, "object" == P(t) ? t : null);
            }
          }, {
            key: "VERSION",
            get: function get() {
              return "5.1.3";
            }
          }, {
            key: "NAME",
            get: function get() {
              throw new Error('You have to implement the static method "NAME", for each component!');
            }
          }, {
            key: "DATA_KEY",
            get: function get() {
              return "bs.".concat(this.NAME);
            }
          }, {
            key: "EVENT_KEY",
            get: function get() {
              return ".".concat(this.DATA_KEY);
            }
          }]), e;
        }(),
            G = function G(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "hide",
              n = "click.dismiss".concat(e.EVENT_KEY),
              i = e.NAME;
          $.on(document, n, '[data-bs-dismiss="'.concat(i, '"]'), function (n) {
            if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), !p(this)) {
              var o = r(this) || this.closest(".".concat(i));
              e.getOrCreateInstance(o)[t]();
            }
          });
        },
            J = function (e) {
          d(n, e);
          var t = h(n);

          function n() {
            return g(this, n), t.apply(this, arguments);
          }

          return b(n, [{
            key: "close",
            value: function value() {
              var e = this;

              if (!$.trigger(this._element, "close.bs.alert").defaultPrevented) {
                this._element.classList.remove("show");

                var t = this._element.classList.contains("fade");

                this._queueCallback(function () {
                  return e._destroyElement();
                }, this._element, t);
              }
            }
          }, {
            key: "_destroyElement",
            value: function value() {
              this._element.remove(), $.trigger(this._element, "closed.bs.alert"), this.dispose();
            }
          }], [{
            key: "NAME",
            get: function get() {
              return "alert";
            }
          }, {
            key: "jQueryInterface",
            value: function value(e) {
              return this.each(function () {
                var t = n.getOrCreateInstance(this);

                if ("string" == typeof e) {
                  if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError('No method named "'.concat(e, '"'));
                  t[e](this);
                }
              });
            }
          }]), n;
        }(K);

        G(J, "close"), x(J);

        var Z = '[data-bs-toggle="button"]',
            ee = function (e) {
          d(n, e);
          var t = h(n);

          function n() {
            return g(this, n), t.apply(this, arguments);
          }

          return b(n, [{
            key: "toggle",
            value: function value() {
              this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
            }
          }], [{
            key: "NAME",
            get: function get() {
              return "button";
            }
          }, {
            key: "jQueryInterface",
            value: function value(e) {
              return this.each(function () {
                var t = n.getOrCreateInstance(this);
                "toggle" === e && t[e]();
              });
            }
          }]), n;
        }(K);

        function te(e) {
          return "true" === e || "false" !== e && (e === Number(e).toString() ? Number(e) : "" === e || "null" === e ? null : e);
        }

        function ne(e) {
          return e.replace(/[A-Z]/g, function (e) {
            return "-".concat(e.toLowerCase());
          });
        }

        $.on(document, "click.bs.button.data-api", Z, function (e) {
          e.preventDefault();
          var t = e.target.closest(Z);
          ee.getOrCreateInstance(t).toggle();
        }), x(ee);

        var re = {
          setDataAttribute: function setDataAttribute(e, t, n) {
            e.setAttribute("data-bs-".concat(ne(t)), n);
          },
          removeDataAttribute: function removeDataAttribute(e, t) {
            e.removeAttribute("data-bs-".concat(ne(t)));
          },
          getDataAttributes: function getDataAttributes(e) {
            if (!e) return {};
            var t = {};
            return Object.keys(e.dataset).filter(function (e) {
              return e.startsWith("bs");
            }).forEach(function (n) {
              var r = n.replace(/^bs/, "");
              r = r.charAt(0).toLowerCase() + r.slice(1, r.length), t[r] = te(e.dataset[n]);
            }), t;
          },
          getDataAttribute: function getDataAttribute(e, t) {
            return te(e.getAttribute("data-bs-".concat(ne(t))));
          },
          offset: function offset(e) {
            var t = e.getBoundingClientRect();
            return {
              top: t.top + window.pageYOffset,
              left: t.left + window.pageXOffset
            };
          },
          position: function position(e) {
            return {
              top: e.offsetTop,
              left: e.offsetLeft
            };
          }
        },
            ie = {
          find: function find(e) {
            var t,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.documentElement;
            return (t = []).concat.apply(t, f(Element.prototype.querySelectorAll.call(n, e)));
          },
          findOne: function findOne(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.documentElement;
            return Element.prototype.querySelector.call(t, e);
          },
          children: function children(e, t) {
            var n;
            return (n = []).concat.apply(n, f(e.children)).filter(function (e) {
              return e.matches(t);
            });
          },
          parents: function parents(e, t) {
            for (var n = [], r = e.parentNode; r && r.nodeType === Node.ELEMENT_NODE && 3 !== r.nodeType;) {
              r.matches(t) && n.push(r), r = r.parentNode;
            }

            return n;
          },
          prev: function prev(e, t) {
            for (var n = e.previousElementSibling; n;) {
              if (n.matches(t)) return [n];
              n = n.previousElementSibling;
            }

            return [];
          },
          next: function next(e, t) {
            for (var n = e.nextElementSibling; n;) {
              if (n.matches(t)) return [n];
              n = n.nextElementSibling;
            }

            return [];
          },
          focusableChildren: function focusableChildren(e) {
            var t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(function (e) {
              return "".concat(e, ':not([tabindex^="-"])');
            }).join(", ");
            return this.find(t, e).filter(function (e) {
              return !p(e) && c(e);
            });
          }
        },
            oe = "carousel",
            ae = {
          interval: 5e3,
          keyboard: !0,
          slide: !1,
          pause: "hover",
          wrap: !0,
          touch: !0
        },
            se = {
          interval: "(number|boolean)",
          keyboard: "boolean",
          slide: "(boolean|string)",
          pause: "(string|boolean)",
          wrap: "boolean",
          touch: "boolean"
        },
            le = "next",
            ue = "prev",
            ce = "left",
            fe = "right",
            de = {
          ArrowLeft: fe,
          ArrowRight: ce
        },
            pe = "slid.bs.carousel",
            he = "active",
            ye = ".active.carousel-item",
            me = function (e) {
          d(n, e);
          var t = h(n);

          function n(e, r) {
            var i;
            return g(this, n), (i = t.call(this, e))._items = null, i._interval = null, i._activeElement = null, i._isPaused = !1, i._isSliding = !1, i.touchTimeout = null, i.touchStartX = 0, i.touchDeltaX = 0, i._config = i._getConfig(r), i._indicatorsElement = ie.findOne(".carousel-indicators", i._element), i._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, i._pointerEvent = Boolean(window.PointerEvent), i._addEventListeners(), i;
          }

          return b(n, [{
            key: "next",
            value: function value() {
              this._slide(le);
            }
          }, {
            key: "nextWhenVisible",
            value: function value() {
              !document.hidden && c(this._element) && this.next();
            }
          }, {
            key: "prev",
            value: function value() {
              this._slide(ue);
            }
          }, {
            key: "pause",
            value: function value(e) {
              e || (this._isPaused = !0), ie.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (i(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
            }
          }, {
            key: "cycle",
            value: function value(e) {
              e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
            }
          }, {
            key: "to",
            value: function value(e) {
              var t = this;
              this._activeElement = ie.findOne(ye, this._element);

              var n = this._getItemIndex(this._activeElement);

              if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) $.one(this._element, pe, function () {
                return t.to(e);
              });else {
                if (n === e) return this.pause(), void this.cycle();
                var r = e > n ? le : ue;

                this._slide(r, this._items[e]);
              }
            }
          }, {
            key: "_getConfig",
            value: function value(e) {
              return e = u(u(u({}, ae), re.getDataAttributes(this._element)), "object" == P(e) ? e : {}), l(oe, e, se), e;
            }
          }, {
            key: "_handleSwipe",
            value: function value() {
              var e = Math.abs(this.touchDeltaX);

              if (!(e <= 40)) {
                var t = e / this.touchDeltaX;
                this.touchDeltaX = 0, t && this._slide(t > 0 ? fe : ce);
              }
            }
          }, {
            key: "_addEventListeners",
            value: function value() {
              var e = this;
              this._config.keyboard && $.on(this._element, "keydown.bs.carousel", function (t) {
                return e._keydown(t);
              }), "hover" === this._config.pause && ($.on(this._element, "mouseenter.bs.carousel", function (t) {
                return e.pause(t);
              }), $.on(this._element, "mouseleave.bs.carousel", function (t) {
                return e.cycle(t);
              })), this._config.touch && this._touchSupported && this._addTouchEventListeners();
            }
          }, {
            key: "_addTouchEventListeners",
            value: function value() {
              var e = this,
                  t = function t(_t2) {
                return e._pointerEvent && ("pen" === _t2.pointerType || "touch" === _t2.pointerType);
              },
                  n = function n(_n2) {
                t(_n2) ? e.touchStartX = _n2.clientX : e._pointerEvent || (e.touchStartX = _n2.touches[0].clientX);
              },
                  r = function r(n) {
                t(n) && (e.touchDeltaX = n.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
                  return e.cycle(t);
                }, 500 + e._config.interval));
              };

              ie.find(".carousel-item img", this._element).forEach(function (e) {
                $.on(e, "dragstart.bs.carousel", function (e) {
                  return e.preventDefault();
                });
              }), this._pointerEvent ? ($.on(this._element, "pointerdown.bs.carousel", function (e) {
                return n(e);
              }), $.on(this._element, "pointerup.bs.carousel", function (e) {
                return r(e);
              }), this._element.classList.add("pointer-event")) : ($.on(this._element, "touchstart.bs.carousel", function (e) {
                return n(e);
              }), $.on(this._element, "touchmove.bs.carousel", function (t) {
                return function (t) {
                  e.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - e.touchStartX;
                }(t);
              }), $.on(this._element, "touchend.bs.carousel", function (e) {
                return r(e);
              }));
            }
          }, {
            key: "_keydown",
            value: function value(e) {
              if (!/input|textarea/i.test(e.target.tagName)) {
                var t = de[e.key];
                t && (e.preventDefault(), this._slide(t));
              }
            }
          }, {
            key: "_getItemIndex",
            value: function value(e) {
              return this._items = e && e.parentNode ? ie.find(".carousel-item", e.parentNode) : [], this._items.indexOf(e);
            }
          }, {
            key: "_getItemByOrder",
            value: function value(e, t) {
              var n = e === le;
              return C(this._items, t, n, this._config.wrap);
            }
          }, {
            key: "_triggerSlideEvent",
            value: function value(e, t) {
              var n = this._getItemIndex(e),
                  r = this._getItemIndex(ie.findOne(ye, this._element));

              return $.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: e,
                direction: t,
                from: r,
                to: n
              });
            }
          }, {
            key: "_setActiveIndicatorElement",
            value: function value(e) {
              if (this._indicatorsElement) {
                var t = ie.findOne(".active", this._indicatorsElement);
                t.classList.remove(he), t.removeAttribute("aria-current");

                for (var n = ie.find("[data-bs-target]", this._indicatorsElement), r = 0; r < n.length; r++) {
                  if (Number.parseInt(n[r].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)) {
                    n[r].classList.add(he), n[r].setAttribute("aria-current", "true");
                    break;
                  }
                }
              }
            }
          }, {
            key: "_updateInterval",
            value: function value() {
              var e = this._activeElement || ie.findOne(ye, this._element);

              if (e) {
                var t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
                t ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval;
              }
            }
          }, {
            key: "_slide",
            value: function value(e, t) {
              var n = this,
                  r = this._directionToOrder(e),
                  i = ie.findOne(ye, this._element),
                  o = this._getItemIndex(i),
                  a = t || this._getItemByOrder(r, i),
                  s = this._getItemIndex(a),
                  l = Boolean(this._interval),
                  u = r === le,
                  c = u ? "carousel-item-start" : "carousel-item-end",
                  f = u ? "carousel-item-next" : "carousel-item-prev",
                  d = this._orderToDirection(r);

              if (a && a.classList.contains(he)) this._isSliding = !1;else if (!this._isSliding && !this._triggerSlideEvent(a, d).defaultPrevented && i && a) {
                this._isSliding = !0, l && this.pause(), this._setActiveIndicatorElement(a), this._activeElement = a;

                var p = function p() {
                  $.trigger(n._element, pe, {
                    relatedTarget: a,
                    direction: d,
                    from: o,
                    to: s
                  });
                };

                this._element.classList.contains("slide") ? (a.classList.add(f), w(a), i.classList.add(c), a.classList.add(c), this._queueCallback(function () {
                  a.classList.remove(c, f), a.classList.add(he), i.classList.remove(he, f, c), n._isSliding = !1, setTimeout(p, 0);
                }, i, !0)) : (i.classList.remove(he), a.classList.add(he), this._isSliding = !1, p()), l && this.cycle();
              }
            }
          }, {
            key: "_directionToOrder",
            value: function value(e) {
              return [fe, ce].includes(e) ? k() ? e === ce ? ue : le : e === ce ? le : ue : e;
            }
          }, {
            key: "_orderToDirection",
            value: function value(e) {
              return [le, ue].includes(e) ? k() ? e === ue ? ce : fe : e === ue ? fe : ce : e;
            }
          }], [{
            key: "Default",
            get: function get() {
              return ae;
            }
          }, {
            key: "NAME",
            get: function get() {
              return oe;
            }
          }, {
            key: "carouselInterface",
            value: function value(e, t) {
              var r = n.getOrCreateInstance(e, t),
                  i = r._config;
              "object" == P(t) && (i = u(u({}, i), t));
              var o = "string" == typeof t ? t : i.slide;
              if ("number" == typeof t) r.to(t);else if ("string" == typeof o) {
                if (void 0 === r[o]) throw new TypeError('No method named "'.concat(o, '"'));
                r[o]();
              } else i.interval && i.ride && (r.pause(), r.cycle());
            }
          }, {
            key: "jQueryInterface",
            value: function value(e) {
              return this.each(function () {
                n.carouselInterface(this, e);
              });
            }
          }, {
            key: "dataApiClickHandler",
            value: function value(e) {
              var t = r(this);

              if (t && t.classList.contains("carousel")) {
                var i = u(u({}, re.getDataAttributes(t)), re.getDataAttributes(this)),
                    o = this.getAttribute("data-bs-slide-to");
                o && (i.interval = !1), n.carouselInterface(t, i), o && n.getInstance(t).to(o), e.preventDefault();
              }
            }
          }]), n;
        }(K);

        $.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", me.dataApiClickHandler), $.on(window, "load.bs.carousel.data-api", function () {
          for (var e = ie.find('[data-bs-ride="carousel"]'), t = 0, n = e.length; t < n; t++) {
            me.carouselInterface(e[t], me.getInstance(e[t]));
          }
        }), x(me);

        var ge = "collapse",
            ve = {
          toggle: !0,
          parent: null
        },
            be = {
          toggle: "boolean",
          parent: "(null|element)"
        },
            Te = "show",
            we = "collapse",
            _e = "collapsing",
            Pe = "collapsed",
            je = ":scope .collapse .collapse",
            ke = '[data-bs-toggle="collapse"]',
            xe = function (e) {
          d(i, e);
          var t = h(i);

          function i(e, r) {
            var o;
            g(this, i), (o = t.call(this, e))._isTransitioning = !1, o._config = o._getConfig(r), o._triggerArray = [];

            for (var a = ie.find(ke), s = 0, l = a.length; s < l; s++) {
              var u = a[s],
                  c = n(u),
                  f = ie.find(c).filter(function (e) {
                return e === o._element;
              });
              null !== c && f.length && (o._selector = c, o._triggerArray.push(u));
            }

            return o._initializeChildren(), o._config.parent || o._addAriaAndCollapsedClass(o._triggerArray, o._isShown()), o._config.toggle && o.toggle(), o;
          }

          return b(i, [{
            key: "toggle",
            value: function value() {
              this._isShown() ? this.hide() : this.show();
            }
          }, {
            key: "show",
            value: function value() {
              var e = this;

              if (!this._isTransitioning && !this._isShown()) {
                var t,
                    n = [];

                if (this._config.parent) {
                  var r = ie.find(je, this._config.parent);
                  n = ie.find(".collapse.show, .collapse.collapsing", this._config.parent).filter(function (e) {
                    return !r.includes(e);
                  });
                }

                var o = ie.findOne(this._selector);

                if (n.length) {
                  var a = n.find(function (e) {
                    return o !== e;
                  });
                  if ((t = a ? i.getInstance(a) : null) && t._isTransitioning) return;
                }

                if (!$.trigger(this._element, "show.bs.collapse").defaultPrevented) {
                  n.forEach(function (e) {
                    o !== e && i.getOrCreateInstance(e, {
                      toggle: !1
                    }).hide(), t || W(e, "bs.collapse", null);
                  });

                  var s = this._getDimension();

                  this._element.classList.remove(we), this._element.classList.add(_e), this._element.style[s] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
                  var l = "scroll".concat(s[0].toUpperCase() + s.slice(1));
                  this._queueCallback(function () {
                    e._isTransitioning = !1, e._element.classList.remove(_e), e._element.classList.add(we, Te), e._element.style[s] = "", $.trigger(e._element, "shown.bs.collapse");
                  }, this._element, !0), this._element.style[s] = "".concat(this._element[l], "px");
                }
              }
            }
          }, {
            key: "hide",
            value: function value() {
              var e = this;

              if (!this._isTransitioning && this._isShown() && !$.trigger(this._element, "hide.bs.collapse").defaultPrevented) {
                var t = this._getDimension();

                this._element.style[t] = "".concat(this._element.getBoundingClientRect()[t], "px"), w(this._element), this._element.classList.add(_e), this._element.classList.remove(we, Te);

                for (var n = this._triggerArray.length, i = 0; i < n; i++) {
                  var o = this._triggerArray[i],
                      a = r(o);
                  a && !this._isShown(a) && this._addAriaAndCollapsedClass([o], !1);
                }

                this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(function () {
                  e._isTransitioning = !1, e._element.classList.remove(_e), e._element.classList.add(we), $.trigger(e._element, "hidden.bs.collapse");
                }, this._element, !0);
              }
            }
          }, {
            key: "_isShown",
            value: function value() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._element;
              return e.classList.contains(Te);
            }
          }, {
            key: "_getConfig",
            value: function value(e) {
              return (e = u(u(u({}, ve), re.getDataAttributes(this._element)), e)).toggle = Boolean(e.toggle), e.parent = s(e.parent), l(ge, e, be), e;
            }
          }, {
            key: "_getDimension",
            value: function value() {
              return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
            }
          }, {
            key: "_initializeChildren",
            value: function value() {
              var e = this;

              if (this._config.parent) {
                var t = ie.find(je, this._config.parent);
                ie.find(ke, this._config.parent).filter(function (e) {
                  return !t.includes(e);
                }).forEach(function (t) {
                  var n = r(t);
                  n && e._addAriaAndCollapsedClass([t], e._isShown(n));
                });
              }
            }
          }, {
            key: "_addAriaAndCollapsedClass",
            value: function value(e, t) {
              e.length && e.forEach(function (e) {
                t ? e.classList.remove(Pe) : e.classList.add(Pe), e.setAttribute("aria-expanded", t);
              });
            }
          }], [{
            key: "Default",
            get: function get() {
              return ve;
            }
          }, {
            key: "NAME",
            get: function get() {
              return ge;
            }
          }, {
            key: "jQueryInterface",
            value: function value(e) {
              return this.each(function () {
                var t = {};
                "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1);
                var n = i.getOrCreateInstance(this, t);

                if ("string" == typeof e) {
                  if (void 0 === n[e]) throw new TypeError('No method named "'.concat(e, '"'));
                  n[e]();
                }
              });
            }
          }]), i;
        }(K);

        $.on(document, "click.bs.collapse.data-api", ke, function (e) {
          ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
          var t = n(this);
          ie.find(t).forEach(function (e) {
            xe.getOrCreateInstance(e, {
              toggle: !1
            }).toggle();
          });
        }), x(xe);
        var Ye = "top",
            Se = "bottom",
            Ce = "right",
            Ee = "left",
            Ae = "auto",
            Qe = [Ye, Se, Ce, Ee],
            Oe = "start",
            De = "end",
            Ie = "clippingParents",
            Le = "viewport",
            Ne = "popper",
            Me = "reference",
            Be = Qe.reduce(function (e, t) {
          return e.concat([t + "-" + Oe, t + "-" + De]);
        }, []),
            Re = [].concat(Qe, [Ae]).reduce(function (e, t) {
          return e.concat([t, t + "-" + Oe, t + "-" + De]);
        }, []),
            Fe = "beforeRead",
            qe = "read",
            He = "afterRead",
            Ve = "beforeMain",
            $e = "main",
            ze = "afterMain",
            We = "beforeWrite",
            Ue = "write",
            Xe = "afterWrite",
            Ke = [Fe, qe, He, Ve, $e, ze, We, Ue, Xe];

        function Ge(e) {
          return e ? (e.nodeName || "").toLowerCase() : null;
        }

        function Je(e) {
          if (null == e) return window;

          if ("[object Window]" !== e.toString()) {
            var t = e.ownerDocument;
            return t && t.defaultView || window;
          }

          return e;
        }

        function Ze(e) {
          return e instanceof Je(e).Element || e instanceof Element;
        }

        function et(e) {
          return e instanceof Je(e).HTMLElement || e instanceof HTMLElement;
        }

        function tt(e) {
          return "undefined" != typeof ShadowRoot && (e instanceof Je(e).ShadowRoot || e instanceof ShadowRoot);
        }

        var nt = {
          name: "applyStyles",
          enabled: !0,
          phase: "write",
          fn: function fn(e) {
            var t = e.state;
            Object.keys(t.elements).forEach(function (e) {
              var n = t.styles[e] || {},
                  r = t.attributes[e] || {},
                  i = t.elements[e];
              et(i) && Ge(i) && (Object.assign(i.style, n), Object.keys(r).forEach(function (e) {
                var t = r[e];
                !1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "" : t);
              }));
            });
          },
          effect: function effect(e) {
            var t = e.state,
                n = {
              popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0"
              },
              arrow: {
                position: "absolute"
              },
              reference: {}
            };
            return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function () {
              Object.keys(t.elements).forEach(function (e) {
                var r = t.elements[e],
                    i = t.attributes[e] || {},
                    o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function (e, t) {
                  return e[t] = "", e;
                }, {});
                et(r) && Ge(r) && (Object.assign(r.style, o), Object.keys(i).forEach(function (e) {
                  r.removeAttribute(e);
                }));
              });
            };
          },
          requires: ["computeStyles"]
        };

        function rt(e) {
          return e.split("-")[0];
        }

        function it(e, t) {
          var n = e.getBoundingClientRect();
          return {
            width: n.width / 1,
            height: n.height / 1,
            top: n.top / 1,
            right: n.right / 1,
            bottom: n.bottom / 1,
            left: n.left / 1,
            x: n.left / 1,
            y: n.top / 1
          };
        }

        function ot(e) {
          var t = it(e),
              n = e.offsetWidth,
              r = e.offsetHeight;
          return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
            x: e.offsetLeft,
            y: e.offsetTop,
            width: n,
            height: r
          };
        }

        function at(e, t) {
          var n = t.getRootNode && t.getRootNode();
          if (e.contains(t)) return !0;

          if (n && tt(n)) {
            var r = t;

            do {
              if (r && e.isSameNode(r)) return !0;
              r = r.parentNode || r.host;
            } while (r);
          }

          return !1;
        }

        function st(e) {
          return Je(e).getComputedStyle(e);
        }

        function lt(e) {
          return ["table", "td", "th"].indexOf(Ge(e)) >= 0;
        }

        function ut(e) {
          return ((Ze(e) ? e.ownerDocument : e.document) || window.document).documentElement;
        }

        function ct(e) {
          return "html" === Ge(e) ? e : e.assignedSlot || e.parentNode || (tt(e) ? e.host : null) || ut(e);
        }

        function ft(e) {
          return et(e) && "fixed" !== st(e).position ? e.offsetParent : null;
        }

        function dt(e) {
          for (var t = Je(e), n = ft(e); n && lt(n) && "static" === st(n).position;) {
            n = ft(n);
          }

          return n && ("html" === Ge(n) || "body" === Ge(n) && "static" === st(n).position) ? t : n || function (e) {
            var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (-1 !== navigator.userAgent.indexOf("Trident") && et(e) && "fixed" === st(e).position) return null;

            for (var n = ct(e); et(n) && ["html", "body"].indexOf(Ge(n)) < 0;) {
              var r = st(n);
              if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
              n = n.parentNode;
            }

            return null;
          }(e) || t;
        }

        function pt(e) {
          return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
        }

        var ht = Math.max,
            yt = Math.min,
            mt = Math.round;

        function gt(e, t, n) {
          return ht(e, yt(t, n));
        }

        function vt(e) {
          return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }, e);
        }

        function bt(e, t) {
          return t.reduce(function (t, n) {
            return t[n] = e, t;
          }, {});
        }

        var Tt = {
          name: "arrow",
          enabled: !0,
          phase: "main",
          fn: function fn(e) {
            var t,
                n = e.state,
                r = e.name,
                i = e.options,
                o = n.elements.arrow,
                a = n.modifiersData.popperOffsets,
                s = rt(n.placement),
                l = pt(s),
                u = [Ee, Ce].indexOf(s) >= 0 ? "height" : "width";

            if (o && a) {
              var c = function (e, t) {
                return vt("number" != typeof (e = "function" == typeof e ? e(Object.assign({}, t.rects, {
                  placement: t.placement
                })) : e) ? e : bt(e, Qe));
              }(i.padding, n),
                  f = ot(o),
                  d = "y" === l ? Ye : Ee,
                  p = "y" === l ? Se : Ce,
                  h = n.rects.reference[u] + n.rects.reference[l] - a[l] - n.rects.popper[u],
                  y = a[l] - n.rects.reference[l],
                  m = dt(o),
                  g = m ? "y" === l ? m.clientHeight || 0 : m.clientWidth || 0 : 0,
                  v = h / 2 - y / 2,
                  b = c[d],
                  T = g - f[u] - c[p],
                  w = g / 2 - f[u] / 2 + v,
                  _ = gt(b, w, T),
                  P = l;

              n.modifiersData[r] = ((t = {})[P] = _, t.centerOffset = _ - w, t);
            }
          },
          effect: function effect(e) {
            var t = e.state,
                n = e.options.element,
                r = void 0 === n ? "[data-popper-arrow]" : n;
            null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && at(t.elements.popper, r) && (t.elements.arrow = r);
          },
          requires: ["popperOffsets"],
          requiresIfExists: ["preventOverflow"]
        };

        function wt(e) {
          return e.split("-")[1];
        }

        var _t = {
          top: "auto",
          right: "auto",
          bottom: "auto",
          left: "auto"
        };

        function Pt(e) {
          var t,
              n = e.popper,
              r = e.popperRect,
              i = e.placement,
              o = e.variation,
              a = e.offsets,
              s = e.position,
              l = e.gpuAcceleration,
              u = e.adaptive,
              c = e.roundOffsets,
              f = !0 === c ? function (e) {
            var t = e.x,
                n = e.y,
                r = window.devicePixelRatio || 1;
            return {
              x: mt(mt(t * r) / r) || 0,
              y: mt(mt(n * r) / r) || 0
            };
          }(a) : "function" == typeof c ? c(a) : a,
              d = f.x,
              p = void 0 === d ? 0 : d,
              h = f.y,
              y = void 0 === h ? 0 : h,
              m = a.hasOwnProperty("x"),
              g = a.hasOwnProperty("y"),
              v = Ee,
              b = Ye,
              T = window;

          if (u) {
            var w = dt(n),
                _ = "clientHeight",
                P = "clientWidth";
            w === Je(n) && "static" !== st(w = ut(n)).position && "absolute" === s && (_ = "scrollHeight", P = "scrollWidth"), w = w, i !== Ye && (i !== Ee && i !== Ce || o !== De) || (b = Se, y -= w[_] - r.height, y *= l ? 1 : -1), i !== Ee && (i !== Ye && i !== Se || o !== De) || (v = Ce, p -= w[P] - r.width, p *= l ? 1 : -1);
          }

          var j,
              k = Object.assign({
            position: s
          }, u && _t);
          return l ? Object.assign({}, k, ((j = {})[b] = g ? "0" : "", j[v] = m ? "0" : "", j.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + y + "px)" : "translate3d(" + p + "px, " + y + "px, 0)", j)) : Object.assign({}, k, ((t = {})[b] = g ? y + "px" : "", t[v] = m ? p + "px" : "", t.transform = "", t));
        }

        var jt = {
          name: "computeStyles",
          enabled: !0,
          phase: "beforeWrite",
          fn: function fn(e) {
            var t = e.state,
                n = e.options,
                r = n.gpuAcceleration,
                i = void 0 === r || r,
                o = n.adaptive,
                a = void 0 === o || o,
                s = n.roundOffsets,
                l = void 0 === s || s,
                u = {
              placement: rt(t.placement),
              variation: wt(t.placement),
              popper: t.elements.popper,
              popperRect: t.rects.popper,
              gpuAcceleration: i
            };
            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, Pt(Object.assign({}, u, {
              offsets: t.modifiersData.popperOffsets,
              position: t.options.strategy,
              adaptive: a,
              roundOffsets: l
            })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, Pt(Object.assign({}, u, {
              offsets: t.modifiersData.arrow,
              position: "absolute",
              adaptive: !1,
              roundOffsets: l
            })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-placement": t.placement
            });
          },
          data: {}
        },
            kt = {
          passive: !0
        },
            xt = {
          name: "eventListeners",
          enabled: !0,
          phase: "write",
          fn: function fn() {},
          effect: function effect(e) {
            var t = e.state,
                n = e.instance,
                r = e.options,
                i = r.scroll,
                o = void 0 === i || i,
                a = r.resize,
                s = void 0 === a || a,
                l = Je(t.elements.popper),
                u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
            return o && u.forEach(function (e) {
              e.addEventListener("scroll", n.update, kt);
            }), s && l.addEventListener("resize", n.update, kt), function () {
              o && u.forEach(function (e) {
                e.removeEventListener("scroll", n.update, kt);
              }), s && l.removeEventListener("resize", n.update, kt);
            };
          },
          data: {}
        },
            Yt = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        };

        function St(e) {
          return e.replace(/left|right|bottom|top/g, function (e) {
            return Yt[e];
          });
        }

        var Ct = {
          start: "end",
          end: "start"
        };

        function Et(e) {
          return e.replace(/start|end/g, function (e) {
            return Ct[e];
          });
        }

        function At(e) {
          var t = Je(e);
          return {
            scrollLeft: t.pageXOffset,
            scrollTop: t.pageYOffset
          };
        }

        function Qt(e) {
          return it(ut(e)).left + At(e).scrollLeft;
        }

        function Ot(e) {
          var t = st(e),
              n = t.overflow,
              r = t.overflowX,
              i = t.overflowY;
          return /auto|scroll|overlay|hidden/.test(n + i + r);
        }

        function Dt(e) {
          return ["html", "body", "#document"].indexOf(Ge(e)) >= 0 ? e.ownerDocument.body : et(e) && Ot(e) ? e : Dt(ct(e));
        }

        function It(e, t) {
          var n;
          void 0 === t && (t = []);
          var r = Dt(e),
              i = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
              o = Je(r),
              a = i ? [o].concat(o.visualViewport || [], Ot(r) ? r : []) : r,
              s = t.concat(a);
          return i ? s : s.concat(It(ct(a)));
        }

        function Lt(e) {
          return Object.assign({}, e, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height
          });
        }

        function Nt(e, t) {
          return t === Le ? Lt(function (e) {
            var t = Je(e),
                n = ut(e),
                r = t.visualViewport,
                i = n.clientWidth,
                o = n.clientHeight,
                a = 0,
                s = 0;
            return r && (i = r.width, o = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = r.offsetLeft, s = r.offsetTop)), {
              width: i,
              height: o,
              x: a + Qt(e),
              y: s
            };
          }(e)) : et(t) ? function (e) {
            var t = it(e);
            return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
          }(t) : Lt(function (e) {
            var t,
                n = ut(e),
                r = At(e),
                i = null == (t = e.ownerDocument) ? void 0 : t.body,
                o = ht(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
                a = ht(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
                s = -r.scrollLeft + Qt(e),
                l = -r.scrollTop;
            return "rtl" === st(i || n).direction && (s += ht(n.clientWidth, i ? i.clientWidth : 0) - o), {
              width: o,
              height: a,
              x: s,
              y: l
            };
          }(ut(e)));
        }

        function Mt(e) {
          var t,
              n = e.reference,
              r = e.element,
              i = e.placement,
              o = i ? rt(i) : null,
              a = i ? wt(i) : null,
              s = n.x + n.width / 2 - r.width / 2,
              l = n.y + n.height / 2 - r.height / 2;

          switch (o) {
            case Ye:
              t = {
                x: s,
                y: n.y - r.height
              };
              break;

            case Se:
              t = {
                x: s,
                y: n.y + n.height
              };
              break;

            case Ce:
              t = {
                x: n.x + n.width,
                y: l
              };
              break;

            case Ee:
              t = {
                x: n.x - r.width,
                y: l
              };
              break;

            default:
              t = {
                x: n.x,
                y: n.y
              };
          }

          var u = o ? pt(o) : null;

          if (null != u) {
            var c = "y" === u ? "height" : "width";

            switch (a) {
              case Oe:
                t[u] = t[u] - (n[c] / 2 - r[c] / 2);
                break;

              case De:
                t[u] = t[u] + (n[c] / 2 - r[c] / 2);
            }
          }

          return t;
        }

        function Bt(e, t) {
          void 0 === t && (t = {});

          var n = t,
              r = n.placement,
              i = void 0 === r ? e.placement : r,
              o = n.boundary,
              a = void 0 === o ? Ie : o,
              s = n.rootBoundary,
              l = void 0 === s ? Le : s,
              u = n.elementContext,
              c = void 0 === u ? Ne : u,
              f = n.altBoundary,
              d = void 0 !== f && f,
              p = n.padding,
              h = void 0 === p ? 0 : p,
              y = vt("number" != typeof h ? h : bt(h, Qe)),
              m = c === Ne ? Me : Ne,
              g = e.rects.popper,
              v = e.elements[d ? m : c],
              b = function (e, t, n) {
            var r = "clippingParents" === t ? function (e) {
              var t = It(ct(e)),
                  n = ["absolute", "fixed"].indexOf(st(e).position) >= 0 && et(e) ? dt(e) : e;
              return Ze(n) ? t.filter(function (e) {
                return Ze(e) && at(e, n) && "body" !== Ge(e);
              }) : [];
            }(e) : [].concat(t),
                i = [].concat(r, [n]),
                o = i[0],
                a = i.reduce(function (t, n) {
              var r = Nt(e, n);
              return t.top = ht(r.top, t.top), t.right = yt(r.right, t.right), t.bottom = yt(r.bottom, t.bottom), t.left = ht(r.left, t.left), t;
            }, Nt(e, o));
            return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
          }(Ze(v) ? v : v.contextElement || ut(e.elements.popper), a, l),
              T = it(e.elements.reference),
              w = Mt({
            reference: T,
            element: g,
            strategy: "absolute",
            placement: i
          }),
              _ = Lt(Object.assign({}, g, w)),
              P = c === Ne ? _ : T,
              j = {
            top: b.top - P.top + y.top,
            bottom: P.bottom - b.bottom + y.bottom,
            left: b.left - P.left + y.left,
            right: P.right - b.right + y.right
          },
              k = e.modifiersData.offset;

          if (c === Ne && k) {
            var x = k[i];
            Object.keys(j).forEach(function (e) {
              var t = [Ce, Se].indexOf(e) >= 0 ? 1 : -1,
                  n = [Ye, Se].indexOf(e) >= 0 ? "y" : "x";
              j[e] += x[n] * t;
            });
          }

          return j;
        }

        var Rt = {
          name: "flip",
          enabled: !0,
          phase: "main",
          fn: function fn(e) {
            var t = e.state,
                n = e.options,
                r = e.name;

            if (!t.modifiersData[r]._skip) {
              for (var i = n.mainAxis, o = void 0 === i || i, a = n.altAxis, s = void 0 === a || a, l = n.fallbackPlacements, u = n.padding, c = n.boundary, f = n.rootBoundary, d = n.altBoundary, p = n.flipVariations, h = void 0 === p || p, y = n.allowedAutoPlacements, m = t.options.placement, g = rt(m), v = l || (g !== m && h ? function (e) {
                if (rt(e) === Ae) return [];
                var t = St(e);
                return [Et(e), t, Et(t)];
              }(m) : [St(m)]), b = [m].concat(v).reduce(function (e, n) {
                return e.concat(rt(n) === Ae ? function (e, t) {
                  void 0 === t && (t = {});
                  var n = t,
                      r = n.placement,
                      i = n.boundary,
                      o = n.rootBoundary,
                      a = n.padding,
                      s = n.flipVariations,
                      l = n.allowedAutoPlacements,
                      u = void 0 === l ? Re : l,
                      c = wt(r),
                      f = c ? s ? Be : Be.filter(function (e) {
                    return wt(e) === c;
                  }) : Qe,
                      d = f.filter(function (e) {
                    return u.indexOf(e) >= 0;
                  });
                  0 === d.length && (d = f);
                  var p = d.reduce(function (t, n) {
                    return t[n] = Bt(e, {
                      placement: n,
                      boundary: i,
                      rootBoundary: o,
                      padding: a
                    })[rt(n)], t;
                  }, {});
                  return Object.keys(p).sort(function (e, t) {
                    return p[e] - p[t];
                  });
                }(t, {
                  placement: n,
                  boundary: c,
                  rootBoundary: f,
                  padding: u,
                  flipVariations: h,
                  allowedAutoPlacements: y
                }) : n);
              }, []), T = t.rects.reference, w = t.rects.popper, _ = new Map(), P = !0, j = b[0], k = 0; k < b.length; k++) {
                var x = b[k],
                    Y = rt(x),
                    S = wt(x) === Oe,
                    C = [Ye, Se].indexOf(Y) >= 0,
                    E = C ? "width" : "height",
                    A = Bt(t, {
                  placement: x,
                  boundary: c,
                  rootBoundary: f,
                  altBoundary: d,
                  padding: u
                }),
                    Q = C ? S ? Ce : Ee : S ? Se : Ye;
                T[E] > w[E] && (Q = St(Q));
                var O = St(Q),
                    D = [];

                if (o && D.push(A[Y] <= 0), s && D.push(A[Q] <= 0, A[O] <= 0), D.every(function (e) {
                  return e;
                })) {
                  j = x, P = !1;
                  break;
                }

                _.set(x, D);
              }

              if (P) for (var I = function I(e) {
                var t = b.find(function (t) {
                  var n = _.get(t);

                  if (n) return n.slice(0, e).every(function (e) {
                    return e;
                  });
                });
                if (t) return j = t, "break";
              }, L = h ? 3 : 1; L > 0 && "break" !== I(L); L--) {
                ;
              }
              t.placement !== j && (t.modifiersData[r]._skip = !0, t.placement = j, t.reset = !0);
            }
          },
          requiresIfExists: ["offset"],
          data: {
            _skip: !1
          }
        };

        function Ft(e, t, n) {
          return void 0 === n && (n = {
            x: 0,
            y: 0
          }), {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x
          };
        }

        function qt(e) {
          return [Ye, Ce, Se, Ee].some(function (t) {
            return e[t] >= 0;
          });
        }

        var Ht = {
          name: "hide",
          enabled: !0,
          phase: "main",
          requiresIfExists: ["preventOverflow"],
          fn: function fn(e) {
            var t = e.state,
                n = e.name,
                r = t.rects.reference,
                i = t.rects.popper,
                o = t.modifiersData.preventOverflow,
                a = Bt(t, {
              elementContext: "reference"
            }),
                s = Bt(t, {
              altBoundary: !0
            }),
                l = Ft(a, r),
                u = Ft(s, i, o),
                c = qt(l),
                f = qt(u);
            t.modifiersData[n] = {
              referenceClippingOffsets: l,
              popperEscapeOffsets: u,
              isReferenceHidden: c,
              hasPopperEscaped: f
            }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-reference-hidden": c,
              "data-popper-escaped": f
            });
          }
        },
            Vt = {
          name: "offset",
          enabled: !0,
          phase: "main",
          requires: ["popperOffsets"],
          fn: function fn(e) {
            var t = e.state,
                n = e.options,
                r = e.name,
                i = n.offset,
                o = void 0 === i ? [0, 0] : i,
                a = Re.reduce(function (e, n) {
              return e[n] = function (e, t, n) {
                var r = rt(e),
                    i = [Ee, Ye].indexOf(r) >= 0 ? -1 : 1,
                    o = "function" == typeof n ? n(Object.assign({}, t, {
                  placement: e
                })) : n,
                    a = o[0],
                    s = o[1];
                return a = a || 0, s = (s || 0) * i, [Ee, Ce].indexOf(r) >= 0 ? {
                  x: s,
                  y: a
                } : {
                  x: a,
                  y: s
                };
              }(n, t.rects, o), e;
            }, {}),
                s = a[t.placement],
                l = s.x,
                u = s.y;
            null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a;
          }
        },
            $t = {
          name: "popperOffsets",
          enabled: !0,
          phase: "read",
          fn: function fn(e) {
            var t = e.state,
                n = e.name;
            t.modifiersData[n] = Mt({
              reference: t.rects.reference,
              element: t.rects.popper,
              strategy: "absolute",
              placement: t.placement
            });
          },
          data: {}
        },
            zt = {
          name: "preventOverflow",
          enabled: !0,
          phase: "main",
          fn: function fn(e) {
            var t = e.state,
                n = e.options,
                r = e.name,
                i = n.mainAxis,
                o = void 0 === i || i,
                a = n.altAxis,
                s = void 0 !== a && a,
                l = n.boundary,
                u = n.rootBoundary,
                c = n.altBoundary,
                f = n.padding,
                d = n.tether,
                p = void 0 === d || d,
                h = n.tetherOffset,
                y = void 0 === h ? 0 : h,
                m = Bt(t, {
              boundary: l,
              rootBoundary: u,
              padding: f,
              altBoundary: c
            }),
                g = rt(t.placement),
                v = wt(t.placement),
                b = !v,
                T = pt(g),
                w = "x" === T ? "y" : "x",
                _ = t.modifiersData.popperOffsets,
                P = t.rects.reference,
                j = t.rects.popper,
                k = "function" == typeof y ? y(Object.assign({}, t.rects, {
              placement: t.placement
            })) : y,
                x = {
              x: 0,
              y: 0
            };

            if (_) {
              if (o || s) {
                var Y = "y" === T ? Ye : Ee,
                    S = "y" === T ? Se : Ce,
                    C = "y" === T ? "height" : "width",
                    E = _[T],
                    A = _[T] + m[Y],
                    Q = _[T] - m[S],
                    O = p ? -j[C] / 2 : 0,
                    D = v === Oe ? P[C] : j[C],
                    I = v === Oe ? -j[C] : -P[C],
                    L = t.elements.arrow,
                    N = p && L ? ot(L) : {
                  width: 0,
                  height: 0
                },
                    M = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0
                },
                    B = M[Y],
                    R = M[S],
                    F = gt(0, P[C], N[C]),
                    q = b ? P[C] / 2 - O - F - B - k : D - F - B - k,
                    H = b ? -P[C] / 2 + O + F + R + k : I + F + R + k,
                    V = t.elements.arrow && dt(t.elements.arrow),
                    $ = V ? "y" === T ? V.clientTop || 0 : V.clientLeft || 0 : 0,
                    z = t.modifiersData.offset ? t.modifiersData.offset[t.placement][T] : 0,
                    W = _[T] + q - z - $,
                    U = _[T] + H - z;

                if (o) {
                  var X = gt(p ? yt(A, W) : A, E, p ? ht(Q, U) : Q);
                  _[T] = X, x[T] = X - E;
                }

                if (s) {
                  var K = "x" === T ? Ye : Ee,
                      G = "x" === T ? Se : Ce,
                      J = _[w],
                      Z = J + m[K],
                      ee = J - m[G],
                      te = gt(p ? yt(Z, W) : Z, J, p ? ht(ee, U) : ee);
                  _[w] = te, x[w] = te - J;
                }
              }

              t.modifiersData[r] = x;
            }
          },
          requiresIfExists: ["offset"]
        };

        function Wt(e, t, n) {
          void 0 === n && (n = !1);
          var r = et(t);
          et(t) && function (e) {
            var t = e.getBoundingClientRect();
            t.width, e.offsetWidth, t.height, e.offsetHeight;
          }(t);
          var i,
              o,
              a = ut(t),
              s = it(e),
              l = {
            scrollLeft: 0,
            scrollTop: 0
          },
              u = {
            x: 0,
            y: 0
          };
          return (r || !r && !n) && (("body" !== Ge(t) || Ot(a)) && (l = (i = t) !== Je(i) && et(i) ? {
            scrollLeft: (o = i).scrollLeft,
            scrollTop: o.scrollTop
          } : At(i)), et(t) ? ((u = it(t)).x += t.clientLeft, u.y += t.clientTop) : a && (u.x = Qt(a))), {
            x: s.left + l.scrollLeft - u.x,
            y: s.top + l.scrollTop - u.y,
            width: s.width,
            height: s.height
          };
        }

        function Ut(e) {
          var t = new Map(),
              n = new Set(),
              r = [];

          function i(e) {
            n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach(function (e) {
              if (!n.has(e)) {
                var r = t.get(e);
                r && i(r);
              }
            }), r.push(e);
          }

          return e.forEach(function (e) {
            t.set(e.name, e);
          }), e.forEach(function (e) {
            n.has(e.name) || i(e);
          }), r;
        }

        var Xt = {
          placement: "bottom",
          modifiers: [],
          strategy: "absolute"
        };

        function Kt() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
            t[n] = arguments[n];
          }

          return !t.some(function (e) {
            return !(e && "function" == typeof e.getBoundingClientRect);
          });
        }

        function Gt(e) {
          void 0 === e && (e = {});
          var t = e,
              n = t.defaultModifiers,
              r = void 0 === n ? [] : n,
              i = t.defaultOptions,
              o = void 0 === i ? Xt : i;
          return function (e, t, n) {
            void 0 === n && (n = o);
            var i,
                a,
                s = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, Xt, o),
              modifiersData: {},
              elements: {
                reference: e,
                popper: t
              },
              attributes: {},
              styles: {}
            },
                l = [],
                u = !1,
                c = {
              state: s,
              setOptions: function setOptions(n) {
                var i = "function" == typeof n ? n(s.options) : n;
                f(), s.options = Object.assign({}, o, s.options, i), s.scrollParents = {
                  reference: Ze(e) ? It(e) : e.contextElement ? It(e.contextElement) : [],
                  popper: It(t)
                };

                var a,
                    u,
                    d = function (e) {
                  var t = Ut(e);
                  return Ke.reduce(function (e, n) {
                    return e.concat(t.filter(function (e) {
                      return e.phase === n;
                    }));
                  }, []);
                }((a = [].concat(r, s.options.modifiers), u = a.reduce(function (e, t) {
                  var n = e[t.name];
                  return e[t.name] = n ? Object.assign({}, n, t, {
                    options: Object.assign({}, n.options, t.options),
                    data: Object.assign({}, n.data, t.data)
                  }) : t, e;
                }, {}), Object.keys(u).map(function (e) {
                  return u[e];
                })));

                return s.orderedModifiers = d.filter(function (e) {
                  return e.enabled;
                }), s.orderedModifiers.forEach(function (e) {
                  var t = e.name,
                      n = e.options,
                      r = void 0 === n ? {} : n,
                      i = e.effect;

                  if ("function" == typeof i) {
                    var o = i({
                      state: s,
                      name: t,
                      instance: c,
                      options: r
                    });
                    l.push(o || function () {});
                  }
                }), c.update();
              },
              forceUpdate: function forceUpdate() {
                if (!u) {
                  var e = s.elements,
                      t = e.reference,
                      n = e.popper;

                  if (Kt(t, n)) {
                    s.rects = {
                      reference: Wt(t, dt(n), "fixed" === s.options.strategy),
                      popper: ot(n)
                    }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach(function (e) {
                      return s.modifiersData[e.name] = Object.assign({}, e.data);
                    });

                    for (var r = 0; r < s.orderedModifiers.length; r++) {
                      if (!0 !== s.reset) {
                        var i = s.orderedModifiers[r],
                            o = i.fn,
                            a = i.options,
                            l = void 0 === a ? {} : a,
                            f = i.name;
                        "function" == typeof o && (s = o({
                          state: s,
                          options: l,
                          name: f,
                          instance: c
                        }) || s);
                      } else s.reset = !1, r = -1;
                    }
                  }
                }
              },
              update: (i = function i() {
                return new Promise(function (e) {
                  c.forceUpdate(), e(s);
                });
              }, function () {
                return a || (a = new Promise(function (e) {
                  Promise.resolve().then(function () {
                    a = void 0, e(i());
                  });
                })), a;
              }),
              destroy: function destroy() {
                f(), u = !0;
              }
            };
            if (!Kt(e, t)) return c;

            function f() {
              l.forEach(function (e) {
                return e();
              }), l = [];
            }

            return c.setOptions(n).then(function (e) {
              !u && n.onFirstUpdate && n.onFirstUpdate(e);
            }), c;
          };
        }

        var Jt = Gt(),
            Zt = Gt({
          defaultModifiers: [xt, $t, jt, nt]
        }),
            en = Gt({
          defaultModifiers: [xt, $t, jt, nt, Vt, Rt, zt, Tt, Ht]
        }),
            tn = Object.freeze({
          __proto__: null,
          popperGenerator: Gt,
          detectOverflow: Bt,
          createPopperBase: Jt,
          createPopper: en,
          createPopperLite: Zt,
          top: Ye,
          bottom: Se,
          right: Ce,
          left: Ee,
          auto: Ae,
          basePlacements: Qe,
          start: Oe,
          end: De,
          clippingParents: Ie,
          viewport: Le,
          popper: Ne,
          reference: Me,
          variationPlacements: Be,
          placements: Re,
          beforeRead: Fe,
          read: qe,
          afterRead: He,
          beforeMain: Ve,
          main: $e,
          afterMain: ze,
          beforeWrite: We,
          write: Ue,
          afterWrite: Xe,
          modifierPhases: Ke,
          applyStyles: nt,
          arrow: Tt,
          computeStyles: jt,
          eventListeners: xt,
          flip: Rt,
          hide: Ht,
          offset: Vt,
          popperOffsets: $t,
          preventOverflow: zt
        }),
            nn = "dropdown",
            rn = "Escape",
            on = "Space",
            an = "ArrowUp",
            sn = "ArrowDown",
            ln = new RegExp("ArrowUp|ArrowDown|Escape"),
            un = "click.bs.dropdown.data-api",
            cn = "keydown.bs.dropdown.data-api",
            fn = "show",
            dn = '[data-bs-toggle="dropdown"]',
            pn = ".dropdown-menu",
            hn = k() ? "top-end" : "top-start",
            yn = k() ? "top-start" : "top-end",
            mn = k() ? "bottom-end" : "bottom-start",
            gn = k() ? "bottom-start" : "bottom-end",
            vn = k() ? "left-start" : "right-start",
            bn = k() ? "right-start" : "left-start",
            Tn = {
          offset: [0, 2],
          boundary: "clippingParents",
          reference: "toggle",
          display: "dynamic",
          popperConfig: null,
          autoClose: !0
        },
            wn = {
          offset: "(array|string|function)",
          boundary: "(string|element)",
          reference: "(string|element|object)",
          display: "string",
          popperConfig: "(null|object|function)",
          autoClose: "(boolean|string)"
        },
            _n = function (e) {
          d(n, e);
          var t = h(n);

          function n(e, r) {
            var i;
            return g(this, n), (i = t.call(this, e))._popper = null, i._config = i._getConfig(r), i._menu = i._getMenuElement(), i._inNavbar = i._detectNavbar(), i;
          }

          return b(n, [{
            key: "toggle",
            value: function value() {
              return this._isShown() ? this.hide() : this.show();
            }
          }, {
            key: "show",
            value: function value() {
              var e;

              if (!p(this._element) && !this._isShown(this._menu)) {
                var t = {
                  relatedTarget: this._element
                };

                if (!$.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {
                  var r = n.getParentFromElement(this._element);
                  this._inNavbar ? re.setDataAttribute(this._menu, "popper", "none") : this._createPopper(r), "ontouchstart" in document.documentElement && !r.closest(".navbar-nav") && (e = []).concat.apply(e, f(document.body.children)).forEach(function (e) {
                    return $.on(e, "mouseover", v);
                  }), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(fn), this._element.classList.add(fn), $.trigger(this._element, "shown.bs.dropdown", t);
                }
              }
            }
          }, {
            key: "hide",
            value: function value() {
              if (!p(this._element) && this._isShown(this._menu)) {
                var e = {
                  relatedTarget: this._element
                };

                this._completeHide(e);
              }
            }
          }, {
            key: "dispose",
            value: function value() {
              this._popper && this._popper.destroy(), a(m(n.prototype), "dispose", this).call(this);
            }
          }, {
            key: "update",
            value: function value() {
              this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
            }
          }, {
            key: "_completeHide",
            value: function value(e) {
              var t;
              $.trigger(this._element, "hide.bs.dropdown", e).defaultPrevented || ("ontouchstart" in document.documentElement && (t = []).concat.apply(t, f(document.body.children)).forEach(function (e) {
                return $.off(e, "mouseover", v);
              }), this._popper && this._popper.destroy(), this._menu.classList.remove(fn), this._element.classList.remove(fn), this._element.setAttribute("aria-expanded", "false"), re.removeDataAttribute(this._menu, "popper"), $.trigger(this._element, "hidden.bs.dropdown", e));
            }
          }, {
            key: "_getConfig",
            value: function value(e) {
              if (e = u(u(u({}, this.constructor.Default), re.getDataAttributes(this._element)), e), l(nn, e, this.constructor.DefaultType), "object" == P(e.reference) && !o(e.reference) && "function" != typeof e.reference.getBoundingClientRect) throw new TypeError("".concat(nn.toUpperCase(), ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'));
              return e;
            }
          }, {
            key: "_createPopper",
            value: function value(e) {
              if (void 0 === tn) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
              var t = this._element;
              "parent" === this._config.reference ? t = e : o(this._config.reference) ? t = s(this._config.reference) : "object" == P(this._config.reference) && (t = this._config.reference);

              var n = this._getPopperConfig(),
                  r = n.modifiers.find(function (e) {
                return "applyStyles" === e.name && !1 === e.enabled;
              });

              this._popper = en(t, this._menu, n), r && re.setDataAttribute(this._menu, "popper", "static");
            }
          }, {
            key: "_isShown",
            value: function value() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._element;
              return e.classList.contains(fn);
            }
          }, {
            key: "_getMenuElement",
            value: function value() {
              return ie.next(this._element, pn)[0];
            }
          }, {
            key: "_getPlacement",
            value: function value() {
              var e = this._element.parentNode;
              if (e.classList.contains("dropend")) return vn;
              if (e.classList.contains("dropstart")) return bn;
              var t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
              return e.classList.contains("dropup") ? t ? yn : hn : t ? gn : mn;
            }
          }, {
            key: "_detectNavbar",
            value: function value() {
              return null !== this._element.closest(".navbar");
            }
          }, {
            key: "_getOffset",
            value: function value() {
              var e = this,
                  t = this._config.offset;
              return "string" == typeof t ? t.split(",").map(function (e) {
                return Number.parseInt(e, 10);
              }) : "function" == typeof t ? function (n) {
                return t(n, e._element);
              } : t;
            }
          }, {
            key: "_getPopperConfig",
            value: function value() {
              var e = {
                placement: this._getPlacement(),
                modifiers: [{
                  name: "preventOverflow",
                  options: {
                    boundary: this._config.boundary
                  }
                }, {
                  name: "offset",
                  options: {
                    offset: this._getOffset()
                  }
                }]
              };
              return "static" === this._config.display && (e.modifiers = [{
                name: "applyStyles",
                enabled: !1
              }]), u(u({}, e), "function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig);
            }
          }, {
            key: "_selectMenuItem",
            value: function value(e) {
              var t = e.key,
                  n = e.target,
                  r = ie.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(c);
              r.length && C(r, n, t === sn, !r.includes(n)).focus();
            }
          }], [{
            key: "Default",
            get: function get() {
              return Tn;
            }
          }, {
            key: "DefaultType",
            get: function get() {
              return wn;
            }
          }, {
            key: "NAME",
            get: function get() {
              return nn;
            }
          }, {
            key: "jQueryInterface",
            value: function value(e) {
              return this.each(function () {
                var t = n.getOrCreateInstance(this, e);

                if ("string" == typeof e) {
                  if (void 0 === t[e]) throw new TypeError('No method named "'.concat(e, '"'));
                  t[e]();
                }
              });
            }
          }, {
            key: "clearMenus",
            value: function value(e) {
              if (!e || 2 !== e.button && ("keyup" !== e.type || "Tab" === e.key)) for (var t = ie.find(dn), r = 0, i = t.length; r < i; r++) {
                var o = n.getInstance(t[r]);

                if (o && !1 !== o._config.autoClose && o._isShown()) {
                  var a = {
                    relatedTarget: o._element
                  };

                  if (e) {
                    var s = e.composedPath(),
                        l = s.includes(o._menu);
                    if (s.includes(o._element) || "inside" === o._config.autoClose && !l || "outside" === o._config.autoClose && l) continue;
                    if (o._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
                    "click" === e.type && (a.clickEvent = e);
                  }

                  o._completeHide(a);
                }
              }
            }
          }, {
            key: "getParentFromElement",
            value: function value(e) {
              return r(e) || e.parentNode;
            }
          }, {
            key: "dataApiKeydownHandler",
            value: function value(e) {
              if (!(/input|textarea/i.test(e.target.tagName) ? e.key === on || e.key !== rn && (e.key !== sn && e.key !== an || e.target.closest(pn)) : !ln.test(e.key))) {
                var t = this.classList.contains(fn);

                if ((t || e.key !== rn) && (e.preventDefault(), e.stopPropagation(), !p(this))) {
                  var r = this.matches(dn) ? this : ie.prev(this, dn)[0],
                      i = n.getOrCreateInstance(r);
                  if (e.key !== rn) return e.key === an || e.key === sn ? (t || i.show(), void i._selectMenuItem(e)) : void (t && e.key !== on || n.clearMenus());
                  i.hide();
                }
              }
            }
          }]), n;
        }(K);

        $.on(document, cn, dn, _n.dataApiKeydownHandler), $.on(document, cn, pn, _n.dataApiKeydownHandler), $.on(document, un, _n.clearMenus), $.on(document, "keyup.bs.dropdown.data-api", _n.clearMenus), $.on(document, un, dn, function (e) {
          e.preventDefault(), _n.getOrCreateInstance(this).toggle();
        }), x(_n);

        var Pn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            jn = ".sticky-top",
            kn = function () {
          function e() {
            g(this, e), this._element = document.body;
          }

          return b(e, [{
            key: "getWidth",
            value: function value() {
              var e = document.documentElement.clientWidth;
              return Math.abs(window.innerWidth - e);
            }
          }, {
            key: "hide",
            value: function value() {
              var e = this.getWidth();
              this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", function (t) {
                return t + e;
              }), this._setElementAttributes(Pn, "paddingRight", function (t) {
                return t + e;
              }), this._setElementAttributes(jn, "marginRight", function (t) {
                return t - e;
              });
            }
          }, {
            key: "_disableOverFlow",
            value: function value() {
              this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
            }
          }, {
            key: "_setElementAttributes",
            value: function value(e, t, n) {
              var r = this,
                  i = this.getWidth();

              this._applyManipulationCallback(e, function (e) {
                if (!(e !== r._element && window.innerWidth > e.clientWidth + i)) {
                  r._saveInitialAttribute(e, t);

                  var o = window.getComputedStyle(e)[t];
                  e.style[t] = "".concat(n(Number.parseFloat(o)), "px");
                }
              });
            }
          }, {
            key: "reset",
            value: function value() {
              this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(Pn, "paddingRight"), this._resetElementAttributes(jn, "marginRight");
            }
          }, {
            key: "_saveInitialAttribute",
            value: function value(e, t) {
              var n = e.style[t];
              n && re.setDataAttribute(e, t, n);
            }
          }, {
            key: "_resetElementAttributes",
            value: function value(e, t) {
              this._applyManipulationCallback(e, function (e) {
                var n = re.getDataAttribute(e, t);
                void 0 === n ? e.style.removeProperty(t) : (re.removeDataAttribute(e, t), e.style[t] = n);
              });
            }
          }, {
            key: "_applyManipulationCallback",
            value: function value(e, t) {
              o(e) ? t(e) : ie.find(e, this._element).forEach(t);
            }
          }, {
            key: "isOverflowing",
            value: function value() {
              return this.getWidth() > 0;
            }
          }]), e;
        }(),
            xn = {
          className: "modal-backdrop",
          isVisible: !0,
          isAnimated: !1,
          rootElement: "body",
          clickCallback: null
        },
            Yn = {
          className: "string",
          isVisible: "boolean",
          isAnimated: "boolean",
          rootElement: "(element|string)",
          clickCallback: "(function|null)"
        },
            Sn = "show",
            Cn = "mousedown.bs.backdrop",
            En = function () {
          function e(t) {
            g(this, e), this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
          }

          return b(e, [{
            key: "show",
            value: function value(e) {
              this._config.isVisible ? (this._append(), this._config.isAnimated && w(this._getElement()), this._getElement().classList.add(Sn), this._emulateAnimation(function () {
                Y(e);
              })) : Y(e);
            }
          }, {
            key: "hide",
            value: function value(e) {
              var t = this;
              this._config.isVisible ? (this._getElement().classList.remove(Sn), this._emulateAnimation(function () {
                t.dispose(), Y(e);
              })) : Y(e);
            }
          }, {
            key: "_getElement",
            value: function value() {
              if (!this._element) {
                var e = document.createElement("div");
                e.className = this._config.className, this._config.isAnimated && e.classList.add("fade"), this._element = e;
              }

              return this._element;
            }
          }, {
            key: "_getConfig",
            value: function value(e) {
              return (e = u(u({}, xn), "object" == P(e) ? e : {})).rootElement = s(e.rootElement), l("backdrop", e, Yn), e;
            }
          }, {
            key: "_append",
            value: function value() {
              var e = this;
              this._isAppended || (this._config.rootElement.append(this._getElement()), $.on(this._getElement(), Cn, function () {
                Y(e._config.clickCallback);
              }), this._isAppended = !0);
            }
          }, {
            key: "dispose",
            value: function value() {
              this._isAppended && ($.off(this._element, Cn), this._element.remove(), this._isAppended = !1);
            }
          }, {
            key: "_emulateAnimation",
            value: function value(e) {
              S(e, this._getElement(), this._config.isAnimated);
            }
          }]), e;
        }(),
            An = {
          trapElement: null,
          autofocus: !0
        },
            Qn = {
          trapElement: "element",
          autofocus: "boolean"
        },
            On = ".bs.focustrap",
            Dn = "backward",
            In = function () {
          function e(t) {
            g(this, e), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
          }

          return b(e, [{
            key: "activate",
            value: function value() {
              var e = this,
                  t = this._config,
                  n = t.trapElement,
                  r = t.autofocus;
              this._isActive || (r && n.focus(), $.off(document, On), $.on(document, "focusin.bs.focustrap", function (t) {
                return e._handleFocusin(t);
              }), $.on(document, "keydown.tab.bs.focustrap", function (t) {
                return e._handleKeydown(t);
              }), this._isActive = !0);
            }
          }, {
            key: "deactivate",
            value: function value() {
              this._isActive && (this._isActive = !1, $.off(document, On));
            }
          }, {
            key: "_handleFocusin",
            value: function value(e) {
              var t = e.target,
                  n = this._config.trapElement;

              if (t !== document && t !== n && !n.contains(t)) {
                var r = ie.focusableChildren(n);
                0 === r.length ? n.focus() : this._lastTabNavDirection === Dn ? r[r.length - 1].focus() : r[0].focus();
              }
            }
          }, {
            key: "_handleKeydown",
            value: function value(e) {
              "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? Dn : "forward");
            }
          }, {
            key: "_getConfig",
            value: function value(e) {
              return e = u(u({}, An), "object" == P(e) ? e : {}), l("focustrap", e, Qn), e;
            }
          }]), e;
        }(),
            Ln = "modal",
            Nn = "Escape",
            Mn = {
          backdrop: !0,
          keyboard: !0,
          focus: !0
        },
            Bn = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          focus: "boolean"
        },
            Rn = "hidden.bs.modal",
            Fn = "show.bs.modal",
            qn = "resize.bs.modal",
            Hn = "click.dismiss.bs.modal",
            Vn = "keydown.dismiss.bs.modal",
            $n = "mousedown.dismiss.bs.modal",
            zn = "modal-open",
            Wn = "show",
            Un = "modal-static",
            Xn = function (e) {
          d(n, e);
          var t = h(n);

          function n(e, r) {
            var i;
            return g(this, n), (i = t.call(this, e))._config = i._getConfig(r), i._dialog = ie.findOne(".modal-dialog", i._element), i._backdrop = i._initializeBackDrop(), i._focustrap = i._initializeFocusTrap(), i._isShown = !1, i._ignoreBackdropClick = !1, i._isTransitioning = !1, i._scrollBar = new kn(), i;
          }

          return b(n, [{
            key: "toggle",
            value: function value(e) {
              return this._isShown ? this.hide() : this.show(e);
            }
          }, {
            key: "show",
            value: function value(e) {
              var t = this;
              this._isShown || this._isTransitioning || $.trigger(this._element, Fn, {
                relatedTarget: e
              }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(zn), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), $.on(this._dialog, $n, function () {
                $.one(t._element, "mouseup.dismiss.bs.modal", function (e) {
                  e.target === t._element && (t._ignoreBackdropClick = !0);
                });
              }), this._showBackdrop(function () {
                return t._showElement(e);
              }));
            }
          }, {
            key: "hide",
            value: function value() {
              var e = this;

              if (this._isShown && !this._isTransitioning && !$.trigger(this._element, "hide.bs.modal").defaultPrevented) {
                this._isShown = !1;

                var t = this._isAnimated();

                t && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove(Wn), $.off(this._element, Hn), $.off(this._dialog, $n), this._queueCallback(function () {
                  return e._hideModal();
                }, this._element, t);
              }
            }
          }, {
            key: "dispose",
            value: function value() {
              [window, this._dialog].forEach(function (e) {
                return $.off(e, ".bs.modal");
              }), this._backdrop.dispose(), this._focustrap.deactivate(), a(m(n.prototype), "dispose", this).call(this);
            }
          }, {
            key: "handleUpdate",
            value: function value() {
              this._adjustDialog();
            }
          }, {
            key: "_initializeBackDrop",
            value: function value() {
              return new En({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
              });
            }
          }, {
            key: "_initializeFocusTrap",
            value: function value() {
              return new In({
                trapElement: this._element
              });
            }
          }, {
            key: "_getConfig",
            value: function value(e) {
              return e = u(u(u({}, Mn), re.getDataAttributes(this._element)), "object" == P(e) ? e : {}), l(Ln, e, Bn), e;
            }
          }, {
            key: "_showElement",
            value: function value(e) {
              var t = this,
                  n = this._isAnimated(),
                  r = ie.findOne(".modal-body", this._dialog);

              this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, r && (r.scrollTop = 0), n && w(this._element), this._element.classList.add(Wn), this._queueCallback(function () {
                t._config.focus && t._focustrap.activate(), t._isTransitioning = !1, $.trigger(t._element, "shown.bs.modal", {
                  relatedTarget: e
                });
              }, this._dialog, n);
            }
          }, {
            key: "_setEscapeEvent",
            value: function value() {
              var e = this;
              this._isShown ? $.on(this._element, Vn, function (t) {
                e._config.keyboard && t.key === Nn ? (t.preventDefault(), e.hide()) : e._config.keyboard || t.key !== Nn || e._triggerBackdropTransition();
              }) : $.off(this._element, Vn);
            }
          }, {
            key: "_setResizeEvent",
            value: function value() {
              var e = this;
              this._isShown ? $.on(window, qn, function () {
                return e._adjustDialog();
              }) : $.off(window, qn);
            }
          }, {
            key: "_hideModal",
            value: function value() {
              var e = this;
              this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(function () {
                document.body.classList.remove(zn), e._resetAdjustments(), e._scrollBar.reset(), $.trigger(e._element, Rn);
              });
            }
          }, {
            key: "_showBackdrop",
            value: function value(e) {
              var t = this;
              $.on(this._element, Hn, function (e) {
                t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && (!0 === t._config.backdrop ? t.hide() : "static" === t._config.backdrop && t._triggerBackdropTransition());
              }), this._backdrop.show(e);
            }
          }, {
            key: "_isAnimated",
            value: function value() {
              return this._element.classList.contains("fade");
            }
          }, {
            key: "_triggerBackdropTransition",
            value: function value() {
              var e = this;

              if (!$.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) {
                var t = this._element,
                    n = t.classList,
                    r = t.scrollHeight,
                    i = t.style,
                    o = r > document.documentElement.clientHeight;
                !o && "hidden" === i.overflowY || n.contains(Un) || (o || (i.overflowY = "hidden"), n.add(Un), this._queueCallback(function () {
                  n.remove(Un), o || e._queueCallback(function () {
                    i.overflowY = "";
                  }, e._dialog);
                }, this._dialog), this._element.focus());
              }
            }
          }, {
            key: "_adjustDialog",
            value: function value() {
              var e = this._element.scrollHeight > document.documentElement.clientHeight,
                  t = this._scrollBar.getWidth(),
                  n = t > 0;

              (!n && e && !k() || n && !e && k()) && (this._element.style.paddingLeft = "".concat(t, "px")), (n && !e && !k() || !n && e && k()) && (this._element.style.paddingRight = "".concat(t, "px"));
            }
          }, {
            key: "_resetAdjustments",
            value: function value() {
              this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
            }
          }], [{
            key: "Default",
            get: function get() {
              return Mn;
            }
          }, {
            key: "NAME",
            get: function get() {
              return Ln;
            }
          }, {
            key: "jQueryInterface",
            value: function value(e, t) {
              return this.each(function () {
                var r = n.getOrCreateInstance(this, e);

                if ("string" == typeof e) {
                  if (void 0 === r[e]) throw new TypeError('No method named "'.concat(e, '"'));
                  r[e](t);
                }
              });
            }
          }]), n;
        }(K);

        $.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (e) {
          var t = this,
              n = r(this);
          ["A", "AREA"].includes(this.tagName) && e.preventDefault(), $.one(n, Fn, function (e) {
            e.defaultPrevented || $.one(n, Rn, function () {
              c(t) && t.focus();
            });
          });
          var i = ie.findOne(".modal.show");
          i && Xn.getInstance(i).hide(), Xn.getOrCreateInstance(n).toggle(this);
        }), G(Xn), x(Xn);

        var Kn = "offcanvas",
            Gn = {
          backdrop: !0,
          keyboard: !0,
          scroll: !1
        },
            Jn = {
          backdrop: "boolean",
          keyboard: "boolean",
          scroll: "boolean"
        },
            Zn = "show",
            er = ".offcanvas.show",
            tr = "hidden.bs.offcanvas",
            nr = function (e) {
          d(n, e);
          var t = h(n);

          function n(e, r) {
            var i;
            return g(this, n), (i = t.call(this, e))._config = i._getConfig(r), i._isShown = !1, i._backdrop = i._initializeBackDrop(), i._focustrap = i._initializeFocusTrap(), i._addEventListeners(), i;
          }

          return b(n, [{
            key: "toggle",
            value: function value(e) {
              return this._isShown ? this.hide() : this.show(e);
            }
          }, {
            key: "show",
            value: function value(e) {
              var t = this;
              this._isShown || $.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: e
              }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || new kn().hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Zn), this._queueCallback(function () {
                t._config.scroll || t._focustrap.activate(), $.trigger(t._element, "shown.bs.offcanvas", {
                  relatedTarget: e
                });
              }, this._element, !0));
            }
          }, {
            key: "hide",
            value: function value() {
              var e = this;
              this._isShown && ($.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove(Zn), this._backdrop.hide(), this._queueCallback(function () {
                e._element.setAttribute("aria-hidden", !0), e._element.removeAttribute("aria-modal"), e._element.removeAttribute("role"), e._element.style.visibility = "hidden", e._config.scroll || new kn().reset(), $.trigger(e._element, tr);
              }, this._element, !0)));
            }
          }, {
            key: "dispose",
            value: function value() {
              this._backdrop.dispose(), this._focustrap.deactivate(), a(m(n.prototype), "dispose", this).call(this);
            }
          }, {
            key: "_getConfig",
            value: function value(e) {
              return e = u(u(u({}, Gn), re.getDataAttributes(this._element)), "object" == P(e) ? e : {}), l(Kn, e, Jn), e;
            }
          }, {
            key: "_initializeBackDrop",
            value: function value() {
              var e = this;
              return new En({
                className: "offcanvas-backdrop",
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: function clickCallback() {
                  return e.hide();
                }
              });
            }
          }, {
            key: "_initializeFocusTrap",
            value: function value() {
              return new In({
                trapElement: this._element
              });
            }
          }, {
            key: "_addEventListeners",
            value: function value() {
              var e = this;
              $.on(this._element, "keydown.dismiss.bs.offcanvas", function (t) {
                e._config.keyboard && "Escape" === t.key && e.hide();
              });
            }
          }], [{
            key: "NAME",
            get: function get() {
              return Kn;
            }
          }, {
            key: "Default",
            get: function get() {
              return Gn;
            }
          }, {
            key: "jQueryInterface",
            value: function value(e) {
              return this.each(function () {
                var t = n.getOrCreateInstance(this, e);

                if ("string" == typeof e) {
                  if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError('No method named "'.concat(e, '"'));
                  t[e](this);
                }
              });
            }
          }]), n;
        }(K);

        $.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (e) {
          var t = this,
              n = r(this);

          if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), !p(this)) {
            $.one(n, tr, function () {
              c(t) && t.focus();
            });
            var i = ie.findOne(er);
            i && i !== n && nr.getInstance(i).hide(), nr.getOrCreateInstance(n).toggle(this);
          }
        }), $.on(window, "load.bs.offcanvas.data-api", function () {
          return ie.find(er).forEach(function (e) {
            return nr.getOrCreateInstance(e).show();
          });
        }), G(nr), x(nr);
        var rr = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
            ir = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
            or = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

        function ar(e, t, n) {
          var r;
          if (!e.length) return e;
          if (n && "function" == typeof n) return n(e);

          for (var i = new window.DOMParser().parseFromString(e, "text/html"), o = (r = []).concat.apply(r, f(i.body.querySelectorAll("*"))), a = function a(e, n) {
            var r,
                i = o[e],
                a = i.nodeName.toLowerCase();
            if (!Object.keys(t).includes(a)) return i.remove(), "continue";
            var s = (r = []).concat.apply(r, f(i.attributes)),
                l = [].concat(t["*"] || [], t[a] || []);
            s.forEach(function (e) {
              (function (e, t) {
                var n = e.nodeName.toLowerCase();
                if (t.includes(n)) return !rr.has(n) || Boolean(ir.test(e.nodeValue) || or.test(e.nodeValue));

                for (var r = t.filter(function (e) {
                  return e instanceof RegExp;
                }), i = 0, o = r.length; i < o; i++) {
                  if (r[i].test(n)) return !0;
                }

                return !1;
              })(e, l) || i.removeAttribute(e.nodeName);
            });
          }, s = 0, l = o.length; s < l; s++) {
            a(s);
          }

          return i.body.innerHTML;
        }

        var sr = "tooltip",
            lr = new Set(["sanitize", "allowList", "sanitizeFn"]),
            ur = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(array|string|function)",
          container: "(string|element|boolean)",
          fallbackPlacements: "array",
          boundary: "(string|element)",
          customClass: "(string|function)",
          sanitize: "boolean",
          sanitizeFn: "(null|function)",
          allowList: "object",
          popperConfig: "(null|object|function)"
        },
            cr = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: k() ? "left" : "right",
          BOTTOM: "bottom",
          LEFT: k() ? "right" : "left"
        },
            fr = {
          animation: !0,
          template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
          trigger: "hover focus",
          title: "",
          delay: 0,
          html: !1,
          selector: !1,
          placement: "top",
          offset: [0, 0],
          container: !1,
          fallbackPlacements: ["top", "right", "bottom", "left"],
          boundary: "clippingParents",
          customClass: "",
          sanitize: !0,
          sanitizeFn: null,
          allowList: {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
          },
          popperConfig: null
        },
            dr = {
          HIDE: "hide.bs.tooltip",
          HIDDEN: "hidden.bs.tooltip",
          SHOW: "show.bs.tooltip",
          SHOWN: "shown.bs.tooltip",
          INSERTED: "inserted.bs.tooltip",
          CLICK: "click.bs.tooltip",
          FOCUSIN: "focusin.bs.tooltip",
          FOCUSOUT: "focusout.bs.tooltip",
          MOUSEENTER: "mouseenter.bs.tooltip",
          MOUSELEAVE: "mouseleave.bs.tooltip"
        },
            pr = "fade",
            hr = "show",
            yr = "show",
            mr = "out",
            gr = ".tooltip-inner",
            vr = ".modal",
            br = "hide.bs.modal",
            Tr = "hover",
            wr = "focus",
            _r = function (e) {
          d(n, e);
          var t = h(n);

          function n(e, r) {
            var i;
            if (g(this, n), void 0 === tn) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            return (i = t.call(this, e))._isEnabled = !0, i._timeout = 0, i._hoverState = "", i._activeTrigger = {}, i._popper = null, i._config = i._getConfig(r), i.tip = null, i._setListeners(), i;
          }

          return b(n, [{
            key: "enable",
            value: function value() {
              this._isEnabled = !0;
            }
          }, {
            key: "disable",
            value: function value() {
              this._isEnabled = !1;
            }
          }, {
            key: "toggleEnabled",
            value: function value() {
              this._isEnabled = !this._isEnabled;
            }
          }, {
            key: "toggle",
            value: function value(e) {
              if (this._isEnabled) if (e) {
                var t = this._initializeOnDelegatedTarget(e);

                t._activeTrigger.click = !t._activeTrigger.click, t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t);
              } else {
                if (this.getTipElement().classList.contains(hr)) return void this._leave(null, this);

                this._enter(null, this);
              }
            }
          }, {
            key: "dispose",
            value: function value() {
              clearTimeout(this._timeout), $.off(this._element.closest(vr), br, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), a(m(n.prototype), "dispose", this).call(this);
            }
          }, {
            key: "show",
            value: function value() {
              var e,
                  t,
                  n = this;
              if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");

              if (this.isWithContent() && this._isEnabled) {
                var r = $.trigger(this._element, this.constructor.Event.SHOW),
                    i = y(this._element),
                    o = null === i ? this._element.ownerDocument.documentElement.contains(this._element) : i.contains(this._element);

                if (!r.defaultPrevented && o) {
                  "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(gr).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);

                  var a = this.getTipElement(),
                      s = function (e) {
                    do {
                      e += Math.floor(1e6 * Math.random());
                    } while (document.getElementById(e));

                    return e;
                  }(this.constructor.NAME);

                  a.setAttribute("id", s), this._element.setAttribute("aria-describedby", s), this._config.animation && a.classList.add(pr);

                  var l = "function" == typeof this._config.placement ? this._config.placement.call(this, a, this._element) : this._config.placement,
                      u = this._getAttachment(l);

                  this._addAttachmentClass(u);

                  var c = this._config.container;
                  W(a, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (c.append(a), $.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = en(this._element, a, this._getPopperConfig(u)), a.classList.add(hr);

                  var d = this._resolvePossibleFunction(this._config.customClass);

                  d && (e = a.classList).add.apply(e, f(d.split(" "))), "ontouchstart" in document.documentElement && (t = []).concat.apply(t, f(document.body.children)).forEach(function (e) {
                    $.on(e, "mouseover", v);
                  });
                  var p = this.tip.classList.contains(pr);

                  this._queueCallback(function () {
                    var e = n._hoverState;
                    n._hoverState = null, $.trigger(n._element, n.constructor.Event.SHOWN), e === mr && n._leave(null, n);
                  }, this.tip, p);
                }
              }
            }
          }, {
            key: "hide",
            value: function value() {
              var e,
                  t = this;

              if (this._popper) {
                var n = this.getTipElement();

                if (!$.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) {
                  n.classList.remove(hr), "ontouchstart" in document.documentElement && (e = []).concat.apply(e, f(document.body.children)).forEach(function (e) {
                    return $.off(e, "mouseover", v);
                  }), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
                  var r = this.tip.classList.contains(pr);
                  this._queueCallback(function () {
                    t._isWithActiveTrigger() || (t._hoverState !== yr && n.remove(), t._cleanTipClass(), t._element.removeAttribute("aria-describedby"), $.trigger(t._element, t.constructor.Event.HIDDEN), t._disposePopper());
                  }, this.tip, r), this._hoverState = "";
                }
              }
            }
          }, {
            key: "update",
            value: function value() {
              null !== this._popper && this._popper.update();
            }
          }, {
            key: "isWithContent",
            value: function value() {
              return Boolean(this.getTitle());
            }
          }, {
            key: "getTipElement",
            value: function value() {
              if (this.tip) return this.tip;
              var e = document.createElement("div");
              e.innerHTML = this._config.template;
              var t = e.children[0];
              return this.setContent(t), t.classList.remove(pr, hr), this.tip = t, this.tip;
            }
          }, {
            key: "setContent",
            value: function value(e) {
              this._sanitizeAndSetContent(e, this.getTitle(), gr);
            }
          }, {
            key: "_sanitizeAndSetContent",
            value: function value(e, t, n) {
              var r = ie.findOne(n, e);
              t || !r ? this.setElementContent(r, t) : r.remove();
            }
          }, {
            key: "setElementContent",
            value: function value(e, t) {
              if (null !== e) return o(t) ? (t = s(t), void (this._config.html ? t.parentNode !== e && (e.innerHTML = "", e.append(t)) : e.textContent = t.textContent)) : void (this._config.html ? (this._config.sanitize && (t = ar(t, this._config.allowList, this._config.sanitizeFn)), e.innerHTML = t) : e.textContent = t);
            }
          }, {
            key: "getTitle",
            value: function value() {
              var e = this._element.getAttribute("data-bs-original-title") || this._config.title;

              return this._resolvePossibleFunction(e);
            }
          }, {
            key: "updateAttachment",
            value: function value(e) {
              return "right" === e ? "end" : "left" === e ? "start" : e;
            }
          }, {
            key: "_initializeOnDelegatedTarget",
            value: function value(e, t) {
              return t || this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig());
            }
          }, {
            key: "_getOffset",
            value: function value() {
              var e = this,
                  t = this._config.offset;
              return "string" == typeof t ? t.split(",").map(function (e) {
                return Number.parseInt(e, 10);
              }) : "function" == typeof t ? function (n) {
                return t(n, e._element);
              } : t;
            }
          }, {
            key: "_resolvePossibleFunction",
            value: function value(e) {
              return "function" == typeof e ? e.call(this._element) : e;
            }
          }, {
            key: "_getPopperConfig",
            value: function value(e) {
              var t = this,
                  n = {
                placement: e,
                modifiers: [{
                  name: "flip",
                  options: {
                    fallbackPlacements: this._config.fallbackPlacements
                  }
                }, {
                  name: "offset",
                  options: {
                    offset: this._getOffset()
                  }
                }, {
                  name: "preventOverflow",
                  options: {
                    boundary: this._config.boundary
                  }
                }, {
                  name: "arrow",
                  options: {
                    element: ".".concat(this.constructor.NAME, "-arrow")
                  }
                }, {
                  name: "onChange",
                  enabled: !0,
                  phase: "afterWrite",
                  fn: function fn(e) {
                    return t._handlePopperPlacementChange(e);
                  }
                }],
                onFirstUpdate: function onFirstUpdate(e) {
                  e.options.placement !== e.placement && t._handlePopperPlacementChange(e);
                }
              };
              return u(u({}, n), "function" == typeof this._config.popperConfig ? this._config.popperConfig(n) : this._config.popperConfig);
            }
          }, {
            key: "_addAttachmentClass",
            value: function value(e) {
              this.getTipElement().classList.add("".concat(this._getBasicClassPrefix(), "-").concat(this.updateAttachment(e)));
            }
          }, {
            key: "_getAttachment",
            value: function value(e) {
              return cr[e.toUpperCase()];
            }
          }, {
            key: "_setListeners",
            value: function value() {
              var e = this;
              this._config.trigger.split(" ").forEach(function (t) {
                if ("click" === t) $.on(e._element, e.constructor.Event.CLICK, e._config.selector, function (t) {
                  return e.toggle(t);
                });else if ("manual" !== t) {
                  var n = t === Tr ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                      r = t === Tr ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                  $.on(e._element, n, e._config.selector, function (t) {
                    return e._enter(t);
                  }), $.on(e._element, r, e._config.selector, function (t) {
                    return e._leave(t);
                  });
                }
              }), this._hideModalHandler = function () {
                e._element && e.hide();
              }, $.on(this._element.closest(vr), br, this._hideModalHandler), this._config.selector ? this._config = u(u({}, this._config), {}, {
                trigger: "manual",
                selector: ""
              }) : this._fixTitle();
            }
          }, {
            key: "_fixTitle",
            value: function value() {
              var e = this._element.getAttribute("title"),
                  t = P(this._element.getAttribute("data-bs-original-title"));

              (e || "string" !== t) && (this._element.setAttribute("data-bs-original-title", e || ""), !e || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", e), this._element.setAttribute("title", ""));
            }
          }, {
            key: "_enter",
            value: function value(e, t) {
              t = this._initializeOnDelegatedTarget(e, t), e && (t._activeTrigger["focusin" === e.type ? wr : Tr] = !0), t.getTipElement().classList.contains(hr) || t._hoverState === yr ? t._hoverState = yr : (clearTimeout(t._timeout), t._hoverState = yr, t._config.delay && t._config.delay.show ? t._timeout = setTimeout(function () {
                t._hoverState === yr && t.show();
              }, t._config.delay.show) : t.show());
            }
          }, {
            key: "_leave",
            value: function value(e, t) {
              t = this._initializeOnDelegatedTarget(e, t), e && (t._activeTrigger["focusout" === e.type ? wr : Tr] = t._element.contains(e.relatedTarget)), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = mr, t._config.delay && t._config.delay.hide ? t._timeout = setTimeout(function () {
                t._hoverState === mr && t.hide();
              }, t._config.delay.hide) : t.hide());
            }
          }, {
            key: "_isWithActiveTrigger",
            value: function value() {
              for (var e in this._activeTrigger) {
                if (this._activeTrigger[e]) return !0;
              }

              return !1;
            }
          }, {
            key: "_getConfig",
            value: function value(e) {
              var t = re.getDataAttributes(this._element);
              return Object.keys(t).forEach(function (e) {
                lr.has(e) && delete t[e];
              }), (e = u(u(u({}, this.constructor.Default), t), "object" == P(e) && e ? e : {})).container = !1 === e.container ? document.body : s(e.container), "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
              }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), l(sr, e, this.constructor.DefaultType), e.sanitize && (e.template = ar(e.template, e.allowList, e.sanitizeFn)), e;
            }
          }, {
            key: "_getDelegateConfig",
            value: function value() {
              var e = {};

              for (var t in this._config) {
                this.constructor.Default[t] !== this._config[t] && (e[t] = this._config[t]);
              }

              return e;
            }
          }, {
            key: "_cleanTipClass",
            value: function value() {
              var e = this.getTipElement(),
                  t = new RegExp("(^|\\s)".concat(this._getBasicClassPrefix(), "\\S+"), "g"),
                  n = e.getAttribute("class").match(t);
              null !== n && n.length > 0 && n.map(function (e) {
                return e.trim();
              }).forEach(function (t) {
                return e.classList.remove(t);
              });
            }
          }, {
            key: "_getBasicClassPrefix",
            value: function value() {
              return "bs-tooltip";
            }
          }, {
            key: "_handlePopperPlacementChange",
            value: function value(e) {
              var t = e.state;
              t && (this.tip = t.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(t.placement)));
            }
          }, {
            key: "_disposePopper",
            value: function value() {
              this._popper && (this._popper.destroy(), this._popper = null);
            }
          }], [{
            key: "Default",
            get: function get() {
              return fr;
            }
          }, {
            key: "NAME",
            get: function get() {
              return sr;
            }
          }, {
            key: "Event",
            get: function get() {
              return dr;
            }
          }, {
            key: "DefaultType",
            get: function get() {
              return ur;
            }
          }, {
            key: "jQueryInterface",
            value: function value(e) {
              return this.each(function () {
                var t = n.getOrCreateInstance(this, e);

                if ("string" == typeof e) {
                  if (void 0 === t[e]) throw new TypeError('No method named "'.concat(e, '"'));
                  t[e]();
                }
              });
            }
          }]), n;
        }(K);

        x(_r);

        var Pr = u(u({}, _r.Default), {}, {
          placement: "right",
          offset: [0, 8],
          trigger: "click",
          content: "",
          template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
            jr = u(u({}, _r.DefaultType), {}, {
          content: "(string|element|function)"
        }),
            kr = {
          HIDE: "hide.bs.popover",
          HIDDEN: "hidden.bs.popover",
          SHOW: "show.bs.popover",
          SHOWN: "shown.bs.popover",
          INSERTED: "inserted.bs.popover",
          CLICK: "click.bs.popover",
          FOCUSIN: "focusin.bs.popover",
          FOCUSOUT: "focusout.bs.popover",
          MOUSEENTER: "mouseenter.bs.popover",
          MOUSELEAVE: "mouseleave.bs.popover"
        },
            xr = function (e) {
          d(n, e);
          var t = h(n);

          function n() {
            return g(this, n), t.apply(this, arguments);
          }

          return b(n, [{
            key: "isWithContent",
            value: function value() {
              return this.getTitle() || this._getContent();
            }
          }, {
            key: "setContent",
            value: function value(e) {
              this._sanitizeAndSetContent(e, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(e, this._getContent(), ".popover-body");
            }
          }, {
            key: "_getContent",
            value: function value() {
              return this._resolvePossibleFunction(this._config.content);
            }
          }, {
            key: "_getBasicClassPrefix",
            value: function value() {
              return "bs-popover";
            }
          }], [{
            key: "Default",
            get: function get() {
              return Pr;
            }
          }, {
            key: "NAME",
            get: function get() {
              return "popover";
            }
          }, {
            key: "Event",
            get: function get() {
              return kr;
            }
          }, {
            key: "DefaultType",
            get: function get() {
              return jr;
            }
          }, {
            key: "jQueryInterface",
            value: function value(e) {
              return this.each(function () {
                var t = n.getOrCreateInstance(this, e);

                if ("string" == typeof e) {
                  if (void 0 === t[e]) throw new TypeError('No method named "'.concat(e, '"'));
                  t[e]();
                }
              });
            }
          }]), n;
        }(_r);

        x(xr);

        var Yr = "scrollspy",
            Sr = {
          offset: 10,
          method: "auto",
          target: ""
        },
            Cr = {
          offset: "number",
          method: "string",
          target: "(string|element)"
        },
            Er = "active",
            Ar = ".nav-link, .list-group-item, .dropdown-item",
            Qr = "position",
            Or = function (e) {
          d(r, e);
          var t = h(r);

          function r(e, n) {
            var i;
            return g(this, r), (i = t.call(this, e))._scrollElement = "BODY" === i._element.tagName ? window : i._element, i._config = i._getConfig(n), i._offsets = [], i._targets = [], i._activeTarget = null, i._scrollHeight = 0, $.on(i._scrollElement, "scroll.bs.scrollspy", function () {
              return i._process();
            }), i.refresh(), i._process(), i;
          }

          return b(r, [{
            key: "refresh",
            value: function value() {
              var e = this,
                  t = this._scrollElement === this._scrollElement.window ? "offset" : Qr,
                  r = "auto" === this._config.method ? t : this._config.method,
                  i = r === Qr ? this._getScrollTop() : 0;
              this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), ie.find(Ar, this._config.target).map(function (e) {
                var t = n(e),
                    o = t ? ie.findOne(t) : null;

                if (o) {
                  var a = o.getBoundingClientRect();
                  if (a.width || a.height) return [re[r](o).top + i, t];
                }

                return null;
              }).filter(function (e) {
                return e;
              }).sort(function (e, t) {
                return e[0] - t[0];
              }).forEach(function (t) {
                e._offsets.push(t[0]), e._targets.push(t[1]);
              });
            }
          }, {
            key: "dispose",
            value: function value() {
              $.off(this._scrollElement, ".bs.scrollspy"), a(m(r.prototype), "dispose", this).call(this);
            }
          }, {
            key: "_getConfig",
            value: function value(e) {
              return (e = u(u(u({}, Sr), re.getDataAttributes(this._element)), "object" == P(e) && e ? e : {})).target = s(e.target) || document.documentElement, l(Yr, e, Cr), e;
            }
          }, {
            key: "_getScrollTop",
            value: function value() {
              return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
            }
          }, {
            key: "_getScrollHeight",
            value: function value() {
              return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
            }
          }, {
            key: "_getOffsetHeight",
            value: function value() {
              return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
            }
          }, {
            key: "_process",
            value: function value() {
              var e = this._getScrollTop() + this._config.offset,
                  t = this._getScrollHeight(),
                  n = this._config.offset + t - this._getOffsetHeight();

              if (this._scrollHeight !== t && this.refresh(), e >= n) {
                var r = this._targets[this._targets.length - 1];
                this._activeTarget !== r && this._activate(r);
              } else {
                if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

                for (var i = this._offsets.length; i--;) {
                  this._activeTarget !== this._targets[i] && e >= this._offsets[i] && (void 0 === this._offsets[i + 1] || e < this._offsets[i + 1]) && this._activate(this._targets[i]);
                }
              }
            }
          }, {
            key: "_activate",
            value: function value(e) {
              this._activeTarget = e, this._clear();
              var t = Ar.split(",").map(function (t) {
                return "".concat(t, '[data-bs-target="').concat(e, '"],').concat(t, '[href="').concat(e, '"]');
              }),
                  n = ie.findOne(t.join(","), this._config.target);
              n.classList.add(Er), n.classList.contains("dropdown-item") ? ie.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add(Er) : ie.parents(n, ".nav, .list-group").forEach(function (e) {
                ie.prev(e, ".nav-link, .list-group-item").forEach(function (e) {
                  return e.classList.add(Er);
                }), ie.prev(e, ".nav-item").forEach(function (e) {
                  ie.children(e, ".nav-link").forEach(function (e) {
                    return e.classList.add(Er);
                  });
                });
              }), $.trigger(this._scrollElement, "activate.bs.scrollspy", {
                relatedTarget: e
              });
            }
          }, {
            key: "_clear",
            value: function value() {
              ie.find(Ar, this._config.target).filter(function (e) {
                return e.classList.contains(Er);
              }).forEach(function (e) {
                return e.classList.remove(Er);
              });
            }
          }], [{
            key: "Default",
            get: function get() {
              return Sr;
            }
          }, {
            key: "NAME",
            get: function get() {
              return Yr;
            }
          }, {
            key: "jQueryInterface",
            value: function value(e) {
              return this.each(function () {
                var t = r.getOrCreateInstance(this, e);

                if ("string" == typeof e) {
                  if (void 0 === t[e]) throw new TypeError('No method named "'.concat(e, '"'));
                  t[e]();
                }
              });
            }
          }]), r;
        }(K);

        $.on(window, "load.bs.scrollspy.data-api", function () {
          ie.find('[data-bs-spy="scroll"]').forEach(function (e) {
            return new Or(e);
          });
        }), x(Or);

        var Dr = "active",
            Ir = "fade",
            Lr = "show",
            Nr = ".active",
            Mr = ":scope > li > .active",
            Br = function (e) {
          d(n, e);
          var t = h(n);

          function n() {
            return g(this, n), t.apply(this, arguments);
          }

          return b(n, [{
            key: "show",
            value: function value() {
              var e = this;

              if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE || !this._element.classList.contains(Dr)) {
                var t,
                    n = r(this._element),
                    i = this._element.closest(".nav, .list-group");

                if (i) {
                  var o = "UL" === i.nodeName || "OL" === i.nodeName ? Mr : Nr;
                  t = (t = ie.find(o, i))[t.length - 1];
                }

                var a = t ? $.trigger(t, "hide.bs.tab", {
                  relatedTarget: this._element
                }) : null;

                if (!($.trigger(this._element, "show.bs.tab", {
                  relatedTarget: t
                }).defaultPrevented || null !== a && a.defaultPrevented)) {
                  this._activate(this._element, i);

                  var s = function s() {
                    $.trigger(t, "hidden.bs.tab", {
                      relatedTarget: e._element
                    }), $.trigger(e._element, "shown.bs.tab", {
                      relatedTarget: t
                    });
                  };

                  n ? this._activate(n, n.parentNode, s) : s();
                }
              }
            }
          }, {
            key: "_activate",
            value: function value(e, t, n) {
              var r = this,
                  i = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? ie.children(t, Nr) : ie.find(Mr, t))[0],
                  o = n && i && i.classList.contains(Ir),
                  a = function a() {
                return r._transitionComplete(e, i, n);
              };

              i && o ? (i.classList.remove(Lr), this._queueCallback(a, e, !0)) : a();
            }
          }, {
            key: "_transitionComplete",
            value: function value(e, t, n) {
              if (t) {
                t.classList.remove(Dr);
                var r = ie.findOne(":scope > .dropdown-menu .active", t.parentNode);
                r && r.classList.remove(Dr), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1);
              }

              e.classList.add(Dr), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), w(e), e.classList.contains(Ir) && e.classList.add(Lr);
              var i = e.parentNode;

              if (i && "LI" === i.nodeName && (i = i.parentNode), i && i.classList.contains("dropdown-menu")) {
                var o = e.closest(".dropdown");
                o && ie.find(".dropdown-toggle", o).forEach(function (e) {
                  return e.classList.add(Dr);
                }), e.setAttribute("aria-expanded", !0);
              }

              n && n();
            }
          }], [{
            key: "NAME",
            get: function get() {
              return "tab";
            }
          }, {
            key: "jQueryInterface",
            value: function value(e) {
              return this.each(function () {
                var t = n.getOrCreateInstance(this);

                if ("string" == typeof e) {
                  if (void 0 === t[e]) throw new TypeError('No method named "'.concat(e, '"'));
                  t[e]();
                }
              });
            }
          }]), n;
        }(K);

        $.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (e) {
          ["A", "AREA"].includes(this.tagName) && e.preventDefault(), p(this) || Br.getOrCreateInstance(this).show();
        }), x(Br);

        var Rr = "toast",
            Fr = "hide",
            qr = "show",
            Hr = "showing",
            Vr = {
          animation: "boolean",
          autohide: "boolean",
          delay: "number"
        },
            $r = {
          animation: !0,
          autohide: !0,
          delay: 5e3
        },
            zr = function (e) {
          d(n, e);
          var t = h(n);

          function n(e, r) {
            var i;
            return g(this, n), (i = t.call(this, e))._config = i._getConfig(r), i._timeout = null, i._hasMouseInteraction = !1, i._hasKeyboardInteraction = !1, i._setListeners(), i;
          }

          return b(n, [{
            key: "show",
            value: function value() {
              var e = this;
              $.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Fr), w(this._element), this._element.classList.add(qr), this._element.classList.add(Hr), this._queueCallback(function () {
                e._element.classList.remove(Hr), $.trigger(e._element, "shown.bs.toast"), e._maybeScheduleHide();
              }, this._element, this._config.animation));
            }
          }, {
            key: "hide",
            value: function value() {
              var e = this;
              this._element.classList.contains(qr) && ($.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(Hr), this._queueCallback(function () {
                e._element.classList.add(Fr), e._element.classList.remove(Hr), e._element.classList.remove(qr), $.trigger(e._element, "hidden.bs.toast");
              }, this._element, this._config.animation)));
            }
          }, {
            key: "dispose",
            value: function value() {
              this._clearTimeout(), this._element.classList.contains(qr) && this._element.classList.remove(qr), a(m(n.prototype), "dispose", this).call(this);
            }
          }, {
            key: "_getConfig",
            value: function value(e) {
              return e = u(u(u({}, $r), re.getDataAttributes(this._element)), "object" == P(e) && e ? e : {}), l(Rr, e, this.constructor.DefaultType), e;
            }
          }, {
            key: "_maybeScheduleHide",
            value: function value() {
              var e = this;
              this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(function () {
                e.hide();
              }, this._config.delay)));
            }
          }, {
            key: "_onInteraction",
            value: function value(e, t) {
              switch (e.type) {
                case "mouseover":
                case "mouseout":
                  this._hasMouseInteraction = t;
                  break;

                case "focusin":
                case "focusout":
                  this._hasKeyboardInteraction = t;
              }

              if (t) this._clearTimeout();else {
                var n = e.relatedTarget;
                this._element === n || this._element.contains(n) || this._maybeScheduleHide();
              }
            }
          }, {
            key: "_setListeners",
            value: function value() {
              var e = this;
              $.on(this._element, "mouseover.bs.toast", function (t) {
                return e._onInteraction(t, !0);
              }), $.on(this._element, "mouseout.bs.toast", function (t) {
                return e._onInteraction(t, !1);
              }), $.on(this._element, "focusin.bs.toast", function (t) {
                return e._onInteraction(t, !0);
              }), $.on(this._element, "focusout.bs.toast", function (t) {
                return e._onInteraction(t, !1);
              });
            }
          }, {
            key: "_clearTimeout",
            value: function value() {
              clearTimeout(this._timeout), this._timeout = null;
            }
          }], [{
            key: "DefaultType",
            get: function get() {
              return Vr;
            }
          }, {
            key: "Default",
            get: function get() {
              return $r;
            }
          }, {
            key: "NAME",
            get: function get() {
              return Rr;
            }
          }, {
            key: "jQueryInterface",
            value: function value(e) {
              return this.each(function () {
                var t = n.getOrCreateInstance(this, e);

                if ("string" == typeof e) {
                  if (void 0 === t[e]) throw new TypeError('No method named "'.concat(e, '"'));
                  t[e](this);
                }
              });
            }
          }]), n;
        }(K);

        return G(zr), x(zr), {
          Alert: J,
          Button: ee,
          Carousel: me,
          Collapse: xe,
          Dropdown: _n,
          Modal: Xn,
          Offcanvas: nr,
          Popover: xr,
          ScrollSpy: Or,
          Tab: Br,
          Toast: zr,
          Tooltip: _r
        };
      }, "object" == P(t) ? e.exports = o() : void 0 === (i = "function" == typeof (r = o) ? r.call(t, n, t, e) : r) || (e.exports = i);
    },
    470: function _(e, t, n) {
      var r;

      function i(e) {
        return i = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
          return _typeof2(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
        }, i(e);
      }

      e = n.nmd(e), function (t, n) {
        "use strict";

        "object" == i(e) && "object" == i(e.exports) ? e.exports = t.document ? n(t, !0) : function (e) {
          if (!e.document) throw new Error("jQuery requires a window with a document");
          return n(e);
        } : n(t);
      }("undefined" != typeof window ? window : this, function (n, o) {
        "use strict";

        var a = [],
            s = Object.getPrototypeOf,
            l = a.slice,
            u = a.flat ? function (e) {
          return a.flat.call(e);
        } : function (e) {
          return a.concat.apply([], e);
        },
            c = a.push,
            f = a.indexOf,
            d = {},
            p = d.toString,
            h = d.hasOwnProperty,
            y = h.toString,
            m = y.call(Object),
            g = {},
            v = function v(e) {
          return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
        },
            b = function b(e) {
          return null != e && e === e.window;
        },
            T = n.document,
            w = {
          type: !0,
          src: !0,
          nonce: !0,
          noModule: !0
        };

        function _(e, t, n) {
          var r,
              i,
              o = (n = n || T).createElement("script");
          if (o.text = e, t) for (r in w) {
            (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
          }
          n.head.appendChild(o).parentNode.removeChild(o);
        }

        function P(e) {
          return null == e ? e + "" : "object" == i(e) || "function" == typeof e ? d[p.call(e)] || "object" : i(e);
        }

        var j = "3.6.0",
            k = function e(t, n) {
          return new e.fn.init(t, n);
        };

        function x(e) {
          var t = !!e && "length" in e && e.length,
              n = P(e);
          return !v(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
        }

        k.fn = k.prototype = {
          jquery: j,
          constructor: k,
          length: 0,
          toArray: function toArray() {
            return l.call(this);
          },
          get: function get(e) {
            return null == e ? l.call(this) : e < 0 ? this[e + this.length] : this[e];
          },
          pushStack: function pushStack(e) {
            var t = k.merge(this.constructor(), e);
            return t.prevObject = this, t;
          },
          each: function each(e) {
            return k.each(this, e);
          },
          map: function map(e) {
            return this.pushStack(k.map(this, function (t, n) {
              return e.call(t, n, t);
            }));
          },
          slice: function slice() {
            return this.pushStack(l.apply(this, arguments));
          },
          first: function first() {
            return this.eq(0);
          },
          last: function last() {
            return this.eq(-1);
          },
          even: function even() {
            return this.pushStack(k.grep(this, function (e, t) {
              return (t + 1) % 2;
            }));
          },
          odd: function odd() {
            return this.pushStack(k.grep(this, function (e, t) {
              return t % 2;
            }));
          },
          eq: function eq(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : []);
          },
          end: function end() {
            return this.prevObject || this.constructor();
          },
          push: c,
          sort: a.sort,
          splice: a.splice
        }, k.extend = k.fn.extend = function () {
          var e,
              t,
              n,
              r,
              o,
              a,
              s = arguments[0] || {},
              l = 1,
              u = arguments.length,
              c = !1;

          for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" == i(s) || v(s) || (s = {}), l === u && (s = this, l--); l < u; l++) {
            if (null != (e = arguments[l])) for (t in e) {
              r = e[t], "__proto__" !== t && s !== r && (c && r && (k.isPlainObject(r) || (o = Array.isArray(r))) ? (n = s[t], a = o && !Array.isArray(n) ? [] : o || k.isPlainObject(n) ? n : {}, o = !1, s[t] = k.extend(c, a, r)) : void 0 !== r && (s[t] = r));
            }
          }

          return s;
        }, k.extend({
          expando: "jQuery" + (j + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function error(e) {
            throw new Error(e);
          },
          noop: function noop() {},
          isPlainObject: function isPlainObject(e) {
            var t, n;
            return !(!e || "[object Object]" !== p.call(e) || (t = s(e)) && ("function" != typeof (n = h.call(t, "constructor") && t.constructor) || y.call(n) !== m));
          },
          isEmptyObject: function isEmptyObject(e) {
            var t;

            for (t in e) {
              return !1;
            }

            return !0;
          },
          globalEval: function globalEval(e, t, n) {
            _(e, {
              nonce: t && t.nonce
            }, n);
          },
          each: function each(e, t) {
            var n,
                r = 0;
            if (x(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) {
              ;
            } else for (r in e) {
              if (!1 === t.call(e[r], r, e[r])) break;
            }
            return e;
          },
          makeArray: function makeArray(e, t) {
            var n = t || [];
            return null != e && (x(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n;
          },
          inArray: function inArray(e, t, n) {
            return null == t ? -1 : f.call(t, e, n);
          },
          merge: function merge(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
              e[i++] = t[r];
            }

            return e.length = i, e;
          },
          grep: function grep(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) {
              !t(e[i], i) !== a && r.push(e[i]);
            }

            return r;
          },
          map: function map(e, t, n) {
            var r,
                i,
                o = 0,
                a = [];
            if (x(e)) for (r = e.length; o < r; o++) {
              null != (i = t(e[o], o, n)) && a.push(i);
            } else for (o in e) {
              null != (i = t(e[o], o, n)) && a.push(i);
            }
            return u(a);
          },
          guid: 1,
          support: g
        }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = a[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
          d["[object " + t + "]"] = t.toLowerCase();
        });

        var Y = function (e) {
          var t,
              n,
              r,
              i,
              o,
              a,
              s,
              l,
              u,
              c,
              f,
              d,
              p,
              h,
              y,
              m,
              g,
              v,
              b,
              T = "sizzle" + 1 * new Date(),
              w = e.document,
              _ = 0,
              P = 0,
              j = le(),
              k = le(),
              x = le(),
              Y = le(),
              S = function S(e, t) {
            return e === t && (f = !0), 0;
          },
              C = {}.hasOwnProperty,
              E = [],
              A = E.pop,
              Q = E.push,
              O = E.push,
              D = E.slice,
              I = function I(e, t) {
            for (var n = 0, r = e.length; n < r; n++) {
              if (e[n] === t) return n;
            }

            return -1;
          },
              L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              N = "[\\x20\\t\\r\\n\\f]",
              M = "(?:\\\\[\\da-fA-F]{1,6}" + N + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              B = "\\[" + N + "*(" + M + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + N + "*\\]",
              R = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)",
              F = new RegExp(N + "+", "g"),
              q = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g"),
              H = new RegExp("^" + N + "*," + N + "*"),
              V = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
              $ = new RegExp(N + "|>"),
              z = new RegExp(R),
              W = new RegExp("^" + M + "$"),
              U = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + B),
            PSEUDO: new RegExp("^" + R),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + L + ")$", "i"),
            needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i")
          },
              X = /HTML$/i,
              K = /^(?:input|select|textarea|button)$/i,
              G = /^h\d$/i,
              J = /^[^{]+\{\s*\[native \w/,
              Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ee = /[+~]/,
              te = new RegExp("\\\\[\\da-fA-F]{1,6}" + N + "?|\\\\([^\\r\\n\\f])", "g"),
              ne = function ne(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
          },
              re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              ie = function ie(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
          },
              oe = function oe() {
            d();
          },
              ae = Te(function (e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
          }, {
            dir: "parentNode",
            next: "legend"
          });

          try {
            O.apply(E = D.call(w.childNodes), w.childNodes), E[w.childNodes.length].nodeType;
          } catch (t) {
            O = {
              apply: E.length ? function (e, t) {
                Q.apply(e, D.call(t));
              } : function (e, t) {
                for (var n = e.length, r = 0; e[n++] = t[r++];) {
                  ;
                }

                e.length = n - 1;
              }
            };
          }

          function se(e, t, r, i) {
            var o,
                s,
                u,
                c,
                f,
                h,
                g,
                v = t && t.ownerDocument,
                w = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;

            if (!i && (d(t), t = t || p, y)) {
              if (11 !== w && (f = Z.exec(e))) if (o = f[1]) {
                if (9 === w) {
                  if (!(u = t.getElementById(o))) return r;
                  if (u.id === o) return r.push(u), r;
                } else if (v && (u = v.getElementById(o)) && b(t, u) && u.id === o) return r.push(u), r;
              } else {
                if (f[2]) return O.apply(r, t.getElementsByTagName(e)), r;
                if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(r, t.getElementsByClassName(o)), r;
              }

              if (n.qsa && !Y[e + " "] && (!m || !m.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                if (g = e, v = t, 1 === w && ($.test(e) || V.test(e))) {
                  for ((v = ee.test(e) && ge(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = T)), s = (h = a(e)).length; s--;) {
                    h[s] = (c ? "#" + c : ":scope") + " " + be(h[s]);
                  }

                  g = h.join(",");
                }

                try {
                  return O.apply(r, v.querySelectorAll(g)), r;
                } catch (t) {
                  Y(e, !0);
                } finally {
                  c === T && t.removeAttribute("id");
                }
              }
            }

            return l(e.replace(q, "$1"), t, r, i);
          }

          function le() {
            var e = [];
            return function t(n, i) {
              return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
            };
          }

          function ue(e) {
            return e[T] = !0, e;
          }

          function ce(e) {
            var t = p.createElement("fieldset");

            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), t = null;
            }
          }

          function fe(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) {
              r.attrHandle[n[i]] = t;
            }
          }

          function de(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; n = n.nextSibling;) {
              if (n === t) return -1;
            }
            return e ? 1 : -1;
          }

          function pe(e) {
            return function (t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }

          function he(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }

          function ye(e) {
            return function (t) {
              return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e;
            };
          }

          function me(e) {
            return ue(function (t) {
              return t = +t, ue(function (n, r) {
                for (var i, o = e([], n.length, t), a = o.length; a--;) {
                  n[i = o[a]] && (n[i] = !(r[i] = n[i]));
                }
              });
            });
          }

          function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }

          for (t in n = se.support = {}, o = se.isXML = function (e) {
            var t = e && e.namespaceURI,
                n = e && (e.ownerDocument || e).documentElement;
            return !X.test(t || n && n.nodeName || "HTML");
          }, d = se.setDocument = function (e) {
            var t,
                i,
                a = e ? e.ownerDocument || e : w;
            return a != p && 9 === a.nodeType && a.documentElement && (h = (p = a).documentElement, y = !o(p), w != p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.scope = ce(function (e) {
              return h.appendChild(e).appendChild(p.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
            }), n.attributes = ce(function (e) {
              return e.className = "i", !e.getAttribute("className");
            }), n.getElementsByTagName = ce(function (e) {
              return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length;
            }), n.getElementsByClassName = J.test(p.getElementsByClassName), n.getById = ce(function (e) {
              return h.appendChild(e).id = T, !p.getElementsByName || !p.getElementsByName(T).length;
            }), n.getById ? (r.filter.ID = function (e) {
              var t = e.replace(te, ne);
              return function (e) {
                return e.getAttribute("id") === t;
              };
            }, r.find.ID = function (e, t) {
              if (void 0 !== t.getElementById && y) {
                var n = t.getElementById(e);
                return n ? [n] : [];
              }
            }) : (r.filter.ID = function (e) {
              var t = e.replace(te, ne);
              return function (e) {
                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                return n && n.value === t;
              };
            }, r.find.ID = function (e, t) {
              if (void 0 !== t.getElementById && y) {
                var n,
                    r,
                    i,
                    o = t.getElementById(e);

                if (o) {
                  if ((n = o.getAttributeNode("id")) && n.value === e) return [o];

                  for (i = t.getElementsByName(e), r = 0; o = i[r++];) {
                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                  }
                }

                return [];
              }
            }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
              return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
            } : function (e, t) {
              var n,
                  r = [],
                  i = 0,
                  o = t.getElementsByTagName(e);

              if ("*" === e) {
                for (; n = o[i++];) {
                  1 === n.nodeType && r.push(n);
                }

                return r;
              }

              return o;
            }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
              if (void 0 !== t.getElementsByClassName && y) return t.getElementsByClassName(e);
            }, g = [], m = [], (n.qsa = J.test(p.querySelectorAll)) && (ce(function (e) {
              var t;
              h.appendChild(e).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + N + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + N + "*(?:value|" + L + ")"), e.querySelectorAll("[id~=" + T + "-]").length || m.push("~="), (t = p.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[" + N + "*name" + N + "*=" + N + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + T + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]");
            }), ce(function (e) {
              e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var t = p.createElement("input");
              t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + N + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:");
            })), (n.matchesSelector = J.test(v = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce(function (e) {
              n.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), g.push("!=", R);
            }), m = m.length && new RegExp(m.join("|")), g = g.length && new RegExp(g.join("|")), t = J.test(h.compareDocumentPosition), b = t || J.test(h.contains) ? function (e, t) {
              var n = 9 === e.nodeType ? e.documentElement : e,
                  r = t && t.parentNode;
              return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function (e, t) {
              if (t) for (; t = t.parentNode;) {
                if (t === e) return !0;
              }
              return !1;
            }, S = t ? function (e, t) {
              if (e === t) return f = !0, 0;
              var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
              return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == p || e.ownerDocument == w && b(w, e) ? -1 : t == p || t.ownerDocument == w && b(w, t) ? 1 : c ? I(c, e) - I(c, t) : 0 : 4 & r ? -1 : 1);
            } : function (e, t) {
              if (e === t) return f = !0, 0;
              var n,
                  r = 0,
                  i = e.parentNode,
                  o = t.parentNode,
                  a = [e],
                  s = [t];
              if (!i || !o) return e == p ? -1 : t == p ? 1 : i ? -1 : o ? 1 : c ? I(c, e) - I(c, t) : 0;
              if (i === o) return de(e, t);

              for (n = e; n = n.parentNode;) {
                a.unshift(n);
              }

              for (n = t; n = n.parentNode;) {
                s.unshift(n);
              }

              for (; a[r] === s[r];) {
                r++;
              }

              return r ? de(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0;
            }), p;
          }, se.matches = function (e, t) {
            return se(e, null, null, t);
          }, se.matchesSelector = function (e, t) {
            if (d(e), n.matchesSelector && y && !Y[t + " "] && (!g || !g.test(t)) && (!m || !m.test(t))) try {
              var r = v.call(e, t);
              if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
            } catch (e) {
              Y(t, !0);
            }
            return 0 < se(t, p, null, [e]).length;
          }, se.contains = function (e, t) {
            return (e.ownerDocument || e) != p && d(e), b(e, t);
          }, se.attr = function (e, t) {
            (e.ownerDocument || e) != p && d(e);
            var i = r.attrHandle[t.toLowerCase()],
                o = i && C.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !y) : void 0;
            return void 0 !== o ? o : n.attributes || !y ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
          }, se.escape = function (e) {
            return (e + "").replace(re, ie);
          }, se.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }, se.uniqueSort = function (e) {
            var t,
                r = [],
                i = 0,
                o = 0;

            if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(S), f) {
              for (; t = e[o++];) {
                t === e[o] && (i = r.push(o));
              }

              for (; i--;) {
                e.splice(r[i], 1);
              }
            }

            return c = null, e;
          }, i = se.getText = function (e) {
            var t,
                n = "",
                r = 0,
                o = e.nodeType;

            if (o) {
              if (1 === o || 9 === o || 11 === o) {
                if ("string" == typeof e.textContent) return e.textContent;

                for (e = e.firstChild; e; e = e.nextSibling) {
                  n += i(e);
                }
              } else if (3 === o || 4 === o) return e.nodeValue;
            } else for (; t = e[r++];) {
              n += i(t);
            }

            return n;
          }, (r = se.selectors = {
            cacheLength: 50,
            createPseudo: ue,
            match: U,
            attrHandle: {},
            find: {},
            relative: {
              ">": {
                dir: "parentNode",
                first: !0
              },
              " ": {
                dir: "parentNode"
              },
              "+": {
                dir: "previousSibling",
                first: !0
              },
              "~": {
                dir: "previousSibling"
              }
            },
            preFilter: {
              ATTR: function ATTR(e) {
                return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
              },
              CHILD: function CHILD(e) {
                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
              },
              PSEUDO: function PSEUDO(e) {
                var t,
                    n = !e[6] && e[2];
                return U.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && z.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
              }
            },
            filter: {
              TAG: function TAG(e) {
                var t = e.replace(te, ne).toLowerCase();
                return "*" === e ? function () {
                  return !0;
                } : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
              },
              CLASS: function CLASS(e) {
                var t = j[e + " "];
                return t || (t = new RegExp("(^|" + N + ")" + e + "(" + N + "|$)")) && j(e, function (e) {
                  return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
                });
              },
              ATTR: function ATTR(e, t, n) {
                return function (r) {
                  var i = se.attr(r, e);
                  return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && -1 < i.indexOf(n) : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? -1 < (" " + i.replace(F, " ") + " ").indexOf(n) : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                };
              },
              CHILD: function CHILD(e, t, n, r, i) {
                var o = "nth" !== e.slice(0, 3),
                    a = "last" !== e.slice(-4),
                    s = "of-type" === t;
                return 1 === r && 0 === i ? function (e) {
                  return !!e.parentNode;
                } : function (t, n, l) {
                  var u,
                      c,
                      f,
                      d,
                      p,
                      h,
                      y = o !== a ? "nextSibling" : "previousSibling",
                      m = t.parentNode,
                      g = s && t.nodeName.toLowerCase(),
                      v = !l && !s,
                      b = !1;

                  if (m) {
                    if (o) {
                      for (; y;) {
                        for (d = t; d = d[y];) {
                          if (s ? d.nodeName.toLowerCase() === g : 1 === d.nodeType) return !1;
                        }

                        h = y = "only" === e && !h && "nextSibling";
                      }

                      return !0;
                    }

                    if (h = [a ? m.firstChild : m.lastChild], a && v) {
                      for (b = (p = (u = (c = (f = (d = m)[T] || (d[T] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === _ && u[1]) && u[2], d = p && m.childNodes[p]; d = ++p && d && d[y] || (b = p = 0) || h.pop();) {
                        if (1 === d.nodeType && ++b && d === t) {
                          c[e] = [_, p, b];
                          break;
                        }
                      }
                    } else if (v && (b = p = (u = (c = (f = (d = t)[T] || (d[T] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === _ && u[1]), !1 === b) for (; (d = ++p && d && d[y] || (b = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== g : 1 !== d.nodeType) || !++b || (v && ((c = (f = d[T] || (d[T] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [_, b]), d !== t));) {
                      ;
                    }

                    return (b -= i) === r || b % r == 0 && 0 <= b / r;
                  }
                };
              },
              PSEUDO: function PSEUDO(e, t) {
                var n,
                    i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                return i[T] ? i(t) : 1 < i.length ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function (e, n) {
                  for (var r, o = i(e, t), a = o.length; a--;) {
                    e[r = I(e, o[a])] = !(n[r] = o[a]);
                  }
                }) : function (e) {
                  return i(e, 0, n);
                }) : i;
              }
            },
            pseudos: {
              not: ue(function (e) {
                var t = [],
                    n = [],
                    r = s(e.replace(q, "$1"));
                return r[T] ? ue(function (e, t, n, i) {
                  for (var o, a = r(e, null, i, []), s = e.length; s--;) {
                    (o = a[s]) && (e[s] = !(t[s] = o));
                  }
                }) : function (e, i, o) {
                  return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
                };
              }),
              has: ue(function (e) {
                return function (t) {
                  return 0 < se(e, t).length;
                };
              }),
              contains: ue(function (e) {
                return e = e.replace(te, ne), function (t) {
                  return -1 < (t.textContent || i(t)).indexOf(e);
                };
              }),
              lang: ue(function (e) {
                return W.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function (t) {
                  var n;

                  do {
                    if (n = y ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                  } while ((t = t.parentNode) && 1 === t.nodeType);

                  return !1;
                };
              }),
              target: function target(t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id;
              },
              root: function root(e) {
                return e === h;
              },
              focus: function focus(e) {
                return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
              },
              enabled: ye(!1),
              disabled: ye(!0),
              checked: function checked(e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && !!e.checked || "option" === t && !!e.selected;
              },
              selected: function selected(e) {
                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
              },
              empty: function empty(e) {
                for (e = e.firstChild; e; e = e.nextSibling) {
                  if (e.nodeType < 6) return !1;
                }

                return !0;
              },
              parent: function parent(e) {
                return !r.pseudos.empty(e);
              },
              header: function header(e) {
                return G.test(e.nodeName);
              },
              input: function input(e) {
                return K.test(e.nodeName);
              },
              button: function button(e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && "button" === e.type || "button" === t;
              },
              text: function text(e) {
                var t;
                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
              },
              first: me(function () {
                return [0];
              }),
              last: me(function (e, t) {
                return [t - 1];
              }),
              eq: me(function (e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: me(function (e, t) {
                for (var n = 0; n < t; n += 2) {
                  e.push(n);
                }

                return e;
              }),
              odd: me(function (e, t) {
                for (var n = 1; n < t; n += 2) {
                  e.push(n);
                }

                return e;
              }),
              lt: me(function (e, t, n) {
                for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) {
                  e.push(r);
                }

                return e;
              }),
              gt: me(function (e, t, n) {
                for (var r = n < 0 ? n + t : n; ++r < t;) {
                  e.push(r);
                }

                return e;
              })
            }
          }).pseudos.nth = r.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
          }) {
            r.pseudos[t] = pe(t);
          }

          for (t in {
            submit: !0,
            reset: !0
          }) {
            r.pseudos[t] = he(t);
          }

          function ve() {}

          function be(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) {
              r += e[t].value;
            }

            return r;
          }

          function Te(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = P++;
            return t.first ? function (t, n, i) {
              for (; t = t[r];) {
                if (1 === t.nodeType || a) return e(t, n, i);
              }

              return !1;
            } : function (t, n, l) {
              var u,
                  c,
                  f,
                  d = [_, s];

              if (l) {
                for (; t = t[r];) {
                  if ((1 === t.nodeType || a) && e(t, n, l)) return !0;
                }
              } else for (; t = t[r];) {
                if (1 === t.nodeType || a) if (c = (f = t[T] || (t[T] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
                  if ((u = c[o]) && u[0] === _ && u[1] === s) return d[2] = u[2];
                  if ((c[o] = d)[2] = e(t, n, l)) return !0;
                }
              }

              return !1;
            };
          }

          function we(e) {
            return 1 < e.length ? function (t, n, r) {
              for (var i = e.length; i--;) {
                if (!e[i](t, n, r)) return !1;
              }

              return !0;
            } : e[0];
          }

          function _e(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++) {
              (o = e[s]) && (n && !n(o, r, i) || (a.push(o), u && t.push(s)));
            }

            return a;
          }

          function Pe(e, t, n, r, i, o) {
            return r && !r[T] && (r = Pe(r)), i && !i[T] && (i = Pe(i, o)), ue(function (o, a, s, l) {
              var u,
                  c,
                  f,
                  d = [],
                  p = [],
                  h = a.length,
                  y = o || function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) {
                  se(e, t[r], n);
                }

                return n;
              }(t || "*", s.nodeType ? [s] : s, []),
                  m = !e || !o && t ? y : _e(y, d, e, s, l),
                  g = n ? i || (o ? e : h || r) ? [] : a : m;

              if (n && n(m, g, s, l), r) for (u = _e(g, p), r(u, [], s, l), c = u.length; c--;) {
                (f = u[c]) && (g[p[c]] = !(m[p[c]] = f));
              }

              if (o) {
                if (i || e) {
                  if (i) {
                    for (u = [], c = g.length; c--;) {
                      (f = g[c]) && u.push(m[c] = f);
                    }

                    i(null, g = [], u, l);
                  }

                  for (c = g.length; c--;) {
                    (f = g[c]) && -1 < (u = i ? I(o, f) : d[c]) && (o[u] = !(a[u] = f));
                  }
                }
              } else g = _e(g === a ? g.splice(h, g.length) : g), i ? i(null, a, g, l) : O.apply(a, g);
            });
          }

          function je(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], l = a ? 1 : 0, c = Te(function (e) {
              return e === t;
            }, s, !0), f = Te(function (e) {
              return -1 < I(t, e);
            }, s, !0), d = [function (e, n, r) {
              var i = !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
              return t = null, i;
            }]; l < o; l++) {
              if (n = r.relative[e[l].type]) d = [Te(we(d), n)];else {
                if ((n = r.filter[e[l].type].apply(null, e[l].matches))[T]) {
                  for (i = ++l; i < o && !r.relative[e[i].type]; i++) {
                    ;
                  }

                  return Pe(1 < l && we(d), 1 < l && be(e.slice(0, l - 1).concat({
                    value: " " === e[l - 2].type ? "*" : ""
                  })).replace(q, "$1"), n, l < i && je(e.slice(l, i)), i < o && je(e = e.slice(i)), i < o && be(e));
                }

                d.push(n);
              }
            }

            return we(d);
          }

          return ve.prototype = r.filters = r.pseudos, r.setFilters = new ve(), a = se.tokenize = function (e, t) {
            var n,
                i,
                o,
                a,
                s,
                l,
                u,
                c = k[e + " "];
            if (c) return t ? 0 : c.slice(0);

            for (s = e, l = [], u = r.preFilter; s;) {
              for (a in n && !(i = H.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(o = [])), n = !1, (i = V.exec(s)) && (n = i.shift(), o.push({
                value: n,
                type: i[0].replace(q, " ")
              }), s = s.slice(n.length)), r.filter) {
                !(i = U[a].exec(s)) || u[a] && !(i = u[a](i)) || (n = i.shift(), o.push({
                  value: n,
                  type: a,
                  matches: i
                }), s = s.slice(n.length));
              }

              if (!n) break;
            }

            return t ? s.length : s ? se.error(e) : k(e, l).slice(0);
          }, s = se.compile = function (e, t) {
            var n,
                i,
                o,
                s,
                l,
                c,
                f = [],
                h = [],
                m = x[e + " "];

            if (!m) {
              for (t || (t = a(e)), n = t.length; n--;) {
                (m = je(t[n]))[T] ? f.push(m) : h.push(m);
              }

              (m = x(e, (i = h, s = 0 < (o = f).length, l = 0 < i.length, c = function c(e, t, n, a, _c) {
                var f,
                    h,
                    m,
                    g = 0,
                    v = "0",
                    b = e && [],
                    T = [],
                    w = u,
                    P = e || l && r.find.TAG("*", _c),
                    j = _ += null == w ? 1 : Math.random() || .1,
                    k = P.length;

                for (_c && (u = t == p || t || _c); v !== k && null != (f = P[v]); v++) {
                  if (l && f) {
                    for (h = 0, t || f.ownerDocument == p || (d(f), n = !y); m = i[h++];) {
                      if (m(f, t || p, n)) {
                        a.push(f);
                        break;
                      }
                    }

                    _c && (_ = j);
                  }

                  s && ((f = !m && f) && g--, e && b.push(f));
                }

                if (g += v, s && v !== g) {
                  for (h = 0; m = o[h++];) {
                    m(b, T, t, n);
                  }

                  if (e) {
                    if (0 < g) for (; v--;) {
                      b[v] || T[v] || (T[v] = A.call(a));
                    }
                    T = _e(T);
                  }

                  O.apply(a, T), _c && !e && 0 < T.length && 1 < g + o.length && se.uniqueSort(a);
                }

                return _c && (_ = j, u = w), b;
              }, s ? ue(c) : c))).selector = e;
            }

            return m;
          }, l = se.select = function (e, t, n, i) {
            var o,
                l,
                u,
                c,
                f,
                d = "function" == typeof e && e,
                p = !i && a(e = d.selector || e);

            if (n = n || [], 1 === p.length) {
              if (2 < (l = p[0] = p[0].slice(0)).length && "ID" === (u = l[0]).type && 9 === t.nodeType && y && r.relative[l[1].type]) {
                if (!(t = (r.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return n;
                d && (t = t.parentNode), e = e.slice(l.shift().value.length);
              }

              for (o = U.needsContext.test(e) ? 0 : l.length; o-- && (u = l[o], !r.relative[c = u.type]);) {
                if ((f = r.find[c]) && (i = f(u.matches[0].replace(te, ne), ee.test(l[0].type) && ge(t.parentNode) || t))) {
                  if (l.splice(o, 1), !(e = i.length && be(l))) return O.apply(n, i), n;
                  break;
                }
              }
            }

            return (d || s(e, p))(i, t, !y, n, !t || ee.test(e) && ge(t.parentNode) || t), n;
          }, n.sortStable = T.split("").sort(S).join("") === T, n.detectDuplicates = !!f, d(), n.sortDetached = ce(function (e) {
            return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
          }), ce(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
          }) || fe("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }), n.attributes && ce(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
          }) || fe("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
          }), ce(function (e) {
            return null == e.getAttribute("disabled");
          }) || fe(L, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
          }), se;
        }(n);

        k.find = Y, (k.expr = Y.selectors)[":"] = k.expr.pseudos, k.uniqueSort = k.unique = Y.uniqueSort, k.text = Y.getText, k.isXMLDoc = Y.isXML, k.contains = Y.contains, k.escapeSelector = Y.escape;

        var S = function S(e, t, n) {
          for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
            if (1 === e.nodeType) {
              if (i && k(e).is(n)) break;
              r.push(e);
            }
          }

          return r;
        },
            C = function C(e, t) {
          for (var n = []; e; e = e.nextSibling) {
            1 === e.nodeType && e !== t && n.push(e);
          }

          return n;
        },
            E = k.expr.match.needsContext;

        function A(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        }

        var Q = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function O(e, t, n) {
          return v(t) ? k.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n;
          }) : t.nodeType ? k.grep(e, function (e) {
            return e === t !== n;
          }) : "string" != typeof t ? k.grep(e, function (e) {
            return -1 < f.call(t, e) !== n;
          }) : k.filter(t, e, n);
        }

        k.filter = function (e, t, n) {
          var r = t[0];
          return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function (e) {
            return 1 === e.nodeType;
          }));
        }, k.fn.extend({
          find: function find(e) {
            var t,
                n,
                r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(k(e).filter(function () {
              for (t = 0; t < r; t++) {
                if (k.contains(i[t], this)) return !0;
              }
            }));

            for (n = this.pushStack([]), t = 0; t < r; t++) {
              k.find(e, i[t], n);
            }

            return 1 < r ? k.uniqueSort(n) : n;
          },
          filter: function filter(e) {
            return this.pushStack(O(this, e || [], !1));
          },
          not: function not(e) {
            return this.pushStack(O(this, e || [], !0));
          },
          is: function is(e) {
            return !!O(this, "string" == typeof e && E.test(e) ? k(e) : e || [], !1).length;
          }
        });
        var D,
            I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (k.fn.init = function (e, t, n) {
          var r, i;
          if (!e) return this;

          if (n = n || D, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : I.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

            if (r[1]) {
              if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : T, !0)), Q.test(r[1]) && k.isPlainObject(t)) for (r in t) {
                v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
              }
              return this;
            }

            return (i = T.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
          }

          return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this);
        }).prototype = k.fn, D = k(T);
        var L = /^(?:parents|prev(?:Until|All))/,
            N = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
        };

        function M(e, t) {
          for (; (e = e[t]) && 1 !== e.nodeType;) {
            ;
          }

          return e;
        }

        k.fn.extend({
          has: function has(e) {
            var t = k(e, this),
                n = t.length;
            return this.filter(function () {
              for (var e = 0; e < n; e++) {
                if (k.contains(this, t[e])) return !0;
              }
            });
          },
          closest: function closest(e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && k(e);
            if (!E.test(e)) for (; r < i; r++) {
              for (n = this[r]; n && n !== t; n = n.parentNode) {
                if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                  o.push(n);
                  break;
                }
              }
            }
            return this.pushStack(1 < o.length ? k.uniqueSort(o) : o);
          },
          index: function index(e) {
            return e ? "string" == typeof e ? f.call(k(e), this[0]) : f.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
          },
          add: function add(e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
          },
          addBack: function addBack(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
          }
        }), k.each({
          parent: function parent(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
          },
          parents: function parents(e) {
            return S(e, "parentNode");
          },
          parentsUntil: function parentsUntil(e, t, n) {
            return S(e, "parentNode", n);
          },
          next: function next(e) {
            return M(e, "nextSibling");
          },
          prev: function prev(e) {
            return M(e, "previousSibling");
          },
          nextAll: function nextAll(e) {
            return S(e, "nextSibling");
          },
          prevAll: function prevAll(e) {
            return S(e, "previousSibling");
          },
          nextUntil: function nextUntil(e, t, n) {
            return S(e, "nextSibling", n);
          },
          prevUntil: function prevUntil(e, t, n) {
            return S(e, "previousSibling", n);
          },
          siblings: function siblings(e) {
            return C((e.parentNode || {}).firstChild, e);
          },
          children: function children(e) {
            return C(e.firstChild);
          },
          contents: function contents(e) {
            return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), k.merge([], e.childNodes));
          }
        }, function (e, t) {
          k.fn[e] = function (n, r) {
            var i = k.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = k.filter(r, i)), 1 < this.length && (N[e] || k.uniqueSort(i), L.test(e) && i.reverse()), this.pushStack(i);
          };
        });
        var B = /[^\x20\t\r\n\f]+/g;

        function R(e) {
          return e;
        }

        function F(e) {
          throw e;
        }

        function q(e, t, n, r) {
          var i;

          try {
            e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
          } catch (e) {
            n.apply(void 0, [e]);
          }
        }

        k.Callbacks = function (e) {
          var t;
          e = "string" == typeof e ? (t = {}, k.each(e.match(B) || [], function (e, n) {
            t[n] = !0;
          }), t) : k.extend({}, e);

          var n,
              r,
              i,
              o,
              a = [],
              s = [],
              l = -1,
              u = function u() {
            for (o = o || e.once, i = n = !0; s.length; l = -1) {
              for (r = s.shift(); ++l < a.length;) {
                !1 === a[l].apply(r[0], r[1]) && e.stopOnFalse && (l = a.length, r = !1);
              }
            }

            e.memory || (r = !1), n = !1, o && (a = r ? [] : "");
          },
              c = {
            add: function add() {
              return a && (r && !n && (l = a.length - 1, s.push(r)), function t(n) {
                k.each(n, function (n, r) {
                  v(r) ? e.unique && c.has(r) || a.push(r) : r && r.length && "string" !== P(r) && t(r);
                });
              }(arguments), r && !n && u()), this;
            },
            remove: function remove() {
              return k.each(arguments, function (e, t) {
                for (var n; -1 < (n = k.inArray(t, a, n));) {
                  a.splice(n, 1), n <= l && l--;
                }
              }), this;
            },
            has: function has(e) {
              return e ? -1 < k.inArray(e, a) : 0 < a.length;
            },
            empty: function empty() {
              return a && (a = []), this;
            },
            disable: function disable() {
              return o = s = [], a = r = "", this;
            },
            disabled: function disabled() {
              return !a;
            },
            lock: function lock() {
              return o = s = [], r || n || (a = r = ""), this;
            },
            locked: function locked() {
              return !!o;
            },
            fireWith: function fireWith(e, t) {
              return o || (t = [e, (t = t || []).slice ? t.slice() : t], s.push(t), n || u()), this;
            },
            fire: function fire() {
              return c.fireWith(this, arguments), this;
            },
            fired: function fired() {
              return !!i;
            }
          };

          return c;
        }, k.extend({
          Deferred: function Deferred(e) {
            var t = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]],
                r = "pending",
                o = {
              state: function state() {
                return r;
              },
              always: function always() {
                return a.done(arguments).fail(arguments), this;
              },
              "catch": function _catch(e) {
                return o.then(null, e);
              },
              pipe: function pipe() {
                var e = arguments;
                return k.Deferred(function (n) {
                  k.each(t, function (t, r) {
                    var i = v(e[r[4]]) && e[r[4]];
                    a[r[1]](function () {
                      var e = i && i.apply(this, arguments);
                      e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments);
                    });
                  }), e = null;
                }).promise();
              },
              then: function then(e, r, o) {
                var a = 0;

                function s(e, t, r, o) {
                  return function () {
                    var l = this,
                        u = arguments,
                        c = function c() {
                      var n, c;

                      if (!(e < a)) {
                        if ((n = r.apply(l, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
                        c = n && ("object" == i(n) || "function" == typeof n) && n.then, v(c) ? o ? c.call(n, s(a, t, R, o), s(a, t, F, o)) : (a++, c.call(n, s(a, t, R, o), s(a, t, F, o), s(a, t, R, t.notifyWith))) : (r !== R && (l = void 0, u = [n]), (o || t.resolveWith)(l, u));
                      }
                    },
                        f = o ? c : function () {
                      try {
                        c();
                      } catch (n) {
                        k.Deferred.exceptionHook && k.Deferred.exceptionHook(n, f.stackTrace), a <= e + 1 && (r !== F && (l = void 0, u = [n]), t.rejectWith(l, u));
                      }
                    };

                    e ? f() : (k.Deferred.getStackHook && (f.stackTrace = k.Deferred.getStackHook()), n.setTimeout(f));
                  };
                }

                return k.Deferred(function (n) {
                  t[0][3].add(s(0, n, v(o) ? o : R, n.notifyWith)), t[1][3].add(s(0, n, v(e) ? e : R)), t[2][3].add(s(0, n, v(r) ? r : F));
                }).promise();
              },
              promise: function promise(e) {
                return null != e ? k.extend(e, o) : o;
              }
            },
                a = {};
            return k.each(t, function (e, n) {
              var i = n[2],
                  s = n[5];
              o[n[1]] = i.add, s && i.add(function () {
                r = s;
              }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), i.add(n[3].fire), a[n[0]] = function () {
                return a[n[0] + "With"](this === a ? void 0 : this, arguments), this;
              }, a[n[0] + "With"] = i.fireWith;
            }), o.promise(a), e && e.call(a, a), a;
          },
          when: function when(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = l.call(arguments),
                o = k.Deferred(),
                a = function a(e) {
              return function (n) {
                r[e] = this, i[e] = 1 < arguments.length ? l.call(arguments) : n, --t || o.resolveWith(r, i);
              };
            };

            if (t <= 1 && (q(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || v(i[n] && i[n].then))) return o.then();

            for (; n--;) {
              q(i[n], a(n), o.reject);
            }

            return o.promise();
          }
        });
        var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        k.Deferred.exceptionHook = function (e, t) {
          n.console && n.console.warn && e && H.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
        }, k.readyException = function (e) {
          n.setTimeout(function () {
            throw e;
          });
        };
        var V = k.Deferred();

        function $() {
          T.removeEventListener("DOMContentLoaded", $), n.removeEventListener("load", $), k.ready();
        }

        k.fn.ready = function (e) {
          return V.then(e)["catch"](function (e) {
            k.readyException(e);
          }), this;
        }, k.extend({
          isReady: !1,
          readyWait: 1,
          ready: function ready(e) {
            (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || V.resolveWith(T, [k]);
          }
        }), k.ready.then = V.then, "complete" === T.readyState || "loading" !== T.readyState && !T.documentElement.doScroll ? n.setTimeout(k.ready) : (T.addEventListener("DOMContentLoaded", $), n.addEventListener("load", $));

        var z = function e(t, n, r, i, o, a, s) {
          var l = 0,
              u = t.length,
              c = null == r;
          if ("object" === P(r)) for (l in o = !0, r) {
            e(t, n, l, r[l], !0, a, s);
          } else if (void 0 !== i && (o = !0, v(i) || (s = !0), c && (s ? (n.call(t, i), n = null) : (c = n, n = function n(e, t, _n3) {
            return c.call(k(e), _n3);
          })), n)) for (; l < u; l++) {
            n(t[l], r, s ? i : i.call(t[l], l, n(t[l], r)));
          }
          return o ? t : c ? n.call(t) : u ? n(t[0], r) : a;
        },
            W = /^-ms-/,
            U = /-([a-z])/g;

        function X(e, t) {
          return t.toUpperCase();
        }

        function K(e) {
          return e.replace(W, "ms-").replace(U, X);
        }

        var G = function G(e) {
          return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
        };

        function J() {
          this.expando = k.expando + J.uid++;
        }

        J.uid = 1, J.prototype = {
          cache: function cache(e) {
            var t = e[this.expando];
            return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
              value: t,
              configurable: !0
            }))), t;
          },
          set: function set(e, t, n) {
            var r,
                i = this.cache(e);
            if ("string" == typeof t) i[K(t)] = n;else for (r in t) {
              i[K(r)] = t[r];
            }
            return i;
          },
          get: function get(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][K(t)];
          },
          access: function access(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function remove(e, t) {
            var n,
                r = e[this.expando];

            if (void 0 !== r) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t) ? t.map(K) : (t = K(t)) in r ? [t] : t.match(B) || []).length;

                for (; n--;) {
                  delete r[t[n]];
                }
              }

              (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            }
          },
          hasData: function hasData(e) {
            var t = e[this.expando];
            return void 0 !== t && !k.isEmptyObject(t);
          }
        };
        var Z = new J(),
            ee = new J(),
            te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ne = /[A-Z]/g;

        function re(e, t, n) {
          var r, i;
          if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ne, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
            try {
              n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : te.test(i) ? JSON.parse(i) : i);
            } catch (e) {}

            ee.set(e, t, n);
          } else n = void 0;
          return n;
        }

        k.extend({
          hasData: function hasData(e) {
            return ee.hasData(e) || Z.hasData(e);
          },
          data: function data(e, t, n) {
            return ee.access(e, t, n);
          },
          removeData: function removeData(e, t) {
            ee.remove(e, t);
          },
          _data: function _data(e, t, n) {
            return Z.access(e, t, n);
          },
          _removeData: function _removeData(e, t) {
            Z.remove(e, t);
          }
        }), k.fn.extend({
          data: function data(e, t) {
            var n,
                r,
                o,
                a = this[0],
                s = a && a.attributes;

            if (void 0 === e) {
              if (this.length && (o = ee.get(a), 1 === a.nodeType && !Z.get(a, "hasDataAttrs"))) {
                for (n = s.length; n--;) {
                  s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = K(r.slice(5)), re(a, r, o[r]));
                }

                Z.set(a, "hasDataAttrs", !0);
              }

              return o;
            }

            return "object" == i(e) ? this.each(function () {
              ee.set(this, e);
            }) : z(this, function (t) {
              var n;
              if (a && void 0 === t) return void 0 !== (n = ee.get(a, e)) || void 0 !== (n = re(a, e)) ? n : void 0;
              this.each(function () {
                ee.set(this, e, t);
              });
            }, null, t, 1 < arguments.length, null, !0);
          },
          removeData: function removeData(e) {
            return this.each(function () {
              ee.remove(this, e);
            });
          }
        }), k.extend({
          queue: function queue(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Z.get(e, t), n && (!r || Array.isArray(n) ? r = Z.access(e, t, k.makeArray(n)) : r.push(n)), r || [];
          },
          dequeue: function dequeue(e, t) {
            var n = k.queue(e, t = t || "fx"),
                r = n.length,
                i = n.shift(),
                o = k._queueHooks(e, t);

            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
              k.dequeue(e, t);
            }, o)), !r && o && o.empty.fire();
          },
          _queueHooks: function _queueHooks(e, t) {
            var n = t + "queueHooks";
            return Z.get(e, n) || Z.access(e, n, {
              empty: k.Callbacks("once memory").add(function () {
                Z.remove(e, [t + "queue", n]);
              })
            });
          }
        }), k.fn.extend({
          queue: function queue(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? k.queue(this[0], e) : void 0 === t ? this : this.each(function () {
              var n = k.queue(this, e, t);
              k._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && k.dequeue(this, e);
            });
          },
          dequeue: function dequeue(e) {
            return this.each(function () {
              k.dequeue(this, e);
            });
          },
          clearQueue: function clearQueue(e) {
            return this.queue(e || "fx", []);
          },
          promise: function promise(e, t) {
            var n,
                r = 1,
                i = k.Deferred(),
                o = this,
                a = this.length,
                s = function s() {
              --r || i.resolveWith(o, [o]);
            };

            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) {
              (n = Z.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            }

            return s(), i.promise(t);
          }
        });

        var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            oe = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
            ae = ["Top", "Right", "Bottom", "Left"],
            se = T.documentElement,
            le = function le(e) {
          return k.contains(e.ownerDocument, e);
        },
            ue = {
          composed: !0
        };

        se.getRootNode && (le = function le(e) {
          return k.contains(e.ownerDocument, e) || e.getRootNode(ue) === e.ownerDocument;
        });

        var ce = function ce(e, t) {
          return "none" === (e = t || e).style.display || "" === e.style.display && le(e) && "none" === k.css(e, "display");
        };

        function fe(e, t, n, r) {
          var i,
              o,
              a = 20,
              s = r ? function () {
            return r.cur();
          } : function () {
            return k.css(e, t, "");
          },
              l = s(),
              u = n && n[3] || (k.cssNumber[t] ? "" : "px"),
              c = e.nodeType && (k.cssNumber[t] || "px" !== u && +l) && oe.exec(k.css(e, t));

          if (c && c[3] !== u) {
            for (l /= 2, u = u || c[3], c = +l || 1; a--;) {
              k.style(e, t, c + u), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), c /= o;
            }

            k.style(e, t, (c *= 2) + u), n = n || [];
          }

          return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = i)), i;
        }

        var de = {};

        function pe(e, t) {
          for (var n, r, i, o, a, s, l, u = [], c = 0, f = e.length; c < f; c++) {
            (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (u[c] = Z.get(r, "display") || null, u[c] || (r.style.display = "")), "" === r.style.display && ce(r) && (u[c] = (l = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (l = de[s]) || (o = a.body.appendChild(a.createElement(s)), l = k.css(o, "display"), o.parentNode.removeChild(o), "none" === l && (l = "block"), de[s] = l)))) : "none" !== n && (u[c] = "none", Z.set(r, "display", n)));
          }

          for (c = 0; c < f; c++) {
            null != u[c] && (e[c].style.display = u[c]);
          }

          return e;
        }

        k.fn.extend({
          show: function show() {
            return pe(this, !0);
          },
          hide: function hide() {
            return pe(this);
          },
          toggle: function toggle(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
              ce(this) ? k(this).show() : k(this).hide();
            });
          }
        });
        var he,
            ye,
            me = /^(?:checkbox|radio)$/i,
            ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ve = /^$|^module$|\/(?:java|ecma)script/i;
        he = T.createDocumentFragment().appendChild(T.createElement("div")), (ye = T.createElement("input")).setAttribute("type", "radio"), ye.setAttribute("checked", "checked"), ye.setAttribute("name", "t"), he.appendChild(ye), g.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked, he.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue, he.innerHTML = "<option></option>", g.option = !!he.lastChild;
        var be = {
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };

        function Te(e, t) {
          var n;
          return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? k.merge([e], n) : n;
        }

        function we(e, t) {
          for (var n = 0, r = e.length; n < r; n++) {
            Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"));
          }
        }

        be.tbody = be.tfoot = be.colgroup = be.caption = be.thead, be.th = be.td, g.option || (be.optgroup = be.option = [1, "<select multiple='multiple'>", "</select>"]);
        var _e = /<|&#?\w+;/;

        function Pe(e, t, n, r, i) {
          for (var o, a, s, l, u, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++) {
            if ((o = e[p]) || 0 === o) if ("object" === P(o)) k.merge(d, o.nodeType ? [o] : o);else if (_e.test(o)) {
              for (a = a || f.appendChild(t.createElement("div")), s = (ge.exec(o) || ["", ""])[1].toLowerCase(), l = be[s] || be._default, a.innerHTML = l[1] + k.htmlPrefilter(o) + l[2], c = l[0]; c--;) {
                a = a.lastChild;
              }

              k.merge(d, a.childNodes), (a = f.firstChild).textContent = "";
            } else d.push(t.createTextNode(o));
          }

          for (f.textContent = "", p = 0; o = d[p++];) {
            if (r && -1 < k.inArray(o, r)) i && i.push(o);else if (u = le(o), a = Te(f.appendChild(o), "script"), u && we(a), n) for (c = 0; o = a[c++];) {
              ve.test(o.type || "") && n.push(o);
            }
          }

          return f;
        }

        var je = /^([^.]*)(?:\.(.+)|)/;

        function ke() {
          return !0;
        }

        function xe() {
          return !1;
        }

        function Ye(e, t) {
          return e === function () {
            try {
              return T.activeElement;
            } catch (e) {}
          }() == ("focus" === t);
        }

        function Se(e, t, n, r, o, a) {
          var s, l;

          if ("object" == i(t)) {
            for (l in "string" != typeof n && (r = r || n, n = void 0), t) {
              Se(e, l, n, r, t[l], a);
            }

            return e;
          }

          if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = xe;else if (!o) return e;
          return 1 === a && (s = o, (o = function o(e) {
            return k().off(e), s.apply(this, arguments);
          }).guid = s.guid || (s.guid = k.guid++)), e.each(function () {
            k.event.add(this, t, o, r, n);
          });
        }

        function Ce(e, t, n) {
          n ? (Z.set(e, t, !1), k.event.add(e, t, {
            namespace: !1,
            handler: function handler(e) {
              var r,
                  i,
                  o = Z.get(this, t);

              if (1 & e.isTrigger && this[t]) {
                if (o.length) (k.event.special[t] || {}).delegateType && e.stopPropagation();else if (o = l.call(arguments), Z.set(this, t, o), r = n(this, t), this[t](), o !== (i = Z.get(this, t)) || r ? Z.set(this, t, !1) : i = {}, o !== i) return e.stopImmediatePropagation(), e.preventDefault(), i && i.value;
              } else o.length && (Z.set(this, t, {
                value: k.event.trigger(k.extend(o[0], k.Event.prototype), o.slice(1), this)
              }), e.stopImmediatePropagation());
            }
          })) : void 0 === Z.get(e, t) && k.event.add(e, t, ke);
        }

        k.event = {
          global: {},
          add: function add(e, t, n, r, i) {
            var o,
                a,
                s,
                l,
                u,
                c,
                f,
                d,
                p,
                h,
                y,
                m = Z.get(e);
            if (G(e)) for (n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(se, i), n.guid || (n.guid = k.guid++), (l = m.events) || (l = m.events = Object.create(null)), (a = m.handle) || (a = m.handle = function (t) {
              return void 0 !== k && k.event.triggered !== t.type ? k.event.dispatch.apply(e, arguments) : void 0;
            }), u = (t = (t || "").match(B) || [""]).length; u--;) {
              p = y = (s = je.exec(t[u]) || [])[1], h = (s[2] || "").split(".").sort(), p && (f = k.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = k.event.special[p] || {}, c = k.extend({
                type: p,
                origType: y,
                data: r,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && k.expr.match.needsContext.test(i),
                namespace: h.join(".")
              }, o), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), k.event.global[p] = !0);
            }
          },
          remove: function remove(e, t, n, r, i) {
            var o,
                a,
                s,
                l,
                u,
                c,
                f,
                d,
                p,
                h,
                y,
                m = Z.hasData(e) && Z.get(e);

            if (m && (l = m.events)) {
              for (u = (t = (t || "").match(B) || [""]).length; u--;) {
                if (p = y = (s = je.exec(t[u]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                  for (f = k.event.special[p] || {}, d = l[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) {
                    c = d[o], !i && y !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                  }

                  a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || k.removeEvent(e, p, m.handle), delete l[p]);
                } else for (p in l) {
                  k.event.remove(e, p + t[u], n, r, !0);
                }
              }

              k.isEmptyObject(l) && Z.remove(e, "handle events");
            }
          },
          dispatch: function dispatch(e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s = new Array(arguments.length),
                l = k.event.fix(e),
                u = (Z.get(this, "events") || Object.create(null))[l.type] || [],
                c = k.event.special[l.type] || {};

            for (s[0] = l, t = 1; t < arguments.length; t++) {
              s[t] = arguments[t];
            }

            if (l.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
              for (a = k.event.handlers.call(this, l, u), t = 0; (i = a[t++]) && !l.isPropagationStopped();) {
                for (l.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !l.isImmediatePropagationStopped();) {
                  l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (l.result = r) && (l.preventDefault(), l.stopPropagation()));
                }
              }

              return c.postDispatch && c.postDispatch.call(this, l), l.result;
            }
          },
          handlers: function handlers(e, t) {
            var n,
                r,
                i,
                o,
                a,
                s = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button)) for (; u !== this; u = u.parentNode || this) {
              if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                for (o = [], a = {}, n = 0; n < l; n++) {
                  void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(u) : k.find(i, this, null, [u]).length), a[i] && o.push(r);
                }

                o.length && s.push({
                  elem: u,
                  handlers: o
                });
              }
            }
            return u = this, l < t.length && s.push({
              elem: u,
              handlers: t.slice(l)
            }), s;
          },
          addProp: function addProp(e, t) {
            Object.defineProperty(k.Event.prototype, e, {
              enumerable: !0,
              configurable: !0,
              get: v(t) ? function () {
                if (this.originalEvent) return t(this.originalEvent);
              } : function () {
                if (this.originalEvent) return this.originalEvent[e];
              },
              set: function set(t) {
                Object.defineProperty(this, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t
                });
              }
            });
          },
          fix: function fix(e) {
            return e[k.expando] ? e : new k.Event(e);
          },
          special: {
            load: {
              noBubble: !0
            },
            click: {
              setup: function setup(e) {
                var t = this || e;
                return me.test(t.type) && t.click && A(t, "input") && Ce(t, "click", ke), !1;
              },
              trigger: function trigger(e) {
                var t = this || e;
                return me.test(t.type) && t.click && A(t, "input") && Ce(t, "click"), !0;
              },
              _default: function _default(e) {
                var t = e.target;
                return me.test(t.type) && t.click && A(t, "input") && Z.get(t, "click") || A(t, "a");
              }
            },
            beforeunload: {
              postDispatch: function postDispatch(e) {
                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
              }
            }
          }
        }, k.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }, (k.Event = function (e, t) {
          if (!(this instanceof k.Event)) return new k.Event(e, t);
          e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : xe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0;
        }).prototype = {
          constructor: k.Event,
          isDefaultPrevented: xe,
          isPropagationStopped: xe,
          isImmediatePropagationStopped: xe,
          isSimulated: !1,
          preventDefault: function preventDefault() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function stopPropagation() {
            var e = this.originalEvent;
            this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function stopImmediatePropagation() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
          }
        }, k.each({
          altKey: !0,
          bubbles: !0,
          cancelable: !0,
          changedTouches: !0,
          ctrlKey: !0,
          detail: !0,
          eventPhase: !0,
          metaKey: !0,
          pageX: !0,
          pageY: !0,
          shiftKey: !0,
          view: !0,
          "char": !0,
          code: !0,
          charCode: !0,
          key: !0,
          keyCode: !0,
          button: !0,
          buttons: !0,
          clientX: !0,
          clientY: !0,
          offsetX: !0,
          offsetY: !0,
          pointerId: !0,
          pointerType: !0,
          screenX: !0,
          screenY: !0,
          targetTouches: !0,
          toElement: !0,
          touches: !0,
          which: !0
        }, k.event.addProp), k.each({
          focus: "focusin",
          blur: "focusout"
        }, function (e, t) {
          k.event.special[e] = {
            setup: function setup() {
              return Ce(this, e, Ye), !1;
            },
            trigger: function trigger() {
              return Ce(this, e), !0;
            },
            _default: function _default() {
              return !0;
            },
            delegateType: t
          };
        }), k.each({
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
        }, function (e, t) {
          k.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function handle(e) {
              var n,
                  r = e.relatedTarget,
                  i = e.handleObj;
              return r && (r === this || k.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n;
            }
          };
        }), k.fn.extend({
          on: function on(e, t, n, r) {
            return Se(this, e, t, n, r);
          },
          one: function one(e, t, n, r) {
            return Se(this, e, t, n, r, 1);
          },
          off: function off(e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

            if ("object" == i(e)) {
              for (o in e) {
                this.off(o, t, e[o]);
              }

              return this;
            }

            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = xe), this.each(function () {
              k.event.remove(this, e, n, t);
            });
          }
        });
        var Ee = /<script|<style|<link/i,
            Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Oe(e, t) {
          return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e;
        }

        function De(e) {
          return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
        }

        function Ie(e) {
          return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
        }

        function Le(e, t) {
          var n, r, i, o, a, s;

          if (1 === t.nodeType) {
            if (Z.hasData(e) && (s = Z.get(e).events)) for (i in Z.remove(t, "handle events"), s) {
              for (n = 0, r = s[i].length; n < r; n++) {
                k.event.add(t, i, s[i][n]);
              }
            }
            ee.hasData(e) && (o = ee.access(e), a = k.extend({}, o), ee.set(t, a));
          }
        }

        function Ne(e, t, n, r) {
          t = u(t);
          var i,
              o,
              a,
              s,
              l,
              c,
              f = 0,
              d = e.length,
              p = d - 1,
              h = t[0],
              y = v(h);
          if (y || 1 < d && "string" == typeof h && !g.checkClone && Ae.test(h)) return e.each(function (i) {
            var o = e.eq(i);
            y && (t[0] = h.call(this, i, o.html())), Ne(o, t, n, r);
          });

          if (d && (o = (i = Pe(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (s = (a = k.map(Te(i, "script"), De)).length; f < d; f++) {
              l = i, f !== p && (l = k.clone(l, !0, !0), s && k.merge(a, Te(l, "script"))), n.call(e[f], l, f);
            }

            if (s) for (c = a[a.length - 1].ownerDocument, k.map(a, Ie), f = 0; f < s; f++) {
              l = a[f], ve.test(l.type || "") && !Z.access(l, "globalEval") && k.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? k._evalUrl && !l.noModule && k._evalUrl(l.src, {
                nonce: l.nonce || l.getAttribute("nonce")
              }, c) : _(l.textContent.replace(Qe, ""), l, c));
            }
          }

          return e;
        }

        function Me(e, t, n) {
          for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
            n || 1 !== r.nodeType || k.cleanData(Te(r)), r.parentNode && (n && le(r) && we(Te(r, "script")), r.parentNode.removeChild(r));
          }

          return e;
        }

        k.extend({
          htmlPrefilter: function htmlPrefilter(e) {
            return e;
          },
          clone: function clone(e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                l,
                u,
                c = e.cloneNode(!0),
                f = le(e);
            if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e))) for (a = Te(c), r = 0, i = (o = Te(e)).length; r < i; r++) {
              s = o[r], "input" === (u = (l = a[r]).nodeName.toLowerCase()) && me.test(s.type) ? l.checked = s.checked : "input" !== u && "textarea" !== u || (l.defaultValue = s.defaultValue);
            }
            if (t) if (n) for (o = o || Te(e), a = a || Te(c), r = 0, i = o.length; r < i; r++) {
              Le(o[r], a[r]);
            } else Le(e, c);
            return 0 < (a = Te(c, "script")).length && we(a, !f && Te(e, "script")), c;
          },
          cleanData: function cleanData(e) {
            for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++) {
              if (G(n)) {
                if (t = n[Z.expando]) {
                  if (t.events) for (r in t.events) {
                    i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                  }
                  n[Z.expando] = void 0;
                }

                n[ee.expando] && (n[ee.expando] = void 0);
              }
            }
          }
        }), k.fn.extend({
          detach: function detach(e) {
            return Me(this, e, !0);
          },
          remove: function remove(e) {
            return Me(this, e);
          },
          text: function text(e) {
            return z(this, function (e) {
              return void 0 === e ? k.text(this) : this.empty().each(function () {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
              });
            }, null, e, arguments.length);
          },
          append: function append() {
            return Ne(this, arguments, function (e) {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e);
            });
          },
          prepend: function prepend() {
            return Ne(this, arguments, function (e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var t = Oe(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function before() {
            return Ne(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function after() {
            return Ne(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function empty() {
            for (var e, t = 0; null != (e = this[t]); t++) {
              1 === e.nodeType && (k.cleanData(Te(e, !1)), e.textContent = "");
            }

            return this;
          },
          clone: function clone(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
              return k.clone(this, e, t);
            });
          },
          html: function html(e) {
            return z(this, function (e) {
              var t = this[0] || {},
                  n = 0,
                  r = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

              if ("string" == typeof e && !Ee.test(e) && !be[(ge.exec(e) || ["", ""])[1].toLowerCase()]) {
                e = k.htmlPrefilter(e);

                try {
                  for (; n < r; n++) {
                    1 === (t = this[n] || {}).nodeType && (k.cleanData(Te(t, !1)), t.innerHTML = e);
                  }

                  t = 0;
                } catch (e) {}
              }

              t && this.empty().append(e);
            }, null, e, arguments.length);
          },
          replaceWith: function replaceWith() {
            var e = [];
            return Ne(this, arguments, function (t) {
              var n = this.parentNode;
              k.inArray(this, e) < 0 && (k.cleanData(Te(this)), n && n.replaceChild(t, this));
            }, e);
          }
        }), k.each({
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
        }, function (e, t) {
          k.fn[e] = function (e) {
            for (var n, r = [], i = k(e), o = i.length - 1, a = 0; a <= o; a++) {
              n = a === o ? this : this.clone(!0), k(i[a])[t](n), c.apply(r, n.get());
            }

            return this.pushStack(r);
          };
        });

        var Be = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
            Re = function Re(e) {
          var t = e.ownerDocument.defaultView;
          return t && t.opener || (t = n), t.getComputedStyle(e);
        },
            Fe = function Fe(e, t, n) {
          var r,
              i,
              o = {};

          for (i in t) {
            o[i] = e.style[i], e.style[i] = t[i];
          }

          for (i in r = n.call(e), t) {
            e.style[i] = o[i];
          }

          return r;
        },
            qe = new RegExp(ae.join("|"), "i");

        function He(e, t, n) {
          var r,
              i,
              o,
              a,
              s = e.style;
          return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || le(e) || (a = k.style(e, t)), !g.pixelBoxStyles() && Be.test(a) && qe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
        }

        function Ve(e, t) {
          return {
            get: function get() {
              if (!e()) return (this.get = t).apply(this, arguments);
              delete this.get;
            }
          };
        }

        !function () {
          function e() {
            if (c) {
              u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", se.appendChild(u).appendChild(c);
              var e = n.getComputedStyle(c);
              r = "1%" !== e.top, l = 12 === t(e.marginLeft), c.style.right = "60%", a = 36 === t(e.right), i = 36 === t(e.width), c.style.position = "absolute", o = 12 === t(c.offsetWidth / 3), se.removeChild(u), c = null;
            }
          }

          function t(e) {
            return Math.round(parseFloat(e));
          }

          var r,
              i,
              o,
              a,
              s,
              l,
              u = T.createElement("div"),
              c = T.createElement("div");
          c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === c.style.backgroundClip, k.extend(g, {
            boxSizingReliable: function boxSizingReliable() {
              return e(), i;
            },
            pixelBoxStyles: function pixelBoxStyles() {
              return e(), a;
            },
            pixelPosition: function pixelPosition() {
              return e(), r;
            },
            reliableMarginLeft: function reliableMarginLeft() {
              return e(), l;
            },
            scrollboxSize: function scrollboxSize() {
              return e(), o;
            },
            reliableTrDimensions: function reliableTrDimensions() {
              var e, t, r, i;
              return null == s && (e = T.createElement("table"), t = T.createElement("tr"), r = T.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", r.style.height = "9px", r.style.display = "block", se.appendChild(e).appendChild(t).appendChild(r), i = n.getComputedStyle(t), s = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === t.offsetHeight, se.removeChild(e)), s;
            }
          }));
        }();
        var $e = ["Webkit", "Moz", "ms"],
            ze = T.createElement("div").style,
            We = {};

        function Ue(e) {
          return k.cssProps[e] || We[e] || (e in ze ? e : We[e] = function (e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = $e.length; n--;) {
              if ((e = $e[n] + t) in ze) return e;
            }
          }(e) || e);
        }

        var Xe = /^(none|table(?!-c[ea]).+)/,
            Ke = /^--/,
            Ge = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
        },
            Je = {
          letterSpacing: "0",
          fontWeight: "400"
        };

        function Ze(e, t, n) {
          var r = oe.exec(t);
          return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
        }

        function et(e, t, n, r, i, o) {
          var a = "width" === t ? 1 : 0,
              s = 0,
              l = 0;
          if (n === (r ? "border" : "content")) return 0;

          for (; a < 4; a += 2) {
            "margin" === n && (l += k.css(e, n + ae[a], !0, i)), r ? ("content" === n && (l -= k.css(e, "padding" + ae[a], !0, i)), "margin" !== n && (l -= k.css(e, "border" + ae[a] + "Width", !0, i))) : (l += k.css(e, "padding" + ae[a], !0, i), "padding" !== n ? l += k.css(e, "border" + ae[a] + "Width", !0, i) : s += k.css(e, "border" + ae[a] + "Width", !0, i));
          }

          return !r && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - .5)) || 0), l;
        }

        function tt(e, t, n) {
          var r = Re(e),
              i = (!g.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r),
              o = i,
              a = He(e, t, r),
              s = "offset" + t[0].toUpperCase() + t.slice(1);

          if (Be.test(a)) {
            if (!n) return a;
            a = "auto";
          }

          return (!g.boxSizingReliable() && i || !g.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
        }

        function nt(e, t, n, r, i) {
          return new nt.prototype.init(e, t, n, r, i);
        }

        k.extend({
          cssHooks: {
            opacity: {
              get: function get(e, t) {
                if (t) {
                  var n = He(e, "opacity");
                  return "" === n ? "1" : n;
                }
              }
            }
          },
          cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
          },
          cssProps: {},
          style: function style(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var o,
                  a,
                  s,
                  l = K(t),
                  u = Ke.test(t),
                  c = e.style;
              if (u || (t = Ue(l)), s = k.cssHooks[t] || k.cssHooks[l], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, r)) ? o : c[t];
              "string" === (a = i(n)) && (o = oe.exec(n)) && o[1] && (n = fe(e, t, o), a = "number"), null != n && n == n && ("number" !== a || u || (n += o && o[3] || (k.cssNumber[l] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u ? c.setProperty(t, n) : c[t] = n));
            }
          },
          css: function css(e, t, n, r) {
            var i,
                o,
                a,
                s = K(t);
            return Ke.test(t) || (t = Ue(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = He(e, t, r)), "normal" === i && t in Je && (i = Je[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
          }
        }), k.each(["height", "width"], function (e, t) {
          k.cssHooks[t] = {
            get: function get(e, n, r) {
              if (n) return !Xe.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, t, r) : Fe(e, Ge, function () {
                return tt(e, t, r);
              });
            },
            set: function set(e, n, r) {
              var i,
                  o = Re(e),
                  a = !g.scrollboxSize() && "absolute" === o.position,
                  s = (a || r) && "border-box" === k.css(e, "boxSizing", !1, o),
                  l = r ? et(e, t, r, s, o) : 0;
              return s && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - et(e, t, "border", !1, o) - .5)), l && (i = oe.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = k.css(e, t)), Ze(0, n, l);
            }
          };
        }), k.cssHooks.marginLeft = Ve(g.reliableMarginLeft, function (e, t) {
          if (t) return (parseFloat(He(e, "marginLeft")) || e.getBoundingClientRect().left - Fe(e, {
            marginLeft: 0
          }, function () {
            return e.getBoundingClientRect().left;
          })) + "px";
        }), k.each({
          margin: "",
          padding: "",
          border: "Width"
        }, function (e, t) {
          k.cssHooks[e + t] = {
            expand: function expand(n) {
              for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
                i[e + ae[r] + t] = o[r] || o[r - 2] || o[0];
              }

              return i;
            }
          }, "margin" !== e && (k.cssHooks[e + t].set = Ze);
        }), k.fn.extend({
          css: function css(e, t) {
            return z(this, function (e, t, n) {
              var r,
                  i,
                  o = {},
                  a = 0;

              if (Array.isArray(t)) {
                for (r = Re(e), i = t.length; a < i; a++) {
                  o[t[a]] = k.css(e, t[a], !1, r);
                }

                return o;
              }

              return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
            }, e, t, 1 < arguments.length);
          }
        }), ((k.Tween = nt).prototype = {
          constructor: nt,
          init: function init(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px");
          },
          cur: function cur() {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
          },
          run: function run(e) {
            var t,
                n = nt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this;
          }
        }).init.prototype = nt.prototype, (nt.propHooks = {
          _default: {
            get: function get(e) {
              var t;
              return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
            },
            set: function set(e) {
              k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ue(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit);
            }
          }
        }).scrollTop = nt.propHooks.scrollLeft = {
          set: function set(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          }
        }, k.easing = {
          linear: function linear(e) {
            return e;
          },
          swing: function swing(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing"
        }, (k.fx = nt.prototype.init).step = {};
        var rt,
            it,
            ot,
            at,
            st = /^(?:toggle|show|hide)$/,
            lt = /queueHooks$/;

        function ut() {
          it && (!1 === T.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ut) : n.setTimeout(ut, k.fx.interval), k.fx.tick());
        }

        function ct() {
          return n.setTimeout(function () {
            rt = void 0;
          }), rt = Date.now();
        }

        function ft(e, t) {
          var n,
              r = 0,
              i = {
            height: e
          };

          for (t = t ? 1 : 0; r < 4; r += 2 - t) {
            i["margin" + (n = ae[r])] = i["padding" + n] = e;
          }

          return t && (i.opacity = i.width = e), i;
        }

        function dt(e, t, n) {
          for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
            if (r = i[o].call(n, t, e)) return r;
          }
        }

        function pt(e, t, n) {
          var r,
              i,
              o = 0,
              a = pt.prefilters.length,
              s = k.Deferred().always(function () {
            delete l.elem;
          }),
              l = function l() {
            if (i) return !1;

            for (var t = rt || ct(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; o < a; o++) {
              u.tweens[o].run(r);
            }

            return s.notifyWith(e, [u, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1);
          },
              u = s.promise({
            elem: e,
            props: k.extend({}, t),
            opts: k.extend(!0, {
              specialEasing: {},
              easing: k.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: rt || ct(),
            duration: n.duration,
            tweens: [],
            createTween: function createTween(t, n) {
              var r = k.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
              return u.tweens.push(r), r;
            },
            stop: function stop(t) {
              var n = 0,
                  r = t ? u.tweens.length : 0;
              if (i) return this;

              for (i = !0; n < r; n++) {
                u.tweens[n].run(1);
              }

              return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this;
            }
          }),
              c = u.props;

          for (function (e, t) {
            var n, r, i, o, a;

            for (n in e) {
              if (i = t[r = K(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) {
                (n in e) || (e[n] = o[n], t[n] = i);
              } else t[r] = i;
            }
          }(c, u.opts.specialEasing); o < a; o++) {
            if (r = pt.prefilters[o].call(u, e, c, u.opts)) return v(r.stop) && (k._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)), r;
          }

          return k.map(c, dt, u), v(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), k.fx.timer(k.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
          })), u;
        }

        k.Animation = k.extend(pt, {
          tweeners: {
            "*": [function (e, t) {
              var n = this.createTween(e, t);
              return fe(n.elem, e, oe.exec(t), n), n;
            }]
          },
          tweener: function tweener(e, t) {
            v(e) ? (t = e, e = ["*"]) : e = e.match(B);

            for (var n, r = 0, i = e.length; r < i; r++) {
              n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t);
            }
          },
          prefilters: [function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                l,
                u,
                c,
                f = "width" in t || "height" in t,
                d = this,
                p = {},
                h = e.style,
                y = e.nodeType && ce(e),
                m = Z.get(e, "fxshow");

            for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
              a.unqueued || s();
            }), a.unqueued++, d.always(function () {
              d.always(function () {
                a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
              });
            })), t) {
              if (i = t[r], st.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (y ? "hide" : "show")) {
                  if ("show" !== i || !m || void 0 === m[r]) continue;
                  y = !0;
                }

                p[r] = m && m[r] || k.style(e, r);
              }
            }

            if ((l = !k.isEmptyObject(t)) || !k.isEmptyObject(p)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (u = m && m.display) && (u = Z.get(e, "display")), "none" === (c = k.css(e, "display")) && (u ? c = u : (pe([e], !0), u = e.style.display || u, c = k.css(e, "display"), pe([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === k.css(e, "float") && (l || (d.done(function () {
              h.display = u;
            }), null == u && (c = h.display, u = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function () {
              h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
            })), l = !1, p) {
              l || (m ? "hidden" in m && (y = m.hidden) : m = Z.access(e, "fxshow", {
                display: u
              }), o && (m.hidden = !y), y && pe([e], !0), d.done(function () {
                for (r in y || pe([e]), Z.remove(e, "fxshow"), p) {
                  k.style(e, r, p[r]);
                }
              })), l = dt(y ? m[r] : 0, r, d), r in m || (m[r] = l.start, y && (l.end = l.start, l.start = 0));
            }
          }],
          prefilter: function prefilter(e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
          }
        }), k.speed = function (e, t, n) {
          var r = e && "object" == i(e) ? k.extend({}, e) : {
            complete: n || !n && t || v(e) && e,
            duration: e,
            easing: n && t || t && !v(t) && t
          };
          return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            v(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
          }, r;
        }, k.fn.extend({
          fadeTo: function fadeTo(e, t, n, r) {
            return this.filter(ce).css("opacity", 0).show().end().animate({
              opacity: t
            }, e, n, r);
          },
          animate: function animate(e, t, n, r) {
            var i = k.isEmptyObject(e),
                o = k.speed(t, n, r),
                a = function a() {
              var t = pt(this, k.extend({}, e), o);
              (i || Z.get(this, "finish")) && t.stop(!0);
            };

            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
          },
          stop: function stop(e, t, n) {
            var r = function r(e) {
              var t = e.stop;
              delete e.stop, t(n);
            };

            return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function () {
              var t = !0,
                  i = null != e && e + "queueHooks",
                  o = k.timers,
                  a = Z.get(this);
              if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) {
                a[i] && a[i].stop && lt.test(i) && r(a[i]);
              }

              for (i = o.length; i--;) {
                o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
              }

              !t && n || k.dequeue(this, e);
            });
          },
          finish: function finish(e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
              var t,
                  n = Z.get(this),
                  r = n[e + "queue"],
                  i = n[e + "queueHooks"],
                  o = k.timers,
                  a = r ? r.length : 0;

              for (n.finish = !0, k.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
                o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
              }

              for (t = 0; t < a; t++) {
                r[t] && r[t].finish && r[t].finish.call(this);
              }

              delete n.finish;
            });
          }
        }), k.each(["toggle", "show", "hide"], function (e, t) {
          var n = k.fn[t];

          k.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ft(t, !0), e, r, i);
          };
        }), k.each({
          slideDown: ft("show"),
          slideUp: ft("hide"),
          slideToggle: ft("toggle"),
          fadeIn: {
            opacity: "show"
          },
          fadeOut: {
            opacity: "hide"
          },
          fadeToggle: {
            opacity: "toggle"
          }
        }, function (e, t) {
          k.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r);
          };
        }), k.timers = [], k.fx.tick = function () {
          var e,
              t = 0,
              n = k.timers;

          for (rt = Date.now(); t < n.length; t++) {
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          }

          n.length || k.fx.stop(), rt = void 0;
        }, k.fx.timer = function (e) {
          k.timers.push(e), k.fx.start();
        }, k.fx.interval = 13, k.fx.start = function () {
          it || (it = !0, ut());
        }, k.fx.stop = function () {
          it = null;
        }, k.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400
        }, k.fn.delay = function (e, t) {
          return e = k.fx && k.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, r) {
            var i = n.setTimeout(t, e);

            r.stop = function () {
              n.clearTimeout(i);
            };
          });
        }, ot = T.createElement("input"), at = T.createElement("select").appendChild(T.createElement("option")), ot.type = "checkbox", g.checkOn = "" !== ot.value, g.optSelected = at.selected, (ot = T.createElement("input")).value = "t", ot.type = "radio", g.radioValue = "t" === ot.value;
        var ht,
            yt = k.expr.attrHandle;
        k.fn.extend({
          attr: function attr(e, t) {
            return z(this, k.attr, e, t, 1 < arguments.length);
          },
          removeAttr: function removeAttr(e) {
            return this.each(function () {
              k.removeAttr(this, e);
            });
          }
        }), k.extend({
          attr: function attr(e, t, n) {
            var r,
                i,
                o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r);
          },
          attrHooks: {
            type: {
              set: function set(e, t) {
                if (!g.radioValue && "radio" === t && A(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              }
            }
          },
          removeAttr: function removeAttr(e, t) {
            var n,
                r = 0,
                i = t && t.match(B);
            if (i && 1 === e.nodeType) for (; n = i[r++];) {
              e.removeAttribute(n);
            }
          }
        }), ht = {
          set: function set(e, t, n) {
            return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
          }
        }, k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = yt[t] || k.find.attr;

          yt[t] = function (e, t, r) {
            var i,
                o,
                a = t.toLowerCase();
            return r || (o = yt[a], yt[a] = i, i = null != n(e, t, r) ? a : null, yt[a] = o), i;
          };
        });
        var mt = /^(?:input|select|textarea|button)$/i,
            gt = /^(?:a|area)$/i;

        function vt(e) {
          return (e.match(B) || []).join(" ");
        }

        function bt(e) {
          return e.getAttribute && e.getAttribute("class") || "";
        }

        function Tt(e) {
          return Array.isArray(e) ? e : "string" == typeof e && e.match(B) || [];
        }

        k.fn.extend({
          prop: function prop(e, t) {
            return z(this, k.prop, e, t, 1 < arguments.length);
          },
          removeProp: function removeProp(e) {
            return this.each(function () {
              delete this[k.propFix[e] || e];
            });
          }
        }), k.extend({
          prop: function prop(e, t, n) {
            var r,
                i,
                o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
          },
          propHooks: {
            tabIndex: {
              get: function get(e) {
                var t = k.find.attr(e, "tabindex");
                return t ? parseInt(t, 10) : mt.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1;
              }
            }
          },
          propFix: {
            "for": "htmlFor",
            "class": "className"
          }
        }), g.optSelected || (k.propHooks.selected = {
          get: function get(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
          },
          set: function set(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
          }
        }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
          k.propFix[this.toLowerCase()] = this;
        }), k.fn.extend({
          addClass: function addClass(e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                l = 0;
            if (v(e)) return this.each(function (t) {
              k(this).addClass(e.call(this, t, bt(this)));
            });
            if ((t = Tt(e)).length) for (; n = this[l++];) {
              if (i = bt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                for (a = 0; o = t[a++];) {
                  r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                }

                i !== (s = vt(r)) && n.setAttribute("class", s);
              }
            }
            return this;
          },
          removeClass: function removeClass(e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                l = 0;
            if (v(e)) return this.each(function (t) {
              k(this).removeClass(e.call(this, t, bt(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = Tt(e)).length) for (; n = this[l++];) {
              if (i = bt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                for (a = 0; o = t[a++];) {
                  for (; -1 < r.indexOf(" " + o + " ");) {
                    r = r.replace(" " + o + " ", " ");
                  }
                }

                i !== (s = vt(r)) && n.setAttribute("class", s);
              }
            }
            return this;
          },
          toggleClass: function toggleClass(e, t) {
            var n = i(e),
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each(function (n) {
              k(this).toggleClass(e.call(this, n, bt(this), t), t);
            }) : this.each(function () {
              var t, i, o, a;
              if (r) for (i = 0, o = k(this), a = Tt(e); t = a[i++];) {
                o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
              } else void 0 !== e && "boolean" !== n || ((t = bt(this)) && Z.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Z.get(this, "__className__") || ""));
            });
          },
          hasClass: function hasClass(e) {
            var t,
                n,
                r = 0;

            for (t = " " + e + " "; n = this[r++];) {
              if (1 === n.nodeType && -1 < (" " + vt(bt(n)) + " ").indexOf(t)) return !0;
            }

            return !1;
          }
        });
        var wt = /\r/g;
        k.fn.extend({
          val: function val(e) {
            var t,
                n,
                r,
                i = this[0];
            return arguments.length ? (r = v(e), this.each(function (n) {
              var i;
              1 === this.nodeType && (null == (i = r ? e.call(this, n, k(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = k.map(i, function (e) {
                return null == e ? "" : e + "";
              })), (t = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
            })) : i ? (t = k.valHooks[i.type] || k.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(wt, "") : null == n ? "" : n : void 0;
          }
        }), k.extend({
          valHooks: {
            option: {
              get: function get(e) {
                var t = k.find.attr(e, "value");
                return null != t ? t : vt(k.text(e));
              }
            },
            select: {
              get: function get(e) {
                var t,
                    n,
                    r,
                    i = e.options,
                    o = e.selectedIndex,
                    a = "select-one" === e.type,
                    s = a ? null : [],
                    l = a ? o + 1 : i.length;

                for (r = o < 0 ? l : a ? o : 0; r < l; r++) {
                  if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                    if (t = k(n).val(), a) return t;
                    s.push(t);
                  }
                }

                return s;
              },
              set: function set(e, t) {
                for (var n, r, i = e.options, o = k.makeArray(t), a = i.length; a--;) {
                  ((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
                }

                return n || (e.selectedIndex = -1), o;
              }
            }
          }
        }), k.each(["radio", "checkbox"], function () {
          k.valHooks[this] = {
            set: function set(e, t) {
              if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t);
            }
          }, g.checkOn || (k.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
        }), g.focusin = "onfocusin" in n;

        var _t = /^(?:focusinfocus|focusoutblur)$/,
            Pt = function Pt(e) {
          e.stopPropagation();
        };

        k.extend(k.event, {
          trigger: function trigger(e, t, r, o) {
            var a,
                s,
                l,
                u,
                c,
                f,
                d,
                p,
                y = [r || T],
                m = h.call(e, "type") ? e.type : e,
                g = h.call(e, "namespace") ? e.namespace.split(".") : [];

            if (s = p = l = r = r || T, 3 !== r.nodeType && 8 !== r.nodeType && !_t.test(m + k.event.triggered) && (-1 < m.indexOf(".") && (m = (g = m.split(".")).shift(), g.sort()), c = m.indexOf(":") < 0 && "on" + m, (e = e[k.expando] ? e : new k.Event(m, "object" == i(e) && e)).isTrigger = o ? 2 : 3, e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : k.makeArray(t, [e]), d = k.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(r, t))) {
              if (!o && !d.noBubble && !b(r)) {
                for (u = d.delegateType || m, _t.test(u + m) || (s = s.parentNode); s; s = s.parentNode) {
                  y.push(s), l = s;
                }

                l === (r.ownerDocument || T) && y.push(l.defaultView || l.parentWindow || n);
              }

              for (a = 0; (s = y[a++]) && !e.isPropagationStopped();) {
                p = s, e.type = 1 < a ? u : d.bindType || m, (f = (Z.get(s, "events") || Object.create(null))[e.type] && Z.get(s, "handle")) && f.apply(s, t), (f = c && s[c]) && f.apply && G(s) && (e.result = f.apply(s, t), !1 === e.result && e.preventDefault());
              }

              return e.type = m, o || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(y.pop(), t) || !G(r) || c && v(r[m]) && !b(r) && ((l = r[c]) && (r[c] = null), k.event.triggered = m, e.isPropagationStopped() && p.addEventListener(m, Pt), r[m](), e.isPropagationStopped() && p.removeEventListener(m, Pt), k.event.triggered = void 0, l && (r[c] = l)), e.result;
            }
          },
          simulate: function simulate(e, t, n) {
            var r = k.extend(new k.Event(), n, {
              type: e,
              isSimulated: !0
            });
            k.event.trigger(r, null, t);
          }
        }), k.fn.extend({
          trigger: function trigger(e, t) {
            return this.each(function () {
              k.event.trigger(e, t, this);
            });
          },
          triggerHandler: function triggerHandler(e, t) {
            var n = this[0];
            if (n) return k.event.trigger(e, t, n, !0);
          }
        }), g.focusin || k.each({
          focus: "focusin",
          blur: "focusout"
        }, function (e, t) {
          var n = function n(e) {
            k.event.simulate(t, e.target, k.event.fix(e));
          };

          k.event.special[t] = {
            setup: function setup() {
              var r = this.ownerDocument || this.document || this,
                  i = Z.access(r, t);
              i || r.addEventListener(e, n, !0), Z.access(r, t, (i || 0) + 1);
            },
            teardown: function teardown() {
              var r = this.ownerDocument || this.document || this,
                  i = Z.access(r, t) - 1;
              i ? Z.access(r, t, i) : (r.removeEventListener(e, n, !0), Z.remove(r, t));
            }
          };
        });
        var jt = n.location,
            kt = {
          guid: Date.now()
        },
            xt = /\?/;

        k.parseXML = function (e) {
          var t, r;
          if (!e || "string" != typeof e) return null;

          try {
            t = new n.DOMParser().parseFromString(e, "text/xml");
          } catch (e) {}

          return r = t && t.getElementsByTagName("parsererror")[0], t && !r || k.error("Invalid XML: " + (r ? k.map(r.childNodes, function (e) {
            return e.textContent;
          }).join("\n") : e)), t;
        };

        var Yt = /\[\]$/,
            St = /\r?\n/g,
            Ct = /^(?:submit|button|image|reset|file)$/i,
            Et = /^(?:input|select|textarea|keygen)/i;

        function At(e, t, n, r) {
          var o;
          if (Array.isArray(t)) k.each(t, function (t, o) {
            n || Yt.test(e) ? r(e, o) : At(e + "[" + ("object" == i(o) && null != o ? t : "") + "]", o, n, r);
          });else if (n || "object" !== P(t)) r(e, t);else for (o in t) {
            At(e + "[" + o + "]", t[o], n, r);
          }
        }

        k.param = function (e, t) {
          var n,
              r = [],
              i = function i(e, t) {
            var n = v(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
          };

          if (null == e) return "";
          if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function () {
            i(this.name, this.value);
          });else for (n in e) {
            At(n, e[n], t, i);
          }
          return r.join("&");
        }, k.fn.extend({
          serialize: function serialize() {
            return k.param(this.serializeArray());
          },
          serializeArray: function serializeArray() {
            return this.map(function () {
              var e = k.prop(this, "elements");
              return e ? k.makeArray(e) : this;
            }).filter(function () {
              var e = this.type;
              return this.name && !k(this).is(":disabled") && Et.test(this.nodeName) && !Ct.test(e) && (this.checked || !me.test(e));
            }).map(function (e, t) {
              var n = k(this).val();
              return null == n ? null : Array.isArray(n) ? k.map(n, function (e) {
                return {
                  name: t.name,
                  value: e.replace(St, "\r\n")
                };
              }) : {
                name: t.name,
                value: n.replace(St, "\r\n")
              };
            }).get();
          }
        });
        var Qt = /%20/g,
            Ot = /#.*$/,
            Dt = /([?&])_=[^&]*/,
            It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Lt = /^(?:GET|HEAD)$/,
            Nt = /^\/\//,
            Mt = {},
            Bt = {},
            Rt = "*/".concat("*"),
            Ft = T.createElement("a");

        function qt(e) {
          return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r,
                i = 0,
                o = t.toLowerCase().match(B) || [];
            if (v(n)) for (; r = o[i++];) {
              "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
            }
          };
        }

        function Ht(e, t, n, r) {
          var i = {},
              o = e === Bt;

          function a(s) {
            var l;
            return i[s] = !0, k.each(e[s] || [], function (e, s) {
              var u = s(t, n, r);
              return "string" != typeof u || o || i[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), a(u), !1);
            }), l;
          }

          return a(t.dataTypes[0]) || !i["*"] && a("*");
        }

        function Vt(e, t) {
          var n,
              r,
              i = k.ajaxSettings.flatOptions || {};

          for (n in t) {
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
          }

          return r && k.extend(!0, e, r), e;
        }

        Ft.href = jt.href, k.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: jt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(jt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Rt,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
            },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": k.parseXML
            },
            flatOptions: {
              url: !0,
              context: !0
            }
          },
          ajaxSetup: function ajaxSetup(e, t) {
            return t ? Vt(Vt(e, k.ajaxSettings), t) : Vt(k.ajaxSettings, e);
          },
          ajaxPrefilter: qt(Mt),
          ajaxTransport: qt(Bt),
          ajax: function ajax(e, t) {
            "object" == i(e) && (t = e, e = void 0);
            var r,
                o,
                a,
                s,
                l,
                u,
                c,
                f,
                d,
                p,
                h = k.ajaxSetup({}, t = t || {}),
                y = h.context || h,
                m = h.context && (y.nodeType || y.jquery) ? k(y) : k.event,
                g = k.Deferred(),
                v = k.Callbacks("once memory"),
                b = h.statusCode || {},
                w = {},
                _ = {},
                P = "canceled",
                j = {
              readyState: 0,
              getResponseHeader: function getResponseHeader(e) {
                var t;

                if (c) {
                  if (!s) for (s = {}; t = It.exec(a);) {
                    s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                  }
                  t = s[e.toLowerCase() + " "];
                }

                return null == t ? null : t.join(", ");
              },
              getAllResponseHeaders: function getAllResponseHeaders() {
                return c ? a : null;
              },
              setRequestHeader: function setRequestHeader(e, t) {
                return null == c && (e = _[e.toLowerCase()] = _[e.toLowerCase()] || e, w[e] = t), this;
              },
              overrideMimeType: function overrideMimeType(e) {
                return null == c && (h.mimeType = e), this;
              },
              statusCode: function statusCode(e) {
                var t;
                if (e) if (c) j.always(e[j.status]);else for (t in e) {
                  b[t] = [b[t], e[t]];
                }
                return this;
              },
              abort: function abort(e) {
                var t = e || P;
                return r && r.abort(t), x(0, t), this;
              }
            };

            if (g.promise(j), h.url = ((e || h.url || jt.href) + "").replace(Nt, jt.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(B) || [""], null == h.crossDomain) {
              u = T.createElement("a");

              try {
                u.href = h.url, u.href = u.href, h.crossDomain = Ft.protocol + "//" + Ft.host != u.protocol + "//" + u.host;
              } catch (e) {
                h.crossDomain = !0;
              }
            }

            if (h.data && h.processData && "string" != typeof h.data && (h.data = k.param(h.data, h.traditional)), Ht(Mt, h, t, j), c) return j;

            for (d in (f = k.event && h.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Lt.test(h.type), o = h.url.replace(Ot, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Qt, "+")) : (p = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (xt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Dt, "$1"), p = (xt.test(o) ? "&" : "?") + "_=" + kt.guid++ + p), h.url = o + p), h.ifModified && (k.lastModified[o] && j.setRequestHeader("If-Modified-Since", k.lastModified[o]), k.etag[o] && j.setRequestHeader("If-None-Match", k.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && j.setRequestHeader("Content-Type", h.contentType), j.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : h.accepts["*"]), h.headers) {
              j.setRequestHeader(d, h.headers[d]);
            }

            if (h.beforeSend && (!1 === h.beforeSend.call(y, j, h) || c)) return j.abort();

            if (P = "abort", v.add(h.complete), j.done(h.success), j.fail(h.error), r = Ht(Bt, h, t, j)) {
              if (j.readyState = 1, f && m.trigger("ajaxSend", [j, h]), c) return j;
              h.async && 0 < h.timeout && (l = n.setTimeout(function () {
                j.abort("timeout");
              }, h.timeout));

              try {
                c = !1, r.send(w, x);
              } catch (e) {
                if (c) throw e;
                x(-1, e);
              }
            } else x(-1, "No Transport");

            function x(e, t, i, s) {
              var u,
                  d,
                  p,
                  T,
                  w,
                  _ = t;
              c || (c = !0, l && n.clearTimeout(l), r = void 0, a = s || "", j.readyState = 0 < e ? 4 : 0, u = 200 <= e && e < 300 || 304 === e, i && (T = function (e, t, n) {
                for (var r, i, o, a, s = e.contents, l = e.dataTypes; "*" === l[0];) {
                  l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                }

                if (r) for (i in s) {
                  if (s[i] && s[i].test(r)) {
                    l.unshift(i);
                    break;
                  }
                }
                if (l[0] in n) o = l[0];else {
                  for (i in n) {
                    if (!l[0] || e.converters[i + " " + l[0]]) {
                      o = i;
                      break;
                    }

                    a || (a = i);
                  }

                  o = o || a;
                }
                if (o) return o !== l[0] && l.unshift(o), n[o];
              }(h, j, i)), !u && -1 < k.inArray("script", h.dataTypes) && k.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function () {}), T = function (e, t, n, r) {
                var i,
                    o,
                    a,
                    s,
                    l,
                    u = {},
                    c = e.dataTypes.slice();
                if (c[1]) for (a in e.converters) {
                  u[a.toLowerCase()] = e.converters[a];
                }

                for (o = c.shift(); o;) {
                  if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;else if ("*" !== l && l !== o) {
                    if (!(a = u[l + " " + o] || u["* " + o])) for (i in u) {
                      if ((s = i.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        !0 === a ? a = u[i] : !0 !== u[i] && (o = s[0], c.unshift(s[1]));
                        break;
                      }
                    }
                    if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
                      t = a(t);
                    } catch (e) {
                      return {
                        state: "parsererror",
                        error: a ? e : "No conversion from " + l + " to " + o
                      };
                    }
                  }
                }

                return {
                  state: "success",
                  data: t
                };
              }(h, T, j, u), u ? (h.ifModified && ((w = j.getResponseHeader("Last-Modified")) && (k.lastModified[o] = w), (w = j.getResponseHeader("etag")) && (k.etag[o] = w)), 204 === e || "HEAD" === h.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = T.state, d = T.data, u = !(p = T.error))) : (p = _, !e && _ || (_ = "error", e < 0 && (e = 0))), j.status = e, j.statusText = (t || _) + "", u ? g.resolveWith(y, [d, _, j]) : g.rejectWith(y, [j, _, p]), j.statusCode(b), b = void 0, f && m.trigger(u ? "ajaxSuccess" : "ajaxError", [j, h, u ? d : p]), v.fireWith(y, [j, _]), f && (m.trigger("ajaxComplete", [j, h]), --k.active || k.event.trigger("ajaxStop")));
            }

            return j;
          },
          getJSON: function getJSON(e, t, n) {
            return k.get(e, t, n, "json");
          },
          getScript: function getScript(e, t) {
            return k.get(e, void 0, t, "script");
          }
        }), k.each(["get", "post"], function (e, t) {
          k[t] = function (e, n, r, i) {
            return v(n) && (i = i || r, r = n, n = void 0), k.ajax(k.extend({
              url: e,
              type: t,
              dataType: i,
              data: n,
              success: r
            }, k.isPlainObject(e) && e));
          };
        }), k.ajaxPrefilter(function (e) {
          var t;

          for (t in e.headers) {
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
          }
        }), k._evalUrl = function (e, t, n) {
          return k.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
              "text script": function textScript() {}
            },
            dataFilter: function dataFilter(e) {
              k.globalEval(e, t, n);
            }
          });
        }, k.fn.extend({
          wrapAll: function wrapAll(e) {
            var t;
            return this[0] && (v(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
              for (var e = this; e.firstElementChild;) {
                e = e.firstElementChild;
              }

              return e;
            }).append(this)), this;
          },
          wrapInner: function wrapInner(e) {
            return v(e) ? this.each(function (t) {
              k(this).wrapInner(e.call(this, t));
            }) : this.each(function () {
              var t = k(this),
                  n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
          },
          wrap: function wrap(e) {
            var t = v(e);
            return this.each(function (n) {
              k(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function unwrap(e) {
            return this.parent(e).not("body").each(function () {
              k(this).replaceWith(this.childNodes);
            }), this;
          }
        }), k.expr.pseudos.hidden = function (e) {
          return !k.expr.pseudos.visible(e);
        }, k.expr.pseudos.visible = function (e) {
          return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }, k.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        };
        var $t = {
          0: 200,
          1223: 204
        },
            zt = k.ajaxSettings.xhr();
        g.cors = !!zt && "withCredentials" in zt, g.ajax = zt = !!zt, k.ajaxTransport(function (e) {
          var _t3, r;

          if (g.cors || zt && !e.crossDomain) return {
            send: function send(i, o) {
              var a,
                  s = e.xhr();
              if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) {
                s[a] = e.xhrFields[a];
              }

              for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) {
                s.setRequestHeader(a, i[a]);
              }

              _t3 = function t(e) {
                return function () {
                  _t3 && (_t3 = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o($t[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                    binary: s.response
                  } : {
                    text: s.responseText
                  }, s.getAllResponseHeaders()));
                };
              }, s.onload = _t3(), r = s.onerror = s.ontimeout = _t3("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                4 === s.readyState && n.setTimeout(function () {
                  _t3 && r();
                });
              }, _t3 = _t3("abort");

              try {
                s.send(e.hasContent && e.data || null);
              } catch (i) {
                if (_t3) throw i;
              }
            },
            abort: function abort() {
              _t3 && _t3();
            }
          };
        }), k.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }), k.ajaxSetup({
          accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: {
            script: /\b(?:java|ecma)script\b/
          },
          converters: {
            "text script": function textScript(e) {
              return k.globalEval(e), e;
            }
          }
        }), k.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }), k.ajaxTransport("script", function (e) {
          var t, _n4;

          if (e.crossDomain || e.scriptAttrs) return {
            send: function send(r, i) {
              t = k("<script>").attr(e.scriptAttrs || {}).prop({
                charset: e.scriptCharset,
                src: e.url
              }).on("load error", _n4 = function n(e) {
                t.remove(), _n4 = null, e && i("error" === e.type ? 404 : 200, e.type);
              }), T.head.appendChild(t[0]);
            },
            abort: function abort() {
              _n4 && _n4();
            }
          };
        });
        var Wt,
            Ut = [],
            Xt = /(=)\?(?=&|$)|\?\?/;
        k.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function jsonpCallback() {
            var e = Ut.pop() || k.expando + "_" + kt.guid++;
            return this[e] = !0, e;
          }
        }), k.ajaxPrefilter("json jsonp", function (e, t, r) {
          var i,
              o,
              a,
              s = !1 !== e.jsonp && (Xt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(e.data) && "data");
          if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Xt, "$1" + i) : !1 !== e.jsonp && (e.url += (xt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
            return a || k.error(i + " was not called"), a[0];
          }, e.dataTypes[0] = "json", o = n[i], n[i] = function () {
            a = arguments;
          }, r.always(function () {
            void 0 === o ? k(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Ut.push(i)), a && v(o) && o(a[0]), a = o = void 0;
          }), "script";
        }), g.createHTMLDocument = ((Wt = T.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Wt.childNodes.length), k.parseHTML = function (e, t, n) {
          return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((r = (t = T.implementation.createHTMLDocument("")).createElement("base")).href = T.location.href, t.head.appendChild(r)) : t = T), o = !n && [], (i = Q.exec(e)) ? [t.createElement(i[1])] : (i = Pe([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes)));
          var r, i, o;
        }, k.fn.load = function (e, t, n) {
          var r,
              o,
              a,
              s = this,
              l = e.indexOf(" ");
          return -1 < l && (r = vt(e.slice(l)), e = e.slice(0, l)), v(t) ? (n = t, t = void 0) : t && "object" == i(t) && (o = "POST"), 0 < s.length && k.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
          }).done(function (e) {
            a = arguments, s.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e);
          }).always(n && function (e, t) {
            s.each(function () {
              n.apply(this, a || [e.responseText, t, e]);
            });
          }), this;
        }, k.expr.pseudos.animated = function (e) {
          return k.grep(k.timers, function (t) {
            return e === t.elem;
          }).length;
        }, k.offset = {
          setOffset: function setOffset(e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                l,
                u = k.css(e, "position"),
                c = k(e),
                f = {};
            "static" === u && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), l = k.css(e, "left"), ("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), v(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
          }
        }, k.fn.extend({
          offset: function offset(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
              k.offset.setOffset(this, e, t);
            });
            var t,
                n,
                r = this[0];
            return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
              top: t.top + n.pageYOffset,
              left: t.left + n.pageXOffset
            }) : {
              top: 0,
              left: 0
            } : void 0;
          },
          position: function position() {
            if (this[0]) {
              var e,
                  t,
                  n,
                  r = this[0],
                  i = {
                top: 0,
                left: 0
              };
              if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();else {
                for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position");) {
                  e = e.parentNode;
                }

                e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0));
              }
              return {
                top: t.top - i.top - k.css(r, "marginTop", !0),
                left: t.left - i.left - k.css(r, "marginLeft", !0)
              };
            }
          },
          offsetParent: function offsetParent() {
            return this.map(function () {
              for (var e = this.offsetParent; e && "static" === k.css(e, "position");) {
                e = e.offsetParent;
              }

              return e || se;
            });
          }
        }), k.each({
          scrollLeft: "pageXOffset",
          scrollTop: "pageYOffset"
        }, function (e, t) {
          var n = "pageYOffset" === t;

          k.fn[e] = function (r) {
            return z(this, function (e, r, i) {
              var o;
              if (b(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
              o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
            }, e, r, arguments.length);
          };
        }), k.each(["top", "left"], function (e, t) {
          k.cssHooks[t] = Ve(g.pixelPosition, function (e, n) {
            if (n) return n = He(e, t), Be.test(n) ? k(e).position()[t] + "px" : n;
          });
        }), k.each({
          Height: "height",
          Width: "width"
        }, function (e, t) {
          k.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
          }, function (n, r) {
            k.fn[r] = function (i, o) {
              var a = arguments.length && (n || "boolean" != typeof i),
                  s = n || (!0 === i || !0 === o ? "margin" : "border");
              return z(this, function (t, n, i) {
                var o;
                return b(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? k.css(t, n, s) : k.style(t, n, i, s);
              }, t, a ? i : void 0, a);
            };
          });
        }), k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
          k.fn[t] = function (e) {
            return this.on(t, e);
          };
        }), k.fn.extend({
          bind: function bind(e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function unbind(e, t) {
            return this.off(e, null, t);
          },
          delegate: function delegate(e, t, n, r) {
            return this.on(t, e, n, r);
          },
          undelegate: function undelegate(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
          },
          hover: function hover(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          }
        }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
          k.fn[t] = function (e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t);
          };
        });
        var Kt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        k.proxy = function (e, t) {
          var n, r, i;
          if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = l.call(arguments, 2), (i = function i() {
            return e.apply(t || this, r.concat(l.call(arguments)));
          }).guid = e.guid = e.guid || k.guid++, i;
        }, k.holdReady = function (e) {
          e ? k.readyWait++ : k.ready(!0);
        }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = A, k.isFunction = v, k.isWindow = b, k.camelCase = K, k.type = P, k.now = Date.now, k.isNumeric = function (e) {
          var t = k.type(e);
          return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        }, k.trim = function (e) {
          return null == e ? "" : (e + "").replace(Kt, "");
        }, void 0 === (r = function () {
          return k;
        }.apply(t, [])) || (e.exports = r);
        var Gt = n.jQuery,
            Jt = n.$;
        return k.noConflict = function (e) {
          return n.$ === k && (n.$ = Jt), e && n.jQuery === k && (n.jQuery = Gt), k;
        }, void 0 === o && (n.jQuery = n.$ = k), k;
      });
    },
    662: function _() {}
  },
      __webpack_module_cache__ = {},
      deferred;

  function __webpack_require__(e) {
    var t = __webpack_module_cache__[e];
    if (void 0 !== t) return t.exports;
    var n = __webpack_module_cache__[e] = {
      id: e,
      loaded: !1,
      exports: {}
    };
    return __webpack_modules__[e].call(n.exports, n, n.exports, __webpack_require__), n.loaded = !0, n.exports;
  }

  __webpack_require__.m = __webpack_modules__, deferred = [], __webpack_require__.O = function (e, t, n, r) {
    if (!t) {
      var i = 1 / 0;

      for (l = 0; l < deferred.length; l++) {
        for (var _deferred$l = _slicedToArray(deferred[l], 3), t = _deferred$l[0], n = _deferred$l[1], r = _deferred$l[2], o = !0, a = 0; a < t.length; a++) {
          (!1 & r || i >= r) && Object.keys(__webpack_require__.O).every(function (e) {
            return __webpack_require__.O[e](t[a]);
          }) ? t.splice(a--, 1) : (o = !1, r < i && (i = r));
        }

        if (o) {
          deferred.splice(l--, 1);
          var s = n();
          void 0 !== s && (e = s);
        }
      }

      return e;
    }

    r = r || 0;

    for (var l = deferred.length; l > 0 && deferred[l - 1][2] > r; l--) {
      deferred[l] = deferred[l - 1];
    }

    deferred[l] = [t, n, r];
  }, __webpack_require__.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, __webpack_require__.nmd = function (e) {
    return e.paths = [], e.children || (e.children = []), e;
  }, function () {
    var e = {
      773: 0,
      170: 0
    };

    __webpack_require__.O.j = function (t) {
      return 0 === e[t];
    };

    var t = function t(_t4, n) {
      var r,
          i,
          _n5 = _slicedToArray(n, 3),
          o = _n5[0],
          a = _n5[1],
          s = _n5[2],
          l = 0;

      if (o.some(function (t) {
        return 0 !== e[t];
      })) {
        for (r in a) {
          __webpack_require__.o(a, r) && (__webpack_require__.m[r] = a[r]);
        }

        if (s) var u = s(__webpack_require__);
      }

      for (_t4 && _t4(n); l < o.length; l++) {
        i = o[l], __webpack_require__.o(e, i) && e[i] && e[i][0](), e[o[l]] = 0;
      }

      return __webpack_require__.O(u);
    },
        n = self.webpackChunk = self.webpackChunk || [];

    n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n));
  }(), __webpack_require__.O(void 0, [170], function () {
    return __webpack_require__(80);
  });

  var __webpack_exports__ = __webpack_require__.O(void 0, [170], function () {
    return __webpack_require__(662);
  });

  __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();