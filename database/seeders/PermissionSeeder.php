<?php

namespace Database\Seeders;

class PermissionSeeder extends BaseSeeder
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
                'name' => 'user',
                'description' => 'Default'
            ],
        ];

        foreach ($dataArray as $data) {
            $this->insertWithSequenceUpdate('permissions', $data);
        }
    }
}
