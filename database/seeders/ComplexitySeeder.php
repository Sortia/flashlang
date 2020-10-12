<?php

namespace Database\Seeders;

class ComplexitySeeder extends BaseSeeder
{
    public function run()
    {
        $dataArray = [
            [
                'count_flashcards' => 5,
                'name' => 'Easy'
            ],
            [
                'count_flashcards' => 10,
                'name' => 'Medium'
            ],
            [
                'count_flashcards' => 15,
                'name' => 'Hard'
            ],
        ];

        foreach ($dataArray as $data) {
            $this->insertWithSequenceUpdate('complexities', $data);
        }
    }
}
