<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HeatmapController;
use App\Http\Controllers\PackController;
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

Route::post('/api/login', [AuthController::class, 'login']);


Route::middleware('auth:sanctum')->get('/api/user', function () {
    return request()->user();
});

Route::group(['prefix' => 'api'], function () {


//    Route::group(['middleware' => 'auth:api'], function () {
    Route::resource('packs', PackController::class);
    Route::resource('users', UserController::class);
    Route::resource('heatmaps', HeatmapController::class);
    Route::resource('storybooks', StorybookController::class);
//    });

});
