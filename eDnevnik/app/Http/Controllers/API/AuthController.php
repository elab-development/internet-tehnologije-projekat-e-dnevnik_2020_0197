<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Ucenik;
use App\Models\Roditelj;

class AuthController extends Controller
{
    public function loginUcenik(Request $request)
    {
        $credentials = $request->only('username', 'password');

        if (Auth::attempt($credentials)) {
            $ucenik = Auth::user();
            $token = $ucenik->createToken('auth_token')->plainTextToken;
            return response()->json(['poruka' => 'Dobrodosli ' . $ucenik->ime . ' ' . $ucenik->prezime, 'token' => $token]);
        }

        return response()->json(['poruka' => 'Netacni podaci'], 401);
    }

    public function loginRoditelj(Request $request)
    {
        $roditelj = Roditelj::where('username', $request['username'])->where('password', $request['password'])->first();

        if ($roditelj) {
            $token = $roditelj->createToken('auth_token')->plainTextToken;
            return response()->json(['poruka' => 'Dobrodosli ' . $roditelj->ime . ' ' . $roditelj->prezime, 'token' => $token]);
        }

        return response()->json(['poruka' => 'Netacni podaci'], 401);
    }
}

