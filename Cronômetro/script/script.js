var seconds = 00;
var tens = 00;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var buttonStart = document.getElementById("buttonStart");
var buttonStop = document.getElementById("buttonStop");
var buttonReset = document.getElementById("buttonReset");
var interval;

buttonStart.onclick = function() {

    clearInterval(interval);
    interval = setInterval(startTimer, 10);
}

buttonStop.onclick = function() {

    clearInterval(interval);
}

buttonReset.onclick = function() {

    clearInterval(interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
}

function startTimer() {
    tens++;

    if (tens <= 9) {
        appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        appendTens.innerHTML = tens;
    }

    if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
}

// function interval() {
//     interval = setInterval(start, 1000)
// }
// function loaded() {
//     let bS = document.getElementById("buttonStart");
//     let bP = document.getElementById("buttonStop");
//     bS.addEventListener("click", start);
//     bP.addEventListener("click", stop);
// }
// function start() {
//     let s1 = document.getElementById("seconds");
//     n++;
//     s1.innerHTML = n
// }
// function stop() {
//     clearInterval(interval)
// }