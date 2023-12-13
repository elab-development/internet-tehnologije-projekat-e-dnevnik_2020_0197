<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProfesorResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */

    public static $wrap = 'profesor';
    
    public function toArray(Request $request): array
    {
        return [
            'ime' => $this->ime,
            'prezime' => $this->prezime,
            'predmet'=>  $this->whenLoaded('predmet', function () {
                return $this->predmet->naziv; }),
                
                //$this->predmetId ? $this->predmetId->naziv : null,//$this->predmetId->naziv,
        ];
    }
}
