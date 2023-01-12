<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\allUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AllUsersContoller extends Controller
{
    public function getUsers()
    {
        $allUser = allUsers::all();
        return response()->json([
            'status'=> 200,
            'message'=>$allUser,
        ]);
    }

    public function getUserForEmailPassword(Request $request)
    {
        $result = DB::select('select * from all_users where email = :email and password = :psw',['email' => ($request->input('email')), 'psw' =>($request->input('password'))]);

        return response()->json([
            'status'=> 200,
            'message'=>$result,
        ]);
    }

    public function storeUsers(Request $request)
    {
        $allUsers = new allUsers();
        $allUsers->firstname = $request->input('firstname');
        $allUsers->lastname = $request->input('lastname');
        $allUsers->nic = $request->input('nic');
        $allUsers->schoolUniversity = $request->input('schoolUniversity');
        $allUsers->address = $request->input('address');
        $allUsers->phone = $request->input('phone');
        $allUsers->email = $request->input('email');
        $allUsers->guadianName = $request->input('guadianName');
        $allUsers->guadianPhone = $request->input('guadianPhone');
        $allUsers->password = $request->input('password');
        $allUsers->userType = $request->input('userType');
        $allUsers->save();
        
        return response()->json([
            'status'=> 200,
            'message'=>'User Added Successfully',
        ]);
    }
}
