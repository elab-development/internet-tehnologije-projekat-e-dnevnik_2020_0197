<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PredmetRazred extends Model
{
    use HasFactory;
    protected $fillable=[
        'predmetId',
        'razredId',
        'fondCasova'

    ];
    public function predmet()
    {
        return $this->belongsTo(Predmet::class, 'predmetId');
    }

    public function razred()
    {
        return $this->belongsTo(Razred::class, 'razredId');
    }
}


