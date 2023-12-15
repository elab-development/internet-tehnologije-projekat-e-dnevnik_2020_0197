<?php

namespace App\Models;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Roditelj extends Model implements Authenticatable
{
    use HasApiTokens, Notifiable, HasFactory;

    protected $fillable=[
        'ime',
        'prezime',
        'username',
        'password'
    ];

    // Dodaj metode koje su potrebne za Authenticatable interfejs
    public function getAuthIdentifierName()
    {
        return 'id'; // Ovo bi trebalo da bude ime kolone koja predstavlja identifikator roditelja
    }

    public function getAuthIdentifier()
    {
        return $this->{$this->getAuthIdentifierName()};
    }

    public function getAuthPassword()
    {
        return $this->password;
    }

    public function getRememberToken()
    {
        return null; // Ako ne koristiš "remember me" funkcionalnost
    }

    public function setRememberToken($value)
    {
        // Ako ne koristiš "remember me" funkcionalnost, ova metoda može ostati prazna
    }

    public function getRememberTokenName()
    {
        return null; // Ako ne koristiš "remember me" funkcionalnost
    }
}

