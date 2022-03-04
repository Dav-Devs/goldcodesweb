// If you are using date-fns and if you dont want to install the Moment.js or the moment-precise-range-plugin. You can use the following date-fns function to get the same result as moment-precise-range-plugin

intervalToDuration({
  start: new Date(),
  end: new Date("24 Jun 2020")
})

// This will give output in a JSON object like below

{
  "years": 0,
  "months": 0,
  "days": 0,
  "hours": 19,
  "minutes": 35,
  "seconds": 24
}
// Live Example https://stackblitz.com/edit/react-wvxvql

// Link to Documentation https://date-fns.org/v2.14.0/docs/intervalToDuration

// Here's how I did it using intervalToDuration and formatDuration functions from date-fns.

let startDate = Date.parse("2010-10-01 00:00:00 UTC");
let endDate = Date.parse("2020-11-01 00:00:00 UTC");

let duration = intervalToDuration({start: startDate, end: endDate});

let durationInWords = formatDuration(duration, {format: ["years", "months", "days"]}); //output: 10 years 1 month
