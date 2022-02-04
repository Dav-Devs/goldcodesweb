// The following is an algorithm which gives correct but not totally precise since it does not take into account leap year. It also assumes 30 days in a month. A good usage for example is if someone lives in an address from 12/11/2010 to 11/10/2011, it can quickly tells that the person lives there for 10 months and 29 days. From 12/11/2010 to 11/12/2011 is 11 months and 1 day. For certain types of applications, that kind of precision is sufficient. This is for those types of applications because it aims for simplicity:

var datediff = function(start, end) {
  var diff = { years: 0, months: 0, days: 0 };
  var timeDiff = end - start;

  if (timeDiff > 0) {
    diff.years = end.getFullYear() - start.getFullYear();
    diff.months = end.getMonth() - start.getMonth();
    diff.days = end.getDate() - start.getDate();

    if (diff.months < 0) {
      diff.years--;
      diff.months += 12;
    }

    if (diff.days < 0) {
      diff.months = Math.max(0, diff.months - 1);
      diff.days += 30;
    }
  }

  return diff;
};
