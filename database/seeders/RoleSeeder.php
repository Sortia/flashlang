<?php

namespace Database\Seeders;

class RoleSeeder extends BaseSeeder
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
                'description' => 'All permissions'
            ],
            [
                'name' => 'user',
                'description' => 'User permissions'
            ],
            [
                'name' => 'methodist',
                'description' => 'Methodist permissions'
            ]
        ];

        foreach ($dataArray as $data) {
            $this->insertWithSequenceUpdate('roles', $data);
        }
    }
}
