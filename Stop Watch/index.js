const display  = document.getElementById("Display");
let timer = null;
let startTime= 0;
let elaspedTime = 0;
let isRunning = false;


function start(){

    if(!isRunning){
        startTime = Date.now() - elaspedTime;
        timer = setInterval(update,10);
        isRunning = true;

    }

}

function stop(){

    if(isRunning){
        clearInterval(timer);
        elaspedTime = Date.now() - startTime;
        isRunning = false;
    }
    
}

function reset(){
    clearInterval(timer);
    startTime= 0;
    elaspedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00"
    
}

function update(){

    const currentTime= Date.now();
    elaspedTime = currentTime - startTime;


    let hours = Math.floor(elaspedTime / (1000 * 60 *60));
    let min = Math.floor(elaspedTime / (1000 * 60) % 60);
    let sec = Math.floor(elaspedTime / 1000 % 60);
    let mSec = Math.floor( elaspedTime % 1000 / 10);

    hours = String(hours).padStart(2,"0")
    min = String(min).padStart(2,"0")
    sec = String(sec).padStart(2,"0")
    mSec = String(mSec).padStart(2,"0")

    display.textContent = `${hours}:${min}:${sec}:${mSec}`

}