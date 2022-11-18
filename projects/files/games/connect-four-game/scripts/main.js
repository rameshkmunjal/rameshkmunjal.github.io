//importing functions from other files
import { $GID, $AC, $CESC, $GE } from './util.js';
let colIndex=0;
let player1=true;
let player2=false;

let circles=document.querySelectorAll('.circle');
circles.forEach((circle, index)=>{
    circle.addEventListener('click', function(){
        colIndex=index;
        console.log(colIndex); 
        let dots=document.querySelectorAll('.dot');       

        for(let i=5; i >= 0; i--){
            let indexPosition=i*7+colIndex;
            
            if(dots[indexPosition].classList.contains('blank-dot')){
                if(player1){
                    dots[indexPosition].classList.remove('blank-dot');
                    dots[indexPosition].classList.add('red-dot');
                    checkWin("player-1");
                    player1=false;
                    player2=true;
                    i=-100;
                } else {
                    dots[indexPosition].classList.remove('blank-dot');
                    dots[indexPosition].classList.add('yellow-dot');
                    checkWin("player-2");
                    player1=true;
                    player2=false;
                    i=-100;
                }                
            }
        }        
    })
})

function checkWin(player){
    console.log(player);
    if(player==="player-1"){        
        let redDots=document.querySelectorAll('.red-dot'); 
        let dots=[];
        redDots.forEach(d=>{
            let id=parseInt(d.getAttribute('id'));
            dots.push(id);
        })   
        let matched=checkHorizontally(dots) || 
                    checkVertically(dots) ||
                    checkDiagonallyBack(dots) ||
                    checkDiagonallyForth(dots);
        if(matched) { console.log("red dots won")}               
    } else if(player==="player-2"){        
        let yellowDots=document.querySelectorAll('.yellow-dot');        
        let dots=[];
        yellowDots.forEach(d=>{
            let id=parseInt(d.getAttribute('id'));
            dots.push(id);
        })   
        let matched=checkHorizontally(dots) || 
                    checkVertically(dots) ||
                    checkDiagonallyBack(dots) ||
                    checkDiagonallyForth(dots);
        if(matched) { console.log("yellow dots won")}
    } else {
        console.log("nothing to check , return");
        return;
    }
}

function checkHorizontally(arr){    
    for(let i=0; i<arr.length; i++){
        let matchCount=0;
        console.log(arr[i]);
        if(arr.indexOf(arr[i]+1) !== -1) matchCount++;
        if(arr.indexOf(arr[i]+2) !== -1) matchCount++;
        if(arr.indexOf(arr[i]+3) !== -1) matchCount++;
        console.log(matchCount);
        if(matchCount===3){
            return true;
        }   
    }
}

function checkVertically(arr){
    for(let i=0; i<arr.length; i++){
        let matchCount=0;
        console.log(arr[i]);
        if(arr.indexOf(arr[i]+7) !== -1) matchCount++;
        if(arr.indexOf(arr[i]+14) !== -1) matchCount++;
        if(arr.indexOf(arr[i]+21) !== -1) matchCount++;
        console.log(matchCount);
        if(matchCount===3){
            return true;
        }   
    }
}


function checkDiagonallyBack(arr){
    //console.log(player, "checked horizontally");
    for(let i=0; i<arr.length; i++){
        let matchCount=0;
        console.log(arr[i]);
        if(arr.indexOf(arr[i]+6) !== -1) matchCount++;
        if(arr.indexOf(arr[i]+12) !== -1) matchCount++;
        if(arr.indexOf(arr[i]+18) !== -1) matchCount++;
        console.log(matchCount);
        if(matchCount===3){
            return true;
        }   
    }
}

function checkDiagonallyForth(arr){
    //console.log(player, "checked horizontally");
    for(let i=0; i<arr.length; i++){
        let matchCount=0;
        console.log(arr[i]);
        if(arr.indexOf(arr[i]+8) !== -1) matchCount++;
        if(arr.indexOf(arr[i]+16) !== -1) matchCount++;
        if(arr.indexOf(arr[i]+24) !== -1) matchCount++;
        console.log(matchCount);
        if(matchCount===3){
            return true;
        }   
    }
}
