/* Digital Clock App by Reid Muchow */

function myClock() {
  let currentTime = new Date ( );
  let currentDay = currentTime.getDay ( );
  currentDay = (currentDay == 0) ? "Sun" : currentDay;
  currentDay = (currentDay == 1) ? "Mon" : currentDay;
  currentDay = (currentDay == 2) ? "Tue" : currentDay;
  currentDay = (currentDay == 3) ? "Wed" : currentDay;
  currentDay = (currentDay == 4) ? "Thu" : currentDay;
  currentDay = (currentDay == 5) ? "Fri" : currentDay;
  currentDay = (currentDay == 6) ? "Sat" : currentDay;
  
  let currentMonth = currentTime.getMonth(); 
  currentMonth = (currentMonth == 0) ? "January" : currentMonth;
  currentMonth = (currentMonth == 1) ? "February" : currentMonth;
  currentMonth = (currentMonth == 2) ? "March" : currentMonth;
  currentMonth = (currentMonth == 3) ? "April" : currentMonth;
  currentMonth = (currentMonth == 4) ? "May" : currentMonth;
  currentMonth = (currentMonth == 5) ? "June" : currentMonth;
  currentMonth = (currentMonth == 6) ? "July" : currentMonth;
  currentMonth = (currentMonth == 7) ? "August" : currentMonth;
  currentMonth = (currentMonth == 8) ? "September" : currentMonth;
  currentMonth = (currentMonth == 9) ? "October" : currentMonth;
  currentMonth = (currentMonth == 10) ? "November" : currentMonth;
  currentMonth = (currentMonth == 11) ? "December" : currentMonth;

  let currentDate = currentTime.getDate();
  currentDate = (currentDate == 1 || currentDate == 21 || currentDate == 31 ) ? currentDate + "st" : currentDate;
  currentDate = (currentDate == 2 || currentDate == 22 ) ? currentDate + "nd" : currentDate;
  currentDate = (currentDate == 3 ) || currentDate == 23 ? currentDate + "rd" : currentDate;
  currentDate = (currentDate > 3 || currentDate < 21 || currentDate > 23 || currentDate < 31 ) ? currentDate + "th" : currentDate;

  let currentHours = currentTime.getHours ();
  let currentMinutes = currentTime.getMinutes ();
  let currentSeconds = currentTime.getSeconds ();
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  let timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
  currentMilitaryHours = currentTime.getHours ();
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  let currentTimeString = currentDay + " " + currentMonth +  " " + currentDate + " " + currentHours + ":" + currentMinutes + ":" + currentSeconds +  " " + timeOfDay;
  let militaryTime = "Today is : " + currentDay + " " + currentMonth +  " " + currentDate + " " + currentMilitaryHours + ":" + currentMinutes + ":" + currentSeconds +  " ";
  

  if (isMilitaryTime === false ) {
    document.getElementById("clock").firstChild.nodeValue = currentTimeString;
  } else {
    document.getElementById("clock").firstChild.nodeValue = militaryTime;
  }

}

setInterval(myClock, 1000);

let isMilitaryTime = true;

document.getElementById("toggleButton").addEventListener("click", function() {
  isMilitaryTime = !true;
}















