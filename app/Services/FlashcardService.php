<?php

namespace App\Services;

use App\Models\Collection;
use App\Models\Flashcard;
use App\Models\Pack;
use Illuminate\Support\Arr;

class FlashcardService
{
    /**
     * @param ?array $data
     * @param Pack $pack
     */
    public function save(?array $data, Pack $pack)
    {
        $this->delete($data, $pack);

        foreach ($data as $flashcard) {
            if (Arr::get($flashcard, 'id')) {
                Flashcard::find($flashcard['id'])->update($flashcard);
            } else {
                $pack->flashcards()->create($flashcard);
            }
        }
    }

    /**
     * @param ?array $data
     * @param Pack $pack
     */
    public function delete(?array $data, Pack $pack)
    {
        $new = collect($data)->pluck('id');
        $old = $pack->flashcards->pluck('id');

        Flashcard::destroy($old->diff($new));
    }
}
