<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ucenik extends Model
{
    use HasFactory;
    protected $fillable=[
    
        'ime',
        'prezime',
        'odeljenjeID',
        'username',
        'password',
        'email',

    ];

    public function odeljenje()
    {
        return $this->belongsTo(Odeljenje::class, 'odeljenjeID');
    }

}
