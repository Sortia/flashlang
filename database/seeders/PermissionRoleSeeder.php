<?php

namespace Database\Seeders;

class PermissionRoleSeeder extends BaseSeeder
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
                'permission_id' => 1,
                'role_id' => 1
            ],
            [
                'permission_id' => 1,
                'role_id' => 2
            ],
            [
                'permission_id' => 1,
                'role_id' => 3
            ],
        ];

        foreach ($dataArray as $data) {
            $this->insertWithSequenceUpdate('permission_role', $data);
        }
    }
}
