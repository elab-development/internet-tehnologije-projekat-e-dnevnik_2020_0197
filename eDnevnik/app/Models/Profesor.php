<?php

namespace App\Models;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Profesor extends Model implements Authenticatable
{
    use HasApiTokens, Notifiable, HasFactory;

    protected $fillable = [
        'ime',
        'prezime',
        'predmetId',
        'username',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function getAuthIdentifierName()
    {
        return 'id';
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
        return null;
    }

    public function setRememberToken($value)
    {
        // ...
    }

    public function getRememberTokenName()
    {
        return null;
    }

    public function predmet()
    {
        return $this->belongsTo(Predmet::class, 'predmetId');
    }
}

