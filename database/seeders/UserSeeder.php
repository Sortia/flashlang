<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\Hash;
use Str;

class UserSeeder extends BaseSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $dataArray = [
            [
                'name' => 'admin',
                'email' => 'mail@mail.ru',
                'password' => Hash::make('123'),
                'api_token' => Str::random(60),
            ],
        ];

        foreach ($dataArray as $data) {
            $this->insertWithSequenceUpdate('users', $data);
        }
    }
}
