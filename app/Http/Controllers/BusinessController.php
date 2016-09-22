<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\business;
class businessController extends Controller
{
  public function get()
{
  $business = business::all();

  return response()->success(compact('business'));
  echo response()->success(compact('business'));
}
}
