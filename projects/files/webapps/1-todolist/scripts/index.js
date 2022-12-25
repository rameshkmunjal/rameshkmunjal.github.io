'use strict';
import {$GID, $QS, $ACP, $CESC, $GEBC } from './util.js';

//an array to hold task objects
let allTasks=[];

//input element holding input text grabbed by id
let taskInput=$GID("task-input");
let allFilterButtons=$GEBC('.btn-div .btn');

//theme btn grabbed and event handler called on click 
let themeBtn=$QS('.theme-btn');
themeBtn.onclick=changeTheme;

//event handler : when enter key pressed : form is submitted
document.onkeydown=function(){
    if(window.event.keyCode=='13'){
        submitForm();
    }
}

//function to handler input by user
function submitForm(){
    let taskObj={};
    let v=validateInput();
    console.log(v);
    if(v){
        taskObj={
            id:Math.floor(Math.random()*100000),//unique id
            taskName:taskInput.value,
            status:'active'
        }
        allTasks.push(taskObj);
    }   
    taskInput.value="";    
    showTaskList(allTasks);
}

//function to validate input - only if something input - input is accepted
function validateInput(){
    if(taskInput.value===undefined || taskInput.value===null || taskInput.value===''){
        console.log("taskINput value : " , taskInput.value);
        return false;
    } else {
        return true;
    }
}

//function to show complete task list 
// and to append click event to radio btn and delete btn
// and to show active tasks number in bottom div
function showTaskList(arr){
    let taskList=$QS('.task-list');
    while(taskList.firstChild) taskList.removeChild(taskList.firstChild);
    for(let task of arr){
        let taskRow=$CESC('div', 'task-div-row');
        taskRow.setAttribute('id', task.id);
        let radioBtnClass= task.status==='active' ? 'active' : task.status==='completed' ? 'completed' : '';
        taskRow.innerHTML=`
                        <div class="radio-btn-div ${radioBtnClass}"></div>
                        <div class="task-item">${task.taskName}</div>
                        <div class="close-btn-div">
                            <img src="images/icon-cross.svg" alt="cross icon" />
                        </div>
                    
                    `;
        $ACP(taskList, taskRow);
    } 
    markCheckInRadioBtn();
    appendClickEventToRadioBtn();
    appendClickEventToDeleteBtn();
    showActiveTasksLeft();
}

//function to mark check  when radio btn clicked
function markCheckInRadioBtn(){
    let taskRows=$GEBC('.task-div-row');
    for(let taskRow of taskRows){
        let radioBtn=taskRow.childNodes[1];
        if(radioBtn.classList.contains('completed')){
            radioBtn.innerHTML=`<img src="./images/icon-check.svg" alt="check icon" />`;
        }
    }
}

//function to append click to radio btn div
function appendClickEventToRadioBtn(){
    let taskDivRows=$GEBC('.task-div-row');
    let radioBtns=$GEBC('.radio-btn-div');
    for(let i=0; i<radioBtns.length; i++){
        let btn=radioBtns[i];
        btn.onclick=(e)=>{
            e.preventDefault();
            markTaskCompleted(taskDivRows[i].id);
        };
    }
}

//function to change status in data - from active to completed
// then show complete task list and number of active tasks
function markTaskCompleted(id){
    allTasks.forEach(task=>{
        if(task.id===Number(id)){
            task.status='completed';
        }
    });
    showTaskList(allTasks);
    showActiveTasksLeft();
}

//function to append click to delete btn
function appendClickEventToDeleteBtn(){
    let taskDivRows=$GEBC('.task-div-row');
    let deleteBtns=$GEBC('.close-btn-div');
    for(let i=0; i<deleteBtns.length; i++){
        let btn=deleteBtns[i];
        btn.onclick=(e)=>{
            e.preventDefault();
            deleteBtnClickHandler(taskDivRows[i].id);
        }
    }
}
//function to delete task when cross is clicked
function deleteBtnClickHandler(id){ 
    allTasks=allTasks.filter(task=>task.id !== Number(id));    
    showTaskList(allTasks);    
}
/************************************/
//functions to change theme
/***********************************/
//function to change theme 
function changeTheme(e){
    e.preventDefault();
    let themeDivs=$GEBC('div.theme-div');   
    themeDivs.forEach(themeDiv=>{
        if(themeDiv.classList.contains('light-theme')){
            themeDiv.classList.remove('light-theme');
            themeDiv.classList.add('dark-theme');
        }
        else if(themeDiv.classList.contains('dark-theme')){
                themeDiv.classList.add('light-theme');
                themeDiv.classList.remove('dark-theme');
        } else {
            return false;
        }
    })
    changeBodyTheme();
}

//function to change theme of body - since it has different bg color
function changeBodyTheme(){
    let body=$QS('body');
    if(body.classList.contains('body-light-theme')){
        body.classList.remove('body-light-theme');
        body.classList.add('body-dark-theme');
    }
    else if(body.classList.contains('body-dark-theme')){
        body.classList.add('body-light-theme');
        body.classList.remove('body-dark-theme');
    } else {
        return false;
    } 
}

/*******************************************************/
   // event handlers and functions - bottom div related
/******************************************************/
//all btn grabbed by class
let allBtn=$QS('.all-btn');
//on click it will show all tasks
allBtn.onclick=(e)=>{
    e.preventDefault();
    removeAllPreviousSelections();
    markBtnSelected(allBtn);
    showAllTaskList();
}

//active btn grabbed by class 
let activeBtn=$QS('.active-btn');
activeBtn.onclick=(e)=>{
    e.preventDefault();
    removeAllPreviousSelections();
    markBtnSelected(activeBtn);
    showActiveTasksList();
}//on click it will show active tasks

//completed btn grabbed by class
let completedBtn=$QS('.completed-btn');
completedBtn.onclick=(e)=>{
    e.preventDefault();
    removeAllPreviousSelections();
    markBtnSelected(completedBtn);
    showCompletedTasksList();
}//on click it will show completed tasks

//function to delete all previous selection of btns
function removeAllPreviousSelections(){
    allFilterButtons.forEach(btn=>{
        if(btn.classList.contains('selected')){
            btn.classList.remove('selected');
        }
    })
}
//function to mark selection 
function markBtnSelected(btn){
    btn.classList.add('selected');
}

//clear completed btn grabbed by class
let clearCompletedBtn=$QS('.clear-btn');
clearCompletedBtn.onclick=clearCompletedTasks;//on click it will clear all completed tasks

//function to filter out active tasks and show list
function showActiveTasksList(){    
    let arr=allTasks.filter(task=>task.status==='active');
    showTaskList(arr);
}
//function to filter active tasks and show their number
function showActiveTasksLeft(){
    let arr=allTasks.filter(task=>task.status==='active');    
    let activeTasksNumberSpan=$GID('items-number-span');
    activeTasksNumberSpan.innerText=arr.length;
}
//function to show completed task list
function showCompletedTasksList(){    
    let arr=allTasks.filter(task=>task.status==='completed');
    showTaskList(arr);
}
//function to show all tasks 
function showAllTaskList(){
    showTaskList(allTasks);
}
//function to clear completed tasks from data
function clearCompletedTasks(){
    allTasks=allTasks.filter(task=>task.status !== 'completed');
    showTaskList(allTasks);
}