<?php

use App\Http\Controllers\PagesController;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\OfflineController;

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

Auth::routes();

Route::get('/', [PagesController::class, 'index'])->name('root');
Route::get('/index', [PagesController::class, 'index'])->name('index');
Route::get('/index.php', [PagesController::class, 'index'])->name('index');

Route::resource('/blog/', PostsController::class);

Route::get('/home/', [PagesController::class, 'index'])->name('home');
Route::get('/home.php', [PagesController::class, 'index'])->name('home');

Route::get('/offlin/', [OfflineController::class, 'index'])->name('offline');
Route::get('/offlin.php', [OfflineController::class, 'index'])->name('offline');
