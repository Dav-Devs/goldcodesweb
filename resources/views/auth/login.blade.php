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

                        <form>
                            <div class="field name">
                                <input type="text" name="name" id="name" placeholder="Name..." required>
                            </div>
                            <div class="field email">
                                <input type="email" name="email" id="email" placeholder="Email..." required>
                            </div>
                            <div class="fm-btn field">
                                <input type="submit" value="Log In">
                            </div>
                        </form>
                        <div class="extra">
                            <a href="#">Forgotten password?</a><br>
                            <div class="wrap-line">
                                <div class="line-o-line"></div>
                                <p>or</p>
                                <div class="line-o-line"></div>
                            </div>

                            <div class="luck-y-btn">
                                <button class="fm-btn" type="submit">Create New Account</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

@endsection
