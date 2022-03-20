@include('logo')

@php
$cache = true;
$nocache = md5('nocache');
$yescache = md5(microtime(true));
@endphp

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>@yield('title') &middot; {{ str_replace('_', ' ', config('app.name', 'Gold_Codes_Web BETA')) }}</title>

        @laravelPWA

        <livewire:preloader />

        <livewire:inline-styles />

        <livewire:npstyles />

        <!-- Fonts -->
        <link rel="stylesheet" href="http://localhost/assets/font.css?s={{ $cache=false ? $nocache : $yescache; }}">
        <link rel="stylesheet" href="http://localhost/assets/material.css?s={{ $cache=false ? $nocache : $yescache; }}">
        <link rel="stylesheet"
            href="http://localhost/assets/frameworks/fontawesome/css/all.min.css?s={{ $cache=false ? $nocache : $yescache; }}">

        @production

        <link rel="dns-prefetch" href="//fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Livvic" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=LexendDeca" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Volkhov:400i" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet">

        @endproduction

        <!-- Styles -->
        {{-- <link href="/assets/css/bootstrap-reboot.min.css?s={{ $cache=false ? $nocache : $yescache; }}"
        rel="stylesheet"> --}}
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">

        @livewireStyles

        @yield('extra_stylesheet')

    </head>

    <body>
        <div id="app">

            <livewire:nav />

            <main>

                {{-- <div class="prel">
                    <div class="page-loader">
                        <div class="wave-container">
                            <div class="in_wave"></div>
                            <div class="img">
                                @yield('logo_svg')
                            </div>
                        </div>
                    </div>
                </div> --}}

                {{-- @yield('content') --}}

                @isset($main)
                  {{ $main }}
                @endif

            </main>
        </div>

        @livewireScripts

        <!-- Scripts -->
        <script src="{{ asset('js/app.js') }}"></script>
        {{-- <script src="{{ asset('assets/lib/nprogress/nprogress.js') }}"></script> --}}

        <livewire:npscripts />

        <script>
            NProgress.start();
        </script>

        <script src="{{ asset('js/push-notifications-cdn.js') }}"></script>
        <script src="{{ asset('js/zm.js') }}"></script>

        <script>
            if (navigator.onLine) {
                const beamsClient = new PusherPushNotifications.Client({
                instanceId: 'f37d8b9f-5819-4083-a87d-e5da49f6f6c7',
                });

                beamsClient.start()
                .then(() => beamsClient.addDeviceInterest('hello'))
                .then(() => console.log('Initialization success'))
                .catch(console.error);
            }
        </script>

        @yield('extra_script')

    </body>

</html>
