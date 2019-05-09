<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Calculations</title>

    <link rel="stylesheet" href="/css/app.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css">
</head>
<body>
<a class="page-link" href="/" style="float: right;">Back to Calculator</a>
<div class="app">
<table class="table">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">IP Address</th>
      <th scope="col">User-Agent</th>
      <th scope="col">Number Saved</th>
    </tr>
  </thead>
  <tbody>
  @foreach($csv as $row)
    <tr>
      <th scope="row">{{ $row[0] }}</th>
      <td>{{ $row[1] }}</td>
      <td>{{ $row[2] }}</td>
      <td>{{ $row[3] }}</td>
    </tr>
  @endforeach
  </tbody>
</table>   
</div>

<script src="/js/app.js"></script>
</body>

</html>