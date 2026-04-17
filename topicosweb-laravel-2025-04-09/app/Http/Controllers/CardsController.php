<?php

namespace App\Http\Controllers;

use App\Models\Card;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CardsController extends Controller
{
    public function index(){
        $cards = Card::all();

        return view("cards/index", [
            "cards" => $cards
        ]);
    }
    
    public function inserir(Request $request){
        if($request->isMethod("POST")){
            $data = $request->only("name", "type", "picture", "description");
            $picture = $request->file("picture")->store("cartas", "public");
            if($picture){
                $data["picture"] = $picture;
            }
            
            Card::create($data);
            return redirect()->route("cartas.index");
        }

        
        return view("cards/insert");
    }
    public function editar(Request $request, Card $card){
        return "editar";
    }

    public function excluir(Request $request, Card $card){
        if ($request->isMethod("DELETE")){
            if($card->picture){
                Storage::disk("public")->delete($card->picture);
            }
            $card->delete();
            return redirect()->route("cartas.index");
        }
        return view("cards.excluir", ["card" => $card]);
    }
}
