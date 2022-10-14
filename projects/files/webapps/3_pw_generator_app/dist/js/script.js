/*
    - password length is chosen by user using range slider
    - options given by user by clicking checkboxes
    - generate password button is clicked to get password
    - copy icon is clicked to copy password on clipboard
*/

//grabbing range slider element by id
const rangeSlider=document.getElementById("rangeSlider");
let output=document.getElementById('output');//grabbing output h3 element by id - to show range value
let strengthLevel=document.getElementById("strength-level"); //grabbing strengthLevel div element
let copyIcon=document.getElementById('copy-icon');//grabbing copy icon
rangeSlider.addEventListener('input', changePasswordLength); //to show range value in output

//grabbing button element and adding click event
let button=document.querySelector('button');
button.addEventListener('click', generatePassword);

//selecting and deselecting checkboxes
const checkboxes=document.querySelectorAll('.checkbox');
//looping checkboxes and adding click to each of them
checkboxes.forEach(cb=>{
    cb.addEventListener('click', ()=>{selectOption(cb)});
})

//funtion - selecting deselecting checkboxes 
function selectOption(cb){    
    if(cb.classList.contains('unticked')){
        cb.classList.add('ticked');
        cb.classList.remove('unticked');
        cb.innerHTML='<img src="../assets/images/icon-check.svg" alt="check icon"  />';
        cb.style.backgroundColor="#50ffb1";
        //console.log(cb);
    } else if(cb.classList.contains('ticked')){
        cb.classList.add('unticked');
        cb.classList.remove('ticked');
        cb.style.backgroundColor="#fff";
        cb.innerHTML='';        
        //console.log(cb);
    } else {
        return;
    }
}
//function - to change password length as per range slider input
function changePasswordLength(){
    output.innerHTML=rangeSlider.value;
}

//main function - to create password
function generatePassword(e){
    e.preventDefault();
    //getting password length opted by user    
    let pwlen_element=document.getElementById('output');
    let pwLength=parseInt(pwlen_element.innerText); //extracting value from element
    
    //get options given by user
    let optionsArr=getOptionsGivenByUser();
    let passwordStrength=findPasswordStrength(optionsArr.length);
    strengthLevel.innerText=passwordStrength;
    addStrengthBars(optionsArr.length);
    //console.log(passwordStrength);
    let arr1=includeValuesAsPerOptions(optionsArr.length, optionsArr);
    let arr2=randomiseValuesOutOfOptions((pwLength-optionsArr.length), optionsArr);
    tempArr=arr1.concat(arr2);
    //console.log(tempArr);
    password=tempArr.join('');    
    console.log(password);
    let passwordText=document.getElementById('password-text');
    passwordText.innerText=password;
    let copyIcon=document.getElementById('copy-icon');
    copyIcon.addEventListener('click', function(){
        navigator.clipboard.writeText(password);
    })
}

//function to get options given by user - by clicking checkboxes

function getOptionsGivenByUser(){
    const checkboxes=document.querySelectorAll('.ticked'); //all checkboxes grabbed by cloass
    let arr=[];
    checkboxes.forEach(cb=>{
            let id=cb.getAttribute('id');
        
            if(id==="number") arr.push(id);
                else if(id==="uppercase") arr.push(id);
                    else if(id==="lowercase") arr.push(id);
                        else if(id==="symbol") arr.push(id);
                           else  return false;                        
             
    })
    return arr
}

//function to find password strenght - basis of options by user
function findPasswordStrength(num){
    //console.log(num);
    if(num===1){
        return 'Very Weak';
    } else if(num===2){
        return 'Weak';
    } else if(num===3){
        return 'Medium';
    } else if(num===4){
        return 'Strong';
    } else {
        return;
    }
}

//function to get ascii value of characters - one from each options chosen 
function includeValuesAsPerOptions(terminalValue, arr){    
    let newArr=[];
    while(newArr.length < terminalValue){ 
        for(let i=0; i<arr.length; i++){
            let term=arr[i];
            let asciiValue=getAsciiValueOfRandomCharacter(term);//random ascii value
            newArr.push(String.fromCharCode(asciiValue));//converting into character derived ascii values
        }        
    }
    return newArr;
}
//function - to get random ascii value of a selected type
function getAsciiValueOfRandomCharacter(term){
    let asciiValue=undefined;
    if(term==="number"){
        asciiValue=findNumberValueRandomly();                   
    } else if(term==="uppercase"){
        asciiValue=findUppercaseValueRandomly();           
    } else if(term==="lowercase"){            
        asciiValue=findLowercaseValueRandomly();
    }else if(term==="symbol"){
        asciiValue=findSymbolValueRandomly();
    } else {
        return false;
    }
    return asciiValue;
}

//---------------------helper functions---------------------------------
//function to get ascii value of characters 
function randomiseValuesOutOfOptions(terminalValue, arr){    
    let newArr=[];
    while(newArr.length < terminalValue){
        let term=pickRandomly(arr);
        let asciiValue=getAsciiValueOfRandomCharacter(term);
        newArr.push(String.fromCharCode(asciiValue));
    }
    return newArr;
}

//function - to pick randomly type of character - out of options
function pickRandomly(arr){
    let index=Math.floor(Math.random()*arr.length);
    return arr[index];
}

//helper function - for numbers
function findNumberValueRandomly(){
    let min=48;
    let max=57;
    let asciiValue=findRandomCharacter(max, min);
    return asciiValue;
}
//helper function - for uppercase 
function findUppercaseValueRandomly(){
    let min=65;
    let max=90;
    let asciiValue=findRandomCharacter(max, min);
    return asciiValue;
}
//helper function - for lowercase 
function findLowercaseValueRandomly(){
    let min=97;
    let max=122;
    let asciiValue=findRandomCharacter(max, min);
    return asciiValue;
}
//helper function - for symbols
function findSymbolValueRandomly(){
    let min=33;
    let max=47;
    let asciiValue=findRandomCharacter(max, min);
    return asciiValue;
}
//helper function - 2 
function findRandomCharacter(max, min){
    return Math.floor(Math.random()*(max-min))+min;
}

//-----------------------password strength related function ----------------------
//function to add strength bars - 
//on basis of type of characters opted 
// by clicking checkboxes

function addStrengthBars(num){
    let strengthBarDiv=document.getElementById('strength-bar-div');
    strengthBarDiv.innerHTML='';
    let bar1=document.createElement('div');
    let bar2=document.createElement('div');
    let bar3=document.createElement('div');
    let bar4=document.createElement('div');
    addCommonClassToBars(bar1, bar2, bar3, bar4);
    addStrengthBarClass(num, bar1, bar2, bar3, bar4)
    strengthBarDiv.appendChild(bar1);
    strengthBarDiv.appendChild(bar2);
    strengthBarDiv.appendChild(bar3);
    strengthBarDiv.appendChild(bar4);    
}

//function to create bars by styling
function addCommonClassToBars(b1, b2, b3, b4){
    b1.classList.add('bar');
    b2.classList.add('bar');
    b3.classList.add('bar');
    b4.classList.add('bar');
}
//function - to add styling and showing strength of password 
function addStrengthBarClass(num, b1, b2, b3, b4){
    if(num===1){
        b1.classList.add('very-weak-bar');
    } else if(num===2){
        b1.classList.add('weak-bar');
        b2.classList.add('weak-bar');
    } if(num===3){
        b1.classList.add('medium-bar');
        b2.classList.add('medium-bar');
        b3.classList.add('medium-bar');
    } else if(num===4){
        b1.classList.add('strength-bar');
        b2.classList.add('strength-bar');
        b3.classList.add('strength-bar');
        b4.classList.add('strength-bar');
    } else{
        return;
    }
}

