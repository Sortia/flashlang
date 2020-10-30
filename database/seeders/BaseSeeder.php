<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BaseSeeder extends Seeder
{
    public function insertWithSequenceUpdate($tableName, $insertArray)
    {
        DB::table($tableName)->insert($insertArray);
    }
}
