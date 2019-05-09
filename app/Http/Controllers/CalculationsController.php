<?php

namespace App\Http\Controllers;

class CalculationsController extends Controller
{
  
  public function getCSV()
  {
    
    if (file_exists('csvfile.csv')) {
      $csv = array_map('str_getcsv', file('csvfile.csv'));
      unset( $csv[0] );
      $reversed = array_reverse($csv);
      $contents = view('calculations', ['csv' => $reversed])->render();

      return $contents;
    } else {
      return 'Please save a number on the calculator to create the table.';
    }

  }
  
}