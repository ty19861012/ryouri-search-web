
<?php

use Illuminate\Http\Request;
use App\Http\Controllers\RyouriController;

Route::post('/regist', [RyouriController::class, 'regist']);