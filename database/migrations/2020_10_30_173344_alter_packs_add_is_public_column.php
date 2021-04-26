<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterPacksAddIsPublicColumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
//        Schema::table('packs', function (Blueprint $table) {
//            $table->boolean('is_public')->default(false)->after('description');
//        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
//        Schema::table('packs', function (Blueprint $table) {
//            $table->dropColumn('is_public');
//        });
    }
}
