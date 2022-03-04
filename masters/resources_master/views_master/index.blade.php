<?php //print_r($_SERVER['variable']['_previous']['url']); ?>

@extends('layouts.app')

@section('title') Home @endsection
@section('extra_stylesheet') 

<link rel="stylesheet" href="{{ asset('assets/css/b-styling.css') }}">

@endsection
@section('extra_script') 

<script>
    
var ssget = sessionStorage.getItem("key");

</script>

@endsection
@section('content')

    {{-- <main> --}}

        <!-- Site Head -->

        <section class="site-head full-height">

            <div class="site-bg">
                <h3>David's Developments</h3>
                <h1></h1>
                <h1>Welcome to my blog</h1>
                <a href="{{ url('/blog/') }}"><button class="btn">Explore</button></a>
                <br />
                <livewire:counter />
                {{-- <livewire:file-upload /> --}}
            </div>

        </section>

        <!-- End Head -->

    {{-- </main> --}}

@endsection
