<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\RyouriController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/ryouris', [RyouriController::class, 'getAll']);
Route::get('/ryourimei', [RyouriController::class, 'findName']);
Route::get('/ryoriyomigana', [RyouriController::class, 'findYomigana']);
Route::get('/ryouricategory', [RyouriController::class, 'findCategory']);
Route::get('/ryouritags', [RyouriController::class, 'findTags']);
Route::get('/ryourikcal', [RyouriController::class, 'findKcal']);
Route::get('/ryourijikan', [RyouriController::class, 'findJikan']);
Route::get('/ryourizairyou', [RyouriController::class, 'findZairyou']);
Route::get('/ryouritsukurikata', [RyouriController::class, 'findTsukurikata']);
Route::get('/ryouriusername', [RyouriController::class, 'findUserName']);