<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Staudenmeir\EloquentJsonRelations\HasJsonRelationships;
use Staudenmeir\EloquentJsonRelations\Relations\BelongsToJson;

class Heatmap extends Model
{
    use HasJsonRelationships;

    protected $attributes = [
        'flashcards' => []
    ];

    protected $casts = [
        'flashcard_ids' => 'array'
    ];

    /**
     * @return BelongsToJson
     */
    public function flashcards(): BelongsToJson
    {
        return $this->belongsToJson(Flashcard::class, 'flashcard_ids');
    }
}
