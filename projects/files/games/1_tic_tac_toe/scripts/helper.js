import {
    TURN_INDICATOR_IMAGE_X, 
    arrList, 
    TURN_INDICATOR_IMAGE_O,
    X_IMAGE,
    O_IMAGE
} from './constants.js';
import { X_WIN_MESSAGE, O_WIN_MESSAGE, TIE_MESSAGE, RESTART_MESSAGE} from './constants.js';
import {$GEBC, $CESC, $QS, $ACP} from './util.js';

//variables for bottom message board

let xWins=0;
let oWins=0;
let ties=0;


//Two variable arrays to store index of boxes clicked
let crossIndexArr=[];//to store index of boxes clicked as X
let zeroIndexArr=[]; //to store index of boxes clicked as O

export const changeTurn=(t)=>{
    if(t==='x'){t='o';}
    else {t='x';}
    return t;
}


export const fillBlankTile=(t, tile)=>{    
    if(t==='x'){
        tile.classList.add('cross');
        tile.innerHTML=X_IMAGE;
    } else {
        tile.classList.add('zero');
        tile.innerHTML=O_IMAGE;
    }    
}

//function to show next turn
export const showNextTurn=(t)=>{
    let turnIndicator=$QS('.turn-indicator');
    if(t==='x'){
        turnIndicator.innerHTML=TURN_INDICATOR_IMAGE_O;
    } else {
        turnIndicator.innerHTML=TURN_INDICATOR_IMAGE_X;
    }    
}

//function to create array of x or o tiles
export const getIndexesInOneArray=(t)=>{
    if(t==='x'){
        return updateCrossIndexArr();
    } else {
        return updateZeroIndexArr();
    }
}

//function to storing indexes of cross tiles
function updateCrossIndexArr(){
    let arr=[];
    let crossTiles=$GEBC('.tile');
    crossTiles.forEach((tile, index)=>{
        if(tile.classList.contains('cross')){
            arr.push(index);
        }
    })
    crossIndexArr=[...new Set(arr)];
    return crossIndexArr;
}

//function to storing indexes of zero tiles
function updateZeroIndexArr(){    
    let arr=[];
    let zeroTiles=$GEBC('.tile');
    zeroTiles.forEach((tile, index)=>{
        if(tile.classList.contains('zero')){
            arr.push(index);
        }
    })
    zeroIndexArr=[...new Set(arr)];
    return zeroIndexArr;
}
//function to handler reset game click event
export const resetGameHandler=(e)=>{
    e.preventDefault();
    showMessage(RESTART_MESSAGE);
}


//function to reset game
export const resetGame=()=>{
    let tiles=$GEBC('.tile');
    tiles.forEach(tile=>{
        tile.innerHTML="";
        if(tile.classList.contains('cross')){
            tile.classList.remove('cross');
            tile.classList.add('blank');
        } 
        if(tile.classList.contains('zero')){
            tile.classList.remove('zero');
            tile.classList.add('blank');
        }

        crossIndexArr=[];
        zeroIndexArr=[];       
    })
}

//function to remove modal and reset game
function resetGameAndRemoveModal(){
    resetGame();
    removeModal();
}

//insert index position of cross into an arr and
//test against win combos if true display win message
export const testWinCombo=(t, arr)=>{
    if(t==='x'){
        if(checkWin(arr)){
            xWins++;
            let xScoreSpan=$QS('.x-score-span');
            xScoreSpan.innerText=xWins;
            return {shudStop:true, message:X_WIN_MESSAGE};     
        }
    } 

    if(t==='o') {
        if(checkWin(arr)){
            oWins++;
            let oScoreSpan=$QS('.o-score-span');
            oScoreSpan.innerText=oWins;
            return {shudStop:true, message:O_WIN_MESSAGE};     
        }
    }

    if(checkTie()){
            ties++;
            let tieScoreSpan=$QS('.tie-score-span');
            tieScoreSpan.innerText=ties;            
            return {shudStop:true, message:TIE_MESSAGE};
        } else{
            return {shudStop:false, message:null};                
        }                 
} 

//function to check win
function checkWin(indexArr){      
    for(let arr of arrList ){        
        let count=0;
        for(let i of indexArr){           
            if(arr.indexOf(i) !== -1){
                count++;  
                if(count===3){
                    return true;
                }   else {
                      continue;
                }                     
            }
        }        
    }
}
//function to check tie situation
function checkTie(){
    let numberOfBlankTiles=0;

    let tiles=$GEBC('.tile');
    tiles.forEach(tile=>{
        if(tile.classList.contains('blank')){
            numberOfBlankTiles++;
        }        
    })
    //console.log("number of blank tiles : ", numberOfBlankTiles);
    if(numberOfBlankTiles===0){
        return true;
    } else {
        return false;
    }
}


//function to show win message
export const showMessage=(msg)=>{
    let container=$QS('.game-container');
    let modal=$CESC('div', 'msg-modal');
    let className=getClassNameOfModalPara(msg);
    let p=$CESC('p', className);
    p.innerText=msg;
    $ACP(modal, p);

    let btnDiv=getButtonDiv(msg);
    //console.log(btnDiv);
    $ACP(modal, btnDiv);
    $ACP(container, modal);
}

//function to name class of modal para
function getClassNameOfModalPara(msg){
    let cn=undefined;
    if(msg===X_WIN_MESSAGE){
        cn='modal-para modal-para-x';
    } else if(msg===O_WIN_MESSAGE){
        cn='modal-para modal-para-o';
    } else if((msg===TIE_MESSAGE)||(msg===RESTART_MESSAGE)){
        cn='modal-para modal-para-tie-restart';
    } else {
        return false;
    }
    return cn;
}

//function to create button div for modal
function getButtonDiv(msg){
    let btnDiv=$CESC('div', 'btn-div');
    if(
        (msg===X_WIN_MESSAGE) || 
        (msg===O_WIN_MESSAGE) || 
        (msg===TIE_MESSAGE)
      ){
        let quitBtn=$CESC('button', 'modal-btn quit-btn'); 
        quitBtn.innerText='quit';
        quitBtn.onclick=goToIndexPage;
        let nextRoundBtn=$CESC('button', 'modal-btn next-round-btn');
        nextRoundBtn.innerText='next round';
        nextRoundBtn.onclick=resetGameAndRemoveModal;
        $ACP(btnDiv, quitBtn);
        $ACP(btnDiv, nextRoundBtn);
    } else if (msg===RESTART_MESSAGE){
        let cancelBtn=$CESC('button', 'modal-btn cancel-btn'); 
        cancelBtn.innerText='no , cancel';
        cancelBtn.onclick=removeModal;
        let restartBtn=$CESC('button', 'modal-btn restart-btn');
        restartBtn.innerText='yes , restart';
        restartBtn.onclick=resetGameAndRemoveModal;
        $ACP(btnDiv, cancelBtn);
        $ACP(btnDiv, restartBtn);
    } else {
        return false;
    }
    return btnDiv;
}

function goToIndexPage(){
    window.location.href='./index.html';
}

function removeModal(){
    let msgModal=$QS('.msg-modal');
    if(msgModal){
        msgModal.parentElement.removeChild(msgModal);
    }    
}

