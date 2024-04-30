let sec = 0;
let min = 0;
let hour = 0;
let timeInterval = null;
const startbtn = document.querySelector('#start');
const time = document.querySelector('#time');
const lapbtn= document.querySelector('#lap');
const laplist=document.querySelector('#laplist');

//clear function

function clearList(){
    while(laplist.firstChild){
        laplist.removeChild(laplist.firstChild);
    }
}
function Timer() {
    sec++;
    if (sec >= 60) {
        min++;
        sec = 0;
        if (min >= 60) {
            hour++;
            min = 0;
        }
    }
    time.innerText = `${hour}:${min}:${sec}`;
}

let isRunning = false; // Changed from 0 to false
startbtn.addEventListener('click', function() {
    if (!isRunning) {
        timeInterval = window.setInterval(Timer, 1000);
        document.querySelector('#start').innerText='Pause';
        document.querySelector(".watch").style.boxShadow="0px 0px 50px rgba(0,240,0)";
        
    } else {
        window.clearInterval(timeInterval);
        document.querySelector('#start').innerText='Resume';
        document.querySelector(".watch").style.boxShadow="0px 0px 50px rgba(240,240,0)";
    }
    isRunning = !isRunning;
});

//switching modes

const mode=document.querySelector('.dark');
let isDark=0;

mode.addEventListener('click',function(){
    if(!isDark){
        document.body.style.backgroundColor='rgba(24,24,24)';
        document.body.style.color='white';
        mode.style.backgroundColor='rgba(255,255,255)';
        mode.style.color='black';
        mode.innerText='Light';
    }
    else{
        document.body.style.backgroundColor='white';
        document.body.style.color='black';
        mode.innerText='Dark';
        mode.style.backgroundColor='rgba(0,0,0)';
        mode.style.color='white';
    }
    isDark=!isDark;
});
  
//lap functionality
lapbtn.addEventListener('click',function(){
    if(time.innerText!=="0:0:0"){
        const li=document.createElement("li");
        li.innerText=time.innerText;
        li.classList.add("list");
        laplist.appendChild(li);
    }
    else{
        alert("Please start the timer first");
    }
});


//reset functionality

const resetbtn=document.querySelector('#reset');
resetbtn.addEventListener("click",function(){
    clearList();
    window.clearInterval(timeInterval);
    sec=0;
    min=0;
    hour=0;
    time.innerText="0:0:0";
    startbtn.innerText="Start";
    document.querySelector(".watch").style.boxShadow="0px 0px 25px rgba(107, 0, 247)";
});