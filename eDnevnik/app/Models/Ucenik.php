<?php

namespace App\Models;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Ucenik extends Model implements Authenticatable
{
    use HasApiTokens, Notifiable;

    
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
