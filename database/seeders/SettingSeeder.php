<?php

namespace Database\Seeders;

class SettingSeeder extends BaseSeeder
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
                'name' => 'study_flashcards_type_view',
                'description' => 'Study flashcard type'
            ],
            [
                'name' => 'study_show_side',
                'description' => 'Study show side'
            ],
            [
                'name' => 'locale',
                'description' => 'Language'
            ],
        ];

        foreach ($dataArray as $data) {
            $this->insertWithSequenceUpdate('settings', $data);
        }
    }
}
