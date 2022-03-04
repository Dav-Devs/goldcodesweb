Date.getFormattedDateDiff = function(date1, date2) {
var b = moment(date1),
  a = moment(date2),
  intervals = ['years','months','weeks','days'],
  out = [];

for(var i=0; i<intervals.length; i++){
  var diff = a.diff(b, intervals[i]);
  b.add(diff, intervals[i]);
  out.push(diff + ' ' + intervals[i]);
 }
 return out.join(', ');
 };

 var today   = new Date(),
 newYear = new Date(today.getFullYear(), 0, 1),
 y2k     = new Date(2000, 0, 1);

 //(AS OF NOV 29, 2016)
 //Time since New Year: 0 years, 10 months, 4 weeks, 0 days
 console.log( 'Time since New Year: ' + Date.getFormattedDateDiff(newYear, today) );

 //Time since Y2K: 16 years, 10 months, 4 weeks, 0 days
 console.log( 'Time since Y2K: ' + Date.getFormattedDateDiff(y2k, today) );