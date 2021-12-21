window.onload = function (){

    var seconds = 00;
    var tens = 00;
    var minutes = 00;
    var addTens = document.getElementById("tens");
    var addSeconds = document.getElementById("seconds");
    var addMinutes = document.getElementById("hours");
    var btnStart = document.getElementById("btn-start");
    var btnStop = document.getElementById("btn-stop");
    var btnReset = document.getElementById("btn-reset");
    var interval;

    btnStart.onclick = function(){

        clearInterval(interval);
        interval = setInterval(startTimer, 10);

    }

    btnStop.onclick = function(){
        clearInterval(interval);
    }

    btnReset.onclick = function(){
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        minutes = "00";
        addTens.innerHTML = tens;
        addSeconds.innerHTML = seconds;
        addMinutes.innerHTML = minutes;
    }

    function startTimer(){
        tens++;

        if(tens <= 9){
            addTens.innerHTML = "0" + tens;
        }

        if(tens > 9){
            addTens.innerHTML = tens;
        }

        if(tens > 99){
            seconds++;
            addSeconds.innerHTML = "0" + seconds;
            tens = 0;
            addTens.innerHTML = "0" + 0;
        }

        if(seconds > 9){
            addSeconds.innerHTML = seconds;
        }

        if(seconds > 59){
            minutes++;
            addMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            addSeconds.innerHTML = "0" + 0;
        }

    }

}