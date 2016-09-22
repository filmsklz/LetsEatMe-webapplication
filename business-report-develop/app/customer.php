<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class customer extends Model
{
    protected $fillable=['cus_id','cus_username','cus_type',];
    protected $table = 'customer';
}
