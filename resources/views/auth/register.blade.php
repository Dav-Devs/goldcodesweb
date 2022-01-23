@extends('layouts.app')

@section('title') Register @endsection

@section('extra_stylesheet')
    <link rel="stylesheet" href="{{ asset('dist/css/p-forms.css') }}">
@endsection

@section('extra_script') 
<script src="{{ asset('js/a.js') }}"></script>
@endsection

@section('content')

    <section class="fm">
        <div class="mw">
            <h2 class="fmtitle">Register</h2>
            <div class="fm-container">
                <div class="col right">

                    <form method="POST" action="{{ route('register') }}">
                        @csrf
                        <div class="field name form-floating f_input position-relative">
                            <input type="text" name="name" class="form-control"
                                style="text-transform: none; letter-spacing: 1px;" id="name"
                                class="@error('name') is-invalid @enderror" value="{{ old('name') }}" placeholder="Name..."
                                required autocomplete="name" autofocus>
                            <label for="name">Name... </label>
                            @error('name')
                                <div class="invalid-feedback">
                                    {{ $message }}
                                </div>
                            @enderror
                        </div>

                        <div class="field email form-floating f_input position-relative">
                            <input type="email" name="email" class="form-control"
                                style="text-transform: none; letter-spacing: 1px;" id="email"
                                class="@error('email') is-invalid @enderror" value="{{ old('email') }}"
                                placeholder="Email..." required autocomplete="email" autofocus>
                            <label for="email">Email address... </label>
                            @error('email')
                                <div class="invalid-feedback">
                                    {{ $message }}
                                </div>
                            @enderror
                        </div>

                        <div class="field name form-floating f_input position-relative">
                            <input type="password" name="password" class="form-control"
                                style="text-transform: none; letter-spacing: 1px;" id="password"
                                class="@error('password') is-invalid @enderror" placeholder="Password..." required autocomplete="new-password" autofocus>
                            <label for="password">Password... </label>

                            @error('password')
                                <div class="invalid-feedback">
                                    {{ $message }}
                                </div>
                            @enderror
                        </div>

                        <div class="field name form-floating f_input position-relative">
                            <input type="password" name="password_confirmation" class="form-control"
                                style="text-transform: none; letter-spacing: 1px;" id="password-confirm"
                                placeholder="Confirm Password..." required autocomplete="new-password" autofocus>
                            <label for="password-confirm">Confirm Password...</label>
                        </div>

                        <div class="fm-btn field">
                            <input type="submit" value="Register">
                        </div>
                    </form>

                    <div class="extra">
                        {{-- <a href="#">Forgotten password?</a><br> --}}
                        <div class="wrap-line">
                            <div class="line-o-line"></div>
                            <p>or</p>
                            <div class="line-o-line"></div>
                        </div>

                        <div class="luck-y-btn">
                            <a href="{{ route('login') }}"><button class="fm-btn" type="submit">Log In
                                    &raquo;</button></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

@endsection
