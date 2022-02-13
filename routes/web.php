<?php

use App\Http\Controllers\PagesController;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\RedirectController;
use App\Http\Controllers\OfflineController;

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
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// Auth::routes();

Route::get('/', [PagesController::class, 'index'])->name('root');
Route::get('/index', [PagesController::class, 'index'])->name('index');
Route::get('/index.php', [PagesController::class, 'index'])->name('index');

Route::get('/auth/login', [LoginController::class, 'index'])->name('login');
Route::get('/auth/login.php', [LoginController::class, 'index'])->name('login');
Route::get('/auth/login/', [LoginController::class, 'index'])->name('login');

Route::post('/auth/login', [LoginController::class, 'index'])->name('login');
Route::post('/auth/login.php', [LoginController::class, 'index'])->name('login');
Route::post('/auth/login/', [LoginController::class, 'index'])->name('login');

Route::post('/auth/logout', [LogoutController::class, 'index'])->name('logout');
Route::post('/auth/logout.php', [LogoutController::class, 'index'])->name('logout');
Route::post('/auth/logout/', [LogoutController::class, 'index'])->name('logout');

Route::get('/auth/signup', [RegisterController::class, 'index'])->name('register');
Route::get('/auth/signup.php', [RegisterController::class, 'index'])->name('register');
Route::get('/auth/signup/', [RegisterController::class, 'index'])->name('register');

Route::post('/auth/signup', [RegisterController::class, 'index'])->name('register');
Route::post('/auth/signup.php', [RegisterController::class, 'index'])->name('register');
Route::post('/auth/signup/', [RegisterController::class, 'index'])->name('register');

Route::resource('/blog', PostsController::class);
Route::get('/home', [PagesController::class, 'index'])->name('home');
Route::get('/offlin', [OfflineController::class, 'index'])->name('offline');
Route::get('/rdr/', [RedirectController::class, 'index']);

Route::resource('/blog/', PostsController::class);
Route::get('/home/', [PagesController::class, 'index'])->name('home');
Route::get('/offlin/', [OfflineController::class, 'index'])->name('offline');

Route::resource('/blog.php', PostsController::class);
Route::get('/home.php', [PagesController::class, 'index'])->name('home');
Route::get('/offlin.php', [OfflineController::class, 'index'])->name('offline');
Route::get('/rdr.php', [RedirectController::class, 'index']);

Route::get('/p/icon.png', function (Request $request, Response $response) {

$v = view('icon.index');

return response($v)
            ->header('Content-Type', 'image/png');
 
})->name('icon.png')->middleware('signed');


Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return view('index');
})->name('dashboard');

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard.php', function () {
    return view('index');
})->name('dashboard');

Route::get('/auth/forgot-password', function (Request $request) {
    return view('auth.forgot-password');
})->middleware('guest')->name('password.email');

Route::get('/auth/reset-password/{token}', function ($token) {
    return view('auth.reset-password', ['token' => $token]);
})->middleware('guest')->name('password.reset');

Route::get('/auth/reset-password', function (Request $request) {
    return view('auth.reset-password');
})->middleware('guest')->name('password.update');

Route::post('/auth/forgot-password', function (Request $request) {
    $request->validate(['email' => 'required|email']);

    $status = Password::sendResetLink(
        $request->only('email')
    );

    return $status === Password::RESET_LINK_SENT
                ? back()->with(['status' => __($status)])
                : back()->withErrors(['email' => __($status)]);
})->middleware('guest')->name('password.email');

Route::post('/auth/reset-password', function (Request $request) {
    $request->validate([
        'token' => 'required',
        'email' => 'required|email',
        'password' => 'required|min:8|confirmed',
    ]);

    $status = Password::reset(
        $request->only('email', 'password', 'password_confirmation', 'token'),
        function ($user, $password) {
            $user->forceFill([
                'password' => Hash::make($password)
            ])->setRememberToken(Str::random(60));

            $user->save();

            event(new PasswordReset($user));
        }
    );

    return $status === Password::PASSWORD_RESET
                ? redirect()->route('login')->with('status', __($status))
                : back()->withErrors(['email' => [__($status)]]);
})->middleware('guest')->name('password.update');
