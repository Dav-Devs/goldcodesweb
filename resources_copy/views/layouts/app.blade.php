@include('logo')

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    
    <link rel="shortcut icon" href="{{ url('/favicons/favicon-96x96.png') }}" type="image/png">{{-- image/svg+xml --}}

    <title>{{ str_replace('_', ' ', env('APP_NAME', 'Gold_Codes_Web BETA')) }} &middot; @yield('title')</title>

    @laravelPWA

    <!-- Logo Wave Preloader -->

    <style>
        * {
            font-family: "Livvic";
            outline: none !important;
            -webkit-transition: all 0.10s ease-in-out !important;
            transition: all 0.10s ease-in-out !important;
        }

        ::selection {
            background: #daa520 !important;
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

        a {
            text-decoration: none !important;
            transition: all 1s ease-in-out !important;
        }

        a:hover {
            text-decoration: underline;
            text-decoration-color: #daa520 !important;
            transition: all 1s ease-in-out !important;
        }

        nav a {
            color: #333 !important;
        }

        nav ul.dropdown-menu li>a {
            color: #ccc !important;
            font-size: 10px !important;
        }

        nav div>ul.nav li a {
            font-size: 15px !important;
        }

        nav div>ul.nav li a:hover {
            opacity: 0.65;
        }

        .btn.r {
            border-color: #333 !important;
        }

        .navbar-brand svg {
            /* background: #00000030; */
            display: inline-block !important;
            vertical-align: text-top !important;
            /* box-shadow: 0px 5px 5px #0002; */
            width: 30px !important;
            height: 24px !important;
        }

        .navbar-brand {
            text-decoration: none !important;
            letter-spacing: 0px !important;
            font-size: 18px !important;
        }

        /* .navbar-brand {
            text-decoration: none !important;
        } */

        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
        }

        .navbar-toggler {
            box-shadow: none !important;
        }

        .fm-container .f_input {
            height: 56px !important;
        }

    </style>

    @production

        <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Volkhov:400i" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Nunito+Regular" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Livvic+Regular" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=LexendDeca+Regular" rel="stylesheet">

    @endproduction

    <link rel="stylesheet" href="/assets/font.css">
    
    <link rel="stylesheet" href="/assets/material.css">
    <link rel="stylesheet" href="/assets/frameworks/fontawesome/css/all.min.css">
    
    <link href="{{ asset('assets/lib/magnific-popup/dist/magnific-popup.css') }}" rel="stylesheet">

    @yield('extra_stylesheet')

    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    <!-- Scripts -->

    <script src="{{ asset('assets/lib/wow/dist/wow.js') }}"></script>
    <script src="{{ asset('assets/lib/magnific-popup/dist/jquery.magnific-popup.js') }}"></script>

    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="{{ asset('js/zm.js') }}" defer></script>

    {{-- <script src="{{ asset('js/jquery.script.js') }}"></script> --}}
    {{-- <script src="{{ asset('js/bs.script.js') }}"></script> --}}
    
    @yield('extra_script')
</head>

<body class="state-spinner-fixed" data-spy="scroll" data-target=".onpage-navigation" data-offset="60">

    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="github" viewBox="0 0 16 16">
            <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">
            </path>
        </symbol>

        <symbol id="twitter" viewBox="0 0 16 16">
            <path
                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z">
            </path>
        </symbol>
    </svg>

    {{-- @yield('logout_modal') --}}

    <main>
    <nav class="navbar navbar-dark navbar-expand-md navbar-fixed-top" style="background: #fcf6e9" role="navigation">
        @include('layouts.nav')
    </nav>

        <div class="prel">
            <div class="page-loader">
                {{-- <div class="loader">Loading...</div> --}}
                <div class="wave-container">
                    <div class="in_wave"></div>
                    <div class="img">
                        {{-- <img src="@yield('logo_datapng_uri')" width="100" height="100" alt="GoldCodesWeb"> --}}
                        @yield('logo_svg')
                    </div>
                </div>
            </div>
        </div>
        @yield('content')
    </main>

    <div>
        @include('layouts.footer')
    </div>

</body>

</html>
