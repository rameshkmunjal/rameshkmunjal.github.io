//----------------------Some Utility functions-----------------------
$GID=(id)=>document.getElementById(id);
$CE=(ele)=>document.createElement(ele);
$CTN=(txt)=>document.createTextNode(txt);
$APC=(parent, child)=>parent.appendChild(child);
setClass=(ele, className)=>{
    ele.setAttribute('class', className);
}
//--------------------------------------------------------------------

let displaySection=$GID('display-section');
/*
function run(){
    let x="abc";
    console.log(this.x);
}
run();
*/
    let textLinks=document.querySelectorAll(".text-link");
    //console.log(links);
    textLinks.forEach((link)=>{
        link.addEventListener('click', function(e){
            e.preventDefault(); 
            let pageLink=e.target.innerText.toLowerCase();
            console.log(pageLink);
            let page=catchLinkText(pageLink);
            displaySection.innerHTML="";
            $APC(displaySection, page);
        })
    })

//clicking of icons will send catchword 
    let iconLinks=document.querySelectorAll(".icon-link");
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

//this function gets catchword and returns page accordingly
    let catchLinkText=(catchWord)=>{       
        let page=null;        
        if(catchWord=="alarm"){
            page=createAlarmPage();
        } else if(catchWord=="clock"){
            page=createClockPage();
        } else if(catchWord=="timer"){
            page=createTimerPage();
        }else if(catchWord=="stopwatch"){
            page=createStopwatchPage();
        }else {
            console.log("There is some error");
        }
        return page;
    }

//------------------creating pages ---------------------------
//------------------Alarm Page--------------------------------

    let createAlarmPage=()=>{
   
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
    let createClockPage=()=>{
        let clockPage=$CE("div");
        clockPage=addPageHeading(clockPage, "Clock");

        let timeDiv=$CE("div");
        setClass(timeDiv, "timeDiv");        
        timeDiv.innerText="17:50";
        let dayDateDiv=$CE('div');
        setClass(dayDateDiv, "dayDateDiv");        
        dayDateDiv.innerText="Wed"+" , "+"Oct 6";

        let bottomDiv=addBottomDiv();
        bottomDiv=addCenterBtn(bottomDiv, 'globe');         

        $APC(clockPage, timeDiv);
        $APC(clockPage, dayDateDiv);
        $APC(clockPage, bottomDiv);
        
        return clockPage;
    }

//--------------------------------------------------------------------------
    let createTimerPage=()=>{
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
    let createStopwatchPage=()=>{
        let stopwatchPage=$CE("div");        
        stopwatchPage=addPageHeading(stopwatchPage, "Stopwatch");

        let contentDiv=$CE('div');        
        setClass(contentDiv, 'content-div');
        let circleDiv=addTimeDisplay();        
        $APC(contentDiv, circleDiv);
        $APC(stopwatchPage, contentDiv);

        let bottomDiv=addBottomDiv();
        bottomDiv=addCenterBtn(bottomDiv,  'play');       
        $APC(stopwatchPage, bottomDiv);
        
        return stopwatchPage;
    }
//----------------------------------------------------------------------------
   
//----------------------------------------------------------------------------
//---------------------Some helper functions---------------------------------
let addPageHeading=(page, pageHeading)=>{
    let h2=$CE("h2");
    setClass(h2, 'page-heading');        
    h2.innerText=pageHeading;
    $APC(page, h2);
    return page;
}

let addBottomDiv=()=>{
    let bottomDiv=$CE('div');
    setClass(bottomDiv, 'bottom-div');
    return bottomDiv;
}
let addCenterBtn=(bottomDiv, btnTxt)=>{
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
        addBtn.style.margin="0 auto";       
    }  else{
        console.log("sent txt not identified");
        return false;
    }   
    $APC(bottomDiv, addBtn);
    return addBtn;
}

let addTimer=()=>{
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
let addManyBtn=(bottomDiv, ...items)=>{
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

let addTimeDisplay=()=>{
    let div=$CE("div");
    setClass(div, "circle-div"); 
    let p=$CE('p');
    p.innerHTML='<span class="big-digit">0</span><span class="digit">00</span>';
    $APC(div, p);
    return div;
}