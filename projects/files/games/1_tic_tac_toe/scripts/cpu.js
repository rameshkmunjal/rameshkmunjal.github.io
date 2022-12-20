'use strict';
import {arrList} from './constants.js';
import {$GEBC, $QS } from './util.js';
import {
    changeTurn, 
    fillBlankTile, 
    showNextTurn,
    getIndexesInOneArray,
    testWinCombo,
    resetGameHandler,
    showMessage
} from './helper.js';

//At start - turn is of 'x'
let roundNumber=0;
let firstTurnThisRound= roundNumber % 2 === 0 ? 'x' : 'o';
let turn=firstTurnThisRound;


//refresh button grabbed and added event listener
let refreshBtn=$QS('.refresh-btn-div img');
refreshBtn.addEventListener('click', resetGameHandler);

playGame(firstTurnThisRound);

//function to run the game
function playGame(turn){
    console.log("round : ", roundNumber);
    console.log("turn : ", turn);
    let tiles=$GEBC('.blank');
    if(turn==='x'){
        for(let i=0; i < tiles.length; i++){
            tiles[i].onclick=(e)=>clickHandler(e);
        } 
    }else if(turn==='o'){
        autoFillZero();
    }else{
        return false;
    }
}

//function to mark X in a box
function clickHandler(e){
    //console.log("clickHandler called");
    e.preventDefault();
    let tile=e.target; 
    //console.log(tile);   
    tile.classList.remove('blank'); //remove blank class so it cannot be clicked further

    fillBlankTile(turn, tile);        
    //turnIndicator at top nav will show next turn belongs to X or O
    showNextTurn(turn);    
    let nextStep=testWinCombo(turn, getIndexesInOneArray(turn));
    //console.log(nextStep);
    if(nextStep.shudStop){
        showMessage(nextStep.message);
        roundNumber++;
        firstTurnThisRound= roundNumber % 2 === 0 ? 'x' : 'o';
        turn=firstTurnThisRound;
    } else {
        turn=changeTurn(turn);
        //console.log(turn);
        playGame(turn);
    }        
}

//function to auto fill O in a random box
function autoFillZero(){    
    setTimeout(markZero, 1000);
}

//function to mark O in a box
function markZero(){
    let tile=chooseIndex();// will choose random box 
    if(tile !== undefined){
            tile.classList.remove('blank'); //remove blank class so it cannot be clicked further
        fillBlankTile(turn, tile);
        showNextTurn(turn);
        let nextStep=testWinCombo(turn, getIndexesInOneArray(turn));
        //console.log(nextStep);
        if(nextStep.shudStop){
            showMessage(nextStep.message);
            roundNumber++;
            firstTurnThisRound= roundNumber % 2 === 0 ? 'x' : 'o';
            turn=firstTurnThisRound;
        } else {
            turn=changeTurn(turn);
            playGame(turn);
        } 
    }   
}

//function to choose random box for zero filling 
function chooseIndex(){
    let chosenTile=undefined;
    let tiles=$GEBC('.tile');
    let crossTilesArr=[]; 
    tiles.forEach((t, index)=>{
        if(t.classList.contains('cross')){
            crossTilesArr.push(index);
        }        
    });
    let blankTiles=$GEBC('.blank');   
    let objArr=[];

    for(let arr of arrList ){
        let obj={
            crossCount:0,
            blankCount:0,
            valueForBlank:undefined,
            arr:arr
        }
       objArr=getObjArray(obj, objArr, arr, crossTilesArr, tiles);
       //console.log(objArr);
    }    
    chosenTile=getChosenTile(objArr, blankTiles, tiles);
    return chosenTile;
}
//function to create an array of objects
// each object has count of blank tiles , crossTiles count and 
//index of tile that can be filled
function getObjArray(obj, newArr, arr, tilesArr, tiles){
    for(let i=0; i<arr.length; i++){
        if(tilesArr.indexOf(arr[i]) !== -1){
            obj.crossCount++;
        }else if(tiles[arr[i]].classList.contains('blank')){
            obj.blankCount++;
            obj.valueForBlank=arr[i];
        } else {
            continue;
        }
        newArr.push(obj);
    } 
    return newArr;
}

//function to get tile which can be filled
function getChosenTile(objArr, blankTiles, tiles){
    //console.log(objArr);
    let newArr=objArr.filter(obj2=>{
        return obj2.crossCount===2 && obj2.blankCount===1 ;
    });
    
    if(newArr.length > 0){
        return tiles[newArr[0].valueForBlank];
    }
    return blankTiles[Math.floor(Math.random()*blankTiles.length)];
}


