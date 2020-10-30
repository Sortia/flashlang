<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\UserPack
 *
 * @property-read Pack $pack
 * @property-read User $user
 * @method static Builder|UserPack newModelQuery()
 * @method static Builder|UserPack newQuery()
 * @method static Builder|UserPack query()
 * @mixin Eloquent
 */
class UserPack extends Model
{
    use HasFactory;

    /** ------------------- Relations ------------------- **/
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function pack()
    {
        return $this->belongsTo(Pack::class);
    }

    /** -------------------- Methods -------------------- **/
}
