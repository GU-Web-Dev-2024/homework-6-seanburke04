$(document).ready(function () {
    var seconds = "00";
    var tens = "00";
    var interval;
    let $appendTens = $("#tens");
    let $appendSeconds = $("#seconds");
    let $buttonStart = $("#button-start");
    let $buttonStop = $("#button-stop");
    let $buttonReset = $("#button-reset");
    let $timer = $("#timer");
    let $mainDiv = $("#wrapper");

    // Add styling
    $mainDiv.addClass("main-div");
    $mainDiv.css({
        margin: "auto",
        width: "50%",
        padding: "10px",
        "text-align": "center",
    });

    $timer.addClass("timer-background");
    $timer.css({
        "text-align": "center",
        width: "50%",
        "background-color": "gray",
        padding: "10px",
        margin: "auto",
        borderRadius: "10px",
    });

    $buttonStart.addClass("start-button");
    $buttonStart.css({
        "background-color": "white",
        borderRadius: "50%",
        border: "2px solid rgb(51, 165, 50)",
        "margin-top": "10px",
    });

    $buttonStop.addClass("stop-button");
    $buttonStop.css({
        "background-color": "white",
        borderRadius: "50%",
        border: "2px solid rgb(251, 18, 47)",
        "margin-top": "10px",
    });

    $buttonReset.addClass("reset-button");
    $buttonReset.css({
        "background-color": "white",
        borderRadius: "50%",
        border: "2px solid gray",
        "margin-top": "10px",
    });

    $buttonStart.on("click", function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
        $timer.css({ "background-color": "rgb(51, 165, 50)" });
    });

    $buttonStop.on("click", function () {
        if (!(tens == 0 && seconds == 0)) {
            clearInterval(interval);
            $timer.css({ "background-color": "rgb(251, 18, 47)" });
        }
    });

    $buttonReset.on("click", function () {
        clearInterval(interval);
        tens = 0;
        seconds = 0;
        $appendTens.html(tens);
        $appendSeconds.html(seconds);
        $timer.css({ "background-color": "gray" });
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
