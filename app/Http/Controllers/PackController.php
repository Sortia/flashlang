<?php

namespace App\Http\Controllers;

use App\Models\Pack;
use App\Services\FlashcardService;
use App\Services\PackService;
use Illuminate\Database\Eloquent\Collection;

class PackController extends Controller
{
    private FlashcardService $flashcardService;

    private PackService $packService;

    /**
     * PackController constructor.
     * @param FlashcardService $flashcardService
     * @param PackService $packService
     */
    public function __construct(FlashcardService $flashcardService, PackService $packService)
    {
        parent::__construct(request());

        $this->packService = $packService;
        $this->flashcardService = $flashcardService;
    }

    /**
     * List of user packs
     *
     * @return Collection
     */
    public function index(): Collection
    {
        return Pack::my()->with('flashcards.status')->get();
    }

    /**
     * Get pack by id
     *
     * @param Pack $pack
     * @return Pack
     */
    public function show(Pack $pack): Pack
    {
        return $pack->load('flashcards.status');
    }

    /**
     * Create new pack
     *
     * @param Pack $pack
     * @return Pack
     */
    public function store(Pack $pack): Pack
    {
        $this->packService->save($this->request, $pack);
        $this->flashcardService->save($this->request->flashcards, $pack);

        return $pack;
    }

    /**
     * Update pack
     *
     * @param Pack $pack
     * @return Pack
     */
    public function update(Pack $pack): Pack
    {
        $this->packService->save($this->request, $pack);
        $this->flashcardService->save($this->request->flashcards, $pack);

        return $pack;
    }
}
