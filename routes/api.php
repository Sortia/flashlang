<?php

use App\Http\Controllers\API\DictionaryController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CollectionController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\FlashcardController;
use App\Http\Controllers\HeatmapController;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\PackController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\SPAController;
use App\Http\Controllers\StorybookController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'api'], function () {
    Route::middleware('auth:sanctum')->get('/user', fn() => request()->user());
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/auth/logout', [AuthController::class, 'logout']);
    Route::post('/auth/register', [AuthController::class, 'register']);

    Route::resource('languages', LanguageController::class);
    Route::resource('packs', PackController::class);
    Route::resource('users', UserController::class);
    Route::resource('heatmaps', HeatmapController::class);
    Route::resource('storybooks', StorybookController::class);
    Route::resource('flashcards', FlashcardController::class);

    Route::post('courses/{course}/start', [CourseController::class, 'start']);
    Route::resource('courses', CourseController::class);
    Route::post('lessons/{lesson}/finish', [LessonController::class, 'finish']);
    Route::put('lessons/move', [LessonController::class, 'move']);
    Route::resource('lessons', LessonController::class);

    Route::resource('tasks', TaskController::class);

    Route::resource('collections', CollectionController::class);
    Route::post('collections/{collection}/copy', [CollectionController::class, 'copy']);

    Route::get('settings', [SettingController::class, 'index']);
    Route::post('settings/set', [SettingController::class, 'set']);



    Route::group(['prefix' => 'dictionary'], function () {
        Route::get('translate', [DictionaryController::class, 'translate']);
    });
});

Route::get('{any}', [SPAController::class, 'index'])->where('any', '.*');

