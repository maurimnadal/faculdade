<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function index() {
        return view('login');
    }

    public function autenticar(Request $request){
        $login = $request->only('user', 'pass');
        $auth = Auth::attempt([
            'email' => $login['user'],
            'password' => $login['pass'],
        ]);
        if($auth){
            return redirect()->route('bemvindo');
        } else{
            return redirect()->route('login')->with('erro', "usuario ou senha invalidos");
        }
    }

    public function bemvindo(){
        return view("bemvindo");
    }

    public function logout(){
        Auth::logout();
        return redirect()->route("bemvindo");        
    }
}
