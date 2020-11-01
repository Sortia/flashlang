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
                'id' => 1,
                'name' => 'collections_read',
                'description' => 'Read collection'
            ],
            [
                'id' => 2,
                'name' => 'collections_create',
                'description' => 'Create collection'
            ],
            [
                'id' => 3,
                'name' => 'collections_edit',
                'description' => 'Edit collection'
            ],
            [
                'id' => 4,
                'name' => 'collections_delete',
                'description' => 'Delete collection'
            ],
            [
                'id' => 5,
                'name' => 'courses_read',
                'description' => 'Read course'
            ],
            [
                'id' => 6,
                'name' => 'courses_create',
                'description' => 'Create course'
            ],
            [
                'id' => 7,
                'name' => 'courses_edit',
                'description' => 'Edit course'
            ],
            [
                'id' => 8,
                'name' => 'courses_delete',
                'description' => 'Delete course'
            ],
            [
                'id' => 9,
                'name' =>'packs_read',
                'description' => 'Read pack'
            ],
            [
                'id' => 10,
                'name' => 'packs_create',
                'description' => 'Create pack'
            ],
            [
                'id' => 11,
                'name' => 'packs_edit',
                'description' => 'Edit pack'
            ],
            [
                'id' => 12,
                'name' => 'packs_delete',
                'description' => 'Delete pack'
            ],
        ];

        foreach ($dataArray as $data) {
            $this->insertWithSequenceUpdate('permissions', $data);
        }
    }
}
