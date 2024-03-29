/* Digital Clock App by Reid Muchow */

function formatDate(date) {
  if (date == 1 || date == 21 || date == 31) return date + "st";
  if (date == 2 || date == 22) return date + "nd";
  if (date == 3 || date == 23) return date + "rd";
  if (date > 3 || date < 21 || date > 23 || date < 31) return date + "th";

  return date;
}

function formatDay(day) {
  if (day == 0) return "Sun";
  if (day == 1) return "Mon";
  if (day == 2) return "Tue";
  if (day == 3) return "Wed";
  if (day == 4) return "Thu";
  if (day == 5) return "Fri";
  if (day == 6) return "Sat";

  return day;
}

function formatMonth(month) {
  if (month == 0) return "January";
  if (month == 1) return "February";
  if (month == 2) return "March";
  if (month == 3) return "April";
  if (month == 4) return "May";
  if (month == 5) return "June";
  if (month == 6) return "July";
  if (month == 7) return "August";
  if (month == 8) return "September";
  if (month == 9) return "October";
  if (month == 10) return "November";
  if (month == 11) return "December";

  return month;
}

function formatRegularHours(currentHours) {
  if (currentHours > 12) return currentHours - 12;
  return currentHours;
}

function formatAmPm(currentHours) {
  if (currentHours < 12) return "AM";
  if (currentHours > 12 - 12) return "PM";

  return currentHours;
}

function formatMinutes(currentMinutes) {
  if (currentMinutes < 10) return "0" + currentMinutes;

  return currentMinutes;
}

function formatSeconds(currentSeconds) {
  if (currentSeconds < 10) return "0" + currentSeconds;

  return currentSeconds;
}

function myClock() {
  let currentTime = new Date();
  let currentDay = formatDay(currentTime.getDay());
  let currentMonth = formatMonth(currentTime.getMonth());
  let currentDate = formatDate(currentTime.getDate());
  let currentHours = currentTime.getHours();
  let regularHours = formatRegularHours(currentTime.getHours());
  let ampm = formatAmPm(currentTime.getHours());
  let minutes = formatMinutes(currentTime.getMinutes());
  let seconds = formatSeconds(currentTime.getSeconds());

  let timeString = `Today is : ${currentDay} ${currentMonth} ${currentDate} ${
    isMilitaryTime ? currentHours : regularHours
  }:${minutes}:${seconds} ${isMilitaryTime ? "" : ampm}`;
  document.getElementById("clock").firstChild.nodeValue = timeString;

  
}

setInterval(myClock, 1000);

let isMilitaryTime = true;

document.getElementById("toggleButton").addEventListener("click", function() {
  isMilitaryTime = !isMilitaryTime;
});

myClock();
