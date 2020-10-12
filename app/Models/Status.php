<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

/**
 * App\Models\Status
 *
 * @property int $id
 * @property int $weight
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @method static Builder|Status newModelQuery()
 * @method static Builder|Status newQuery()
 * @method static Builder|Status query()
 * @method static Builder|Status whereCreatedAt($value)
 * @method static Builder|Status whereId($value)
 * @method static Builder|Status whereUpdatedAt($value)
 * @method static Builder|Status whereWeight($value)
 * @mixin Eloquent
 */
class Status extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'weight',
    ];

    /** ------------------- Relations ------------------- **/


    /** -------------------- Methods -------------------- **/
}
