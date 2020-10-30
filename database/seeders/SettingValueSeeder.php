<?php

namespace Database\Seeders;

class SettingValueSeeder extends BaseSeeder
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
                'name' => 'flip',
                'description' => 'Flip',
                'setting_id' => 1,
            ],
            [
                'name' => 'slide',
                'description' => 'Slide',
                'setting_id' => 1,
            ],
            [
                'name' => 'front_text',
                'description' => 'Front',
                'setting_id' => 2,
            ],
            [
                'name' => 'back_text',
                'description' => 'Back',
                'setting_id' => 2,
            ],
            [
                'name' => 'en',
                'description' => 'English',
                'setting_id' => 3,
            ],
            [
                'name' => 'ru',
                'description' => 'Russian',
                'setting_id' => 3,
            ],
        ];

        foreach ($dataArray as $data) {
            $this->insertWithSequenceUpdate('setting_values', $data);
        }
    }
}
