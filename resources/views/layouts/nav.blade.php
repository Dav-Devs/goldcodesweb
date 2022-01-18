        <div class="container">
            <div class="navbar-header">
                <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#custom-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="{{ url('/') }}">
                    <img src="{{ asset('img/logos/gcwlogo.png') }}" width="30" height="24" alt="G C W" />
                    {{ str_replace('_', ' ', config('app.name', 'Gold_Codes_Web')) }}
                </a>
            </div>
            <div class="collapse navbar-collapse" id="custom-collapse">
                <ul class="nav navbar-nav navbar-right">

                    <li><a href="{{ url('/') }}" class="btn btn-link btn-sm navbar-btn">Home</a></li>
                    <li><a href="{{ url('/blog') }}" class="btn btn-link btn-sm navbar-btn">Blog</a></li>
                    @guest
                        <li><a href="{{ route('login') }}" class="btn btn-link btn-sm navbar-btn">{{ __('Log In') }}</a></li>
                        @if (Route::has('register'))
                            <li><a href="{{ route('register') }}" class="btn btn-default r btn-sm navbar-btn" style="border-radius: 3px; align-items: center; background: #0000">
                                        {{ __('Register') }} <span>&raquo;</span>
                                </a>
                            </li>
                        @endif

                    @else
                        <li><span>{{ Auth::user()->name }}</span></li>

                        <li>
                            <a href="{{ route('logout') }}"
                                onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                                {{ __('Logout') }}
                            </a>
                        </li>
                        <form id="logout-form" action="{{ route('logout') }}" method="POST" class="hidden">
                            {{ csrf_field() }}
                        </form>
                    @endguest

                </ul>
            </div>
        </div>
