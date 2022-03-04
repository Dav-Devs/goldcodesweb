@extends('layouts.app')

@section('title') Home @endsection

@section('extra_stylesheet')

<link rel="stylesheet" href="{{ mix('css/bstyle.css') }}">

@endsection

@section('extra_script')

@endsection

@section('content')

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

@endsection
