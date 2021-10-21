let container=document.querySelector('.container');
const monthArr=["Jan", "Feb", "Mar", "Apr","May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const daysArr=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const dateObj=new Date();
let year=dateObj.getFullYear();
let month=dateObj.getMonth();
let monthName=monthArr[month];

let navbar=document.createElement('div');
navbar.setAttribute('class', 'navbar');

let leftSpan=document.createElement('span');
leftSpan.innerHTML='<i class="fas fa-arrow-left"></i>';
leftSpan.addEventListener('click', decrementMonth);

let rightSpan=document.createElement('span');
rightSpan.innerHTML='<i class="fas fa-arrow-right"></i>';
rightSpan.addEventListener('click', incrementMonth);

let title=document.createElement('span');
title.setAttribute('class', 'title');

navbar.appendChild(leftSpan);
navbar.appendChild(title);
navbar.appendChild(rightSpan);

container.appendChild(navbar);

loadCurrentMonthCalendar();

function loadCurrentMonthCalendar(){
    title.innerHTML=`${monthName}  ${year}`;
    let m=month+1;
    let currentMonthDays= getDaysInMonth(year, m);
    
    let arr=[];
    for(let i=1; i<=currentMonthDays; i++){
        arr.push(i);
    }
    
    let totalDaysInMonth=new Date(`${monthName} 1 , ${year}`).getDay();
    
    
    let count=0;
    while(count < totalDaysInMonth){
        arr.unshift(null);
        count++;        
    }
    
    let table=getCalendar(arr);
    container.appendChild(table);
}

function getDaysInMonth(y , m){
    return new Date(y, m , 0).getDate();
 }

 function getCalendar(arr){
    let table=document.createElement('table');
    let thead=document.createElement('thead');
    let tr=document.createElement('tr');
    for(let j=0; j<7 ; j++){
        let th=document.createElement('th');
        th.innerText=daysArr[j].toUpperCase();
        tr.appendChild(th);
    }
    thead.appendChild(tr);
    let rows=Math.floor(arr.length/7)+1;
    //console.log(rows);
    let totalItems=rows*7;
    let n=arr.length;
    while(n < totalItems){
        arr.push(null);
        n++;
    }
    //console.log(arr);
    let num=0;
    let tbody=document.createElement('tbody');

    for(let k=0; k<rows ; k++){
        let tr=document.createElement('tr');
        for(let l=0; l<daysArr.length; l++){
            let td=document.createElement('td');            
            td.innerText=arr[num];
            tr.appendChild(td);
            num++;
        }
        tbody.appendChild(tr);
    }
    table.appendChild(thead);
    table.appendChild(tbody);
    return table;
 }
//--------------------------------------------------------------------------
function incrementMonth(){    
    month+=1;
    if(month > 11){
        month=0;
        year+=1;
    }
    monthName=monthArr[month];
    //console.log(monthName);
    title.innerHTML=`${monthName}  ${year}`;
    let m=month+1;
    let monthDays=getDaysInMonth(year, m);
    //console.log(monthDays);
}

function decrementMonth(){
    month-=1;
    if(month < 0){
        month=11;
        year-=1;
    };
    monthName=monthArr[month];
    //console.log(monthName);
    title.innerHTML=`${monthName}  ${year}`;
    let m=month+1;
    let monthDays=getDaysInMonth(year, m);
    //console.log(monthDays);
}
