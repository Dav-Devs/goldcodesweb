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
            <h2 class="fmtitle">{{ __('Set New Password') }}</h2>
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

                        <input type="hidden" name="token" value="{{ $token }}">

                        <div class="field name form-floating f_input">
                            <input type="password" name="password" class="form-control @error('password') is-invalid @enderror"
                                style="text-transform: none; letter-spacing: 1px;" id="password" placeholder="New Password..." required autocomplete="new-password" autofocus>
                            <label for="password">New Password... </label>

                        </div>

                        <div class="field name form-floating f_input">
                            <input type="password" name="password_confirmation" class="form-control"
                                style="text-transform: none; letter-spacing: 1px;" id="password-confirm"
                                placeholder="Confirm New Password..." required autocomplete="new-password" autofocus>
                            <label for="password-confirm">Confirm New Password...</label>
                        </div>

                        <div class="fm-btn field">
                            <input type="submit" value="{{ __('Reset Password') }}">
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </section>

@endsection
