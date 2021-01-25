const daysElem = document.getElementById("days");
const hoursElem = document.getElementById("hours");
const minsElenm = document.getElementById("minutes");
const secondsElem = document.getElementById("seconds");

function countdown() {
    const untilDate = new Date(document.getElementById("date-input").value);
    const currentDate = new Date();

    const totalSeconds = (untilDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

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