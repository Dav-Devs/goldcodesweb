  <div class="container-fluid">

      <div class="navbar-header">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#n_b"
              aria-controls="n_b" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="{{ url('/') }}" style="">
              {{-- <img src="{{ asset('img/logos/gcwlogo.png') }}" width="30" height="24" alt="G C W" /> --}}
              @yield('logo_svg')
              {{ str_replace('_', ' ', config('app.name', 'Gold_Codes_Web')) }}
          </a>
      </div>
      <div class="collapse navbar-collapse" id="n_b">
          <ul class="navbar-nav justify-content-end">
              <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="{{ url('/') }}">{{ __('Home') }}</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="{{ url('/blog') }}">{{ __('Blog') }}</a>
              </li>
              @guest
                  <li class="nav-item">
                      <a class="nav-link" href="{{ route('login') }}">{{ __('Log In') }}</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}
                          <span>&raquo;</span></a>
                  </li>
              @else
                  <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="n_drp" role="button" data-bs-toggle="dropdown"
                          aria-expanded="false">
                          <img src="{{ Avatar::create(Auth::user()->name)->toBase64() }}" width="26" height="26"
                              alt="{{ Auth::user()->name }}" title="{{ Auth::user()->name }}" />
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="n_drp">
                          <li><a class="dropdown-item" href="#">{{ Auth::user()->name }}</a></li>
                          <li><a class="dropdown-item"
                                  href="{{ url('/' . str_replace(' ', '-', Auth::user()->name)) }}">{{ __('Profile') }}</a>
                          </li>
                          <li>
                              <hr class="dropdown-divider">
                          </li>
                          <li><a class="dropdown-item" href="{{ route('logout') }}"
                                  onclick="event.preventDefault();document.getElementById('logout').submit();">{{ __('Log Out') }}</a>
                          </li>
                          <form id="logout" action="{{ route('logout') }}" method="POST" class="d-none">
                              {{ csrf_field() }}
                          </form>
                      </ul>
                  </li>
              @endguest
      </div>
  </div>
