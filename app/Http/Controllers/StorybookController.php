<?php

namespace App\Http\Controllers;

use App\Repositories\StorybookRepository;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Auth;

class StorybookController extends Controller
{
    private StorybookRepository $repository;

    /**
     * StorybookController constructor.
     * @param StorybookRepository $repository
     */
    public function __construct(StorybookRepository $repository)
    {
        parent::__construct(request());

        $this->repository = $repository;
    }

    /**
     * Get storybooks for $request->pack_id or all packs if pack_id does not set
     *
     * @return Collection
     */
    public function index()
    {
        if ($this->request->pack_id) {
            $flashcards = Auth::user()->packs()->find($this->request->pack_id)->flashcards;
        } else {
            $flashcards = Auth::user()->flashcards;
        }

        return $this->repository->search($flashcards->implode('first_side', ' '));
    }
}
