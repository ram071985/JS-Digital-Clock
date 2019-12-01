/* Digital Clock App by Reid Muchow */

var currentTime = new Date();

var currentHours = currentTime.getHours();
var currentMinutes = currentTime.getMinutes();
var currentSeconds = currentTime.getSeconds();

currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

var timeofDay = ( currentHours < 12 ) ? "AM" : "PM";
currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
currentHours = ( currentHours == 0 ) ? 12 : currentHours;







