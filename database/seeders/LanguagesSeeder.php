<?php

namespace Database\Seeders;

class LanguagesSeeder extends BaseSeeder
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
                'name' => 'Русский',
                'code' => 'ru'
            ],
            [
                'name' => 'Английский',
                'code' => 'en'
            ],
            [
                'name' => 'Француский',
                'code' => 'fr'
            ],
        ];

        foreach ($dataArray as $data) {
            $this->insertWithSequenceUpdate('languages', $data);
        }
    }
}
