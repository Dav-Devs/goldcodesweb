@extends('layouts.app')

@section('title') Log In @endsection

@section('extra_stylesheet')

    <link rel="stylesheet" href="{{ asset('dist/css/p-forms.css') }}">

@endsection

@section('extra_script') 
<script src="{{ asset('js/a.js') }}"></script>
@endsection

@section('content')

    <section class="fm">
        <div class="mw">
            <h2 class="fmtitle">Log In</h2>
            <div class="fm-container">
                <div class="col right">

                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                            @error('email')
                                <div class="alert alert-danger" role="alert">
                                    {{ $message }}
                                </div>
                            @enderror
                            
                            @error('password')
                                <div class="alert alert-danger" role="alert">
                                    {{ $message }}
                                </div>
                            @enderror

                        <div class="field email form-floating f_input">
                            <input type="email" name="email" class="form-control @error('name') is-invalid @enderror" style="text-transform: none; letter-spacing: 1px;" id="email" value="{{ old('email') }}" placeholder="Email..." required autocomplete="email" autofocus>
                            
                            <label for="email">Email address... </label>
                                @error('email')
                                <div class="invalid-feedback">
                                    {{ $message }}
                                </div>
                            @enderror
                        </div>

                        <div class="field name form-floating f_input">
                            <input type="password" name="password" class="form-control @error('name') is-invalid @enderror" style="text-transform: none; letter-spacing: 1px;" id="password" placeholder="Password..." required autofocus>
                            
                            <label for="password">Password... </label>
                                @error('password')
                                <div class="invalid-feedback">
                                    {{ $message }}
                                </div>
                            @enderror
                        </div>

                                @error('password')
                                <div class="alert alert-danger" role="alert">
                                    {{ $message }}
                                </div>
                            @enderror

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
                            <a href="{{ route('password.request') }}">
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
                                <button class="fm-btn" type="submit">{{ __('Create New Account')}}</button></a>
                        </div>
                        @endif
                    </div>

                </div>
            </div>
        </div>
    </section>

@endsection
