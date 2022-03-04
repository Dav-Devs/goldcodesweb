   let startDate = moment(new Date('2017-05-12')); // yyyy-MM-dd
   let endDate = moment(new Date('2018-09-14')); // yyyy-MM-dd

   let Years = newDate.diff(date, 'years');
   let months = newDate.diff(date, 'months');
   let days = newDate.diff(date, 'days');

console.log("Year: " + Years, ", Month: " months-(Years*12), ", Days: " days-(Years*365.25)-((365.25*(days- (Years*12)))/12));
// Above snippet will print: Year: 1, Month: 4, Days: 2