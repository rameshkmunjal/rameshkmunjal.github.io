'use strict';
import {
    TURN_INDICATOR_IMAGE_X, 
    arrList, 
    TURN_INDICATOR_IMAGE_O,
    X_IMAGE,
    O_IMAGE
} from './constants.js';
import {$GEBC, $CESC, $CE, $QS, $ACP} from './util.js';

//variables for bottom message board
let xWins=0;
let oWins=0;
let ties=0; 


//Two variable arrays to store index of boxes clicked
let crossIndexArr=[];//to store index of boxes clicked as X
let zeroIndexArr=[]; //to store index of boxes clicked as O



let turn='x';

let refreshBtn=$QS('.refresh-btn-div img');
refreshBtn.addEventListener('click', resetGame);

playP2Cgame();

//function to run the game
function playP2Cgame(){
    let tiles=$GEBC('.blank');
    if(turn==='x'){
        for(let i=0; i < tiles.length; i++){
            tiles[i].onclick=(e)=>markCross(e);
        } 
    }else if(turn==='o'){
        autoFillZero();
    }else{
        return false;
    }
}

//function to mark X in a box
function markCross(e){
    e.preventDefault();
    let tile=e.target;
    tile.innerHTML=X_IMAGE;
    tile.classList.remove('blank'); //remove blank class so it cannot be clicked further
    tile.classList.add('cross');

    //turnIndicator at top nav will show next turn belongs to X or O
    showNextTurn(TURN_INDICATOR_IMAGE_O);

    //insert index position of cross into an arr and
    //test against win combos if true display win message
    let newArr=updateCrossIndexArr(); 
    
    if(checkWin(newArr)){
        xWins++;
        let xScoreSpan=$QS('.x-score-span');
        xScoreSpan.innerText=xWins;
        showMessage("X has Won");     
    }else{
        if(checkTie()){
            ties++;
            let tieScoreSpan=$QS('.tie-score-span');
            tieScoreSpan.innerText=ties;
            showMessage("Game is Tie - Restart");
        } else{
            turn='o';
            playP2Cgame();
        }
    }              
}

//function to auto fill O in a random box
function autoFillZero(){    
    setTimeout(markZero, 1000);
}

//function to mark O in a box
function markZero(){
    let tile=chooseIndex();// will choose random box
    
    tile.innerHTML=O_IMAGE;
    tile.classList.remove('blank');
    tile.classList.add('zero'); 

    showNextTurn(TURN_INDICATOR_IMAGE_X);
    
    let newArr=updateZeroIndexArr();

    //testing win and tie situation and carrying game forward
    if(checkWin(newArr)){
        oWins++;
        let oScoreSpan=$QS('.o-score-span');
        oScoreSpan.innerText=oWins;
        showMessage("O has Won");
    } else {
        if(checkTie()){
            ties++;
            let tieScoreSpan=$QS('.tie-score-span');
            tieScoreSpan.innerText=ties;
            showMessage("Game is Tie - Restart");
        } else{
            turn='x';
            playP2Cgame();
        }        
    }      
}

//function to show next turn
function showNextTurn(img){
    let turnIndicator=$QS('.turn-indicator');
    turnIndicator.innerHTML=img;
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
function updateZeroIndexArr(i){    
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

//function to choose random box for zero filling 
function chooseIndex(){
    let index=undefined;
    let chosenTile=undefined;
    let tiles=$GEBC('.tile');
    let crossTiles=$GEBC('.cross');
    console.log(crossTiles);
    let crossTilesArr=[]; 
    tiles.forEach((t, index)=>{
        if(t.classList.contains('cross')){
            crossTilesArr.push(index);
        }        
    });
    console.log(crossTilesArr);
    let blankTiles=$GEBC('.blank');   
    let objArr=[];

    for(let arr of arrList ){
        let obj={
            crossCount:0,
            blankCount:0,
            valueForBlank:undefined,
            arr:arr
        }
        for(let i=0; i<arr.length; i++){
            if(crossTilesArr.indexOf(arr[i]) !== -1){
                obj.crossCount++;
            }else {
                //console.log("not in cross count : " , arr[i]);
                if(tiles[arr[i]].classList.contains('blank')){                    
                    obj.blankCount++;
                    obj.valueForBlank=arr[i];
                    //console.log("combo arr value", arr[i], "obj : ", obj);
                } else {
                    continue;
                }
            } 
        } 
        //console.log("obj", obj);
        objArr.push(obj);
    }
    
    for(let i=0; i<objArr.length; i++){
        let obj2=objArr[i];
            if(obj2.crossCount===2 && obj2.blankCount===1){
                index=obj2.valueForBlank;                
            } else {
                continue;
            }        
    }
   // console.log("index", index);
    if(index===undefined || index===null){
        index= Math.floor(Math.random()*blankTiles.length);
        chosenTile=blankTiles[index];
    } else {
        chosenTile=tiles[index];
    }
    
    return chosenTile;
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

    if(numberOfBlankTiles===0){
        return true;
    } else {
        return false;
    }
}
//function to show win message
function showMessage(msg){
    let container=$QS('.game-container');
    let modal=$CESC('div', 'msg-modal');
    
    let p=$CE('p');
    p.innerText=msg;
    $ACP(modal, p);
    let btn=$CESC('button', 'reset-btn');
    btn.innerText='Restart';
    btn.onclick=resetGameAndRemoveModal;
    $ACP(modal, btn);
    $ACP(container, modal);
}



//function to reset game
function resetGame(){
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
    let turnIndicator=$QS('.turn-indicator');
    turnIndicator.innerHTML=TURN_INDICATOR_IMAGE_O;

}
//function to remove modal and reset game
function resetGameAndRemoveModal(){
    resetGame();
    let msgModal=$QS('.msg-modal');
    msgModal.parentElement.removeChild(msgModal);
}


    

