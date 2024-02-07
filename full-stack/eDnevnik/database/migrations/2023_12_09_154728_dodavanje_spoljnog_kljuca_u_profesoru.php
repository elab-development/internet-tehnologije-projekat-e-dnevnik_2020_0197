<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('profesors', function (Blueprint $table) {
            //
            $table->foreign('predmetId')->references('id')->on('predmets');
            $table->unsignedBigInteger('predmetId')->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('profesors', function (Blueprint $table) {
            //
            $table->dropForeign(['predmetId']);
            $table->integer('predmetId')->change();
        });
    }
};
