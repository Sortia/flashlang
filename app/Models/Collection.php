<?php

namespace App\Models;

use Barryvdh\LaravelIdeHelper\Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Carbon;

/**
 * App\Models\Collection
 *
 * @property int $id
 * @property string $name
 * @property string|null $description
 * @property int $user_id
 * @property int $count_copies
 * @property array $copy_user_ids
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|Flashcard[] $flashcards
 * @property-read int|null $flashcards_count
 * @property-read mixed $progress
 * @property-read User $user
 * @method static Builder|Pack my()
 * @method static Builder|Collection newModelQuery()
 * @method static Builder|Collection newQuery()
 * @method static Builder|Collection query()
 * @method static Builder|Collection whereCreatedAt($value)
 * @method static Builder|Collection whereDescription($value)
 * @method static Builder|Collection whereId($value)
 * @method static Builder|Collection whereName($value)
 * @method static Builder|Collection whereUpdatedAt($value)
 * @method static Builder|Collection whereUserId($value)
 * @mixin Eloquent
 */
class Collection extends Pack
{
    use HasFactory;

    protected $casts = [
        'copy_user_ids' => 'array'
    ];
}
