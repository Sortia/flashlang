<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStorybooksTable extends Migration
{
    public function up()
    {
        Schema::create('storybooks', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('rus', 1023);
            $table->string('eng', 1023);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('storybooks');
    }
}
