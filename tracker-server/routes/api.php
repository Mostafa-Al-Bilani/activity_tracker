<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ActivityController;
use Illuminate\Support\Facades\Route;


Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:api');

Route::middleware('auth:api')->group(function () {
    Route::post('store-activity', [ActivityController::class, 'storeActivity']);
    Route::post('store-prediction', [ActivityController::class, 'storePrediction']);
});
