import {$GID, $CE, $CTN, $APC, setClass, setId} from './util.js';
var stopwatchRunning=false;
var seconds=0;
var cemiSeconds=0;


export const addPageHeading=(page, pageHeading)=>{
    let h2=$CE("h2");
    setClass(h2, 'page-heading');        
    h2.innerText=pageHeading;
    $APC(page, h2);
    return page;
}

export const  addBottomDiv=()=>{
    let bottomDiv=$CE('div');
    setClass(bottomDiv, 'bottom-div');
    return bottomDiv;
}

export const addCenterBtn=(bottomDiv, btnTxt)=>{
    let addBtn=$CE('div');
    
    if(btnTxt==='plus'){
        addBtn.innerText='+'; 
        setClass(addBtn, 'add-btn');       
    } else if(btnTxt==='globe'){
        addBtn.innerHTML='<i class="fas fa-globe"></i>';
        addBtn.style.paddingTop="2px";
        setClass(addBtn, 'add-btn');
    } else if(btnTxt==='play'){
        addBtn.innerHTML='<i class="fas fa-play"></i>';
        setClass(addBtn, 'play-btn'); 
        setId(addBtn, 'playBtn'); 
        addBtn.addEventListener('click',startStopWatch);       
        addBtn.style.margin="0 auto";  
        //console.log(addBtn);     
    }  else{
        //console.log("sent txt not identified");
        return false;
    }   
    $APC(bottomDiv, addBtn);
    return bottomDiv;
}

export const addManyBtn=(bottomDiv, ...items)=>{
    for(let item of items ){
        let btn=$CE('div');
        if(item==='play'){
            btn.innerHTML='<i class="fas fa-play"></i>';
            setClass(btn, 'play-btn');            
            $APC(bottomDiv, btn);
        } else{
            btn.innerText=item;
            setClass(btn, 'text-btn')
            $APC(bottomDiv, btn);
        }                
    }
    bottomDiv.style.padding="0px 20px 0px 10px";
    return bottomDiv;
}

export const addTimer=()=>{
    let circleDiv=$CE("div");
    setClass(circleDiv, "circle-div"); 
    let labelSpan=$CE('span');
    labelSpan.innerText="Label";
    setClass(labelSpan, 'label-span');
    let timeSpan=$CE('span');
    setClass(timeSpan, 'time-span');
    timeSpan.innerText='1:50';
    let resetSpan=$CE('span');
    setClass(resetSpan, 'reset-span');
    resetSpan.innerText="Reset";       
    
    $APC(circleDiv, labelSpan);
    $APC(circleDiv, timeSpan);
    $APC(circleDiv, resetSpan);
    return circleDiv;
}

export const addDefaultTimeDisplay=()=>{
    let div=$CE("div");
    setClass(div, "circle-div"); 
    let p=$CE('p');
    p.innerHTML=`<span id="second">${seconds}</span><span id="decimal-seconds">${cemiSeconds}</span>`;
    $APC(div, p);
    return div;
}

export const addPlayBtn=(bottomDiv)=>{
    let playBtn=$CE('div'); 
    playBtn.innerHTML='<i class="fas fa-play"></i>';
    setClass(playBtn, 'play-btn');    
    playBtn.addEventListener('click',startStopWatch);       
    playBtn.style.margin="0 auto";          
      
    $APC(bottomDiv, playBtn);
    return bottomDiv;
}
//--------------------------Running Stopwatch functions------------------------
let startStopWatch=(e)=>{
    e.preventDefault();
    let displaySection=$GID('display-section');
    displaySection.innerHTML="";
    let page=createPlayingSWPage();
    $APC(displaySection, page);
    runStopwatch();
}

let createPlayingSWPage=()=>{
    let stopwatchPage=$CE("div");        
    stopwatchPage=addPageHeading(stopwatchPage, "Stopwatch");

    let contentDiv=$CE('div');        
    setClass(contentDiv, 'content-div');
    let circleDiv=addSWTimeDisplay();        
    $APC(contentDiv, circleDiv);
    $APC(stopwatchPage, contentDiv);

    let bottomDiv=addBottomDiv();
    bottomDiv=addPauseBtn(bottomDiv);               
    $APC(stopwatchPage, bottomDiv);           
    
    return stopwatchPage;
}

let addSWTimeDisplay=()=>{
    let div=$CE("div");
    setClass(div, "circle-div"); 
    let p=$CE('p');
    p.innerHTML=`<span id="second">${seconds}</span><span id="decimal-seconds">${cemiSeconds}</span>`;
    $APC(div, p);
    return div;
}

let addPauseBtn=(bottomDiv)=>{
    let pauseBtn=$CE('div');
    pauseBtn.innerHTML='<i class="fas fa-pause"></i>';
    setClass(pauseBtn, 'pause-btn');      
    pauseBtn.addEventListener('click',pauseStopWatch);       
    pauseBtn.style.margin="0 auto";          
      
    $APC(bottomDiv, pauseBtn);
    return bottomDiv;
}

let runStopwatch=()=>{   
    let decimalSecondsSpan=document.getElementById("decimal-seconds");
    let secondsSpan=document.getElementById("second");    
    stopwatchRunning=true;
    let count=0;   
    setInterval(function(){             
        if(stopwatchRunning){                
            let secondsDigit=0;
                
            count++;                
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

//------------------------------paused stopwatch---------------------------
let pauseStopWatch=(e)=>{
    e.preventDefault();
    let displaySection=$GID('display-section');
    displaySection.innerHTML="";
    let page=createPausedSWPage();
    $APC(displaySection, page);
}

let createPausedSWPage=()=>{
    let stopwatchPage=$CE("div");        
    stopwatchPage=addPageHeading(stopwatchPage, "Stopwatch");

    let contentDiv=$CE('div');        
    setClass(contentDiv, 'content-div');
    let circleDiv=addPausedTimeDisplay();        
    $APC(contentDiv, circleDiv);
    $APC(stopwatchPage, contentDiv);

    let bottomDiv=addBottomDiv();
    bottomDiv=addPlayBtn(bottomDiv);               
    $APC(stopwatchPage, bottomDiv);           
    
    return stopwatchPage;
}
let addPausedTimeDisplay=()=>{
    let div=$CE("div");
    setClass(div, "circle-div"); 
    let p=$CE('p');
    p.innerHTML=`<span id="second">${seconds}</span><span id="decimal-seconds">${cemiSeconds}</span>`;
    $APC(div, p);
    return div;
}