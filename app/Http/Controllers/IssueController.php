<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\issue;
class IssueController extends Controller{
  public function create(Request $request)
  {
      $this->validate($request, [
        'iss_data' => 'required',
        ]);

      $post = new issue;
      $post->iss_data = $request->input('iss_data');
      $post->iss_bus_id= '00';
      $post->save();

      return response()->success(compact('post'));
  }

}
