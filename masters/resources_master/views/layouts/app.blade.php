@include('logo')

@php
    $cache = true;
    $nocache = md5('nocache');
    $yescache = md5(microtime(true));
@endphp

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        
        <link rel="shortcut icon" href="{{ url('/favicons/favicon-96x96.png') }}" type="image/png">{{-- image/svg+xml --}}

        <title>@yield('title') &middot; {{ str_replace('_', ' ', env('APP_NAME', 'Gold_Codes_Web BETA')) }}</title>

        @laravelPWA

        <!-- Preloader -->

        <livewire:preloader />

        <livewire:inline-styles />

        @production

        <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Volkhov:400i" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Nunito+Regular" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Livvic+Regular" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=LexendDeca+Regular" rel="stylesheet">

        @endproduction

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

        <!-- Styles -->
        {{-- <link rel="stylesheet" href="{{ mix('css/app.css') }}"> --}}

        <link rel="stylesheet" href="http://localhost/assets/font.css?s={{ $cache=false ? $nocache : $yescache; }}">
        
        <link rel="stylesheet" href="http://localhost/assets/material.css?s={{ $cache=false ? $nocache : $yescache; }}">
        <link rel="stylesheet" href="http://localhost/assets/frameworks/fontawesome/css/all.min.css?s={{ $cache=false ? $nocache : $yescache; }}">
        
        <link href="/assets/lib/magnific-popup/dist/magnific-popup.css?s={{ $cache=false ? $nocache : $yescache; }}" rel="stylesheet">

        <link href="/assets/css/style.css?s={{ $cache=false ? $nocache : $yescache; }}" rel="stylesheet">

        @yield('extra_stylesheet')

        <link rel="stylesheet" href="/assets/css/bootstrap-reboot.min.css?s={{ $cache=false ? $nocache : $yescache; }}">
        <link rel="stylesheet" href="/assets/css/bs-custom.css?s={{ $cache=false ? $nocache : $yescache; }}">

        @livewireStyles

    </head>
    <body class="font-sans antialiased" data-spy="scroll" data-target=".onpage-navigation" data-offset="60">
        <livewire:svg-symbols />

        <main>

            <livewire:nav />

            <div class="prel">
                <div class="page-loader">
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

        @stack('modals')

        @livewireScripts

        <!-- Scripts -->
        <script src="{{ mix('js/app.js') }}"></script>

        <script src="/assets/lib/wow/dist/wow.js?s={{ $cache=false ? $nocache : $yescache; }}"></script>

        <script src="/assets/lib/jquery.mb.ytplayer/dist/jquery.mb.YTPlayer.js?s={{ $cache=false ? $nocache : $yescache; }}"></script>
        <script src="/assets/lib/isotope/dist/isotope.pkgd.js?s={{ $cache=false ? $nocache : $yescache; }}"></script>
        <script src="/assets/lib/imagesloaded/imagesloaded.pkgd.js?s={{ $cache=false ? $nocache : $yescache; }}"></script>
        <script src="/assets/lib/flexslider/jquery.flexslider.js?s={{ $cache=false ? $nocache : $yescache; }}"></script>

        <script src="/assets/lib/magnific-popup/dist/jquery.magnific-popup.js?s={{ $cache=false ? $nocache : $yescache; }}"></script>
        <script src="/assets/js/plugins.js?s={{ $cache=false ? $nocache : $yescache; }}"></script>

        <script src="{{ mix('js/zm.js') }}"></script>

        @yield('extra_script')

    </body>
</html>
