<?php

namespace App\Models;

use Barryvdh\LaravelIdeHelper\Eloquent;
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
 * @property int $setting_id
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
 * @method static Builder|UserSettingValue whereSettingId($value)
 * @mixin Eloquent
 */
class UserSettingValue extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'setting_id',
        'setting_value_id',
    ];

    /** ------------------- Relations ------------------- **/
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function value()
    {
        return $this->belongsTo(SettingValue::class, 'setting_value_id');
    }

    public function setting()
    {
        return $this->belongsTo(Setting::class);
    }

    /** -------------------- Methods -------------------- **/
}
