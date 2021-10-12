let boxes=document.querySelectorAll('.box');
boxes.forEach((box, index)=>{
    box.addEventListener('click', markCross);
})

function markCross(e){
    e.preventDefault();
    let box=e.target;
    
    box.classList.remove('box');
    box.innerText="X";
    box.classList.add('cross');
    console.log(box);
    setTimeout(autoFillZero, 1000);  
}

function autoFillZero(){
    let boxes=document.querySelectorAll(".box");
    let randomNumber=Math.floor(Math.random()*boxes.length);
    boxes.forEach((box, index)=>{
        if(index===randomNumber){
            box.innerText="O";
            box.classList.add("zero");
            box.classList.remove("box");
            console.log(box);
        }
    })
}



