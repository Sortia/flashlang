<?php

use App\Http\Controllers\API\DictionaryController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CollectionController;
use App\Http\Controllers\HeatmapController;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\PackController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\StorybookController;
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

    Route::resource('languages', LanguageController::class);
    Route::resource('packs', PackController::class);
    Route::resource('users', UserController::class);
    Route::resource('heatmaps', HeatmapController::class);
    Route::resource('storybooks', StorybookController::class);

    Route::resource('collections', CollectionController::class)->middleware('permission');
    Route::post('collections/{collection}/copy', [CollectionController::class, 'copy']);

    Route::get('settings', [SettingController::class, 'index']);
    Route::post('settings/set', [SettingController::class, 'set']);



    Route::group(['prefix' => 'dictionary'], function () {
        Route::get('translate', [DictionaryController::class, 'translate']);
    });
});
