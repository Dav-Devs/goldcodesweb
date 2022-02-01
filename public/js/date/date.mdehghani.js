// since I had to use moment-hijri (hijri calendar) and couldn't use moment.diff() method, I came up with this solution. can also be used with moment.js

var momenti = require('moment-hijri')

    //calculate hijri
    var strt = await momenti(somedateobject)
    var until = await momenti()
    
    var years = await 0
    var months = await 0
    var days = await 0

    while(strt.valueOf() < until.valueOf()){
        await strt.add(1, 'iYear');
        await years++
    }
    await strt.subtract(1, 'iYear');
    await years--
    
    while(strt.valueOf() < until.valueOf()){
        await strt.add(1, 'iMonth');
        await months++
    }
    await strt.subtract(1, 'iMonth');
    await months--

    while(strt.valueOf() < until.valueOf()){
        await strt.add(1, 'day');
        await days++
    }
    await strt.subtract(1, 'day');
    await days--


    await console.log(years)
    await console.log(months)
    await console.log(days)
