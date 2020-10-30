<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateComplexityTable extends Migration
{
    public function up()
    {
        Schema::create('complexities', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->integer('count_flashcards');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('complexities');
    }
}
