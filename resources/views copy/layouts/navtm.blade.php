        <div class="container-fluid">
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

                    <li class="nav-item"><a href="{{ url('/') }}" class="btn btn nav-link btn-sm navbar-btn">Home</a></li>
                    <li class="nav-item"><a href="{{ url('/blog') }}" class="btn nav-link btn-link btn-sm navbar-btn">Blog</a></li>
                    @guest
                        <li class="nav-item"><a href="{{ route('login') }}" class="btn nav-link btn-link btn-sm navbar-btn">{{ __('Log In') }}</a>
                        </li>
                        @if (Route::has('register'))
                            <li class="nav-item"><a href="{{ route('register') }}" class="btn nav-link btn-default r btn-sm navbar-btn"
                                    style="border-radius: 3px; align-items: center; background: #0000">
                                    {{ __('Register') }} <span>&raquo;</span>
                                </a>
                            </li>
                        @endif

                    @else

                    {{ Cache::flush() }}
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="{{ Avatar::create(Auth::user()->email)->toBase64(); }}" width="26" height="26" alt="{{ Auth::user()->name }}" title="{{ Auth::user()->name }}" />
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="#">{{ Auth::user()->name }}</a></li>
            <li><a class="dropdown-item" href="{{ url('/' . str_replace(' ', '-', Auth::user()->name)) }}">{{ __('Profile') }}</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout').submit();">Something else here</a></li>
            <form id="logout" action="{{ route('logout') }}" method="POST" class="hidden">
                {{ csrf_field() }}
            </form>
          </ul>
        </li>


                    
                    @endguest

                </ul>
            </div>
        </div>
