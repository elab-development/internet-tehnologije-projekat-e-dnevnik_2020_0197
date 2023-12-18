<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Ucenik;
use App\Models\Roditelj;
use App\Models\Profesor;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

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

    
    public function registracijaUcenika(Request $request){

        $validator=Validator::make($request->all(),[
            'ime'=>'required|string|max:255',
            'prezime'=>'required|string|max:255',
            'username'=>'required|string|max:255|unique:uceniks',
            'password'=>'required|string|min:8',
            'email' => 'required|email|unique:uceniks',
            'odeljenjeId' => 'exists:odeljenjes,id',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $ucenik=Ucenik::create([
           'ime'=>$request->ime,
           'prezime'=>$request->prezime, 
           'username'=>$request->username, 
           'password'=>Hash::make($request->password),
           'email' => $request->email,
           'odeljenjeId' => $request->odeljenjeId, 
            
        ]);

        $token=$ucenik->createToken('auth_token')->plainTextToken;
        return response()->json([
            'data'=>$ucenik,
            'access_token'=>$token,
            'token_type'=>'Bearer'
        ]);
    }


    public function registracijaRoditelja(Request $request)
    {
    $validator = Validator::make($request->all(), [
        'ime' => 'required|string|max:255',
        'prezime' => 'required|string|max:255',
        'username' => 'required|string|max:255|unique:roditeljs',
        'password' => 'required|string|min:8',
        'email' => 'required|email|unique:roditeljs',
    ]);
    if ($validator->fails()) {
        return response()->json(['errors' => $validator->errors()], 422);
    }
    $roditelj = Roditelj::create([
        'ime' => $request->ime,
        'prezime' => $request->prezime,
        'username' => $request->username,
        'password' => Hash::make($request->password),
        'email' => $request->email,
    ]);
    $token = $roditelj->createToken('auth_token')->plainTextToken;
    return response()->json([
        'data' => $roditelj,
        'access_token' => $token,
        'token_type' => 'Bearer',
    ]);
    }

public function registracijaProfesora(Request $request)
{
$validator = Validator::make($request->all(), [
    'ime' => 'required|string|max:255',
    'prezime' => 'required|string|max:255',
    'username' => 'required|string|max:255|unique:profesors',
    'password' => 'required|string|min:8',
    'email' => 'required|email|unique:profesors',
    'predmetId' => 'required|exists:predmets,id',
]);

if ($validator->fails()) {
    return response()->json(['errors' => $validator->errors()], 422);
}

$profesor = Profesor::create([
    'ime' => $request->ime,
    'prezime' => $request->prezime,
    'username' => $request->username,
    'password' => Hash::make($request->password),
    'email' => $request->email,
    'predmetId'=>$request->predmetId,
]);

$token = $profesor->createToken('auth_token')->plainTextToken;
return response()->json([
    'data' => $profesor,
    'access_token' => $token,
    'token_type' => 'Bearer',
]);
}









}

