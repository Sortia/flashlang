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
                'name' => 'Русский'
            ],
            [
                'name' => 'Английский'
            ],
            [
                'name' => 'Француский'
            ],
            [
                'name' => 'Немецкий'
            ],
        ];

        foreach ($dataArray as $data) {
            $this->insertWithSequenceUpdate('complexities', $data);
        }
    }
}
