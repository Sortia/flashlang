<?php

namespace App\Services;

use App\Models\Pack;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class FlashcardService
{
    public function save(Request $request, Pack $pack)
    {
        foreach ($request->flashcards as $flashcard) {
            $pack->flashcards()->updateOrCreate(['id' => Arr::get($flashcard, 'id')], $flashcard);
        }
    }
}
