<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class allUsers extends Model
{
    use HasFactory;
    protected $table = 'all_users';
    protected $fillable = [
        'firstname',
        'lastname',
        'nic',
        'schoolUniversity',
        'address',
        'phone',
        'email',
        'guadianName',
        'guadianPhone',
        'password',
        'userType',
    ];
}
