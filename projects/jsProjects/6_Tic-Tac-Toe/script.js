let arrList=[
    [0,1,2],  [3,4,5], [6,7,8],
    [0, 3, 6],[1, 4, 7], [2, 5, 8], 
    [2, 4, 6], [0,4,8]
     
]; //horizontal , vertical and diagonal
let crossIndexArr=[];
let zeroIndexArr=[];

let boxes=document.querySelectorAll('.box');
boxes.forEach((box, index)=>{
    box.addEventListener('click', markCross);
})

function markCross(e){
    e.preventDefault();
    let box=e.target;
    
    box.classList.remove('empty');
    box.innerText="X";
    box.classList.add('cross');    
    updateCrossIndexArr(); //insert index position of cross into an arr

    let hasWon=checkWin();
    if(!hasWon){
        setTimeout(autoFillZero, 1000); 
    } else {
        console.log(hasWon);
        alert("You Won");
    }     
}

function updateCrossIndexArr(){
    let boxes=document.querySelectorAll('.box');
    let arr=[];
    boxes.forEach((box, index)=>{
        if(box.classList.contains('cross')){
            arr.push(index);
        }
    })  
    crossIndexArr=[...new Set(arr)] ; 
}

function checkWin(){ 
    let indexArr=crossIndexArr;   
    for(let arr of arrList ){        
        let count=0;
        for(let i of indexArr){           
            if(arr.indexOf(i) !== -1){
                count++;  
                console.log(arr);
                console.log(count);  
                if(count===3){
                    return true;
                }   else {
                      continue;
                }                     
            }
        }

        
    }
}
//-----------------------------------------------------------------------------------
function autoFillZero(){
    let boxes=document.querySelectorAll(".box");
    let randomNumber=Math.floor(Math.random()*boxes.length);
    boxes.forEach((box, index)=>{
        if(box.classList.contains('empty')){
            if(index===randomNumber){
                box.innerText="O";
                box.classList.add("zero");
                box.classList.remove("empty");
                
                updateZeroIndexArr();
                let haveLost=checkLoss();
                
                if(haveLost){
                    
                    alert("You Lost");
                }  
            }
        }         
    })
}
function updateZeroIndexArr(){
    let boxes=document.querySelectorAll('.box');
    let arr=[];
    boxes.forEach((box, index)=>{
        if(box.classList.contains('zero')){
            arr.push(index);
        }
    })  
    zeroIndexArr=[...new Set(arr)] ;    
}

function checkLoss(){    
    let indexArr=zeroIndexArr;   
    for(let arr of arrList ){        
        let count=0;
        for(let i of indexArr){           
            if(arr.indexOf(i) !== -1){
                count++;  
                console.log(arr);
                console.log(count);  
                if(count===3){
                    return true;
                }   else {
                      continue;
                }                     
            }
        }

        
    }
}

