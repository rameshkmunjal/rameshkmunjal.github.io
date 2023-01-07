//importing utility functions */
import { $GEBC, $QS } from "./util.js";
/* declaring global variables */
let currentOperand='';
let previousOperand='';
let operation='';
/* grabbing elements by class selectors */
const numberButtons=$GEBC('.num-key');
const deleteButton=$QS('.del-key');
const allClearButton=$QS('.reset-key');
const equalsButton=$QS('.equals-key');
const operationButtons=$GEBC('.op-key');
const previousOperandTextElement=$QS('.previous-operand');
const currentOperandTextElement=$QS('.current-operand');
/* adding eventlisteners */
numberButtons.forEach(button=>{
    button.addEventListener('click', ()=>{
        appendNumber(button.innerText);
    })
})
operationButtons.forEach(button=>{
    button.addEventListener('click', ()=>{
        chooseOperation(button.innerText);
        updateDisplay();
    })
})
equalsButton.addEventListener('click', ()=>{
    doComputation();
    updateDisplay();
})
allClearButton.addEventListener('click', ()=>{
    clearScreen();
    updateDisplay();
})

deleteButton.addEventListener('click', ()=>{
    deleteInput();
    updateDisplay();
}) 
/***************functions inside eventlisteners defined*****************/
/* function - to append number - when number key is pressed */
function appendNumber(number){
    if(number==='.' && currentOperand.includes('.')) return;
    currentOperand=currentOperand.toString()+number.toString();
    
    getDisplayNumber(currentOperand);
    updateDisplay();
}

//function to convert number into string while displaying
function getDisplayNumber(number){
    const stringNumber = number.toString(); //complete number turned into string
    const integerDigits = parseFloat(stringNumber.split('.')[0]); //integer part separated
    const decimalDigits = stringNumber.split('.')[1];//decimal part separated
    let integerDisplay; //variable to store number to be displayed in the end
    //if integerDigits is not a number - display integer blank
        if (isNaN(integerDigits)) {
          integerDisplay = '';
        } else { // else convert number into string
          integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        //if decimalDigits is some value join it with integerDisplay
        if (decimalDigits != null) {
          return `${integerDisplay}.${decimalDigits}`
        } else { //else show integerDisplay as it is
          return integerDisplay
        }
}

//function to put last input into currentOperandTextElement
function updateDisplay(){
    currentOperandTextElement.innerText=
            getDisplayNumber(currentOperand);
    //if some operation key is pressed - change place of currentInput to previousInput
    if(operation != null){
        previousOperandTextElement.innerText=`${getDisplayNumber(previousOperand)} ${operation}`;
    } else { //else do nothing 
        previousOperandTextElement.innerText='';
    }    
}

//function to carry out tasks - when a operator key is pressed
function chooseOperation(op){
    if(currentOperand === '') return; //if no number exists in currentOperand do nothing just return
    if(previousOperand !== ''){ // if some number 
       doComputation();
    }
    operation=op;
    previousOperand=currentOperand;
    currentOperand='';
}
/* function - to compute - when a operaion key is pressed */
function doComputation(){
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if(isNaN(prev) || isNaN(current)) return;
        switch(operation){
            case '+':
                computation=prev + current;
                break;
            case '-':
                computation=prev - current;
                break;
            case 'x':
                computation=prev * current;
                break;
            case '/':
                computation= prev / current;
                break;
            default :
                return;
        }

        currentOperand=computation;
        operation=undefined;
        previousOperand='';        
}
/* function - to clear screen */
function clearScreen(){
    currentOperand='';
    previousOperand='';
    operation=undefined;
}
/* function - to delete last input made */
function deleteInput(){
    currentOperand=currentOperand.toString().slice(0 , -1);
}