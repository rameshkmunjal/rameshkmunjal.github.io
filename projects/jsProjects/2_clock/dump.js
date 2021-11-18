

let displaySection=$GID('display-section');

/*
function run(){
    let x="abc";
    console.log(this.x);
}
run();
*/
    
    //console.log(links);
    


//------------------creating pages ---------------------------
//------------------Alarm Page--------------------------------

    


    


   
//----------------------------------------------------------------------------
//---------------------Some helper functions---------------------------------







let startStopWatch=(e)=>{
    console.log("startStopWatch called");
    e.preventDefault();
    let count=0
    setInterval(function(){
        
        let seconds=count++;
        console.log(seconds);
    }, 1000);
}
//--------------------------helper.js
let startStopWatch=(e)=>{
    e.preventDefault();
    
    let playIcon=e.target;
    let playBtnDiv=playIcon.parentNode;
    playBtnDiv.removeChild(playIcon);   
    playBtnDiv.innerHTML='<i class="fas fa-pause"></i>';
    playBtnDiv.addEventListener('click', pauseStopwatch);
    
    if(!stopwatchRunning){
        runStopwatch();
    }
      
}

let runStopwatch=()=>{
    //console.log("runStopwatch started");
    let decimalSecondsSpan=document.getElementById("decimal-seconds");
    let secondsSpan=document.getElementById("second");
    //console.log(secondsSpan);
    stopwatchRunning=true;
    let count=0;
   // console.log("stopwatchRunning :"+ stopwatchRunning);
    
    setInterval(function(){             
            if(stopwatchRunning){
                //console.log("setInterval loop started");
                let seconds=0;
                let secondsDigit=0;
                let cemiSeconds=0;
                
                count++; 
                //console.log(count);
                if(count < 100){
                    cemiSeconds=count; 
                    seconds=0; 
                } else {
                    secondsDigit=seconds; 
                    seconds=Math.floor(count/100);
                    cemiSeconds=count%100;
                    if(seconds !== secondsDigit){
                        secondsDigit=seconds;
                    }
                }                                            
                secondsSpan.innerText="";
                decimalSecondsSpan.innerText="";
                secondsSpan.innerText=secondsDigit;
                decimalSecondsSpan.innerText=cemiSeconds;
        }        
    }, 10); 
    /* */
}

let pauseStopwatch=(e)=>{
    console.log("cancelStopwatch : pause button clicked");
    console.log("stopwatchRunning : ", stopwatchRunning);
    e.preventDefault();
    
    let pauseIcon=e.target;
    let pauseBtnDiv=pauseIcon.parentNode;
    pauseBtnDiv.removeChild(pauseIcon);   
    //cannot read properties of null removechild
    
    pauseBtnDiv.innerHTML='<i class="fas fa-play"></i>';
    pauseBtnDiv.addEventListener('click', runStopwatch);
    stopwatchRunning=false;    
}