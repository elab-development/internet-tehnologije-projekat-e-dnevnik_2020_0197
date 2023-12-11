<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ocena extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'ucenikId', 
        'predmetId', 
        'razredId',
        'datum', 
        'opis', 
        'polugodiste', 
        'vrednost', 
        'profesorId'];

    public function ucenik()
    {
        return $this->belongsTo(Ucenik::class, 'ucenikId');
    }

    //OVA DVA PROVERITI
    public function predmet()
    {
        return $this->belongsTo(PredmetRazred::class, 'predmetId');
    }
    
    public function razred() 
    {
        return $this->belongsTo(PredmetRazred::class,'razredId');
    }
    //I U ZAKLJUCNA OCENA ISTO

    public function profesor()
    {
        return $this->belongsTo(Profesor::class, 'profesorId');
    }
}
