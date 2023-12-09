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
            $table->foreign('predmetID')->references('id')->on('predmets');
            $table->unsignedBigInteger('predmetID')->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('profesors', function (Blueprint $table) {
            //
            $table->dropForeign(['predmetID']);
            $table->integer('predmetID')->change();
        });
    }
};
