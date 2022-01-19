@extends('layouts.app')

@section('title') Register @endsection

@section('extra_stylesheet')

    <link rel="stylesheet" href="{{ asset('dist/css/p-forms.css') }}">

@endsection

@section('content')

    <section class="fm">
        <div class="mw">
            <h2 class="fmtitle">Register</h2>
            <div class="fm-container">
                <div class="col right">

                    <form method="POST" action="{{ route('register') }}">
                        @csrf
                        <div class="field name">
                            <input type="text" name="name" id="name" class="@error('name') has-error @enderror"
                                value="{{ old('name') }}" placeholder="Name..." required autocomplete="name" autofocus>
                            @error('name')
                                <p class="text-red-500 text-xs italic mt-4">
                                    {{ $message }}
                                </p>
                            @enderror
                        </div>

                        <div class="field email">
                            <input type="email" name="email" id="email" class="@error('name') has-error @enderror"
                                value="{{ old('name') }}" placeholder="Email..." required autocomplete="email" autofocus>
                            @error('email')
                                <p class="text-red-500 text-xs italic mt-4">
                                    {{ $message }}
                                </p>
                            @enderror
                        </div>

                        <div class="field name">
                            <input type="password" name="password" id="password" class="@error('name') has-error @enderror"
                                value="{{ old('name') }}" placeholder="Password..." required autocomplete="new-password"
                                autofocus>
                            @error('password')
                                <p class="text-red-500 text-xs italic mt-4">
                                    {{ $message }}
                                </p>
                            @enderror
                        </div>

                        <div class="field name">
                            <input type="password" name="password_confirmation" id="password-confirm"
                                placeholder="Confirm Password..." required autocomplete="new-password" autofocus>
                        </div>

                        <div class="fm-btn field">
                            <input type="submit" value="Register">
                        </div>
                    </form>

                    <div class="extra">
                        {{-- <a href="#">Forgotten password?</a><br> --}}
                        <div class="wrap-line">
                            <div class="line-o-line"></div>
                            <p>OR</p>
                            <div class="line-o-line"></div>
                        </div>

                        <div class="luck-y-btn">
                            <a href="{{ route('login') }}"><button class="fm-btn" type="submit">Create New Account</button></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

@endsection
