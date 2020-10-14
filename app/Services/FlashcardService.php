<?php

namespace App\Services;

use App\Models\Flashcard;
use App\Models\Pack;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class FlashcardService
{
    public function save(Request $request, Pack $pack)
    {
        $this->delete($request, $pack);

        foreach ($request->flashcards as $flashcard) {
            $pack->flashcards()->updateOrCreate(['id' => Arr::get($flashcard, 'id')], $flashcard);
        }
    }

    public function delete(Request $request, Pack $pack)
    {
        $new = collect($request->flashcards)->pluck('id');
        $old = $pack->flashcards->pluck('id');

        Flashcard::destroy($old->diff($new));
    }
}
