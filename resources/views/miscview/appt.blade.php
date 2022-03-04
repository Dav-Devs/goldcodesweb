<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }} - @yield('title')</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Styles -->
    <link rel="stylesheet" href="/assets/frameworks/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/assets/material.css">
    <link href="{{ asset(mix('css/app.css')) }}" rel="stylesheet">
</head>

<body class="bg-gray-100 h-screen leading-none">
    <div id="app">

        {{-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#nvb" aria-controls="nvb" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="#"><img src="/assets/img/logos/ddlogo.png" alt="" width="40"
                        height="34"></a>
                <div class="collapse navbar-collapse" id="nvb">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> --}}

        <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <svg class="fill-current h-8 w-8 mr-2" width="60" height="60" viewBox="0 0 54 54"
                    xmlns="http://www.w3.org/2000/svg">
                    <image width="60" height="60" x="0" y="0" xlink:href="/assets/img/logos/ddlogo.png" />
                </svg>
                <span class="font-semibold text-xl tracking-tight">David's Devs</span>
            </div>
            <div class="block lg:hidden">
                <button
                    class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">

                </div>
                <div>
                    <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        Blog
                    </a>
                    <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        Log In
                    </a>
                    <a href="#"
                        class="inline-block lg:ml-3 text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Sign
                        Up</a>
                </div>
            </div>
        </nav>

        <div>
            @yield('content')
        </div>

        <div>
            @include('layouts.footer')
        </div>
    </div>
</body>

</html>
