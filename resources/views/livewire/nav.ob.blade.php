<nav class="navbar navbar-expand-md navbar-dark bg-dark" style="background: #b1871b !important" role="navigation"
  aria-label="navbar">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      @yield('logo_svg')
      {{ str_replace('_', ' ', config('app.name', 'Gold_Codes_Web')) }}
    </a>
    <button class="navbar-toggler collapsed border-0" type="button" data-bs-toggle="collapse" data-bs-target="#b_navbar"
      aria-controls="b_navbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navbar-collapse collapse" id="b_navbar" style="">

      <ul class="navbar-nav me-auto mb-2 mb-md-0 mr-6"></ul>
      
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active btn btn-link btn-md" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active btn btn-link btn-md" href="{{ url('/blog') }}">{{ __('Blog') }}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active btn btn-link btn-md" href="{{ URL::signedRoute('dashboard') }}">Dashboard</a>
        </li>
        @guest
        <li class="nav-item">
          <a class="nav-link active btn btn-link btn-sm" href="{{ route('login') }}">{{ __('Log In') }}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link btn btn-sm btn-outline-warning rounded-25 r_btn"
            href="{{ route('register') }}">{{ __('Register') }}
            <span>&raquo;</span></a>
        </li>
      </ul>

      @else
      <ul class="navbar-nav dropdown">
        <a class="nav-link dropdown-toggle" style="cursor: pointer;" {{-- href="#" --}} id="dropdown04"
          data-bs-toggle="dropdown" aria-expanded="false">
          <img src="{{ URL::signedRoute('icon.png', ['s' => 100, 'uid' => md5(Auth::user()->email)]); }}" width="26"
            height="26" alt="{{ Auth::user()->name }}" title="{{ Auth::user()->name }}" />
        </a>
        <ul class="dropdown-menu dropdown-menu-dark border-0 rounded-0" {{-- style="background: #fcf6e9" --}}
          aria-labelledby="dropdown04">
          {{-- <li><h6 class="dropdown-header">Blog options</h6></li> --}}
          <li><a class="dropdown-item" href="{{ url('/blog/create/') }}">{{ __('Create new post') }}</a></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li>
            <h6 class="dropdown-header">User options</h6>
          </li>
          <li><a class="dropdown-item" href="{{ route('profile.show') }}">User profile</a></li>
          <li><a class="dropdown-item" href="{{ URL::signedRoute('api.user') }}">User Api</a></li>
          <li><a class="dropdown-item" href="{{ URL::signedRoute('api-tokens.index') }}">Api Tokens</a></li>
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
      </ul>



      @endif

    </div>
  </div>
</nav>
