<?php

namespace App\Http\Controllers;

use App\Models\Ocena;
use Illuminate\Http\Request;


use App\Http\Resources\OcenaUcenikResource;
//use App\Models\Ucenik;
use App\Models\Profesor;

class OcenaUcenikController extends Controller
{

    public function oceneNaPredmetu($ucenikId, $predmetId) {
        $ocene = Ocena::with('profesor')->where('ucenikId', $ucenikId)->where('predmetId', $predmetId)->get();

        return $ocene->isEmpty()
        ? response()->json(['error' => 'Ocene nisu pronadjene'], 404)
        : response()->json(['ocene' => OcenaUcenikResource::collection($ocene)]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Ocena $ocena)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ocena $ocena)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Ocena $ocena)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ocena $ocena)
    {
        //
    }
}
