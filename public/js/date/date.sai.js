dateDifference(actualDate) {
            // Calculate time between two dates:
            const date1 = actualDate; // the date you already commented/ posted
            const date2: any = new Date(); // today

            let r = {}; // object for clarity
            let message: string;

            const diffInSeconds = Math.abs(date2 - date1) / 1000;
            const days = Math.floor(diffInSeconds / 60 / 60 / 24);
            const hours = Math.floor(diffInSeconds / 60 / 60 % 24);
            const minutes = Math.floor(diffInSeconds / 60 % 60);
            const seconds = Math.floor(diffInSeconds % 60);
            const milliseconds = 
           Math.round((diffInSeconds - Math.floor(diffInSeconds)) * 1000);

            const months = Math.floor(days / 31);
            const years = Math.floor(months / 12);

            // the below object is just optional 
            // if you want to return an object instead of a message
            r = {
                years: years,
                months: months,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                milliseconds: milliseconds
            };

            // check if difference is in years or months
            if (years === 0 && months === 0) {
                // show in days if no years / months
                if (days > 0) {
                    if (days === 1) {
                        message = days + ' day';
                    } else { message = days + ' days'; }
                }  else if (hours > 0) {
                    if (hours === 1) {
                        message = hours + ' hour';
                    } else {
                        message = hours + ' hours';
                    }
                } else {
                    // show in minutes if no years / months / days
                    if (minutes === 1) {
                        message = minutes + ' minute';
                    } else {message = minutes + ' minutes';}  
                }
            } else if (years === 0 && months > 0) {
                // show in months if no years
                if (months === 1) {
                    message = months + ' month';
                } else {message = months + ' months';}
            } else if (years > 0) {
                // show in years if years exist
                if (years === 1) {
                    message = years + ' year';
                } else {message = years + ' years';}
            }

            return 'Posted ' + message + ' ago'; 
     // this is the message a user see in the view
        }