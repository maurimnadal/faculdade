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
    
    public function create(Request $request){
        if($request->isMethod("POST")){
            $data = $request->only("name", "type", "picture", "description");
            $picture = $request->file("picture")->store("cards", "public");
            if($picture){
                $data["picture"] = $picture;
            }
            
            Card::create($data);
            return redirect()->route("cards.index");
        }

        
        return view("cards/create");
    }
    
    public function edit(Request $request, Card $card){
        if($request->isMethod("PUT")){
            $data = $request->only("name", "type", "description");
            
            if($request->hasFile("picture")){
                if($card->picture){
                    Storage::disk("public")->delete($card->picture);
                }
                $picture = $request->file("picture")->store("cards", "public");
                $data["picture"] = $picture;
            }
            
            $card->fill($data);
            $card->save();

            return redirect()->route("cards.index");
        }
        return view("cards/edit", [
            "card" => $card
        ]);
    }

    public function delete(Request $request, Card $card){
        if ($request->isMethod("DELETE")){
            if($card->picture){
                Storage::disk("public")->delete($card->picture);
            }
            $card->delete();
            return redirect()->route("cards.index");
        }
        return view("cards/delete", ["card" => $card]);
    }
}