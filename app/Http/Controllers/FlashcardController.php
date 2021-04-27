<?php

namespace App\Http\Controllers;

use App\Models\Flashcard;
use Illuminate\Support\Facades\Auth;

class FlashcardController extends Controller
{
    /**
     * @return mixed
     */
    public function index()
    {
        $flashcardsQuery = Auth::user()->flashcards();

        return $flashcardsQuery->when($this->request->sortBy, function ($query) {
            $query->orderBy($this->request->sortBy[0], $this->request->sortDesc[0] === 'true' ? 'desc': 'asc');
        })->paginate($this->request->itemsPerPage);
    }

    /**
     * @param Flashcard $flashcard
     */
    public function update(Flashcard $flashcard)
    {
        $this->checkAccess($flashcard);

        $flashcard->update($this->request->toArray());
    }

    /**
     * @param Flashcard $flashcard
     */
    private function checkAccess(Flashcard $flashcard)
    {
        if ($flashcard->pack->user_id !== Auth::id()) {
            abort(403);
        }
    }
}
