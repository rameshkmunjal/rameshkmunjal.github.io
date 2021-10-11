/*--------------------- utility function--------------------------*/
let $CE=(ele)=>document.createElement(ele);
let $GID=(ele)=>{
    console.log(ele);
    return document.getElementById(ele);
}
let $CTN=(txt)=>document.createTextNode(txt);
let $APC=(parent, child)=>parent.appendChild(child);
let $APCN=(parent, ...arr)=>{
    let children=[...arr];
    for (let child of children){
        $APC(parent, child);
    }
    return parent;
}
/*---------------------------------------------*/
let allTask=[];
let displaySection=$GID('display-section');
displaySection.innerHTML="";
addHeader();
addButtonBar();
let table=createTable();
allTasks=fetchAllTasks();
if(allTasks.length > 0 ){
    table=appendTableData(table, allTasks);
 }
 $APC(displaySection, table);



createFormHandler();
saveBtnHandler();
emptyBtnHandler();

/* adding header to display section */
function addHeader(){    
    let header=$CE('div');
    let h1=$CE('h1');
    h1.innerText="To Do List";
    $APC(header, h1);
    $APC(displaySection, header);
}
/* adding buttons to display section */
function addButtonBar(){
    let div=$CE('div');
    div.setAttribute('class', 'buttonBar');

    let emptyBtn=$CE('button');
    emptyBtn.setAttribute('class', "btn");
    emptyBtn.setAttribute('id', "emptyBtn");
    emptyBtn.innerText="Empty Table";   

    let saveBtn=$CE('button');
    saveBtn.setAttribute('class', "btn");
    saveBtn.setAttribute('id', 'saveBtn');
    saveBtn.innerText="Save Data";
    

    $APC(div, emptyBtn);
    $APC(div, saveBtn);
    $APC(displaySection, div);
}
/* function to create table and its headings */
function createTable(){
    let table=$CE('table');
    table.setAttribute('id', 'todoTable');
    table=appendTableHead(table, "Sr.", "Task Name",  "Mark Complete", "Delete");
    return table;
}
/* function to append table head */
function appendTableHead(table, ...headings){
    //console.log(...headings);
    let thead=$CE('thead');
    let tr=$CE('tr');
    let headingsArr= [...headings];
    for(let headingName of headingsArr){
        let th=$CE('TH');
        th.innerText=headingName;
        $APC(tr, th);
    }
    let tbody=$CE('TBODY');

    $APC(thead, tr);
    $APC(table, thead); 
    $APC(table, tbody);   
    
    return table;
}
/* function to fetch all tasks from local storage or return null */
function fetchAllTasks(){
    let arr=JSON.parse(localStorage.getItem('allTasks'));
    arr = arr === null ? arr=[] : arr;   
   return arr;
}

/*function to append data of allTasks into Table */
function appendTableData(table){
    console.log(allTasks);
    allTasks.forEach((task, index) =>{ 
        console.log(allTasks);       
        let tr=$CE('tr');
        tr=appendDataInRow(tr, task, index, allTasks);
        //console.log(tr);
        if(task.status==="Complete"){
            console.log("task status is complete");
            console.log(tr);
            tr.setAttribute('class', 'complete-row');
                
        }
        table.appendChild(tr);    
    });    
    return table;
}

function appendDataInRow(tr, task, index){
    console.log(task);
    let status=task.status==="Complete" ? "complete-btn" : "status-btn";
    tr.setAttribute("id", task.id);
    
         let td1=$CE('td');
         td1.innerHTML=index+1;
         let td2=$CE('td');
         td2.innerHTML=task.taskName;
         let td3=$CE('td');        
         td3.innerHTML= `<input type="button" 
                                class=${status}
                                value = "${task.status}" 
                                onClick="Javacsript:changeStatus(${task.id})">`;
         let td4=$CE('td');
         td4.innerHTML= `<input type="button"
                                class="delete-btn" 
                                value = "Delete" 
                                onClick="Javacsript:deleteRow(${task.id})">`;
        
         tr=$APCN(tr, td1, td2, td3, td4); 
         //console.log(tr);       
         return tr;
 }
/*-------------------------Event Handlers--------------------------------*/
function createFormHandler(){
    let createForm = $GID("create-form");
    createForm.addEventListener("submit", function(e){
        e.preventDefault();
        console.log(e.target.taskName.value);
        let taskObj={
            id: new Date().getTime(),
            taskName:e.target.taskName.value,
            status:'in progress',
            position:'current'
        }
        e.target.taskName.value="";
        allTasks.push(taskObj);
        let tr=$CE('TR');
        tr=appendDataInRow(tr, taskObj, allTasks.length-1);
        
        $APC(table, tr);        
        console.log(allTasks);        
    });
    console.log(allTasks);
}

function saveData(todolist){
    console.log(todolist);
    localStorage.setItem('allTasks', JSON.stringify(todolist));
    //location.reload();
}
function saveBtnHandler(){
    let saveBtn=$GID('saveBtn');
    saveBtn.addEventListener('click', ((e)=>{
        e.preventDefault();
        console.log(allTasks);
        localStorage.setItem('allTasks', JSON.stringify(allTasks));
    }));
}
function emptyBtnHandler(){
    let emptyBtn=$GID('emptyBtn')
    emptyBtn.addEventListener('click', function(e){
        console.log("empty button clicked");
        e.preventDefault();
        allTasks=[];
        console.log('allTasks : line 175 ', allTasks);
        localStorage.removeItem('allTasks');
        location.reload();       
    })
}

let changeStatus=(taskId)=>{
    console.log(taskId);    
    let tr=document.getElementById(taskId);
    console.log(tr.childNodes);
    let child_nodes=tr.childNodes;
    for(let i=0; i<child_nodes.length; i++){
        if(child_nodes[i].firstChild.tagName==='INPUT'){
            let x=child_nodes[i].firstChild;
            if(x.classList.contains('status-btn')){
                x.value="Complete";
                x.setAttribute('class', 'complete-btn')
                tr.setAttribute('class', 'complete-row');
                updateAllTasks(taskId, 'changeStatus');              
            }
        }     
    }
}

let deleteRow=(taskId)=>{   
    console.log(taskId);
    let tr=$GID(taskId);
    console.log(tr.parentNode);
    tr.parentNode.removeChild(tr);
    console.log(tr);
    console.log(tr.parentNode);
    updateAllTasks(taskId, 'deleteItem');
}

function updateAllTasks(id, searchItem){
    if(searchItem=='changeStatus'){
        allTasks.forEach((item)=>{
            if(item.id==id){
                item.status="Complete";
                saveData(allTasks);
            }
        })
    } else if(searchItem=='deleteItem'){
        allTasks.forEach((item, index)=>{
            if(item.id==id){
                allTasks.splice(index, 1);
            }
        })
    }
    console.log(allTasks);
}



