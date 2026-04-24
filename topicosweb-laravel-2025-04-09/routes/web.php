<?php

use App\Http\Controllers\CardsController;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login', [LoginController::class, 'index']);

Route::post('/login', [LoginController::class,'authenticate'])->name('login');

Route::get("/logout",[LoginController::class, "logout"])->name("logout");

Route::get('/dashboard', [LoginController::class, 'dashboard'])->name('dashboard');

Route::prefix("/cards")->group(function(){
    Route::get("/", [CardsController::class, "index"])->name("cards.index");

    Route::get("/create", [CardsController::class, "create"])->name("cards.create");

    Route::post("/create", [CardsController::class, "create"])->name("cards.store");
    Route::get("/edit/{card}", [CardsController::class, "edit"])->name("cards.edit");
    Route::put("/edit/{card}", [CardsController::class, "edit"])->name("cards.update");
    Route::get("/delete/{card}", [CardsController::class, "delete"])->name("cards.delete");
    Route::delete("/delete/{card}", [CardsController::class, "delete"])->name("cards.destroy");
});