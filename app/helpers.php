<?php

use App\Models\Setting;
use App\Models\SettingValue;
use App\Models\UserSettingValue;
use Illuminate\Support\Facades\Auth;

/**
 * Calculate percent
 *
 * @param float $progress
 * @param float $total
 * @return float
 */
function percent(float $progress, float $total): float
{
    return ($progress / ($total == 0 ? 1: $total)) * 100;
}

/**
 * @return string
 * @throws Exception
 */
function get_show_side_name(): string
{
    return get_setting('study_show_side', 'first') . '_side';
}

/**
 * @return string
 * @throws Exception
 */
function get_hidden_side_name(): string
{
    return get_setting('study_show_side', 'first') === 'first' ? 'second_side' : 'first_side';
}

/**
 * @return mixed
 */
function get_all_settings() {
    $userSettingValues = UserSettingValue::with('setting', 'value')->whereUserId(Auth::id())->get();

    $userSettingValues->transform(function ($item) {
        return [
            'setting' => $item->setting->name,
            'value' => $item->value->name,
        ];
    });

    return $userSettingValues;
}

/**
 * @param string $name
 * @param string $default
 * @return string
 * @throws Exception
 */
function get_setting(string $name, string $default): string
{
    $settingId = Setting::whereName($name)->value('id');

    if (is_null($settingId)) {
        throw new Exception('Undefined setting name');
    }

    $valueId = UserSettingValue::whereSettingId($settingId)->whereUserId(Auth::id())->value('setting_value_id');

    if (is_null($valueId)) {
        return $default;
    }

    return SettingValue::whereId($valueId)->value('name');
}

function set_setting(string $name, string $value)
{
    $valueId = SettingValue::whereName($value)->value('id');
    $settingId = Setting::whereName($name)->value('id');
    $userId = Auth::id();

    UserSettingValue::on()->updateOrCreate([
        'setting_id' => $settingId,
        'user_id' => $userId,
    ], [
        'setting_value_id' => $valueId
    ]);
}
