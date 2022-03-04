<?php

use App\Http\Controllers\IDenticonGenController;

// use App\Http\Controllers\Auth\AuthController;

// use App\Http\Livewire\Register;
// use App\Http\Livewire\LogIn;

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

Route::get('/p/icon.png', [IDenticonGenController::class, 'index'])->name('icon.png');

// Route::get('/auth/login/',  LogIn::class)->name('log-in');

// Route::get('/auth/logout/', [AuthController::class, 'index'])->name('log-out');

// Route::get('/auth/signup/', Register::class)->name('sign-up');
