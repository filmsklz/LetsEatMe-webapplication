<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class business extends Model
{
    protected $fillable=['bus_id','bus_name','bus_status',];
    protected $table = 'business';
}
