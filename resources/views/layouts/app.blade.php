<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Dav Devs') }} - @yield('title')</title>

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

    </style>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Styles -->
    <link rel="stylesheet" href="/assets/frameworks/bootstrap/css/bootstrap-reboot.min.css">

    <link rel="stylesheet" href="/assets/material.css">
    <link rel="stylesheet" href="/assets/frameworks/fontawesome/css/all.min.css">

    {{-- <link href="{{ asset(mix('css/app.css')) }}" rel="stylesheet"> --}}

    <link rel="stylesheet" href="/assets/font.css">

    <link href="{{ asset('css/appnav.css') }}" rel="stylesheet">
    <link href="{{ asset('dist/css/b-styling.min.css') }}" rel="stylesheet">
</head>

<body class="state-spinner-fixed">

    <div class="prel">
        <div class="spinner js-spinner">
            <div class="spinner__overlay">
                <div class="spinner__big_circle"></div>
                <div class="wave-container">
                    <div class="in_wave"></div>
                    <div class="img">
                        <img src="/assets/img/logos/ddlogo.png" width="100" height="100" alt="DavDevs">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="go-to-top">
        <i class="fa fa-angle-up"></i>
    </div>

    <nav class="navbar">
        <div class="mw">
            <div class="logo">
                <a href="{{ url('/') }}">
                    <img src="/assets/img/logos/ddlogo.png" alt="DavDevs" />
                    David's Devs
                </a>
            </div>
            <ul class="menu">
                <li><a href="{{ url('/') }}" class="menu-btn">Home</a></li>
                <li><a href="{{ url('/blog') }}" class="menu-btn">Blog</a></li>
                @guest
                    <li><a href="{{ route('login') }}" class="menu-btn">{{ __('Log In') }}</a></li>
                    @if (Route::has('register'))
                        <li><a href="{{ route('register') }}" class="menu-btn btn"
                                style="border-radius: 5px;">{{ __('Register') }}</a></li>
                    @endif

                @else
                    <li><span>{{ Auth::user()->name }}</span></li>

                    <li><a href="{{ route('logout') }}" class="menu-btn" onclick="event.preventDefault();
                                        document.getElementById('logout-form').submit();">{{ __('Logout') }}</a></li>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="hidden">
                        {{ csrf_field() }}
                    </form>
                @endguest
            </ul>
            <div class="menu-btn">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </nav>

    <main>
        @yield('content')
    </main>

    <div>
        @include('layouts.footer')
    </div>

    <script src="/assets/frameworks/jquery/jquery-3.6.0.min.js"></script>
    
    <script src="{{ asset('js/jquery.script.js') }}"></script>

    <script>
        $(window).on("load", function() {
            $(".prel").fadeOut("slow");
        });
    </script>
</body>

</html>
