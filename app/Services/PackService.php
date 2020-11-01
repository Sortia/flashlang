<?php

namespace App\Services;

use App\Models\Collection;
use App\Models\Pack;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PackService
{
    /**
     * @param Collection|Request $data
     * @param Pack $pack
     */
    public function save($data, Pack $pack)
    {
        $pack->name = $data->name;
        $pack->description = $data->description;
        $pack->user_id = Auth::id();

        $pack->save();
    }
}
