<?php

namespace Database\Seeders;


use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use App\Models\Roditelj;
use App\Models\Ucenik;
use App\Models\Dete;

class DeteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
          $ucenici=Ucenik::all();
          $roditelji=Roditelj::all();

          foreach($ucenici as $ucenik){
            $roditeljUcenika=Roditelj::where('prezime', $ucenik->prezime)->first();
         
            Dete::create([
                'roditeljId'=> $roditeljUcenika->id,
                'ucenikId'=> $ucenik->id,
            ]);
    
          }

          DB::table('detes')->insert([
           
            [
                'roditeljId'=>15 ,
                'ucenikId'=> 25,
            ],
            [
                'roditeljId'=>20,
                'ucenikId'=> 31,
            ],
            [
                'roditeljId'=> 20,
                'ucenikId'=> 32,
            ]
            ,
            [
                
                'roditeljId'=> 15,
                'ucenikId'=> 33,
            ]
            ,
            [
                
                'roditeljId'=>25 ,
                'ucenikId'=> 36,
            ]
            ,
            [
                
                'roditeljId'=> 25,
                'ucenikId'=> 37,
            ]
            ,
            [
                
                'roditeljId'=> 25,
                'ucenikId'=> 38,
            ]
            ,
            [
                
                'roditeljId'=> 15,
                'ucenikId'=> 39,
            ]
            ,
            [
                
                'roditeljId'=> 15,
                'ucenikId'=> 40,
            ]
            

            // Dodajte koliko god redova želite na ovaj način.
        ]);





    }
}
