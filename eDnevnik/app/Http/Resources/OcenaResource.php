<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OcenaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'ucenikId' => $this->resource->ucenikId,
            'podaci o uceniku' => new UcenikResource($this->resource->ucenik),
            'predmetId' => $this->resource->predmetId,
            'razred' =>$this->resource->razredId,
            'datum' => $this->resource->datum,
            'opis' => $this->resource->opis,
            'polugodiste' => $this->resource->polugodiste,
            'ocena' => $this->resource->vrednost,
            'profesorId' => $this->resource->profesorId,
            'podaci o profesoru' => new ProfesorResource($this->resource->profesor),

        ];
    }
}
