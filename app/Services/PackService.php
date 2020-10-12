<?php

namespace App\Services;

use App\Models\Pack;
use Illuminate\Http\Request;

class PackService
{
    public function save(Request $request, Pack $pack)
    {
        $pack->name = $request->name;
        $pack->description = $request->description;
        $pack->user_id = \Auth::id();

        $pack->save();
    }
}
