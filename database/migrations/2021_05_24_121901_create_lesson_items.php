<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLessonItems extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lesson_items', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->enum('type', ['theory', 'test']);
            $table->text('content')->nullable();
            $table->integer('order_number');
            $table->unsignedBigInteger('lesson_id');
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
        Schema::dropIfExists('lesson_items');
    }
}
