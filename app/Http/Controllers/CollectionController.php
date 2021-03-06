<?php

namespace App\Http\Controllers;

use App\Models\Collection;
use App\Models\Flashcard;
use App\Models\Pack;
use App\Services\CollectionService;
use App\Services\FlashcardService;
use App\Services\PackService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CollectionController extends Controller
{
    private FlashcardService $flashcardService;

    private CollectionService $service;

    private PackService $packService;

    /**
     * CollectionController constructor.
     * @param FlashcardService $flashcardService
     * @param PackService $packService
     * @param CollectionService $service
     */
    public function __construct(FlashcardService $flashcardService, PackService $packService, CollectionService $service)
    {
        parent::__construct(request());

        $this->service = $service;
        $this->packService = $packService;
        $this->flashcardService = $flashcardService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Collection[]|\Illuminate\Database\Eloquent\Collection
     */
    public function index()
    {
        return Collection::on()->when($this->request->search, function ($query) {
            $query->where('name', 'ILIKE', '%' . $this->request->search . '%');
            $query->orWhere('description', 'ILIKE', '%' . $this->request->search . '%');
        })->when($this->request->limit, function ($query) {
            $query->limit($this->request->limit);
        })->when($this->request->page, function ($query) {
            $query->offset($this->request->limit * ($this->request->page - 1));
        })->orderBy('count_copies', 'desc')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Collection $collection
     * @return Collection
     */
    public function store(Collection $collection): Collection
    {
        $this->service->save($this->request, $collection);
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
        $this->checkAccess($collection);

        $this->service->save($this->request, $collection);
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
        $this->checkAccess($collection);

        Flashcard::wherePackId($collection->id)->delete();

        $collection->delete();
    }

    /**
     * @param Collection $collection
     * @param Request $request
     * @return Pack
     */
    public function copy(Collection $collection, Request $request): Pack
    {
        // выбираем из карточек только слова и транскрипцию
        $cards = $collection->flashcards->whereIn('id', $request->flashcard_ids)->map->only(['first_side', 'second_side', 'transcription']);

        // если на фронте выбрано, что нужно разбить на несколько наборов
        if ($request->copyBy) {
            $keys = $cards->keys();
            foreach ($cards->chunk($request->copyBy) as $key => $chunk) {
                $collectionData = $collection->toArray();
                // разные имена для наборов
                $collectionData['name'] = $collectionData['name'] . ' #' . ($key + 1);

                $tempPack = $this->packService->save((object)$collectionData, new Pack());
                $this->flashcardService->save($chunk->toArray(), $tempPack);
                // на фронт возвращается первый сохраненный набор, чтобы перейти на страницу с ним
                if ( $keys[0] === $key) {
                    $pack = $tempPack;
                }
            }
        } else {
            $pack = $this->packService->save($collection, new Pack());
            $this->flashcardService->save($cards->toArray(), $pack);
        }

        $this->service->copyProcess($collection);

        return $pack;
    }

    /**
     * @param Collection $collection
     */
    private function checkAccess(Collection $collection)
    {
        if ($collection->user_id !== Auth::id()) {
            abort(403);
        }
    }
}
