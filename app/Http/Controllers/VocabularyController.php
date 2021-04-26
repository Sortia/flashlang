<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VocabularyController extends Controller
{
    public function index()
    {
        return Auth::user()->flashcards()->with('pack')->get();
    }
}
