/* utility function */
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
/*------------------create form related functions------------------------------------*/

//event listener to accept input and call functions to update data and add table row
//function to get id of form and adding submit event listener
let saveBtnHandler=(saveBtn, allTasks)=>{
    saveBtn.addEventListener('click', ((e)=>{
        e.preventDefault();
        //console.log(allTasks);
        localStorage.setItem('allTasks', JSON.stringify(allTasks));
    }));
}
let emptyBtnHandler=(emptyBtn, allTasks)=>{
    emptyBtn.addEventListener('click', function(e){
        e.preventDefault();
        allTasks=[];
        //console.log('allTasks : line 175 ', allTasks);
        localStorage.removeItem('allTasks');
        location.reload(); 
        return allTasks;       
    })
}
let createFormHandler=(createForm, table, allTasks)=>{
    table=createForm.addEventListener("submit", function(e){
        e.preventDefault();
        
        let taskObj={
            id: new Date().getTime(),
            taskName:e.target.taskName.value,
            status:'in progress',
            position:'live'
        }
        e.target.taskName.value="";
        allTasks.push(taskObj);
        //console.log(allTasks);
        let tr=$CE('TR');
        tr=appendDataInRow(tr, taskObj, allTasks.length-1);
       // console.log(tr);
        let tbl=$GID('todoTable');
        //console.log(tbl);
        tbl=$APC(tbl, tr);
        return tbl;
    });
}
/*-------------------To Do Table Related functions----------------------------------------*/
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
                x.style.backgroundColor="#080";
                tr.style.backgroundColor='#ddd';
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
}
let appendDataInRow=(tr, task, index)=>{
    //console.log(tr);
    tr.setAttribute("id", task.id);
         let td1=$CE('td');
         td1.innerHTML=index+1;
         let td2=$CE('td');
         td2.innerHTML=task.taskName;
         let td3=$CE('td');        
         td3.innerHTML= `<input type="button" 
                                class="status-btn"
                                value = "In Progress" 
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
/* function to append table body */
let appendTableData=(table, todolist)=>{
    let tbody=$CE('tbody');

    todolist.forEach((task, index) =>{        
        let tr=$CE('tr');
        tr=appendDataInRow(tr, task, index);
        //console.log(tr);
        tbody.appendChild(tr);    
    });
    table.appendChild(tbody);
    return table;
}
/* function to fetch data from local storage */
let fetchDataFromLocalStorage=()=>{
    let allTasks = JSON.parse(localStorage.getItem('allTasks'));
    //console.log(allTasks);
    return allTasks;
}
/* function to append table head */
let appendTableHead=(table, ...headings)=>{
    //console.log(...headings);
    let thead=$CE('thead');
    let tr=$CE('tr');
    let headingsArr= [...headings];
    for(let headingName of headingsArr){
        let th=$CE('TH');
        th.innerText=headingName;
        $APC(tr, th);
    }
    $APC(thead, tr);
    $APC(table, thead);    
    
    return table;
}
let createTable=()=>{
    let table=$CE('table');
    table.setAttribute('id', 'todoTable');
    table=appendTableHead(table, "Sr.", "Task Name",  "Mark Complete", "Delete");
    return table;
}
/* adding buttons to display section */
let addButtonBar=(displaySection)=>{
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
    return displaySection;
}
/* adding header to display section */
let addHeader=(displaySection)=>{    
    let header=$CE('div');
    let h1=$CE('h1');
    h1.innerText="To Do List";
    $APC(header, h1);
    $APC(displaySection, header);
    return displaySection;
}
let fetchAllTasks=()=>{
    let arr=fetchDataFromLocalStorage();
    arr = arr === null ? arr=[] : arr;   
   return arr;
}

let init=()=>{
    let displaySection=$GID('display-section');
    let table=createTable();
    displaySection=addHeader(displaySection);
    displaySection=addButtonBar(displaySection);
     
    $APC(displaySection, table);
    let allTasks=fetchAllTasks();
    //console.log(allTasks);
    appendTableData(table, allTasks);
    //table=createNewTask(table);
    
    let createForm = $GID("create-form");
    createFormHandler(createForm, table, allTasks);
    let saveBtn=$GID('saveBtn');
    saveBtnHandler(saveBtn, allTasks);
    let emptyBtn=$GID('emptyBtn');
    emptyBtnHandler(emptyBtn, allTasks);
}

window.onload=init;

