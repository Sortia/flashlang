<?php

namespace App\Http\Controllers;

use App\Models\Flashcard;

class FlashcardController extends Controller
{
    public function update(Flashcard $flashcard)
    {
        $flashcard->update($this->request->toArray());
    }
}
