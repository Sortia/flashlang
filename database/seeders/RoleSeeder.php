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
                'id' => 1,
                'name' => 'Admin',
                'description' => 'All permissions'
            ],
            [
                'id' => 2,
                'name' => 'User',
                'description' => 'User permissions'
            ],
            [
                'id' => 3,
                'name' => 'Methodist',
                'description' => 'Methodist permissions'
            ],
            [
                'id' => 4,
                'name' => 'Advanced user',
                'description' => 'User with extended capabilities'
            ],
        ];

        foreach ($dataArray as $data) {
            $this->insertWithSequenceUpdate('roles', $data);
        }
    }
}
