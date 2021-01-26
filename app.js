var daysElem = document.getElementById("days");
var hoursElem = document.getElementById("hours");
var minsElem = document.getElementById("minutes");
var secondsElem = document.getElementById("seconds");

var app = document.getElementById('date-form');
app.elements.namedItem('date-input').addEventListener('click', function(){
    console.log(document.getElementById("date-input").value);
    countdown();
})

function countdown() {
    var untilDate = new Date(document.getElementById("date-input").value);
    var currentDate = new Date();
    console.log(document.getElementById("date-input").value);
    var totalSeconds = (untilDate - currentDate) / 1000;

    var days = Math.floor(totalSeconds / 3600 / 24);
    var hours = Math.floor(totalSeconds / 3600) % 24;
    var mins = Math.floor(totalSeconds / 60) % 60;
    var seconds = Math.floor(totalSeconds) % 60;

    daysElem.innerHTML = days;
    hoursElem.innerHTML = hours;
    minsElem.innerHTML = mins;
    secondsElem.innerHTML = seconds;
}

/*function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}*/

countdown();

//setInterval(countdown, 1000);