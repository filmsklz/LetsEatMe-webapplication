<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use Yajra\Datatables\Datatables;

use App\restinfpl;

use App\business;

use App\customer;

class DatatablesController extends Controller
{
  public function getIndex()
  {
    return view('datatables.index');
  }

/**
* Process datatables ajax request.
*
* @return \Illuminate\Http\JsonResponse
*/
public function anyData()
  {
    return Datatables::of(customer::query())->make(true);
  }
}
