<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\customer;
class customerController extends Controller
{
  public function get(Request $request)
{
  $cust = customer::where('cus_id', $request);

  return response()->success(compact('cust'));
}
}
