
/* Digital Clock App by Reid Muchow */

var today = new Date();
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
var day = today.getDay();
var month = today.getMonth();
var date = today.getDate();

var elDate = document.getElementById('date');
elDate.innerHTML = '<h1>' + date + ',' + month + seconds + '</h1>'; 
var elTime = document.getElementById('time');
elTime.innerHTML = '<h1>' + hours + ':' + minutes + ':' + seconds + '</h1>';
