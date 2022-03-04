@extends('layouts.app')

@section('title') {{ __('Reset Password') }} @endsection

@section('extra_stylesheet')

    <link rel="stylesheet" href="{{ asset('dist/css/p-forms.css') }}">

@endsection

@section('extra_script')
    <script src="{{ asset('js/a.js') }}"></script>
@endsection

@section('content')

    <section class="fm">
        <div class="mw">
            <h2 class="fmtitle">{{ __('Reset Password') }}</h2>
            <div class="fm-container">
                <div class="col right">

                    @if (session('status'))
                        <div class="alert alert-info" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <form method="POST" action="{{ route('password.email') }}">
                        @csrf

                        @error('email')
                            <div class="alert alert-danger" role="alert">
                                {{ $message }}
                            </div>
                        @enderror

                        <div class="field email form-floating f_input">
                            <input type="email" name="email" class="form-control @error('email') is-invalid @enderror"
                                style="text-transform: none; letter-spacing: 1px;" id="email" value="{{ old('email') }}"
                                placeholder="Email..." required autocomplete="email" autofocus>

                            <label for="email">Email address... </label>
                        </div>

                        <div class="fm-btn field">
                            <input type="submit" value="{{ __('Send Password Reset Link') }}">
                        </div>
                    </form>


                    @if (Route::has('login'))
                        <div class="extra">
                            <div class="wrap-line">
                                <div class="line-o-line"></div>
                                <p>or</p>
                                <div class="line-o-line"></div>
                            </div>

                            <div class="luck-y-btn">
                                <a href="{{ route('login') }}">
                                    <button class="fm-btn" type="submit">
                                        &laquo; {{ __('Back to login') }}
                                    </button>
                                </a>
                            </div>
                        </div>
                    @endif

                </div>
            </div>
        </div>
    </section>

@endsection
