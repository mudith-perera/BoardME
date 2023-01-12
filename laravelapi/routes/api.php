<?php

use App\Http\Controllers\API\AllUsersContoller;
use App\Http\Controllers\API\BoardingHouseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/
Route::post('/get-users',[AllUsersContoller::class,'getUsers']);
Route::post('/get-user-for-email-password',[AllUsersContoller::class,'getUserForEmailPassword']);

Route::post('/add-users',[AllUsersContoller::class,'storeUsers']);
Route::post('/add-boarding-houses',[BoardingHouseController::class,'storeBoardingHouses']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
