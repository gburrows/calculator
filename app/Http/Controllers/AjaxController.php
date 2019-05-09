<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;

class AjaxController extends Controller
{
  
  public function saveNumber(Request $request)
  {
    $data = $request->all();
    
    $ip =  $request->ip();
    $userAgent = str_replace(",", "", $request->header('User-Agent'));
    $date = Carbon::now()->toDateTimeString();
    
    $data_array = array (
      array ($date, $ip, $userAgent, $data['numberSaved']),
    );
    
    if (!file_exists('csvfile.csv')) {
      $csv = "Date, IP Address, User-Agent, Number Saved \n";
    } else {
      $csv = "";
    }

    foreach ($data_array as $record){
      $csv.= $record[0].','.$record[1].','.$record[2].','.$record[3]."\n";
    }
    
    $csv_handler = fopen ('csvfile.csv','a');
    fwrite ($csv_handler,$csv);
    fclose ($csv_handler);
    
    echo 'Data saved to csvfile.csv';
    
    exit;
    
  }
  
}