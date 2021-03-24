<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SettingController extends Controller
{
    public function index()
    {
        return get_all_settings();
    }

    public function set(Request $request)
    {
        return DB::transaction(function () use ($request) {
            foreach ($request->settings as $setting) {
                set_setting($setting['name'], $setting['value']);
            }

            return true;
        });
    }
}
