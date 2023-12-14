<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ucenik extends Model
{
    use HasFactory;
    
    public $timestamps = false;
    
    protected $fillable=[
    
        'ime',
        'prezime',
        'odeljenjeId',
        'username',
        'password',
        'email',

    ];

    public function odeljenje()
    {
        return $this->belongsTo(Odeljenje::class, 'odeljenjeId');
    }

}
