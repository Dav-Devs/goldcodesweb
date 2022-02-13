Date.dateDiff = function(d1, d2) {
    d1 /= 1000;
    d2 /= 1000;
    if (d1 > d2) d2 = [d1, d1 = d2][0];

    var diffs = {
        year: 0,
        month: 0,
        day: 0,
        hour: 0,
        minute: 0,
        second: 0
    }

    $.each(diffs, function(interval) {
        while (d2 >= (d3 = Date.strtotime('+1 '+interval, d1))) {
            d1 = d3;
            ++diffs[interval];
        }
    });

    return diffs;
};
Usage:

> d1 = new Date(2000, 0, 1)
Sat Jan 01 2000 00:00:00 GMT+0100 (CET)

> d2 = new Date(2013, 9, 6)
Sun Oct 06 2013 00:00:00 GMT+0200 (CEST)

> Date.dateDiff(d1, d2)
Object {
  day: 5
  hour: 0
  minute: 0
  month: 9
  second: 0
  year: 13
}