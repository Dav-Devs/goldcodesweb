@include('logo')

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta name="robots" content="index, follow"/>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="goldenrod">
    <meta name="author" content="David Gold">

    <meta property="og:url" content="{{ url('/') }}">
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="GoldCodesWeb">
    <meta property="og:title" content="Spread positive knowledge wider">
    <meta property="og:description" content="Spread positive knowledge, resources... and more; in any positive way">
    <meta property="og:image" content="{{ asset('img/logos/gold_codes_web.png') }}">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="1200">
    <meta property="og:image" content="{{ asset('img/logos/gold_codes_web.png') }}">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="620">
    <meta property="og:image" content="{{ asset('img/logos/gold_codes_web.png') }}">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="620">

    <meta property="twitter:site" content="{{ url('/') }}">
    {{-- <meta property="twitter:site:id" content="13334762"> --}}
    <meta property="twitter:creator" content="GoldCodesWeb">
    {{-- <meta property="twitter:creator:id" content="13334762"> --}}
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:title" content="GoldCodesWeb">
    <meta property="twitter:description" content="Spread positive knowledge, resources... and more; in any positive way">
    <meta property="twitter:image:src" content="{{ asset('img/logos/gold_codes_web.png') }}">
    <meta property="twitter:image:width" content="1200">
    <meta property="twitter:image:height" content="1200">

    <title>{{ str_replace('_', ' ', config('app.name', 'Gold_Codes_Web')) }} - @yield('title')</title>

    <!-- Logo Wave Preloader -->

    <style>
        * {
            font-family: "Livvic", cursive;
            -webkit-transition: all 1s ease-in-out;
            transition: all 1s ease-in-out
        }

        .loon-crest {
            background-blend-mode: multiply,
                multiply
        }

        .slick-carbon {
            background-blend-mode: multiply
        }

        body {
            background: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)
        }

        .wave-container {
            width: 200px;
            height: 200px;
            margin: 13em auto;
            position: relative
        }

        .wave-container .in_wave {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%,
                    -50%);
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-animation: wave-form 4s infinite;
            animation: wave-form 4s infinite
        }

        .wave-container .in_wave:nth-child(1) {
            -webkit-animation-delay: 4s;
            animation-delay: 4s
        }

        .wave-container .in_wave:nth-child(2) {
            -webkit-animation-delay: 3.5s;
            animation-delay: 3.5s
        }

        .wave-container .in_wave:nth-child(3) {
            -webkit-animation-delay: 3s;
            animation-delay: 3s
        }

        .wave-container .in_wave:nth-child(4) {
            -webkit-animation-delay: 2.5s;
            animation-delay: 2.5s
        }

        .wave-container .in_wave:nth-child(5) {
            -webkit-animation-delay: 2s;
            animation-delay: 2s
        }

        .wave-container .in_wave:nth-child(6) {
            -webkit-animation-delay: 1.5s;
            animation-delay: 1.5s
        }

        .wave-container .in_wave:nth-child(7) {
            -webkit-animation-delay: 1s;
            animation-delay: 1s
        }

        .wave-container .in_wave:nth-child(8) {
            -webkit-animation-delay: 0.5s;
            animation-delay: 0.5s
        }

        .wave-container .img {
            position: absolute;
            top: 23%;
            left: 23%;
            -webkit-animation: fade-in-out 0.95s infinite;
            animation: fade-in-out 0.95s infinite
        }

        @-webkit-keyframes wave-form {
            0% {
                width: 0%;
                height: 0%;
                -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
                box-shadow: 0 0 0 0 rgba(0, 0, 0, 0)
            }

            20% {
                -webkit-box-shadow: 0 5px 60px 15px rgba(235, 220, 7, 0.4) inset;
                box-shadow: 0 5px 60px 15px rgba(235, 220, 7, 0.4) inset
            }

            40% {
                -webkit-box-shadow: 0 5px 60px 15px rgba(235, 220, 7, 0.2) inset;
                box-shadow: 0 5px 60px 15px rgba(235, 220, 7, 0.2) inset
            }

            100% {
                width: 200px;
                height: 200px;
                -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) inset;
                box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) inset
            }
        }

        @keyframes wave-form {
            0% {
                width: 0%;
                height: 0%;
                -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
                box-shadow: 0 0 0 0 rgba(0, 0, 0, 0)
            }

            20% {
                -webkit-box-shadow: 0 5px 60px 15px rgba(235, 220, 7, 0.4) inset;
                box-shadow: 0 5px 60px 15px rgba(235, 220, 7, 0.4) inset
            }

            40% {
                -webkit-box-shadow: 0 5px 60px 15px rgba(235, 220, 7, 0.2) inset;
                box-shadow: 0 5px 60px 15px rgba(235, 220, 7, 0.2) inset
            }

            100% {
                width: 200px;
                height: 200px;
                -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) inset;
                box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) inset
            }
        }

        @-webkit-keyframes fade-in-out {
            0% {
                -webkit-filter: brightness(0.2);
                filter: brightness(0.2);
                opacity: 0.2
            }

            25% {
                -webkit-filter: brightness(0.25);
                filter: brightness(0.25);
                opacity: 0.25
            }

            50% {
                -webkit-filter: brightness(0.5);
                filter: brightness(0.5);
                opacity: 0.5
            }

            75% {
                -webkit-filter: brightness(0.75);
                filter: brightness(0.75);
                opacity: 0.75
            }

            100% {
                -webkit-filter: brightness(1);
                filter: brightness(1);
                opacity: 1
            }
        }

        @keyframes fade-in-out {
            0% {
                -webkit-filter: brightness(0.2);
                filter: brightness(0.2);
                opacity: 0.2
            }

            25% {
                -webkit-filter: brightness(0.25);
                filter: brightness(0.25);
                opacity: 0.25
            }

            50% {
                -webkit-filter: brightness(0.5);
                filter: brightness(0.5);
                opacity: 0.5
            }

            75% {
                -webkit-filter: brightness(0.75);
                filter: brightness(0.75);
                opacity: 0.75
            }

            100% {
                -webkit-filter: brightness(1);
                filter: brightness(1);
                opacity: 1
            }
        }

        nav a {
            color: #333 !important;
        }

        nav div > ul.nav li a {
            font-size: 15px !important;
        }

        nav div > ul.nav li a:hover {
            opacity: 0.7;
        }

        .btn.r {
            border-color: #333 !important;
        }

        .navbar-brand img {
            /* background: #00000030; */
            display: inline-block !important;
            vertical-align: text-top !important;
            /* box-shadow: 0px 5px 5px #0002; */
        }

        .navbar-brand {
            letter-spacing: 0px !important;
            font-size: 18px !important;
        }

    </style>

    <link rel="manifest" href="/manifest.json">
    <meta name="msapplication-TileColor" content="#daa520">
    <meta name="msapplication-TileImage" content="assets/images/favicons/ms-icon-144x144.png">
    <meta name="theme-color" content="#daa520">


    <!-- ==================== Stylesheets ==================== -->
    <!-- Default stylesheets-->

    <link rel="stylesheet" href="/assets/frameworks/bootstrap/css/bootstrap-reboot.min.css">
    {{-- <link rel="stylesheet" href="/assets/frameworks/bootstrap/css/bootstrap.min.css"> --}}

    <link href="assets/lib/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

    @production

        <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Volkhov:400i" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet">

    @endproduction

    <link rel="stylesheet" href="/assets/font.css">

    <!-- Template specific stylesheets-->
    <link href="{{ asset('assets/lib/animate.css/animate.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/lib/components-font-awesome/css/font-awesome.min.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/lib/et-line-font/et-line-font.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/lib/flexslider/flexslider.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/lib/owl.carousel/dist/assets/owl.carousel.min.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/lib/owl.carousel/dist/assets/owl.theme.default.min.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/lib/magnific-popup/dist/magnific-popup.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/lib/simple-text-rotator/simpletextrotator.css') }}" rel="stylesheet">

    <!-- Main stylesheet and color file-->
    <link href="{{ asset('assets/css/style.css') }}" rel="stylesheet">
    <link id="color-scheme" href="{{ asset('assets/css/colors/default.css') }}" rel="stylesheet">

    <!-- Styles -->

    <link rel="stylesheet" href="/assets/material.css">
    <link rel="stylesheet" href="/assets/frameworks/fontawesome/css/all.min.css">

    @yield('extra_stylesheet')
</head>

<body class="state-spinner-fixed" data-spy="scroll" data-target=".onpage-navigation" data-offset="60">

    <nav class="navbar navbar-custom navbar-fixed-top" style="background: #eed490" role="navigation">
        @include('layouts.nav')
    </nav>

    <main>
    <div class="prel">
        <div class="page-loader">
            {{-- <div class="loader">Loading...</div> --}}
            <div class="wave-container">
                <div class="in_wave"></div>
                <div class="img">
                    <img src="@yield('logo_uri')" width="100" height="100" alt="Gold Codes Web">
                </div>
            </div>
        </div>
    </div>
        @yield('content')
    </main>

    <div>
        @include('layouts.footer')
    </div>

    <!-- Scripts -->
    {{-- <script src="{{ asset('js/app.js') }}" defer></script> --}}

    <script src="/assets/frameworks/jquery/jquery-3.6.0.min.js"></script>

    {{-- <script src="{{ asset('assets/lib/jquery/dist/jquery.js') }}"></script> --}}
    <script src="{{ asset('assets/lib/bootstrap/dist/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('assets/lib/wow/dist/wow.js') }}"></script>
    <script src="{{ asset('assets/lib/jquery.mb.ytplayer/dist/jquery.mb.YTPlayer.js') }}"></script>
    <script src="{{ asset('assets/lib/isotope/dist/isotope.pkgd.js') }}"></script>
    <script src="{{ asset('assets/lib/imagesloaded/imagesloaded.pkgd.js') }}"></script>
    <script src="{{ asset('assets/lib/flexslider/jquery.flexslider.js') }}"></script>
    <script src="{{ asset('assets/lib/owl.carousel/dist/owl.carousel.min.js') }}"></script>
    <script src="{{ asset('assets/lib/smoothscroll.js') }}"></script>
    <script src="{{ asset('assets/lib/magnific-popup/dist/jquery.magnific-popup.js') }}"></script>
    <script src="{{ asset('assets/lib/simple-text-rotator/jquery.simple-text-rotator.min.js') }}"></script>
    <script src="{{ asset('assets/js/plugins.js') }}"></script>
    <script src="{{ asset('assets/js/main.js') }}"></script>

    <script src="{{ asset('js/jquery.script.js') }}"></script>

    <script>
        $(window).on("load", function() {
            $(".prel").fadeOut("slow");
        });
    </script>
</body>

</html>
