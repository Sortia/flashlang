<?php

namespace Database\Seeders;

class StatusSeeder extends BaseSeeder
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
                'id' => 0,
                'weight' => 6,
            ],
            [
                'id' => 1,
                'weight' => 5,
            ],
            [
                'id' => 2,
                'weight' => 4,
            ],
            [
                'id' => 3,
                'weight' => 3,
            ],
            [
                'id' => 4,
                'weight' => 2,
            ],
            [
                'id' => 5,
                'weight' => 1,
            ],

        ];

        foreach ($dataArray as $data) {
            $this->insertWithSequenceUpdate('statuses', $data);
        }
    }
}
