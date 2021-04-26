<?php

namespace App\Http\Controllers;

use App\Models\Flashcard;
use Illuminate\Support\Facades\Auth;

class VocabularyController extends Controller
{
    public function index()
    {
        $flashcardsQuery = Auth::user()->flashcards();

        return $flashcardsQuery->when($this->request->sortBy, function ($query) {
            $query->orderBy($this->request->sortBy[0], $this->request->sortDesc[0] === 'true' ? 'desc': 'asc');
        })->paginate($this->request->itemsPerPage);
    }
}
