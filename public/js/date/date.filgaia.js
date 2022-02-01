function monthDiff(d2, d1) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth() + 1;
    return months <= 0 ? 0 : months;
}

function daysInMonth(date) {
    return new Date(date.getYear(), date.getMonth() + 1, 0).getDate();
}    

function diffDate(date1, date2) {
    if (date2 && date2.getTime() && !isNaN(date2.getTime())) {
        var months = monthDiff(date1, date2);
        var days = 0;

        if (date1.getUTCDate() >= date2.getUTCDate()) {
            days = date1.getUTCDate() - date2.getUTCDate();
        }
        else {
            months--;
            days = date1.getUTCDate() - date2.getUTCDate() + daysInMonth(date2);
        }

        // Use the variables months and days how you need them.
    }
}
