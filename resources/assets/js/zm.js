(function(){

            $(window).on('load', function () {
                $('.wave-container').fadeOut();
                $('.page-loader').delay(350).fadeOut('slow');
                NProgress.done();
            });

    $(document).ready(function() { 

        /* ---------------------------------------------- /*
         * Scroll top
         /* ---------------------------------------------- */

        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });

        $('a[href="#totop"]').click(function() {
            $('html, body').animate({ scrollTop: 0 }, 'slow');
            return false;
        });


        /* ---------------------------------------------- /*
         * Initialization General Scripts for all pages
         /* ---------------------------------------------- */

        var homeSection = $('section'),
            navbar      = $('.navbar-custom'),
            navHeight   = navbar.height(),
            width       = Math.max($(window).width(), window.innerWidth),
            mobileTest  = false;

        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            mobileTest = true;
        }

        buildHomeSection(homeSection);
        navbarAnimation(navbar, homeSection, navHeight);
        navbarSubmenu(width);

        $(window).resize(function() {
            var width = Math.max($(window).width(), window.innerWidth);
            buildHomeSection(homeSection);
        });

        $(window).scroll(function() {
            effectsHomeSection(homeSection, this);
            navbarAnimation(navbar, homeSection, navHeight);
        });

        /* ---------------------------------------------- /*
         * Set sections backgrounds
         /* ---------------------------------------------- */

        var module = $('.home-section, .module, .module-small, .side-image');
        module.each(function(i) {
            if ($(this).attr('data-background')) {
                $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
            }
        });

        /* ---------------------------------------------- /*
         * Home section height
         /* ---------------------------------------------- */

        function buildHomeSection(homeSection) {
            if (homeSection.length > 0) {
                if (homeSection.hasClass('full-height')) {
                    homeSection.height($(window).height());
                } else {
                    homeSection.height($(window).height() * 0.85);
                }
            }
        }


        /* ---------------------------------------------- /*
         * Home section effects
         /* ---------------------------------------------- */

        function effectsHomeSection(homeSection, scrollTopp) {
            if (homeSection.length > 0) {
                var homeSHeight = homeSection.height();
                var topScroll = $(document).scrollTop();
                if ((homeSection.hasClass('dparallax')) && ($(scrollTopp).scrollTop() <= homeSHeight)) {
                    homeSection.css('top', (topScroll * 0.55));
                }
                if (homeSection.hasClass('dfade') && ($(scrollTopp).scrollTop() <= homeSHeight)) {
                    var caption = $('.caption-content');
                    caption.css('opacity', (1 - topScroll/homeSection.height() * 1));
                }
            }
        }

        /* ---------------------------------------------- /*
         * Transparent navbar animation
         /* ---------------------------------------------- */

        function navbarAnimation(navbar, homeSection, navHeight) {
            var topScroll = $(window).scrollTop();
            if (navbar.length > 0 && homeSection.length > 0) {
                if(topScroll >= navHeight) {
                    navbar.removeClass('navbar-transparent');
                } else {
                    navbar.addClass('navbar-transparent');
                }
            }
        }

        function navbarSubmenu(width) {
            if (width > 749) {
                $('.navbar ul.dropdown').hover(function() {
                    var MenuLeftOffset  = $('.dropdown-menu', $(this)).offset().left;
                    var Menu1LevelWidth = $('.dropdown-menu', $(this)).width();
                    if (width - MenuLeftOffset < Menu1LevelWidth * 2) {
                        $(this).children('.dropdown-menu').addClass('leftauto');
                    } else {
                        $(this).children('.dropdown-menu').removeClass('leftauto');
                    }
                    if ($('.dropdown', $(this)).length > 0) {
                        var Menu2LevelWidth = $('.dropdown-menu', $(this)).width();
                        if (width - MenuLeftOffset - Menu1LevelWidth < Menu2LevelWidth) {
                            $(this).children('.dropdown-menu').addClass('left-side');
                        } else {
                            $(this).children('.dropdown-menu').removeClass('left-side');
                        }
                    }
                });

                $('.navbar ul.dropdown').click(function() {
                    var MenuLeftOffset  = $('.dropdown-menu', $(this)).offset().left;
                    var Menu1LevelWidth = $('.dropdown-menu', $(this)).width();
                    if (width - MenuLeftOffset < Menu1LevelWidth * 2) {
                        $(this).children('.dropdown-menu').addClass('leftauto');
                    } else {
                        $(this).children('.dropdown-menu').removeClass('leftauto');
                    }
                    if ($('.dropdown', $(this)).length > 0) {
                        var Menu2LevelWidth = $('.dropdown-menu', $(this)).width();
                        if (width - MenuLeftOffset - Menu1LevelWidth < Menu2LevelWidth) {
                            $(this).children('.dropdown-menu').addClass('left-side');
                        } else {
                            $(this).children('.dropdown-menu').removeClass('left-side');
                        }
                    }
                });
            }
        }

    });
})(jQuery);
