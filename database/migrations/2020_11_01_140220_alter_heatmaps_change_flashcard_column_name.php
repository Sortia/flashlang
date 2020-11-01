<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterHeatmapsChangeFlashcardColumnName extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('heatmaps', function (Blueprint $table) {
            $table->renameColumn('flashcard_ids', 'flashcards');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('heatmaps', function (Blueprint $table) {
            $table->renameColumn('flashcards', 'flashcard_ids');
        });
    }
}
