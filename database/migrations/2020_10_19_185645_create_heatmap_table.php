<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHeatmapTable extends Migration
{
    public function up()
    {
        Schema::create('heatmaps', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id');
            $table->date('date');
            $table->jsonb('flashcard_ids');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('heatmaps');
    }
}
