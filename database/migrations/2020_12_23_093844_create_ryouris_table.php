<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRyourisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ryouris', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('yomigana');
            $table->string('category');
            $table->string('tags')->nullable();
            $table->integer('kcal');
            $table->integer('jikan');
            $table->text('zairyou');
            $table->text('tsukurikata');
            $table->integer('user_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ryouris');
    }
}
