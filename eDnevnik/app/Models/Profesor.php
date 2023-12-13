<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profesor extends Model
{
    use HasFactory;

    protected $fillable=[
       
        'ime',
        'prezime',
        'predmetId',
        'username',
        'password'
    ];

    public function predmet()
    {
        return $this->belongsTo(Predmet::class, 'predmetId');
    }

}
