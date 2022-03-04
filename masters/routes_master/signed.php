<?php

use App\Http\Controllers\IDenticonGenController;
use App\Http\Controllers\RedirectController;

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;

use Illuminate\Auth\Events\PasswordReset;

use Illuminate\Support\Str;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Route;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

/*
|--------------------------------------------------------------------------
| Signed Routes
|--------------------------------------------------------------------------
|
| Here is where you can register signed web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "signed" middleware group. Now create something great!
|
*/

/**
 * Here lies Auth::routes(), Now Remember! 
 * Comment it out 'only' if you want to create your own auth system,
 * Or if you don't want auth for your web app!
 */

// Auth::routes();

Route::get('/rdr/', [RedirectController::class, 'index'])->name('rdr');
Route::get('/rdr.php', [RedirectController::class, 'index']);
Route::get('/p/icon.png', [IDenticonGenController::class, 'index'])->name('icon.png');

Route::post('/auth/login.php', [LoginController::class, 'index']);
Route::post('/auth/login/', [LoginController::class, 'index'])->name('log-in');

Route::post('/auth/logout.php', [LogoutController::class, 'index']);
Route::post('/auth/logout/', [LogoutController::class, 'index'])->name('log-out');

Route::get('/auth/signup.php', [RegisterController::class, 'index']);
Route::get('/auth/signup/', [RegisterController::class, 'index'])->name('sign-up');

Route::middleware(['auth:sanctum', 'verified', 'signed'])->get('/dashboard', function () {
    return view('index');
})->name('dashboard');

Route::middleware(['auth:sanctum', 'verified', 'signed'])->get('/dashboard.php', function () {
    return view('index');
});
