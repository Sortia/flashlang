<?php

namespace App\Observers;

use App\Models\Flashcard;
use App\Models\Heatmap;
use Illuminate\Support\Facades\Auth;

class FlashcardObserver
{
    public function creating(Flashcard $flashcard)
    {
        $this->processStudiedIfNeed($flashcard);
    }

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
        $this->processStudiedIfNeed($flashcard);
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

    /**
     * Set studied or unstudied if need
     *
     * @param Flashcard $flashcard
     */
    private function processStudiedIfNeed(Flashcard $flashcard)
    {
        if ($this->isSetComplete($flashcard)) {
            $heatmap = Heatmap::firstOrNew([
                'user_id' => Auth::id(),
                'date' => today(),
            ]);

            $flashcard->studied_at = today();

            $heatmap->pushFlashcard($flashcard);
            $heatmap->save();
        }
    }

    /**
     * If $flashcard was studied
     *
     * @param Flashcard $flashcard
     * @return bool
     */
    private function isSetComplete(Flashcard $flashcard): bool
    {
        return $flashcard->isDirty('status_id') && $flashcard->isStudied() && is_null($flashcard->studied_at);
    }
}
