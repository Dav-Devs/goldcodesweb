// You can subtract one Date object from another in Javascript, and you'll get the difference between them in milisseconds. From this result you can extract the other parts you want (days, months etc.)

// For example:

var a = new Date(2010, 10, 1);
var b = new Date(2010, 9, 1);

var c = a - b; // c equals 2674800000,
               // the amount of milisseconds between September 1, 2010
               // and August 1, 2010.
// Now you can get any part you want. For example, how many days have elapsed between the two dates:

var days = (a - b) / (60 * 60 * 24 * 1000);
// 60 * 60 * 24 * 1000 is the amount of milisseconds in a day.
// the variable days now equals 30.958333333333332.
// That's almost 31 days. You can then round down for 30 days, and use whatever remained to get the amounts of hours, minutes etc.

