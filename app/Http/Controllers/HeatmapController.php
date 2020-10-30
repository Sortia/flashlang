<?php

namespace App\Http\Controllers;

use App\Models\Heatmap;

class HeatmapController extends Controller
{
    /**
     *
     */
    public function index()
    {
        return Heatmap::with('flashcards')->whereUserId($this->request->user_id)->get();
    }
}
