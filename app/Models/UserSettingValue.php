<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

/**
 * App\Models\UserSettingValue
 *
 * @property int $id
 * @property int $user_id
 * @property int $setting_value_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read User $user
 * @property-read SettingValue $value
 * @method static Builder|UserSettingValue newModelQuery()
 * @method static Builder|UserSettingValue newQuery()
 * @method static Builder|UserSettingValue query()
 * @method static Builder|UserSettingValue whereCreatedAt($value)
 * @method static Builder|UserSettingValue whereId($value)
 * @method static Builder|UserSettingValue whereSettingValueId($value)
 * @method static Builder|UserSettingValue whereUpdatedAt($value)
 * @method static Builder|UserSettingValue whereUserId($value)
 * @mixin Eloquent
 */
class UserSettingValue extends Model
{
    use HasFactory;

    /** ------------------- Relations ------------------- **/
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function value()
    {
        return $this->belongsTo(SettingValue::class);
    }

    /** -------------------- Methods -------------------- **/
}
