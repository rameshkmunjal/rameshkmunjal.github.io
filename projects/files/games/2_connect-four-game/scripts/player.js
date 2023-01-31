'use strict';
//importing some utility functions 
import {$GEBC, $CESC, $CE, $QS, $ACP, $GID} from './util.js';
import {
    checkWin, 
    fillBlankDot, 
    changeTurn,
    displayMessage,
    changeMessageBoardBG,
    setCirclesClass
} from './helper.js';

//variable - to keep game going
//when false - game goes , when true - game stops
let stopGame=false;
let gamePaused=false;

//variables for bottom message board and two score boards
let redScoreBoard=$QS('#player-1-score');
let yellowScoreBoard=$QS('#player-2-score');
let redWinsCount=0;
let yellowWinsCount=0;
//variable to keep count in countdown timer
let count=30;
let gameCount=0;

//variable to keep rotation between red and yellow
let turn= 'red';

//reset btn when clicked game resets 
// preserving earlier state of score
let restartBtn=$QS('.restart-btn');
restartBtn.onclick=showModal;

/* initialisation of Game */

//function initialising state like score and turn
initialiseScoreBoards();
addCirclesToHoverBar();
//function to initialize scoreboards
function initialiseScoreBoards(){ 
    redScoreBoard.innerText=redWinsCount; 
    yellowScoreBoard.innerText=yellowWinsCount;
}

//starting game
startGame();

//function to start game - only if stopGame is false
function startGame(){
    if(stopGame===false){
        setTimeout(playGame, 2000);
    }    
}

//function to play game
function playGame(){
    console.log(stopGame);
    
    if(!stopGame){
        changeMessageBoardBG(turn);
        setCirclesClass(turn);   
        setCountdownTimer();
        
        let circles=$GEBC('.circle');
        for(let i=0; i < circles.length; i++){
            console.log("click circle");
            circles[i].onclick=(e)=>clickHandler(e, i);           
        } 
    }  else {
        return false;
    }       
}

//function to handle click event
function clickHandler(e, i){
    e.preventDefault();
    stopTimer();
    let colIndex=i;//variable to denote column number clicked
    let dots=$GEBC('.dot'); //grabbing all dots of board       

    for(let i=5; i >= 0; i--){
        let index=i*7+colIndex;            
        if(dots[index].classList.contains('blank-dot')){

            dots[index].classList.remove('blank-dot');
            fillBlankDot(dots[index], turn);
            let matched=checkWin(turn);//checking win after current move
            //if matched is true
            if(matched){
                displayScore();
                displayMessage(turn); 
                stopGame=true;
                checkGame(stopGame, turn); 
                removeCirclesFromHoverBar();               
            } //else change turn and play game 
            else {
                turn=changeTurn(turn);
                count=30;
                stopGame=false;
                checkGame(stopGame);
            }

            i=-100; //counter set to exit loop            
        }
    }   
}


/************************************/
   /*countdown related functions*/
/************************************/
//function to start countdown
let setCountdownTimer=function(){
    if(!stopGame && !gamePaused){
        setTimeout(displayTime, 2000);
    }    
}  

//function to display time - countdown 
function displayTime(){       
    let timeDisplayBoard=$QS('.time-display-board');
    
    if(count <= 0){
        stopTimer();       
        timeDisplayBoard.innerText=`${count} S`;
    } else {
        if(stopGame){
            let btn=$CESC('button', 'play-again-btn');
            btn.innerText="Play Again";
            btn.onclick=resetGame;
            timeDisplayBoard.innerHTML="";
            $ACP(timeDisplayBoard, btn);
        } else{
            timeDisplayBoard.innerText=`${count} S`;
            count--;
            setCountdownTimer(); 
        }               
    }           
}
/************************************/
   /*functions to check - Game is won by anyone*/
   /* if not - to continue */
   /* if yes - 
        1. stop timer, 
        2. show message modal , 
        3. disable clicks 
        4. show winner score
    */
/************************************/
// function to check game - stop or continue
function checkGame(stopFlag, t){
    let player=t==='red' ? 'Player-1' : 'Player-2';
    if(stopFlag){        
        stopTimer();
        showWinMessage(player);
        gameCount++;
        turn= gameCount % 2 === 0 ? 'red' : 'yellow';
        playGame();
    } else {
        playGame();
    }
}



//function to stop timer - when game is stopped or count down comes to 0 
function stopTimer(){
    clearTimeout(setCountdownTimer);
}

//function to display modal of Game stop message
function showModal(){
    gamePaused=true;
    let container=$QS('.gameDisplayDiv');
    let modal=$CESC('div', 'msg-modal');
    
    let h2=$CESC('h2', 'modal-heading');
    h2.innerText='pause';
    //continue game , restart, quit game
    let continueBtn=$CESC('button', 'modal-btn continue-btn');
    continueBtn.innerText='continue game';
    continueBtn.onclick=continueGame;

    let resetBtn=$CESC('button', 'modal-btn reset-btn');
    resetBtn.innerText='Restart';
    resetBtn.onclick=resetGame;

    let quitBtn=$CESC('button', 'modal-btn quit-btn');
    quitBtn.innerText='quit btn';
    quitBtn.onclick=goToHomePage;
    
    $ACP(modal, h2);
    $ACP(modal, continueBtn);
    $ACP(modal, resetBtn);
    $ACP(modal, quitBtn);

    $ACP(container, modal);
}

//function to display score of winner
function displayScore(){
    if(turn==='red'){
        redWinsCount++;
        redScoreBoard.innerText=redWinsCount;
    } else if(turn==='yellow'){
        yellowWinsCount++;
        yellowScoreBoard.innerText=yellowWinsCount;
    } else {
        return false;
    }    
}

/***********************************/
/*When Game is reset */
//clicking reset or restart button
/***********************************/
//function to continue geme
function continueGame(){
    removeModal();

    if(stopGame){
        addCirclesToHoverBar();
        //clearing all dots of game board
        clearGameBoard();
        clearMessageBoard();    
        changeMessageBoardBG("none"); 
        stopGame=false;
        count=30;
        startGame();
    }

    if(gamePaused){
        gamePaused=false;
        playGame();
    }
}

function removeModal(){
    let msgModal=$QS('.msg-modal');
    //remove modal if there is any
    if(msgModal){
        msgModal.parentElement.removeChild(msgModal);
    } else {
        return;
    }
}

function clearGameBoard(){
    let dots=$GEBC('.dot');
    dots.forEach(dot=>{
        dot.innerHTML="";
        if(dot.classList.contains('red-dot')){
            dot.classList.remove('red-dot');
            dot.classList.add('blank-dot');
        } 
        if(dot.classList.contains('yellow-dot')){
            dot.classList.remove('yellow-dot');
            dot.classList.add('blank-dot');
        }     
    })  
}

function clearMessageBoard(){
    //clearing message board div
    let playerName=$QS('.player-name');
    playerName.innerText="";
    let winMsgDiv=$QS('.win-msg-div');
    winMsgDiv.innerText="";
    let timeDisplayBoard=$QS('.time-display-board');
    timeDisplayBoard.innerHTML="";
}
//function to reset game
function resetGame(){
    console.log(gamePaused);
    gamePaused=false;
    console.log(gamePaused);
    if(!gamePaused && !stopGame){
        removeModal();       
        playGame();
    } else{
        removeModal();
        addCirclesToHoverBar();
        //clearing all dots of game board
        clearGameBoard();
        clearMessageBoard();    
        changeMessageBoardBG("none"); 
        stopGame=false;
        count=30;
        startGame();
    }    
}

//function to go to home page
function goToHomePage(){
    window.location.href='./index.html';
}

//function to show win message
function showWinMessage(player){
    let playerName=$QS('.player-name');
    let winMsgDiv=$QS('.win-msg-div');
    playerName.innerText=player;
    winMsgDiv.innerText='Wins';
}

//----------------------------------------
function addCirclesToHoverBar(){
    let hoverBar=$GID('hover-bar');
    for(let i=0; i<7; i++){
        let circleDiv=$CESC('div', 'circle');
        $ACP(hoverBar, circleDiv);
    }
}


function removeCirclesFromHoverBar(){
    let hoverBar=$GID('hover-bar');
    let circles=$GEBC('.circle');
    let len=circles.length;
    for(let i=0; i<len; i++){
        hoverBar.firstChild.remove();
    }
    
}

