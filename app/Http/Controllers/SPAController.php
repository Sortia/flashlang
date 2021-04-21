<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SPAController extends Controller
{
    /**
     * Единственный route web для spa
     */
    public function index()
    {
        return view('app');
    }
}
