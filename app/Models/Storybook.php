<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

/**
 * App\Models\Storybook
 *
 * @property int $id
 * @property string $rus
 * @property string $eng
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @method static Builder|Storybook newModelQuery()
 * @method static Builder|Storybook newQuery()
 * @method static Builder|Storybook query()
 * @method static Builder|Storybook whereCreatedAt($value)
 * @method static Builder|Storybook whereEng($value)
 * @method static Builder|Storybook whereId($value)
 * @method static Builder|Storybook whereRus($value)
 * @method static Builder|Storybook whereUpdatedAt($value)
 * @mixin Eloquent
 */
class Storybook extends Model
{
    use Elasticable;

    protected $fillable = [
        'rus',
        'eng',
    ];
}
