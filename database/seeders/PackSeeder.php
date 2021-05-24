<?php

namespace Database\Seeders;

class PackSeeder extends BaseSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $dataPackArray = [
            [
                'id' => 1,
                'name' => 'Test collection',
                'description' => 'test description',
                'user_id' => 1,
                'first_lang_id' => 2,
                'second_lang_id' => 1,
            ],
        ];

        $dataFlashcardsArray = [
            [
                'first_side' => 'Hello',
                'transcription' => 'həˈləʊ',
                'second_side' => 'привет',
                'pack_id' => 1,
            ],
            [
                'first_side' => 'expressive',
                'transcription' => 'ɪksˈpresɪv',
                'second_side' => 'выразительный',
                'pack_id' => 1,
            ],
            [
                'first_side' => 'vast',
                'transcription' => 'vɑːst',
                'second_side' => 'обширный',
                'pack_id' => 1,
            ],
            [
                'first_side' => 'subsequent',
                'transcription' => 'ˈsʌbsɪkwənt',
                'second_side' => 'последующий',
                'pack_id' => 1,
            ],
            [
                'first_side' => 'exposed',
                'transcription' => 'ɪkˈspəʊzd',
                'second_side' => 'подвергнутый',
                'pack_id' => 1,
            ],
            [
                'first_side' => 'advantage',
                'transcription' => 'ədˈvɑːntɪʤ',
                'second_side' => 'преимущество',
                'pack_id' => 1,
            ],
        ];

        foreach ($dataPackArray as $data) {
            $this->insertWithSequenceUpdate('collections', $data);
        }

        foreach ($dataFlashcardsArray as $data) {
            $this->insertWithSequenceUpdate('flashcards', $data);
        }
    }
}
