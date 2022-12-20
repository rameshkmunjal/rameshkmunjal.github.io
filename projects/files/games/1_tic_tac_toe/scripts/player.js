'use strict';

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

playGame();

function playGame(){
    let tiles=$GEBC('.blank');
    if(tiles && tiles.length > 0){
        for(let i=0; i < tiles.length; i++){
            tiles[i].onclick=(e)=>clickHandler(e);
        } 
    }
    
}

//function to mark X in a box
function clickHandler(e){
    e.preventDefault();
    let tile=e.target;   
    tile.classList.remove('blank'); //remove blank class so it cannot be clicked further

    fillBlankTile(turn, tile);        
    //turnIndicator at top nav will show next turn belongs to X or O
    showNextTurn(turn);    
    let nextStep=testWinCombo(turn, getIndexesInOneArray(turn));
    if(nextStep.shudStop){
        showMessage(nextStep.message);
        roundNumber++;
        firstTurnThisRound= roundNumber % 2 === 0 ? 'x' : 'o';
        turn=firstTurnThisRound;
    } else {
        turn=changeTurn(turn);
        playGame();
    }        
}




