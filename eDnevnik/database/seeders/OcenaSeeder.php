<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use App\Models\Profesor;
use App\Models\Ucenik;
use App\Models\Odeljenje;

class OcenaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $ucenici=Ucenik::all();
        $profesori=Profesor::all();
        $odeljenja=Odeljenje::all();

        //pravimo ocene iz matematike 1 za sve 




    }
}
