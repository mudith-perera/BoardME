<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
class CreateBoardingHousesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('boarding_houses', function (Blueprint $table) {
            $table->id();
            $table->string('ownerEmail');
            $table->string('ownerName');
            $table->string('ownerPhone');
            $table->string('fullAddress');
            $table->string('city');
            $table->string('town');
            $table->string('province');
            $table->string('houseType');
            $table->string('bathroomStatus');
            $table->string('capacity');
            $table->timestamps();
        });
        DB::statement("ALTER TABLE boarding_houses ADD image1 MEDIUMBLOB");
        DB::statement("ALTER TABLE boarding_houses ADD image2 MEDIUMBLOB");
        DB::statement("ALTER TABLE boarding_houses ADD image3 MEDIUMBLOB");
        DB::statement("ALTER TABLE boarding_houses ADD image4 MEDIUMBLOB");
        DB::statement("ALTER TABLE boarding_houses ADD image5 MEDIUMBLOB");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('boarding_houses');
    }
}
