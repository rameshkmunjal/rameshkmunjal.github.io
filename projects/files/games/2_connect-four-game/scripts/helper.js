import {$GEBC, $QS} from './util.js';

/**************************************************************/
/* functions to check if any set of 
    color dots matches win combo :    
        1. As per turn get all elements of a color
        2. create an array of their ids
        3. loop through these ids and test against win combo
    */
/**************************************************************/
//function to check win and if return true or false message 
export const checkWin=(turn)=>{   
    let eleArr=getElementsArray(turn);
    let dots=getArrayOfIds(eleArr);        
    let matched=testWin(dots);
    return matched;
}
//function to get all elements of a color in an array
function getElementsArray(turn){
    let arr=[];
    if(turn==="red"){        
        arr=$GEBC('.red-dot'); 
    }else if (turn==="yellow"){                
        arr=$GEBC('.yellow-dot'); 
    } else {
        arr=[];
    }
    return arr;
}

//function to get array of ids of all elements of a color
function getArrayOfIds(classArray){
    let temp=[];
    classArray.forEach(ele=>{
        let id=parseInt(ele.getAttribute('id'));
        temp.push(id);
    }) 
    return temp;
}

//function to call a function and return value of checkWinCombo 
function testWin(dots){
    return  checkWinCombo(dots, 1) || //horizontal test
            checkWinCombo(dots, 7) || //vetical test
            checkWinCombo(dots, 6) || //diagonal back test
            checkWinCombo(dots, 8) ;    ////diagonal forth test
}

//function to check against win combo
function checkWinCombo(arr, num){
    for(let i=0; i<arr.length; i++){
        let matchCount=0;
        if(arr.indexOf(arr[i]+1 * num) !== -1) matchCount++;
        if(arr.indexOf(arr[i]+2 * num) !== -1) matchCount++;
        if(arr.indexOf(arr[i]+3 * num) !== -1) matchCount++;
        if(matchCount===3){
            return true;
        } 
    }
}


/***********************************************/
//function to fill dot with color img
export const fillBlankDot=(ele, turn)=>{
    if(turn==="red"){
        ele.classList.add('red-dot');
    }else if(turn==="yellow"){        
        ele.classList.add('yellow-dot');
    } else {
        return;
    }
}

/****************************************/
/* function to change turn of players */
/* when game is continued */
/****************************************/
//function to change turn - red to yellow or vice versa
export const changeTurn=(t)=>{
    if(t==="red"){
        t="yellow";
    } else{
        t="red";
    }
    return t;
}
//function to display win message on message board
export const displayMessage=(turn)=>{
    let msg="";
    if(turn==="red"){
        msg="player-1 wins";
    } else if(turn==="yellow"){
        msg="player-2 wins";
    } else {
        msg="";
    }
    //console.log(msg);
    let winMsgDiv=$QS('.win-msg-div');
    winMsgDiv.innerText=msg;   
}

/* ****************************/
/* Changing BG color of message board as per turn */
/*******************************/
export const changeMessageBoardBG=(turn)=>{
    let msgBoard=$QS('.message-board');
    if(turn === 'red'){
        msgBoard.style.backgroundColor='var(--clr-red)';
    } else if(turn==='yellow'){
        msgBoard.style.backgroundColor='var(--clr-yellow)';
    } else{
        msgBoard.style.backgroundColor='var(--clr-white)';
    }
}

export const setCirclesClass=(turn)=>{
    console.log(turn);
    let previousTurn= turn==='red' ? 'yellow' : 'red';
    console.log(previousTurn);
    let circles=$GEBC('.circle');
    //console.log(circles);
    circles.forEach(circle=>{
        if(circle.classList.contains(`circle-bg-${previousTurn}`)){
            circle.classList.remove(`circle-bg-${previousTurn}`);
            circle.classList.add(`circle-bg-${turn}`);
        } else {
            circle.classList.add(`circle-bg-${turn}`);
        }
    })    
}