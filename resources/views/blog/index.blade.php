@extends('layouts.app')

@section('title') Blog @endsection
@section('content')


    @if (session()->has('message'))
        <div class="w-4/5 m-auto mt-10 pl-2">
            <p class="w-2/6 mb-4 text-gray-50 bg-green-500 rounded-2xl py-4">
                {{ session()->get('message') }}
            </p>
        </div>
    @endif

    @if (Auth::check())
        <div class="pt-15 w-4/5 m-auto">
            <a href="/blog/create" class="text-xs btn">
                Create post
            </a>
        </div>
    @endif

    @isset($posts)

        <!-- Site Blog -->

        <section class="container">
            <div class="bcontent">
                <div class="bps">

                    @foreach ($posts as $post)


                        {{-- <hr /> --}}
                        <div class="bp-content">
                            <div class="bp-img">
                                <div>
                                    <img src="/assets/img/o/o10.jpg" class="img" alt="post_image">
                                    {{-- <img src="{{ asset('images/' . $post->image_path) }}" class="img"
                                        alt="post_image"> --}}
                                </div>
                                <div class="bp-info flex-row">
                                    <span><i class="fas fa-user text-gray"></i>&nbsp;&nbsp;{{ $post->user->name }}</span>
                                    <span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;
                                        {{ date('jS M Y', strtotime($post->updated_at)) }}</span>
                                    <span>2 Comments</span>
                                </div>
                            </div>
                            <div class="bp-title">
                                <a href="#">{{ $post->title }}</a>
                                <p>{{ $post->description }}</p>
                                <a href="{{ url('/blog/' . $post->slug) }}">
                                    <button class="btn bp-btn">
                                        Read More &nbsp; <i class="fas fa-arrow-right"></i>
                                    </button>
                                </a>
                            </div>
                            @if (isset(Auth::user()->id) && Auth::user()->id == $post->user_id)
                                <span class="float-right">
                                    <a href="{{ url('/blog/' . $post->slug . '/edit') }}" title="Edit Post"
                                        class="text-gray-700 italic hover:text-gray-900 pb-1 border-b-2">
                                        <i class="material-icons">edit</i>
                                    </a>
                                </span>

                                <span class="float-right">
                                    <form action="{{ url('/blog/' . $post->slug) }}" method="POST">
                                        @csrf
                                        @method('delete')

                                        <button class="text-red-500 pr-3" type="submit" title="Delete Post">
                                            <i class="material-icons">delete</i>
                                        </button>

                                    </form>
                                </span>
                            @endif
                        </div>
                        <hr />
                        {{-- <div class="pagination flex-row">
                            <a href="#"><i class="fas fa-chevron-left"></i></a>
                            <a href="#" class="pages">1</a>
                            <a href="#" class="pages">2</a>
                            <a href="#" class="pages">3</a>
                            <a href="#"><i class="fas fa-chevron-right"></i></a>
                        </div> --}}


                    @endforeach

                </div>

                <aside class="sidebar">
                    <div class="category">
                        <h2>Category</h2>
                        <ul class="category-list">
                            <li class="list-items">
                                <a href="#">Software</a>
                                <span>(05)</span>
                            </li>
                            <li class="list-items">
                                <a href="#">Techonlogy</a>
                                <span>(02)</span>
                            </li>
                            <li class="list-items">
                                <a href="#">Lifestyle</a>
                                <span>(07)</span>
                            </li>
                            <li class="list-items">
                                <a href="#">Shopping</a>
                                <span>(01)</span>
                            </li>
                            <li class="list-items">
                                <a href="#">Food</a>
                                <span>(08)</span>
                            </li>
                        </ul>
                    </div>
                    <div class="side-post">
                        <h2>Popular Post</h2>
                        <div class="bp-content">
                            <div class="bp-img">
                                <div>
                                    <img src="./assets/popular-post/m-blog-1.jpg" class="img" alt="blog1">
                                </div>
                                <div class="bp-info flex-row">
                                    <span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14,
                                        2019</span>
                                    <span>2 Commets</span>
                                </div>
                            </div>
                            <div class="bp-title">
                                <a href="#">New data recording system to better analyse road accidents</a>
                            </div>
                        </div>
                        <div class="bp-content">
                            <div class="bp-img">
                                <div>
                                    <img src="./assets/popular-post/m-blog-2.jpg" class="img" alt="blog1">
                                </div>
                                <div class="bp-info flex-row">
                                    <span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14,
                                        2019</span>
                                    <span>2 Commets</span>
                                </div>
                            </div>
                            <div class="bp-title">
                                <a href="#">New data recording system to better analyse road accidents</a>
                            </div>
                        </div>
                        <div class="bp-content">
                            <div class="bp-img">
                                <div>
                                    <img src="./assets/popular-post/m-blog-3.jpg" class="img" alt="blog1">
                                </div>
                                <div class="bp-info flex-row">
                                    <span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14,
                                        2019</span>
                                    <span>2 Commets</span>
                                </div>
                            </div>
                            <div class="bp-title">
                                <a href="#">New data recording system to better analyse road accidents</a>
                            </div>
                        </div>
                        <div class="bp-content">
                            <div class="bp-img">
                                <div>
                                    <img src="./assets/popular-post/m-blog-4.jpg" class="img" alt="blog1">
                                </div>
                                <div class="bp-info flex-row">
                                    <span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14,
                                        2019</span>
                                    <span>2 Commets</span>
                                </div>
                            </div>
                            <div class="bp-title">
                                <a href="#">New data recording system to better analyse road accidents</a>
                            </div>
                        </div>
                        <div class="bp-content">
                            <div class="bp-img">
                                <div>
                                    <img src="./assets/popular-post/m-blog-5.jpg" class="img" alt="blog1">
                                </div>
                                <div class="bp-info flex-row">
                                    <span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14,
                                        2019</span>
                                    <span>2 Commets</span>
                                </div>
                            </div>
                            <div class="bp-title">
                                <a href="#">New data recording system to better analyse road accidents</a>
                            </div>
                        </div>
                    </div>
                    <div class="nws-form">
                        <h2>Newsletter</h2>
                        <div class="form-element">
                            <input type="text" class="input-element" placeholder="Email">
                            <button class="btn form-btn">Subscribe</button>
                        </div>
                    </div>
                    <div class="btags">
                        <h2>Popular Tags</h2>
                        <div class="tags flex-row">
                            <span class="tag">Software</span>
                            <span class="tag">technology</span>
                            <span class="tag">travel</span>
                            <span class="tag">illustration</span>
                            <span class="tag">design</span>
                            <span class="tag">lifestyle</span>
                            <span class="tag">love</span>
                            <span class="tag">project</span>
                        </div>
                    </div>
                </aside>

            </div>
        </section>

        <!-- End Blog -->

    @endisset

@endsection
