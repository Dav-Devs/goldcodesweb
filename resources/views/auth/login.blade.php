@extends('layouts.app')

@section('title') Log In @endsection

@section('extra_stylesheet')

    <link rel="stylesheet" href="{{ asset('dist/css/p-forms.css') }}">

@endsection

@section('content')

    <section class="fm">
        <div class="mw">
            <h2 class="fmtitle">Log In</h2>
            <div class="fm-container">
                <div class="col right">

                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="field email position-relative">
                            <input type="email" name="email" class="form-control @error('name') is-invalid @enderror"
                                style="text-transform: none; letter-spacing: 1px;" id="email"
                                class="" value="{{ old('name') }}"
                                placeholder="Email..." required autocomplete="email" autofocus>
                            @error('email')
                                <div class="invalid-tooltip">
                                    {{ $message }}
                                </div>
                            @enderror
                        </div>

                        <div class="field name position-relative">
                            <input type="password" name="password" class="form-control @error('name') is-invalid @enderror"
                                style="text-transform: none; letter-spacing: 1px;" id="password"
                                class="" value="{{ old('name') }}"
                                placeholder="Password..." required autofocus>
                            @error('password')
                                <div class="invalid-tooltip">
                                    {{ $message }}
                                </div>
                            @enderror
                        </div>

                        <div class="field name form-check">
                            <input type="checkbox" name="remember" id="remember" class="form-check-input"
                                {{ old('remember') ? 'checked' : '' }}>
                            <label class="form-check-label" for="flexCheckDefault">
                                {{ __('Remember Me') }}
                            </label>
                        </div>

                        <div class="fm-btn field">
                            <input type="submit" value="Log In">
                        </div>
                    </form>

                    <div class="extra">
                        {{-- <a href="#">Forgotten password?</a><br> --}}
                        @if (Route::has('password.request'))
                            <a class="text-decoration-none text-sm whitespace-no-wrap ml-auto"
                                href="{{ route('password.request') }}">
                                {{ __('Forgot Your Password?') }}
                            </a>
                        @endif

                        @if (Route::has('register'))
                        <div class="wrap-line">
                            <div class="line-o-line"></div>
                            <p>or</p>
                            <div class="line-o-line"></div>
                        </div>

                        <div class="luck-y-btn">
                            <a href="{{ route('register') }}">
                                <button class="fm-btn" type="submit">Create New Account</button></a>
                        </div>
                        @endif
                    </div>

                </div>
            </div>
        </div>
    </section>

@endsection
