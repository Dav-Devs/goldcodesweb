<nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm" style="background: #fff5bb !important">
  <div class="container-fluid">
    <a class="navbar-brand" href="{{ url('/') }}">
      @yield('logo_svg')
      {{ str_replace('_', ' ', config('app.name', 'Gold_Codes_Web')) }}
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nvbar" aria-controls="nvbar"
      aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="nvbar">
      {{-- <!-- Left Side Of Navbar --> --}}
      <ul class="navbar-nav me-auto"></ul>

      {{-- <!-- Right Side Of Navbar --> --}}
      <ul class="navbar-nav ms-auto">
        {{-- <!-- Authentication Links --> --}}
        @guest
        @if (Route::has('login'))
        <li class="nav-item">
          <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
        </li>
        @endif

        @if (Route::has('register'))
        <li class="nav-item">
          <a class="nav-link btn btn-sm btn-outline-dark rounded-25"
            href="{{ route('register') }}">{{ __('Register') }}</a>
        </li>
        @endif
        @else
        <li class="nav-item dropdown">
          <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false" v-pre>
            {{ Auth::user()->name }}
          </a>

          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="{{ url('/blog/create/') }}">{{ __('Create new post') }}</a>
            <hr class="dropdown-divider">
            <h6 class="dropdown-header">User options</h6>
            <a class="dropdown-item" href="{{ route('profile.show') }}">User profile</a>
            <a class="dropdown-item" href="{{ URL::signedRoute('api.user') }}">User Api</a>
            <a class="dropdown-item" href="{{ URL::signedRoute('api-tokens.index') }}">Api
              Tokens</a>

            <a class="dropdown-item" href="{{ route('logout') }}"
              onclick="event.preventDefault();document.getElementById('logout-form').submit();">
              {{ __('Logout') }}
            </a>

            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
              @csrf
            </form>
          </div>
        </li>
        @endguest
      </ul>
    </div>
  </div>
</nav>
