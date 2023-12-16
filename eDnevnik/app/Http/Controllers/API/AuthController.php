<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Ucenik;
use App\Models\Roditelj;

class AuthController extends Controller
{
    public function loginRoditelj(Request $request) 
    {
        if (!Auth::guard('roditelj')->attempt($request->only('username', 'password'))) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
    
        $roditelj = Auth::guard('roditelj')->user();
    
        $token = $roditelj->createToken('auth_token')->plainTextToken;
    
        return response()->json([
            'message' => 'Hi ' . $roditelj->ime . ', welcome to home',
            'access_token' => $token,
            'token_type' => 'Bearer',
            'redirect_url' => route('ucenici.roditelja', ['roditeljId' => $roditelj->id]),
        ]);
    }
    
    public function loginProfesor(Request $request) 
    {
        if (!Auth::guard('profesor')->attempt($request->only('username', 'password'))) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
    
        $profesor = Auth::guard('profesor')->user();
    
        $token = $profesor->createToken('auth_token')->plainTextToken;
    
        return response()->json([
            'message' => 'Hi ' . $profesor->ime . ', welcome to home',
            'access_token' => $token,
            'token_type' => 'Bearer',
            'redirect_url' => route('odeljenja.profesora', ['profesorId' => $profesor->id]),
        ]);
    }
    
    public function loginUcenik(Request $request) 
    {
        if (!Auth::guard('ucenik')->attempt($request->only('username', 'password'))) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
    
        $ucenik = Auth::guard('ucenik')->user();
    
        $token = $ucenik->createToken('auth_token')->plainTextToken;
    
        return response()->json([
            'message' => 'Hi ' . $ucenik->ime . ', welcome to home',
            'access_token' => $token,
            'token_type' => 'Bearer',
            'redirect_url' => route('predmeti.ucenika', ['ucenikId' => $ucenik->id]),
        ]);
    }
    
    public function logoutProfesor()
    {
        auth()->guard('profesor')->logout();

        return response()->json(['message' => 'Profesor uspešno odjavljen']);
    }

    public function logoutUcenik()
    {
        auth()->guard('ucenik')->logout();

        return response()->json(['message' => 'Učenik uspešno odjavljen']);
    }

    public function logoutRoditelj()
    {
        auth()->guard('roditelj')->logout();

        return response()->json(['message' => 'Roditelj uspešno odjavljen']);
    }

 
}

