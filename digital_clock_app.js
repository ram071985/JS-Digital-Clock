/* Digital Clock App by Reid Muchow */

let todayDate = new Date();
let day = todayDate.getDate();
let month = todayDate.getMonth();
let year = todayDate.getFullYear();

let elDate = document.getElementById('date');
elDate.textContent =  month + '/' + day + '/' + year;

function time () {
let timeDate = new Date();
let hours = timeDate.getHours();
let minutes = timeDate.getMinutes();
let seconds = timeDate.getSeconds();

let elTime = document.getElementById('time');
elTime.textContent = hours + ':' + minutes + ':' + seconds;
}

setInterval(time, 1000);



