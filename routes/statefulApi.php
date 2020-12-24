
<?php

use Illuminate\Http\Request;
use App\Http\Controllers\RyouriController;

Route::post('/regist', [RyouriController::class, 'regist']);
Route::get('/ryouriuser', [RyouriController::class, 'findUser']);