<?php

namespace App\Services;

use App\Models\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;

class CollectionService
{
    /**
     * @param Collection|Request $data
     * @param Collection $collection
     */
    public function save($data, Collection $collection)
    {
        $collection->name = $data->name;
        $collection->description = $data->description;
        $collection->user_id = Auth::id();
        $collection->first_lang_id = $data->first_lang_id;
        $collection->second_lang_id = $data->second_lang_id;
        $collection->save();

        return $collection;
    }

    /**
     * Если текущий пользователь раньше не копировал эту коллекцию,
     * то добавляем его в список копировавших и увеличиваем количество на один
     * (работает как рейтинг коллекций)
     *
     * @param Collection $collection
     */
    public function copyProcess(Collection $collection)
    {
        if (!in_array(Auth::id(), $collection->copy_user_ids)) {
            $collection->copy_user_ids = Arr::prepend($collection->copy_user_ids, Auth::id());
            $collection->count_copies++;
            $collection->save();
        }
    }
}
