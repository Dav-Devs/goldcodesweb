// How it works:

// getDaysDiff():
// Transforms time difference from milliseconds to days.

// getYearsDiff():
// There is no worries for effect of months and days of both dates. The function calculates difference in years by moving dates back and forward.

// getMonthsDiff() (This one has nothing to do with question, but the concept is used in calExactTimeDiff() and I thought someone may need such a function so I insert it):
// This one is a little tricky. The hard work is to deal with month and day of both dates.

// If the endDate's month is more than startDate's, this means another year (12 months) is passed. But this is being taken care of in monthsOfFullYears, so the only thing is needed is to add subtraction of month of endDate and startDate.

// If the startDate's month is more than endDate's then there is no another year. So we should get the difference between them. Imagine we want to go from month 10 of the current year to 2 of the next year. We can go like this: 11, 12, 1, 2. So we passed 4 months. This is equal to 12 - (10 - 2). We get difference between the months and subtract it from months of a whole year.

// Next step is to take care of days of months. If day of endDate is more than or equal to startDate this means another month is passed. So we add 1 to it. But if it's less, then there is nothing to worry about. But in my code I did not do this. Because when I added difference between months I assumed that the days of months are equal. So I already added 1. Thus if day of endDate is less than startDate, I have to decrease months by 1.

// There is an exception: if months are equal and endDate's day is less than startDate's, month should be 11.

// I used the same concept in calExactTimeDiff().

// time difference in Days
function getDaysDiff(startDate = new Date(), endDate = new Date()) {
    if (startDate > endDate) [startDate, endDate] = [endDate, startDate];

    let timeDiff = endDate - startDate;
    let timeDiffInDays = Math.floor(timeDiff / (1000 * 3600 * 24));

    return timeDiffInDays;
}

// time difference in Months
function getMonthsDiff(startDate = new Date(), endDate = new Date()) {
    let monthsOfFullYears = getYearsDiff(startDate, endDate) * 12;
    let months = monthsOfFullYears;
    // the variable below is not necessary, but I kept it for understanding of code
    // we can use "startDate" instead of it
    let yearsAfterStart = new Date(
        startDate.getFullYear() + getYearsDiff(startDate, endDate),
        startDate.getMonth(),
        startDate.getDate()
    );
    let isDayAhead = endDate.getDate() >= yearsAfterStart.getDate();
    
    if (startDate.getMonth() == endDate.getMonth() && !isDayAhead) {
        months = 11;
        return months;
    }

    if (endDate.getMonth() >= yearsAfterStart.getMonth()) {
        let diff = endDate.getMonth() - yearsAfterStart.getMonth();
        months += (isDayAhead) ? diff : diff - 1;
    }
    else {
        months += isDayAhead 
        ? 12 - (startDate.getMonth() - endDate.getMonth())
        : 12 - (startDate.getMonth() - endDate.getMonth()) - 1;
    }

    return months;
}

// time difference in Years
function getYearsDiff(startDate = new Date(), endDate = new Date()) {
    if (startDate > endDate) [startDate, endDate] = [endDate, startDate];

    let yearB4End = new Date(
        endDate.getFullYear() - 1,
        endDate.getMonth(),
        endDate.getDate()
    );
    let year = 0;
    year = yearB4End > startDate
        ? yearB4End.getFullYear() - startDate.getFullYear()
        : 0;
    let yearsAfterStart = new Date(
        startDate.getFullYear() + year + 1,
        startDate.getMonth(),
        startDate.getDate()
    );
    
    if (endDate >= yearsAfterStart) year++;
    
    return year;
}

// time difference in format: X years, Y months, Z days
function calExactTimeDiff(firstDate, secondDate) {
    if (firstDate > secondDate)
        [firstDate, secondDate] = [secondDate, firstDate];

    let monthDiff = 0;
    let isDayAhead = secondDate.getDate() >= firstDate.getDate();
    
    if (secondDate.getMonth() >= firstDate.getMonth()) {
        let diff = secondDate.getMonth() - firstDate.getMonth();
        monthDiff += (isDayAhead) ? diff : diff - 1;
    }
    else {
        monthDiff += isDayAhead 
        ? 12 - (firstDate.getMonth() - secondDate.getMonth())
        : 12 - (firstDate.getMonth() - secondDate.getMonth()) - 1;
    }

    let dayDiff = 0;

    if (isDayAhead) {
        dayDiff = secondDate.getDate() - firstDate.getDate();
    }
    else {
        let b4EndDate = new Date(
            secondDate.getFullYear(),
            secondDate.getMonth() - 1,
            firstDate.getDate()
        )
        dayDiff = getDaysDiff(b4EndDate, secondDate);
    }
    
        if (firstDate.getMonth() == secondDate.getMonth() && !isDayAhead)
            monthDiff = 11;

    let exactTimeDiffUnits = {
        yrs: getYearsDiff(firstDate, secondDate),
        mths: monthDiff,
        dys: dayDiff,
    };
    
    return `${exactTimeDiffUnits.yrs} years, ${exactTimeDiffUnits.mths} months, ${exactTimeDiffUnits.dys} days`
}

let s = new Date(2012, 4, 12);
let e = new Date(2008, 5, 24);
console.log(calExactTimeDiff(s, e));

s = new Date(2001, 7, 4);
e = new Date(2016, 6, 9);
console.log(calExactTimeDiff(s, e));

s = new Date(2011, 11, 28);
e = new Date(2021, 3, 6);
console.log(calExactTimeDiff(s, e));

s = new Date(2020, 8, 7);
e = new Date(2021, 8, 6);
console.log(calExactTimeDiff(s, e));
