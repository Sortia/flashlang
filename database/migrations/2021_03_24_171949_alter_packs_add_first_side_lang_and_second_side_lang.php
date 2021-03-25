<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterPacksAddFirstSideLangAndSecondSideLang extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('packs', function (Blueprint $table) {
            $table->bigInteger('first_lang_id')->nullable()->after('description');
            $table->bigInteger('second_lang_id')->nullable()->after('first_lang_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('packs', function (Blueprint $table) {
            $table->dropColumn('first_lang_id');
            $table->dropColumn('second_lang_id');
        });
    }
}
