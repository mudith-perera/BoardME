<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class boardingHouse extends Model
{
    use HasFactory;
    protected $table = 'boarding_houses';
    protected $fillable = [
        'ownerEmail',
        'ownerName',
        'ownerPhone',
        'fullAddress',
        'city',
        'town',
        'province',
        'houseType',
        'bathroomStatus',
        'capacity',
        'image1',
        'image2',
        'image3',
        'image4',
        'image5',
    ];
}
