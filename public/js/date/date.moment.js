// by using Moment library and some custom logic, we can get the exact date difference

var out;

out = diffDate(new Date('2014-05-10'), new Date('2015-10-10'));
display(out);

out = diffDate(new Date('2014-05-10'), new Date('2015-10-09'));
display(out);

out = diffDate(new Date('2014-05-10'), new Date('2015-09-09'));
display(out);

out = diffDate(new Date('2014-05-10'), new Date('2015-03-09'));
display(out);

out = diffDate(new Date('2014-05-10'), new Date('2016-03-09'));
display(out);

out = diffDate(new Date('2014-05-10'), new Date('2016-03-11'));
display(out);

function diffDate(startDate, endDate) {
  var b = moment(startDate),
    a = moment(endDate),
    intervals = ['years', 'months', 'weeks', 'days'],
    out = {};

  for (var i = 0; i < intervals.length; i++) {
    var diff = a.diff(b, intervals[i]);
    b.add(diff, intervals[i]);
    out[intervals[i]] = diff;
  }
  return out;
}

function display(obj) {
  var str = '';
  for (key in obj) {
    str = str + obj[key] + ' ' + key + ' '
  }
  console.log(str);
}
{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.js"></script> */}
