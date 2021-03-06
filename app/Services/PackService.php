<?php

namespace App\Services;

use App\Models\Collection;
use App\Models\Pack;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use stdClass;

class PackService
{
    /**
     * @param Collection|Request|stdClass $data
     * @param Pack $pack
     */
    public function save($data, Pack $pack)
    {
        $pack->name = $data->name;
        $pack->description = $data->description;
        $pack->user_id = Auth::id();
        $pack->first_lang_id = $data->first_lang_id;
        $pack->second_lang_id = $data->second_lang_id;
        $pack->save();

        return $pack;
    }
}
