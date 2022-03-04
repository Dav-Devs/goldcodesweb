@extends('layouts.app')

@section('title') Home @endsection
@section('extra_stylesheet') 

<link rel="stylesheet" href="{{ asset('assets/css/b-styling.css?s=') }}{{ md5(microtime(true)) }}">

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
                <h5>Welcome</h5>
                <h4>To</h4>
                <h1>Project <span style="color: #DAA520;">G.C.W.</span></h1>
                <a href="{{ url('/blog/') }}"><button class="btn">Explore</button></a>
                {{-- <br /> --}}
                {{-- <livewire:counter /> --}}
                {{-- <livewire:file-upload /> --}}
            </div>

        </section>

        <!-- End Head -->

    {{-- </main> --}}

@endsection
