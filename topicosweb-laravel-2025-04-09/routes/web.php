<?php

use App\Http\Controllers\CardsController;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login', [LoginController::class, 'index']);

Route::post('/login', [LoginController::class,'autenticar'])->name('login');

Route::get("/logout",[LoginController::class, "logout"])->name("logout");

Route::get('/bemvindo', [LoginController::class, 'bemvindo'])->name('bemvindo');

Route::prefix("/cartas")->group(function(){
    Route::get("/", [CardsController::class, "index"])->name("cartas.index");

    Route::get("/inserir", [CardsController::class, "inserir"])->name("cartas.inserir");

    Route::post("/inserir", [CardsController::class, "inserir"])->name("cartas.gravar");
    Route::get("/editar/{card}", [CardsController::class, "editar"])->name("cartas.editar");
    Route::put("/editar/{card}", [CardsController::class, "editar"])->name("cartas.atualizar");
    Route::get("/excluir/{card}", [CardsController::class, "excluir"])->name("cartas.excluir");
    Route::delete("/excluir/{card}", [CardsController::class, "excluir"])->name("cartas.deletar");


});