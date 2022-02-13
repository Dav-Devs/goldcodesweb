//************************** Enter your dates here **********************//

var startDate = "10/05/2014";
var endDate = "11/3/2016"

//******* and press "Run", you will see the result in a popup *********//



var noofdays = 0;
var sdArr = startDate.split("/");
var startDateDay = parseInt(sdArr[0]);
var startDateMonth = parseInt(sdArr[1]);
var startDateYear = parseInt(sdArr[2]);
sdArr = endDate.split("/")
var endDateDay = parseInt(sdArr[0]);
var endDateMonth = parseInt(sdArr[1]);
var endDateYear = parseInt(sdArr[2]);

console.log(startDateDay+' '+startDateMonth+' '+startDateYear);
var yeardays = 365;
var monthArr = [31,,31,30,31,30,31,31,30,31,30,31];
var noofyears = 0
var noofmonths = 0;

if((startDateYear%4)==0) monthArr[1]=29;
else monthArr[1]=28;

if(startDateYear == endDateYear){

    noofyears = 0;
    noofmonths = getMonthDiff(startDate,endDate);
    if(noofmonths < 0) noofmonths = 0;
    noofdays = getDayDiff(startDate,endDate);
   
}else{
    if(endDateMonth < startDateMonth){
        noofyears = (endDateYear - startDateYear)-1;  
    if(noofyears < 1) noofyears = 0;
  }else{
            noofyears = endDateYear - startDateYear;  
  }
    noofmonths = getMonthDiff(startDate,endDate);
    if(noofmonths < 0) noofmonths = 0;
    noofdays = getDayDiff(startDate,endDate);   
}
 
 alert(noofyears+' year, '+ noofmonths+' months, '+ noofdays+' days'); 

function getDayDiff(startDate,endDate){ 
    if(endDateDay >=startDateDay){
      noofdays = 0;
      if(endDateDay > startDateDay) {
        noofdays = endDateDay - startDateDay;
       }
     }else{
            if((endDateYear%4)==0) {
            monthArr[1]=29;
        }else{
            monthArr[1] = 28;
        }
        
        if(endDateMonth != 1)
        noofdays = (monthArr[endDateMonth-2]-startDateDay) + endDateDay;
        else
        noofdays = (monthArr[11]-startDateDay) + endDateDay;
     }
    return noofdays;
}

function getMonthDiff(startDate,endDate){
        if(endDateMonth > startDateMonth){
        noofmonths = endDateMonth - startDateMonth;
        if(endDateDay < startDateDay){
                noofmonths--;
            }
      }else{
        noofmonths = (12-startDateMonth) + endDateMonth;
        if(endDateDay < startDateDay){
                noofmonths--;
            }
     }

return noofmonths;
}
// https://jsfiddle.net/moremanishk/hk8c419f/

