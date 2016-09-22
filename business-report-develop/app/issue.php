<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class issue extends Model
{
    protected $fillable=['iss_data','iss_bus_id'];
    protected $table = 'issue';
    public $timestamps = false;
}
