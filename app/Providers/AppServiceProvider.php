<?php

namespace App\Providers;

use App\Models\Flashcard;
use App\Observers\FlashcardObserver;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Flashcard::observe(FlashcardObserver::class);
    }
}
