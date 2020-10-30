<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

/**
 * App\Models\SettingValue
 *
 * @property int $id
 * @property string $name
 * @property string $description
 * @property int $setting_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read Setting $setting
 * @method static Builder|SettingValue newModelQuery()
 * @method static Builder|SettingValue newQuery()
 * @method static Builder|SettingValue query()
 * @method static Builder|SettingValue whereCreatedAt($value)
 * @method static Builder|SettingValue whereDescription($value)
 * @method static Builder|SettingValue whereId($value)
 * @method static Builder|SettingValue whereName($value)
 * @method static Builder|SettingValue whereSettingId($value)
 * @method static Builder|SettingValue whereUpdatedAt($value)
 * @mixin Eloquent
 */
class SettingValue extends Model
{
    use HasFactory;

    /** ------------------- Relations ------------------- **/
    public function setting()
    {
        return $this->belongsTo(Setting::class);
    }

    /** -------------------- Methods -------------------- **/
}
