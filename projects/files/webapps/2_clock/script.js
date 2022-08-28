import {$GID, $CE, $CTN, $APC, setClass, setId} from './util.js';
import {
    addPageHeading, 
    addBottomDiv, 
    addCenterBtn,
    addPlayBtn, 
    addManyBtn,
    addTimer,
    addDefaultTimeDisplay
} from './helper.js';

let months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let days=['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];

let textLinks=document.querySelectorAll(".text-link");
//clicking 
let iconLinks=document.querySelectorAll(".icon-link");

activateTextLinks(textLinks);
activateIconLinks(iconLinks);


function activateTextLinks(textLinks){    
    textLinks.forEach((link)=>{
        let displaySection=$GID('display-section');
        link.addEventListener('click', function(e){
            e.preventDefault(); 
            let pageLink=e.target.innerText.toLowerCase();
            //console.log(pageLink);
            let page=catchLinkText(pageLink);
            displaySection.innerHTML="";
            $APC(displaySection, page);        
        })
    })
}

function activateIconLinks(iconLinks){
    let displaySection=$GID('display-section');
    iconLinks.forEach((link)=>{
        link.addEventListener('click', function(e){
        e.preventDefault(); 
        let linkTxt=link.classList[1];
        let page=catchLinkText(linkTxt); 
        //console.log(page);           
        displaySection.innerHTML="";
        $APC(displaySection, page);        
     })  
  })
}
// ********************functions not to be exported******************
//this function gets catchword and returns page accordingly
function catchLinkText(catchWord){       
    let page=null;        
    if(catchWord=="alarm"){
        page=createAlarmPage();
    } else if(catchWord=="clock"){
        page=createClockPage();
    } else if(catchWord=="timer"){
        page=createTimerPage();
    }else if(catchWord=="stopwatch"){
        page=createDefaultSWPage();
    }else {
        console.log("There is some error");
    }
    return page;
}
//*******************functions to create pages********************************

//----------------------create alarm page--------------------------------
function createAlarmPage(){
   
    let alarmPage=$CE("div");
    alarmPage=addPageHeading(alarmPage, "Alarm");        

    let contentDiv=$CE('div');        
    setClass(contentDiv, 'content-div');
    let iconDiv=$CE('div');
    setClass(iconDiv, 'icon-div');             
    iconDiv.innerText="X";
    $APC(contentDiv, iconDiv);        

    let iconDivHeading=$CE("h2");
    iconDivHeading.innerText="No Alarms";
    setClass(iconDivHeading, 'icon-div-heading');        
    $APC(contentDiv, iconDivHeading);
    $APC(alarmPage, contentDiv);

    let bottomDiv=addBottomDiv();
    bottomDiv=addCenterBtn(bottomDiv, 'plus');               
    $APC(alarmPage, bottomDiv);        
    
    return alarmPage;
}

//-----------------------Clock Page----------------------------------
function createClockPage(){
    let clockPage=$CE("div");
    clockPage=addPageHeading(clockPage, "Clock");

    let timeDiv=$CE("div");
    setClass(timeDiv, "timeDiv"); 
    let d=new Date();
    let hours= d.getHours();
    let minutes=d.getMinutes();      
    timeDiv.innerText=`${hours}:${minutes}`;
    let i=d.getDay();
    let day=days[i];
    let j=d.getMonth();
    let month=months[j];
    let date=d.getDate();
    let dayDateDiv=$CE('div');
    setClass(dayDateDiv, "dayDateDiv");        
    dayDateDiv.innerText=`${day} , ${month} ${date}`;

    let bottomDiv=addBottomDiv();
    bottomDiv=addCenterBtn(bottomDiv, 'globe');         

    $APC(clockPage, timeDiv);
    $APC(clockPage, dayDateDiv);
    $APC(clockPage, bottomDiv);
    
    return clockPage;
}

//------------------------createTimerPage-------------------------------

function createTimerPage(){
    let timerPage=$CE("div");
    timerPage=addPageHeading(timerPage, "Timer");


    let contentDiv=$CE('div');        
    setClass(contentDiv, 'content-div');
    let circleDiv=addTimer();        
    $APC(contentDiv, circleDiv);
    $APC(timerPage, contentDiv);

    let bottomDiv=addBottomDiv();
    bottomDiv=addManyBtn(bottomDiv, 'delete', 'play', 'add timer');       
    $APC(timerPage, bottomDiv);
    
    return timerPage;
}
//----------------------------------------------------------------------------
let createDefaultSWPage=()=>{
    let stopwatchPage=$CE("div");        
    stopwatchPage=addPageHeading(stopwatchPage, "Stopwatch");

    let contentDiv=$CE('div');        
    setClass(contentDiv, 'content-div');
    let circleDiv=addDefaultTimeDisplay();        
    $APC(contentDiv, circleDiv);
    $APC(stopwatchPage, contentDiv);

    let bottomDiv=addBottomDiv();
    bottomDiv=addPlayBtn(bottomDiv,  'play');               
    $APC(stopwatchPage, bottomDiv);
    //console.log(stopwatchPage);        
    
    return stopwatchPage;
}

//----------------------------------------------------------------------------