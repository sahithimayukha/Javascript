let hr=0;
var minute=0;
let second=0;

let timer;
let isRunning=false;

function start(){
    if(!isRunning){
        isRunning = true;
        timer = setInterval(stopwatch, 1000);
    }    
}

function stop(){
    clearInterval(timer);
    isRunning = false;
}

function reset(){
    isRunning=false;
    hr = 0;
    minute = 0;
    second = 0;
    clearInterval(timer);
    stopwatch();
}

function stopwatch(){
    if(isRunning){
        second++;
    if(second==60){
        second=0;
        minute++;
    }
    if(minute==60){
        minute=0;
        hr++;
    }
    }    
    document.getElementById("hour").innerHTML= update(hr);
    document.getElementById("minute").innerHTML=update(minute);
    document.getElementById("second").innerHTML=update(second);
}

function update(time)
{
    return time<10?"0"+time:time;
}