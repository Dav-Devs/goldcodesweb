
                        <li class="dropdown" style="text-transform: none !important;">
                            <a class="dropdown-toggle" style="font-size: 15px !important; letter-spacing: 0.5px !important;"
                                href="javascript:void(0);" data-toggle="dropdown">
                                <img src="{{ Avatar::create(Auth::user()->email)->toBase64(); }}" width="26" height="26" 
                                    alt="{{ Auth::user()->name }}" title="{{ Auth::user()->name }}" />
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a href="#" style="font-size: 13px !important; text-transform: uppercase;">{{ Auth::user()->name }}</a>
                                </li>
                                <li><a href="{{ url('/' . str_replace(' ', '-', Auth::user()->name)) }}"
                                        style="font-size: 13px !important;">
                                        {{ __('Profile') }}
                                    </a>
                                </li>
                                <li>
                                    <a href="{{ route('logout') }}" style="font-size: 13px !important;"
                                        onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                                        {{ __('Log out') }}
                                    </a>
                                </li>
                                <form id="logout" action="{{ route('logout') }}" method="POST"
                                    class="hidden">
                                    {{ csrf_field() }}
                                </form>
                            </ul>
                        </li>

    <script src="{{ asset('js/jquery-3.6.0.min.js') }}"></script>
    <script src="{{ asset('js/bootstrap.bundle.js') }}"></script>

    {{-- <script src="{{ asset('assets/lib/jquery/dist/jquery.js') }}"></script>
    <script src="{{ asset('assets/lib/bootstrap/dist/js/bootstrap.min.js') }}"></script> --}}

    <script src="{{ asset('assets/lib/wow/dist/wow.js') }}"></script>
    <script src="{{ asset('assets/lib/jquery.mb.ytplayer/dist/jquery.mb.YTPlayer.js') }}"></script>

    <script src="{{ asset('assets/lib/smoothscroll.js') }}"></script> 
    <script src="{{ asset('assets/lib/magnific-popup/dist/jquery.magnific-popup.js') }}"></script>
    <script src="{{ asset('assets/lib/simple-text-rotator/jquery.simple-text-rotator.min.js') }}"></script>
    <script src="{{ asset('assets/js/plugins.js') }}"></script>
    <script src="{{ asset('assets/js/main.js') }}"></script>

    <script>
        
/*!
 * Bootstrap v5.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
require("./inc/bootstrap.bundle.min");
        
    </script>

    <!-- Template specific stylesheets-->
    <link href="{{ asset('assets/lib/animate.css/animate.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/lib/components-font-awesome/css/font-awesome.min.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/lib/et-line-font/et-line-font.css') }}" rel="stylesheet">

    {{-- <link href="{{ asset('assets/lib/simple-text-rotator/simpletextrotator.css') }}" rel="stylesheet"> --}}

    <link rel="stylesheet" href="{{ asset('dist/css/bs-custom.css') }}">


    <link rel="stylesheet" href="{{ asset('css/bootstrap-reboot.min.css') }}">

    <link href="{{ asset('assets/lib/bootstrap/dist/css/bootstrap.min.css') }}" rel="stylesheet">

    <!-- Main stylesheet -->
    <link href="{{ asset('assets/css/style.css') }}" rel="stylesheet">
    <link id="color-scheme" href="{{ asset('assets/css/colors/default.css') }}" rel="stylesheet">
                        