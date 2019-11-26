
/* Digital Clock App by Reid Muchow */

var today = new Date();
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
var day = today.getDay();
var month = today.getMonth();
var date = today.getDate();

var el = document.getElementById('date');
el.innerHTML = '<h1>' + date + ',' + month + seconds + '</h1>'; 
var el = document.getElementById('time');
el.innerHTML = '<h1>' + hours + ':' + minutes + ':' + seconds + '</h1>';
