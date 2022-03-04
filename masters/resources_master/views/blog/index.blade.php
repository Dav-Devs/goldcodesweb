@extends('layouts.app')

@section('title') Blog @endsection
@section('content')


    @if (session()->has('message'))
        <div class="alert alert-info" role="alert">
            {{ session()->get('message') }}
        </div>
    @endif

    @if (!is_null($posts))

        <div class="main">
            <section class="module">
                <div class="container">
                    <div class="row">

                        @foreach ($posts as $post)

                            <div class="col-sm-8">
                                <div class="post thumbnail-post">
                                    <div class="post-thumbnail">
                                        <a href="#">
                                            {{-- <img src="{{ asset('storage/post_img/' . $post->image_path) }}"
                                             alt="{{ $post->title }} thumbnail" /> --}}
                                        </a>
                                    </div>
                                    <div class="post-header font-alt">
                                        <h2 class="post-title d-flex">
                                            <a href="#">{{ $post->title }}</a>

                            @if (isset(Auth::user()->id) && Auth::user()->id == $post->user_id)
                                <span>
                                    <a href="{{ url('/blog/' . $post->slug . '/edit') }}" title="Edit Post"
                                        class="btn btn-xs btn-link text-secondary">
                                        <i class="material-icons">edit</i>
                                    </a>
                                </span>

                                <span>
                                    <form action="{{ url('/blog/' . $post->slug) }}" method="POST">
                                        @csrf
                                        @method('delete')

                                        <button class="btn btn-xs btn-link text-danger" type="submit" title="Delete Post">
                                            <i class="material-icons">delete</i>
                                        </button>

                                    </form>
                                </span>
                            @endif

                                        </h2>
                                        <div class="post-meta">
                                            By&nbsp;<a href="#">{{ $post->user->name }}</a> &nbsp; | 
                                            {{ date('jS M Y', strtotime($post->updated_at)) }} | 3 Comments | 
                                            <a href="#">Photography, </a>
                                            <a href="#">Web Design</a>
                                        </div>
                                    </div>
                                    <div class="post-entry">
                                        <p class="text-truncate">{{ $post->description }}</p>
                                    </div>
                                    <div class="post-more"><a class="more-link" href="{{ url('/blog/' . $post->slug) }}">Read more</a></div>
                                </div>
                            </div>

                        @endforeach

                        <div class="col-sm-4 col-md-3 col-md-offset-1 sidebar">
                            <div class="widget">
                                <form role="form">
                                    <div class="search-box input-group mb-3">
                                      <input type="text" class="form-control" placeholder="Search..." aria-label="Search..." aria-describedby="search_btn">
                                      <button class="btn btn-outline-secondary" type="submit" id="search_btn"><i class="fa fa-search"></i></button>
                                    </div>
                                </form>
                            </div>
                            <div class="widget">
                                <h5 class="widget-title font-alt">Blog Categories</h5>
                                <ul class="icon-list">
                                    <li><a href="#">Photography - 7</a></li>
                                    <li><a href="#">Web Design - 3</a></li>
                                    <li><a href="#">Illustration - 12</a></li>
                                    <li><a href="#">Marketing - 1</a></li>
                                    <li><a href="#">Wordpress - 16</a></li>
                                </ul>
                            </div>
                            <div class="widget">
                                <h5 class="widget-title font-alt">Popular Posts</h5>
                                <ul class="widget-posts">
                                    <li class="clearfix">
                                        <div class="widget-posts-image"><a href="#"><img src="assets/images/rp-1.jpg"
                                                    alt="Post Thumbnail" /></a></div>
                                        <div class="widget-posts-body">
                                            <div class="widget-posts-title"><a href="#">Designer Desk Essentials</a></div>
                                            <div class="widget-posts-meta">23 january</div>
                                        </div>
                                    </li>
                                    <li class="clearfix">
                                        <div class="widget-posts-image"><a href="#"><img src="assets/images/rp-2.jpg"
                                                    alt="Post Thumbnail" /></a></div>
                                        <div class="widget-posts-body">
                                            <div class="widget-posts-title"><a href="#">Realistic Business Card Mockup</a>
                                            </div>
                                            <div class="widget-posts-meta">15 February</div>
                                        </div>
                                    </li>
                                    <li class="clearfix">
                                        <div class="widget-posts-image"><a href="#"><img src="assets/images/rp-3.jpg"
                                                    alt="Post Thumbnail" /></a></div>
                                        <div class="widget-posts-body">
                                            <div class="widget-posts-title"><a href="#">Eco bag Mockup</a></div>
                                            <div class="widget-posts-meta">21 February</div>
                                        </div>
                                    </li>
                                    <li class="clearfix">
                                        <div class="widget-posts-image"><a href="#"><img src="assets/images/rp-4.jpg"
                                                    alt="Post Thumbnail" /></a></div>
                                        <div class="widget-posts-body">
                                            <div class="widget-posts-title"><a href="#">Bottle Mockup</a></div>
                                            <div class="widget-posts-meta">2 March</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="widget">
                                <h5 class="widget-title font-alt">Tag</h5>
                                <div class="tags font-serif">
                                    <a href="#" rel="tag">Blog</a>
                                    <a href="#" rel="tag">Photo</a>
                                    <a href="#" rel="tag">Video</a>
                                    <a href="#" rel="tag">Image</a>
                                    <a href="#" rel="tag">Minimal</a>
                                    <a href="#" rel="tag">Post</a>
                                    <a href="#" rel="tag">Theme</a>
                                    <a href="#" rel="tag">Ideas</a>
                                    <a href="#" rel="tag">Tags</a>
                                    <a href="#" rel="tag">Bootstrap</a>
                                    <a href="#" rel="tag">Popular</a>
                                    <a href="#" rel="tag">English</a>
                                </div>
                            </div>
                            <div class="widget">
                                <h5 class="widget-title font-alt">Text</h5>
                                The languages only differ in their grammar, their
                                pronunciation and their most common words. Everyone realizes why a new common language would
                                be desirable: one could refuse to pay expensive translators.
                            </div>
                            <div class="widget">
                                <h5 class="widget-title font-alt">Recent Comments</h5>
                                <ul class="icon-list">
                                    <li>Maria on <a href="#">Designer Desk Essentials</a></li>
                                    <li>John on <a href="#">Realistic Business Card Mockup</a></li>
                                    <li>Andy on <a href="#">Eco bag Mockup</a></li>
                                    <li>Jack on <a href="#">Bottle Mockup</a></li>
                                    <li>Mark on <a href="#">Our trip to the Alps</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        @else 

        <div class="main">
            <section class="module">
                <div class="container">
                    <div class="row">
                        <div class="alert" role="alert">
                            <h4 class="alert-heading d-flex">
                                <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>
                                <span>No Posts</span></h4>
                            <p>{{ __('But, You can') }} <a class="text-decoration-none" href="{{ url('/blog/create/') }}" target="_blank">{{ __('create a new post') }}</a> here!</p>
                            <hr>
                            <p class="mb-0">{{ __('And remember!, For whatever you post, be sure to keep it detailed, nice and tidy.') }}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    @endif

@endsection
