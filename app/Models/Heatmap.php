<?php

namespace App\Models;

use Barryvdh\LaravelIdeHelper\Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

/**
 * App\Models\Heatmap
 *
 * @property int $id
 * @property int $user_id
 * @property string $date
 * @property array $flashcards
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @method static Builder|Heatmap newModelQuery()
 * @method static Builder|Heatmap newQuery()
 * @method static Builder|Heatmap query()
 * @method static Builder|Heatmap whereCreatedAt($value)
 * @method static Builder|Heatmap whereFlashcardIds($value)
 * @method static Builder|Heatmap whereId($value)
 * @method static Builder|Heatmap whereUpdatedAt($value)
 * @method static Builder|Heatmap whereUserId($value)
 * @mixin Eloquent
 */
class Heatmap extends Model
{
    protected $fillable = [
        'user_id',
        'date',
        'flashcards'
    ];

    protected $attributes = [
        'flashcards' => '[]'
    ];

    protected $casts = [
        'flashcards' => 'collection'
    ];

    public function pushFlashcard(Flashcard $flashcard)
    {
        $flashcards = $this->flashcards;

        $flashcards->push($flashcard);

        $this->flashcards = $flashcards;
    }
}
