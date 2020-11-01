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
        $methodistArray = [
            [
                'permission_id' => 5,
                'role_id' => 3
            ],
            [
                'permission_id' => 6,
                'role_id' => 3
            ],
            [
                'permission_id' => 7,
                'role_id' => 3
            ],
            [
                'permission_id' => 8,
                'role_id' => 3
            ],
            [
                'permission_id' => 9,
                'role_id' => 3
            ],
            [
                'permission_id' => 10,
                'role_id' => 3
            ],
            [
                'permission_id' => 11,
                'role_id' => 3
            ],
            [
                'permission_id' => 12,
                'role_id' => 3
            ],
        ];

        $userArray = [
            [
                'permission_id' => 9,
                'role_id' => 2
            ],
            [
                'permission_id' => 10,
                'role_id' => 2
            ],
            [
                'permission_id' => 11,
                'role_id' => 2
            ],
            [
                'permission_id' => 12,
                'role_id' => 2
            ],
        ];

        $advancedUserArray = [
            [
                'permission_id' => 1,
                'role_id' => 4
            ],
            [
                'permission_id' => 2,
                'role_id' => 4
            ],
            [
                'permission_id' => 3,
                'role_id' => 4
            ],
            [
                'permission_id' => 4,
                'role_id' => 4
            ],
            [
                'permission_id' => 9,
                'role_id' => 4
            ],
            [
                'permission_id' => 10,
                'role_id' => 4
            ],
            [
                'permission_id' => 11,
                'role_id' => 4
            ],
            [
                'permission_id' => 12,
                'role_id' => 4
            ],
        ];

        $adminArray = [
            [
                'permission_id' => 5,
                'role_id' => 1
            ],
            [
                'permission_id' => 6,
                'role_id' => 1
            ],
            [
                'permission_id' => 7,
                'role_id' => 1
            ],
            [
                'permission_id' => 8,
                'role_id' => 1
            ],
            [
                'permission_id' => 1,
                'role_id' => 1
            ],
            [
                'permission_id' => 2,
                'role_id' => 1
            ],
            [
                'permission_id' => 3,
                'role_id' => 1
            ],
            [
                'permission_id' => 4,
                'role_id' => 1
            ],
            [
                'permission_id' => 9,
                'role_id' => 1
            ],
            [
                'permission_id' => 10,
                'role_id' => 1
            ],
            [
                'permission_id' => 11,
                'role_id' => 1
            ],
            [
                'permission_id' => 12,
                'role_id' => 1
            ],
        ];

        foreach (array_merge($methodistArray, $advancedUserArray, $adminArray, $userArray) as $data) {
            $this->insertWithSequenceUpdate('permission_role', $data);
        }
    }
}
