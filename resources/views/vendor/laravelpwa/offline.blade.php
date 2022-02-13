@extends('layouts.app')

@section('title') You're offline @endsection
@section('extra_stylesheet') 

<link rel="stylesheet" href="{{ asset('assets/css/b-styling.css') }}">

@endsection
@section('content')

    {{-- <main> --}}

        <!-- Site's Offline Block -->

        <section class="site-head full-height">

            <div class="site-bg">
                <h3>Hey You!</h3>
                <h1>Welcome to G.C.W. but you're offline</h1>
                <a href="{{ url('/?refresh=' . time()) }}"><button class="btn">Refresh the page</button></a>
            </div>

        </section>

        <!-- End Offline Block -->

    {{-- </main> --}}

@endsection
