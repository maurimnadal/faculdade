<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArtistController;
use App\Http\Controllers\ReviewController;

Route::get('/', [ArtistController::class, 'index'])->name('artists.index');

// Auth Routes
Route::get('/login', function () {
    return view('auth.login');
})->middleware('guest')->name('login');

Route::post('/login', [\App\Http\Controllers\Auth\LoginController::class, 'store'])->middleware('guest');

Route::get('/register', function () {
    return view('auth.register');
})->middleware('guest')->name('register');

Route::post('/register', [\App\Http\Controllers\Auth\RegisterController::class, 'store'])->middleware('guest');

Route::post('/logout', [\App\Http\Controllers\Auth\LoginController::class, 'destroy'])->middleware('auth')->name('logout');

Route::middleware(['auth'])->group(function () {
    Route::post('/artists', [ArtistController::class, 'store'])->name('artists.store');
    Route::delete('/artists/{artist}', [ArtistController::class, 'destroy'])->name('artists.destroy');
    Route::post('/reviews', [ReviewController::class, 'store'])->name('reviews.store');
    Route::delete('/reviews/{review}', [ReviewController::class, 'destroy'])->name('reviews.destroy');
});

Route::resource('artists', ArtistController::class)->except(['store', 'destroy']);

