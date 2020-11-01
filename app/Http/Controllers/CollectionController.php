<?php

namespace App\Http\Controllers;

use App\Models\Collection;
use App\Models\Pack;
use App\Services\FlashcardService;
use App\Services\PackService;
use Exception;
use Illuminate\Http\Response;

class CollectionController extends Controller
{
    private FlashcardService $flashcardService;

    private PackService $packService;

    /**
     * CollectionController constructor.
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
     * Display a listing of the resource.
     *
     * @return Collection[]|\Illuminate\Database\Eloquent\Collection|Response
     */
    public function index()
    {
        return Collection::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Collection $collection
     * @return Collection
     */
    public function store(Collection $collection): Collection
    {
        $this->packService->save($this->request, $collection);
        $this->flashcardService->save($this->request->flashcards, $collection);

        return $collection;
    }

    /**
     * Display the specified resource.
     *
     * @param Collection $collection
     * @return Collection
     */
    public function show(Collection $collection): Collection
    {
        return $collection;
    }

    /**
     * Update collection
     *
     * @param Collection $collection
     * @return Collection
     */
    public function update(Collection $collection): Collection
    {
        $this->packService->save($this->request, $collection);
        $this->flashcardService->save($this->request->flashcards, $collection);

        return $collection;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Collection $collection
     * @throws Exception
     */
    public function destroy(Collection $collection)
    {
        $collection->delete();
    }

    /**
     * @param Collection $collection
     * @return Pack
     */
    public function copy(Collection $collection): Pack
    {
        $pack = new Pack();

        $this->packService->save($collection, $pack);
        $this->flashcardService->save($collection->flashcards->map->only(['first_side', 'second_side'])->toArray(), $pack);

        return $pack;
    }
}
