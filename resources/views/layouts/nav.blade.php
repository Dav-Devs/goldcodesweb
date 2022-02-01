        <div class="container">
            <div class="navbar-header">
                <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#custom-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="{{ url('/') }}" style="">
                    {{-- <img src="{{ asset('img/logos/gcwlogo.png') }}" width="30" height="24" alt="G C W" /> --}}
                    @yield('logo_svg')
                    {{ str_replace('_', ' ', config('app.name', 'Gold_Codes_Web')) }}
                </a>
            </div>
            <div class="collapse navbar-collapse" id="custom-collapse">
                <ul class="nav navbar-nav navbar-right">

                    <li><a href="{{ url('/') }}" class="btn btn-link btn-sm navbar-btn">Home</a></li>
                    <li><a href="{{ url('/blog') }}" class="btn btn-link btn-sm navbar-btn">Blog</a></li>
                    @guest
                        <li><a href="{{ route('login') }}" class="btn btn-link btn-sm navbar-btn">{{ __('Log In') }}</a>
                        </li>
                        @if (Route::has('register'))
                            <li><a href="{{ route('register') }}" class="btn btn-default r btn-sm navbar-btn"
                                    style="border-radius: 3px; align-items: center; background: #0000">
                                    {{ __('Register') }} <span>&raquo;</span>
                                </a>
                            </li>
                        @endif

                    @else
                    {{ Cache::flush(); }}
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
                                <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                    class="hidden">
                                    {{ csrf_field() }}
                                </form>
                            </ul>
                        </li>
                    @endguest

                </ul>
            </div>
        </div>
