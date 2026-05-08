<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArtistController;
use App\Http\Controllers\ReviewController;

Route::get('/', [ArtistController::class, 'index'])->name('artists.index');

Route::middleware(['auth'])->group(function () {
    Route::post('/artists', [ArtistController::class, 'store'])->name('artists.store');
    Route::post('/reviews', [ReviewController::class, 'store'])->name('reviews.store');
    Route::delete('/reviews/{review}', [ReviewController::class, 'destroy'])->name('reviews.destroy');
});

Route::resource('artists', ArtistController::class)->except(['store', 'destroy']);

