/* Digital Clock App by Reid Muchow */

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

let clock = document.getElementById('time');
clock.textContent = hours + ':' + minutes + ':' + seconds;
if (hours == 13) {
  let clock = document.getElementById('time');
  clock.textContent = 1 + hours + ':' + minutes + ':' + seconds; 
if (hours == 14) {
  let clock = document.getElementById('time');
    clock.textContent = 2 + hours + ':' + minutes + ':' + seconds; 
if (hours == 15) {
  let clock = document.getElementById('time');
      nonMilitary.textContent = 3 + hours + ':' + minutes + ':' + seconds; 
if (hours == 16) {
  let nonMilitary = document.getElementById('time');
        nonMilitary.textContent = 4 + hours + ':' + minutes + ':' + seconds; 
if (hours == 17) {
  let nonMilitary = document.getElementById('time');
          nonMilitary.textContent = 5 + hours + ':' + minutes + ':' + seconds; 
if (hours == 18) {
  let nonMilitary = document.getElementById('time');
  nonMilitary.textContent = 6 + hours + ':' + minutes + ':' + seconds;
if (hours == 19) {
  let nonMilitary = document.getElementById('time');
    nonMilitary.textContent = 7 + hours + ':' + minutes + ':' + seconds;
if (hours == 20) {
  let nonMilitary = document.getElementById('time');
      nonMilitary.textContent = 8 + hours + ':' + minutes + ':' + seconds;
if (hours == 21) {
  let nonMilitary = document.getElementById('time');
    nonMilitary.textContent = 9 + hours + ':' + minutes + ':' + seconds;
if (hours == 22) {
  let nonMilitary = document.getElementById('time');
      nonMilitary.textContent = 10 + hours + ':' + minutes + ':' + seconds;
if (hours == 18) {
  let nonMilitary = document.getElementById('time');
    nonMilitary.textContent = 11 + hours + ':' + minutes + ':' + seconds;
if (hours == 18) {
  let nonMilitary = document.getElementById('time');
    nonMilitary.textContent = 12 + hours + ':' + minutes + ':' + seconds;
}

setInterval(time, 1000);



