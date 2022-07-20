var min = 0;
var sec = 0;
var msec = 0;
var interval = null;

//Audio
var planted = new Audio('audio/spikeplanted.mp3');
var defused = new Audio('audio/spikedefused.mp3');
var overtime = new Audio('audio/overtime.mp3');
var yoru = new Audio('audio/yoru.mp3');

function setTimer(min, sec, msec) {
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;
    if (msec < 10) msec = "0" + msec;
    document.getElementById("mainminute").innerHTML = min;
    document.getElementById("mainsecond").innerHTML = sec;
    document.getElementById("milliseconds").innerHTML = msec;
}

function checkTime(checkMin, checkSec = 0) {
    if (checkMin == min && sec == checkSec && msec == 0) {
        return true;
    } 
    return false;
}

function clockTick() {
    msec++;
    if (msec >= 100) {
        sec++;
        msec = 0;
    }
    if (sec >= 61) {
        min++;
        sec = 0;
    }

    if (checkTime(1)) {
        //Spike Planted
        planted.play();
    }
    if (checkTime(6)) {
        //Spike Defused
        defused.play();
    }
    if (checkTime(7)) {
        //Overtime
        overtime.play();
    }
    if (checkTime(7,15)) {
        //Yoru Whos next
        yoru.play();
    }

    setTimer(min, sec, msec);
}

function start() {
    interval = setInterval(clockTick, 10);
}

function stop() {
    if (interval) clearInterval(interval);
}

function reset() {
    setTimer(min = 0, sec = 0, msec = 0);
}