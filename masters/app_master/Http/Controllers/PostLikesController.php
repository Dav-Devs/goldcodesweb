<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostLikesRequest;
use App\Http\Requests\UpdatePostLikesRequest;
use App\Models\PostLikes;

class PostLikesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorePostLikesRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePostLikesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PostLikes  $postLikes
     * @return \Illuminate\Http\Response
     */
    public function show(PostLikes $postLikes)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PostLikes  $postLikes
     * @return \Illuminate\Http\Response
     */
    public function edit(PostLikes $postLikes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePostLikesRequest  $request
     * @param  \App\Models\PostLikes  $postLikes
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePostLikesRequest $request, PostLikes $postLikes)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PostLikes  $postLikes
     * @return \Illuminate\Http\Response
     */
    public function destroy(PostLikes $postLikes)
    {
        //
    }
}
