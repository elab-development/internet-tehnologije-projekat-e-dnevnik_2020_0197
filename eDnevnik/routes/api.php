<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ProfesorController;
use App\Http\Controllers\PredmetController;
use App\Http\Controllers\OdeljenjeController;
use App\Http\Controllers\UcenikController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//RUTE ZA PREGLED PROFESORA

Route::get('/profesori', [ProfesorController::class, 'index']);
//jedino admin ima pristup svim profesorima i svim podacima o profesorima (id, username...)
//na ovoj ruti izlistace se svi podaci iz baze o svim profesorima
Route::get('/profesori/{profesorId}', [ProfesorController::class, 'show']);

Route::get('/profesor/odeljenje/predmet/{odeljenjeId}/{predmetId}', [ProfesorController::class, 'profesorZaPredmetIOdeljenje']);
//ovo je ruta gde ucenik bira da mu se prikaze ime i prezime profesora koji mu drzi neki konkretan predmet
//u predavacu nam se cuvaju svi profesori koji predaju nekom odeljenju
//a u uceniku imamo spoljni kljuc ka odeljenju, tj. kom odeljenju pripada ucenik

Route::get('/profesori/odeljenje/{odeljenjeId}', [ProfesorController::class, 'profesoriZaOdeljenje']);

//RUTE ZA PREGLED PREDMETA

Route::get('/predmeti', [PredmetController::class, 'index']);
Route::get('/predmeti/{predmetId}', [PredmetController::class, 'show']);

Route::get('/predmeti/odeljenje/{odeljenjeId}', [PredmetController::class, 'predmetiZaOdeljenje']);

//RUTE ZA PREGLED ODELJENJA

//admin moze da vidi sva odeljenja u sistemu
Route::get('/odeljenja', [OdeljenjeController::class, 'index']);
Route::get('/odeljenja/{odeljenjeId}', [OdeljenjeController::class, 'show']);

//profesoru se prikazuju samo ona odeljenja kojima predaje
Route::get('/odeljenja-profesora/{profesorId}', [OdeljenjeController::class, 'odeljenjaZaProfesora']);

//RUTE ZA PREGLED UCENIKA

//admin moze da vidi sve ucenike
Route::get('/ucenici', [UcenikController::class, 'index']);
Route::get('/ucenici/{ucenikId}', [UcenikController::class, 'show']);

//admin moze da kreira novog ucenika, da izmeni postojeceg ili da obrise ucenika?
Route::post('/ucenici', [UcenikController::class, 'store']); // ????

//roditelj moze da vidi samo svoju decu
Route::get('/deca-roditelja/{roditeljId}', [UcenikController::class, 'uceniciZaRoditelja']);

//profesor moze da vidi ucenike u okviru odeljenja kojima je predavac
Route::get('/ucenici-odeljenja/{odeljenjeId}', [UcenikController::class, 'uceniciOdeljenja']);

//RUTE ZA OCENE - uraditi sa resource ne sa get

//admin moze da vidi sve ocene

//ucenik i roditelj kada izaberu predmet mogu da vide sve ocene iz tog predmeta

//profesor kada izabere ucenika moze da vidi sve njegove ocene iz predmeta koji mu drzi

//profesor moze uceniku da unese novu ocenu