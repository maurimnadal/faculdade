<?php

namespace App\Http\Controllers;

use App\Models\Card;
use Illuminate\Http\Request;

class ApiCardsController extends Controller
{
    public function index(){
        $cards = Card::select("id", "name", "type")->orderBy("id", "desc")->get();
        return response()->json($cards);
    }

    public function show($card){
        $card = Card::find($card);
        if(!$card){
            return response()->json(["message" => "Carta não encontrada"], 404);
        }
        return response()->json($card);
    }

    public function store(Request $request){
        $data = $request->validate([
            "name" => "required|string|max:255",
            "type" => "required|string|max:255|in:Electric, Fire, Water",
            "picture" => "nullable|string",
            "description" => "nullable|string",
        ]);
        $card = Card::create($data);
        return response()->json($card, 201);
    }
}
