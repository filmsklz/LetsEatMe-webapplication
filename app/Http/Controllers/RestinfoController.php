<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\restinfpl;
use Yajra\Datatables\Datatables;

class RestinfoController extends Controller
{
    public function get()
    {
        $restinf = Datatables::of(restinfpl::query())->make(true);
        return response()->success(compact('restinf'));
    }
}
