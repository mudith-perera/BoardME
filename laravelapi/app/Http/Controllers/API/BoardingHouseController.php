<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\boardingHouse;
use Illuminate\Http\Request;

class BoardingHouseController extends Controller
{
    public function storeBoardingHouses(Request $request){
        $boardingHouse = new boardingHouse();
        $boardingHouse->ownerEmail = $request->input('ownerEmail');
        $boardingHouse->ownerName = $request->input('ownerName');
        $boardingHouse->ownerPhone = $request->input('ownerPhone');
        $boardingHouse->fullAddress = $request->input('fullAddress');
        $boardingHouse->city = $request->input('city');
        $boardingHouse->town = $request->input('town');
        $boardingHouse->province = $request->input('province');
        $boardingHouse->houseType = $request->input('houseType');
        $boardingHouse->bathroomStatus = $request->input('bathroomStatus');
        $boardingHouse->capacity = $request->input('capacity');
        $boardingHouse->save();

        return response()->json([
            'status'=> 200,
            'message'=>'Boarding House Added Successfully',
        ]);
    }
}
