<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class IDenticonGenController extends Controller
{
    public function index(Request $request, Response $response) {

        $v = view('icon.index');

        return response($v)
                    ->header('Content-Type', 'image/png');
    }
}
