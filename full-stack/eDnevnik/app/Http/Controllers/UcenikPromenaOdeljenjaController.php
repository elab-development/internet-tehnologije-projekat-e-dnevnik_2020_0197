<?php

namespace App\Http\Controllers;

use App\Models\Ucenik;
use Illuminate\Http\Request;

class UcenikPromenaOdeljenjaController extends Controller
{
    //
    public function update(Request $request, $id)
    {
        $ucenik = Ucenik::findOrFail($id);

        $validatedData = $request->validate([
            
            'odeljenjeId' => 'required|exists:odeljenjes,id',
           
            //'email' => 'required|email|unique:uceniks,email', 
           // 'password' => 'required|string',   //DODATI ZA PASSWORD DA BUDE SAKRIVEN!
           
           //za email i password napraviti odvojeno azuriranje, takodje staviti try catch za email jer ako se stavi
           //mejl nece raditi zbog unique ogranicenja
        ]);

        $ucenik->update($validatedData);

        return response()->json(['poruka' => 'Učenik uspešno ažuriran', 'podaci' => $ucenik], 200);
    }
}
