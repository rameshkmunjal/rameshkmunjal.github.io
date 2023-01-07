import { $GEBC, $QS } from "./util.js";
let themeLinks=$GEBC('.theme-numbers p');
themeLinks.forEach((link, index)=>{
    let num=index+1;
    link.onclick=function(){
        let body=$QS('body');
        changeElementTheme(body, 'body-theme', num);
        let header=$QS('.header');
        changeElementTheme(header, 'header-theme', num);
        let dotsDiv=$QS('.theme-dots-div');
        changeElementTheme(dotsDiv, 'dots-div-theme', num);
        const dots=$GEBC('.theme-dot');
        changeDotsTheme(dots,'theme-dot', num);
        let screen=$QS('.screen-div');
        changeElementTheme(screen, 'screen-theme', num);
        let keypad=$QS('.keypad-div'); 
        changeElementTheme(keypad, 'keypad-theme', num);
        let numKeys=$GEBC('.num-key');
        let opKeys=$GEBC('.op-key');
        let keys=[...numKeys, ...opKeys];
        changeKeysTheme(keys,'key-theme', num);
        let delKey=$QS('.del-key');
        changeElementTheme(delKey, 'reset-del-theme', num);
        let resetKey=$QS('.reset-key');
        changeElementTheme(resetKey, 'reset-del-theme', num);
        let equalsKey=$QS('.equals-key');
        changeElementTheme(equalsKey, 'equals-theme', num);        
    };
})

function changeElementTheme(ele, classNameText, num){ 
    console.log(ele, classNameText, num);   
    removePreviousClass(ele, classNameText);
    addNewClass(ele, classNameText, num);    
}

function removePreviousClass(ele, text){
    for(let j=1; j<=3; j++){
        if(ele.classList.contains(`${text}-${j}`)){
            ele.classList.remove(`${text}-${j}`);
        }        
    }
}

function addNewClass(ele, text, i){
    ele.classList.add(`${text}-${i}`);
}

function changeKeysTheme(arr, classNameText, num){
    removeElementsPreviousClass(arr, classNameText);
    changeAllElementsClass(arr, classNameText, num);
}

function removeElementsPreviousClass(arr, text){
    arr.forEach(ele=>{
        removePreviousClass(ele, text);
    })
}

function changeAllElementsClass(arr, text, num){
    arr.forEach(ele=>{
        addNewClass(ele, text, num);      
    })
}

function changeDotsTheme(arr, classNameText, num){
    removeElementsPreviousClass(arr, classNameText);
    changeSelectedElementClass(arr, classNameText, num);
}

function changeSelectedElementClass(arr, text, num){
    arr.forEach((ele, index)=>{
        if(index===num-1){
            addNewClass(ele, text, num);
        }        
    })
}
