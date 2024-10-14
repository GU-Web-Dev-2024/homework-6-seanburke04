$(document).ready(function () {
    var seconds = "00";
    var tens = "00";
    // var appendTens = document.getElementById("tens")
    // var appendSeconds = document.getElementById("seconds")
    // var buttonStart = document.getElementById('button-start');
    // var buttonStop = document.getElementById('button-stop');
    // var buttonReset = document.getElementById('button-reset');
    var interval;
    let $appendTens = $("#tens");
    let $appendSeconds = $("#seconds");
    let $buttonStart = $("#button-start");
    let $buttonStop = $("#button-stop");
    let $buttonReset = $("#button-reset");

    // $buttonStart.onclick = function () {
    //     clearInterval(interval);
    //     interval = setInterval(startTimer, 10);
    // };

    $buttonStart.on("click", function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    });

    // $buttonStop.onclick = function () {
    //     clearInterval(interval);
    // };

    $buttonStop.on("click", function () {
        clearInterval(interval);
    });

    // $buttonReset.onclick = function () {
    //     clearInterval(interval);
    //     tens = "00";
    //     seconds = "00";
    //     $appendTens.innerHTML = tens;
    //     $appendSeconds.innerHTML = seconds;
    // };

    $buttonReset.on("click", function () {
        clearInterval(interval);
        tens = 0;
        seconds = 0;
        $appendTens.html(tens);
        $appendSeconds.html(seconds);
    });

    function startTimer() {
        tens++;

        if (tens < 9) {
            $appendTens.html("0" + tens);
        }

        if (tens > 9) {
            $appendTens.html(tens);
        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            $appendSeconds.html("0" + seconds);
            tens = 0;
            $appendTens.html("0" + 0);
        }

        if (seconds > 9) {
            $appendSeconds.html(seconds);
        }
    }
});
