<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\PagesController;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\RedirectController;

use App\Http\Controllers\Auth\LoginController;

use Illuminate\Support\Facades\Route;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/**
 * To toggle status of Auth::routes(), Visit "route/signed.php",
 * And Comment it out only if you want to create your own auth system,
 * Or if you don't want auth for your web app!
 */

Route::get('/', [PagesController::class, 'index'])->name('root');

Route::get('/auth/login/',  LogIn::class)->middleware('auth')->name('login');

Route::post('/auth/logout/', [LoginController::class, 'logout'])->name('logout');

Route::get('/auth/signup/', Register::class)->middleware('auth')->name('register');

Route::resource('/blog/', PostsController::class);

Route::get('/home', [HomeController::class, 'index'])->name('home');

Route::get('/rdr', [RedirectController::class, 'index'])->name('rdr');

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return view('index');
})->name('dashboard');
