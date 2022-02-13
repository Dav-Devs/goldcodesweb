// Get the difference between two dates in a human way
// This function is capable of returning natural-language-like text. Use it to get responses like:

// "4 years, 1 month and 11 days"

// "1 year and 2 months"

// "11 months and 20 days"

// "12 days"

// IMPORTANT: date-fns is a dependency

// Just copy the code below and plug in a past date into our getElapsedTime function! It will compare the entered date against the present time and return your human-like responses.

import * as dateFns from "https://cdn.skypack.dev/date-fns@2.22.1";

function getElapsedTime(pastDate) {
  
  const duration = dateFns.intervalToDuration({
    start: new Date(pastDate),
    end: new Date(),
  });

  let [years, months, days] = ["", "", ""];

  if (duration.years > 0) {
    years = duration.years === 1 ? "1 year" : `${duration.years} years`;
  }
  if (duration.months > 0) {
    months = duration.months === 1 ? "1 month" : `${duration.months} months`;
  }
  if (duration.days > 0) {
    days = duration.days === 1 ? "1 day" : `${duration.days} days`;
  }

  let response = [years, months, days].filter(Boolean);

  switch (response.length) {
    case 3:
      response[1] += " and";
      response[0] += ",";
      break;
    case 2:
      response[0] += " and";
      break;
  }
  return response.join(" ");
}