function dateDiff(start, end) {
    let years = 0, months = 0, days = 0;
    // Day diffence. Trick is to use setDate(0) to get the amount of days
    // from the previous month if the end day less than the start day.
    if (end.getDate() < start.getDate()) {
        months = -1;
        let datePtr = new Date(end);
        datePtr.setDate(0);
        days = end.getDate() + (datePtr.getDate() - start.getDate());
    } else {
        days = end.getDate() - start.getDate();
    }

    if (end.getMonth() < start.getMonth() ||
       (end.getMonth() === start.getMonth() && end.getDate() < start.getDate())) {
        years = -1;
        months += end.getMonth() + (12 - start.getMonth());
    } else {
        months += end.getMonth() - start.getMonth();
    }

    years += end.getFullYear() - start.getFullYear();
    console.log(`${years}y ${months}m ${days}d`);
    return [years, months, days];
}

let a = new Date(2019,6,31);  // 31 Jul 2019
let b = new Date(2022,2, 1);  //  1 Mar 2022

console.log(dateDiff(a, b));  // [2, 7, -2]