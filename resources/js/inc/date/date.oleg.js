// Extension for Date
Date.difference = function (dateFrom, dateTo) {
  var diff = { TotalMs: dateTo - dateFrom };
  diff.Days = Math.floor(diff.TotalMs / 86400000);

  var remHrs = diff.TotalMs % 86400000;
  var remMin = remHrs % 3600000;
  var remS   = remMin % 60000;

  diff.Hours        = Math.floor(remHrs / 3600000);
  diff.Minutes      = Math.floor(remMin / 60000);
  diff.Seconds      = Math.floor(remS   / 1000);
  diff.Milliseconds = Math.floor(remS % 1000);
  return diff;
};

// Usage
var a = new Date(2014, 05, 12, 00, 5, 45, 30); //a: Thu Jun 12 2014 00:05:45 GMT+0400 
var b = new Date(2014, 02, 12, 00, 0, 25, 0);  //b: Wed Mar 12 2014 00:00:25 GMT+0400
var diff = Date.difference(b, a);
/* diff: {
  Days: 92
  Hours: 0
  Minutes: 5
  Seconds: 20
  Milliseconds: 30
  TotalMs: 7949120030
} */