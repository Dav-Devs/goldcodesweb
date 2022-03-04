<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RedirectController extends Controller
{
    public function __construct (Request $request) {
        if (! $request->hasValidSignature()) {
            abort(404);
            // Route::redirect('/', URL::signedRoute(''));
        }
        
    }

    public function index() {

        return view('rdr.index');
    }
}
