@extends('layouts.app')

@section('title') Register @endsection

@section('extra_stylesheet')
    <link rel="stylesheet" href="{{ asset('assets/css/p-forms.css') }}">
@endsection

@section('extra_script') 
{{-- <script src="{{ asset('js/a.js') }}"></script> --}}
@endsection

@section('content')

    <section class="fm">
        <div class="mw">
            <h2 class="fmtitle">Register</h2>
            <div class="fm-container">
                <div class="col right">

                    {{-- <livewire:file-upload /> --}}

                    <form method="POST" action="{{ route('register') }}">
                        @csrf

                            @error('name')
                                <div class="alert alert-danger" role="alert">
                                    {{ $message }}
                                </div>
                            @enderror

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

                        <div class="field name form-floating f_input">
                            <input type="text" name="name" class="form-control @error('name') is-invalid @enderror"
                                style="text-transform: none; letter-spacing: 1px;" id="name" value="{{ old('name') }}" placeholder="Name..."
                                required autocomplete="name" autofocus>
                            <label for="name">Name... </label>
                        </div>

                        <div class="field email form-floating f_input">
                            <input type="email" name="email" class="form-control @error('email') is-invalid @enderror"
                                style="text-transform: none; letter-spacing: 1px;" id="email" value="{{ old('email') }}"
                                placeholder="Email..." required autocomplete="email" autofocus>
                            <label for="email">Email address... </label>
                        </div>

                        <div class="field name form-floating f_input">
                            <input type="password" name="password" class="form-control @error('password') is-invalid @enderror"
                                style="text-transform: none; letter-spacing: 1px;" id="password" placeholder="Password..." required autocomplete="new-password" autofocus>
                            <label for="password">Password... </label>

                        </div>

                        <div class="field name form-floating f_input">
                            <input type="password" name="password_confirmation" class="form-control"
                                style="text-transform: none; letter-spacing: 1px;" id="password-confirm"
                                placeholder="Confirm Password..." required autocomplete="new-password" autofocus>
                            <label for="password-confirm">Confirm Password...</label>
                        </div>

                        @if (Laravel\Jetstream\Jetstream::hasTermsAndPrivacyPolicyFeature())

                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="checkbox" id="terms" required>
                              <label class="form-check-label" for="terms">
                                  
                                {!! __('I agree to the :terms_of_service and :privacy_policy', [
                                        'terms_of_service' => '<a target="_blank" href="'.route('terms.show').'" class="text-sm">'.__('Terms of Service').'</a>',
                                        'privacy_policy' => '<a target="_blank" href="'.route('policy.show').'" class="text-sm">'.__('Privacy Policy').'</a>',
                                ]) !!}

                              </label>
                            </div>

                        @endif

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
                            <a href="{{ URL::signedRoute('login') }}"><button class="fm-btn" type="submit">Log In
                                    &raquo;</button></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

@endsection
