// Using Plane Javascript:

function dateDiffInDays(start, end) {
    var MS_PER_DAY = 1000 * 60 * 60 * 24;
    var a = new Date(start);
    var b = new Date(end);

    const diffTime = Math.abs(a - b);
    const diffDays = Math.ceil(diffTime / MS_PER_DAY); 
    console.log("Days: ", diffDays);

    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.floor((utc2 - utc1) / MS_PER_DAY);
}

function dateDiffInDays_Months_Years(start, end) {
    var m1 = new Date(start);
    var m2 = new Date(end);
    var yDiff = m2.getFullYear() - m1.getFullYear();
    var mDiff = m2.getMonth() - m1.getMonth();
    var dDiff = m2.getDate() - m1.getDate();

    if (dDiff < 0) {
        var daysInLastFullMonth = getDaysInLastFullMonth(start);
        if (daysInLastFullMonth < m1.getDate()) {
            dDiff = daysInLastFullMonth + dDiff + (m1.getDate() - 

daysInLastFullMonth);
        } else {
            dDiff = daysInLastFullMonth + dDiff;
        }
        mDiff--;
    }
    if (mDiff < 0) {
        mDiff = 12 + mDiff;
        yDiff--;
    }
    console.log('Y:', yDiff, ', M:', mDiff, ', D:', dDiff);
}
function getDaysInLastFullMonth(day) {
    var d = new Date(day);
    console.log(d.getDay() );

    var lastDayOfMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0);
    console.log('last day of month:', lastDayOfMonth.getDate() ); //

    return lastDayOfMonth.getDate();
}
// Using moment.js:

function dateDiffUsingMoment(start, end) {
    var a = moment(start,'M/D/YYYY');
    var b = moment(end,'M/D/YYYY');
    var diffDaysMoment = b.diff(a, 'days');
    console.log('Moments.js : ', diffDaysMoment);

    preciseDiffMoments(a,b);
}
function preciseDiffMoments( a, b) {
    var m1= a, m2=b;
    m1.add(m2.utcOffset() - m1.utcOffset(), 'minutes'); // shift timezone of m1 to m2
    var yDiff = m2.year() - m1.year();
    var mDiff = m2.month() - m1.month();
    var dDiff = m2.date() - m1.date();
    if (dDiff < 0) {
        var daysInLastFullMonth = moment(m2.year() + '-' + (m2.month() + 1), 

"YYYY-MM").subtract(1, 'M').daysInMonth();
        if (daysInLastFullMonth < m1.date()) { // 31/01 -> 2/03
            dDiff = daysInLastFullMonth + dDiff + (m1.date() - 

daysInLastFullMonth);
        } else {
            dDiff = daysInLastFullMonth + dDiff;
        }
        mDiff--;
    }
    if (mDiff < 0) {
        mDiff = 12 + mDiff;
        yDiff--;
    }
    console.log('getMomentum() Y:', yDiff, ', M:', mDiff, ', D:', dDiff);
}
// Tested the above functions using following samples:

var sample1 = all('2/13/2018', '3/15/2018'); // {'M/D/YYYY'} 30, Y: 0 , M: 1 , D: 2
console.log(sample1);

var sample2 = all('10/09/2019', '7/7/2020'); // 272, Y: 0 , M: 8 , D: 29
console.log(sample2);

function all(start, end) {
    dateDiffInDays(start, end);
    dateDiffInDays_Months_Years(start, end);

    try {
        dateDiffUsingMoment(start, end);
    } catch (e) {
        console.log(e); 
    }
}