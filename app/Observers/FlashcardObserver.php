<?php

namespace App\Observers;

use App\Models\Flashcard;

class FlashcardObserver
{
    /**
     * Handle the flashcard "created" event.
     *
     * @param Flashcard $flashcard
     */
    public function created(Flashcard $flashcard)
    {
        //
    }

    public function updating(Flashcard $flashcard)
    {
        $flashcard->studied_at = $flashcard->isStudied() ? now() : null;
    }

    /**
     * Handle the flashcard "updated" event.
     *
     * @param Flashcard $flashcard
     */
    public function updated(Flashcard $flashcard)
    {
        //
    }

    /**
     * Handle the flashcard "deleted" event.
     *
     * @param Flashcard $flashcard
     */
    public function deleted(Flashcard $flashcard)
    {
        //
    }

    /**
     * Handle the flashcard "restored" event.
     *
     * @param Flashcard $flashcard
     */
    public function restored(Flashcard $flashcard)
    {
        //
    }

    /**
     * Handle the flashcard "force deleted" event.
     *
     * @param Flashcard $flashcard
     */
    public function forceDeleted(Flashcard $flashcard)
    {
        //
    }
}
